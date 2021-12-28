const { removeFile } = require("../middlewares/directoryManager");
const UserModel = require("../model/UserModel");

exports.createUser = async(req, res) => {
    let data = req.body;
    const newUser = new UserModel(data);

    await newUser
        .save(data)
        .then((docs) => {
            res.status(201).json(docs);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getUsers = async(req, res) => {
    await UserModel.find()
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getOneUser = async(req, res) => {
    let id = req.params.id;

    await UserModel.findById(id)
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.editUser = async(req, res) => {
    const id = req.params.id;
    let data = req.body;

    let updateData = {
        ...data,
        updatedAt: new Date(),
    };

    if (req.file) {
        if (req.file.fieldname === "cv") {
            updateData = {
                ...updateData,
                cv: `../uploads/profile/${req.file.filename}`,
            };
            updateData.oldcv && removeFile(updateData.oldcv);
        }
    }

    await UserModel.findOneAndUpdate({
                _id: id,
            },
            updateData, {
                new: true,
            }
        )
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.deleteUser = async(req, res) => {
    const id = req.params.id;

    await UserModel.findOneAndDelete({
            _id: id,
        })
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => res.status(500).json(err));
};