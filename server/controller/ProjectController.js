const {
    removeFile,
    removeDirectory,
} = require("../middlewares/directoryManager");
const ProjectModel = require("../model/ProjectModel");

exports.getProject = async(req, res) => {
    await ProjectModel.find()
        .sort({
            postedAt: -1,
        })
        .then((projects) => res.status(200).json(projects))
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getOneProject = async(req, res) => {
    await ProjectModel.findOne({ slug: req.params.slug })
        .then((project) => res.status(200).json(project))
        .catch((err) =>
            res.status(500).json({
                message: "erreur",
            })
        );
};

exports.createProject = async(req, res) => {
    try {
        let data = req.body;

        if (req.file) {
            data = {
                ...data,
                preview: `../uploads/${req.body.title}/${req.file.filename}`,
            };
        }
        const newProject = new ProjectModel(data);

        //res.status(201).json(data);
        await newProject
            .save()
            .then((docs) => {
                res.status(201).json(docs);
            })
            .catch((err) => {
                throw new Error(err);
            });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.editProject = async(req, res) => {
    const id = req.params.id;
    try {
        let data = {
            ...req.body,

            updatedAt: new Date(),
        };
        if (req.file) {
            data = {
                ...data,
                preview: `../uploads/${req.body.title}/${req.file.filename}`,
            };
            removeFile(data.oldFile);
        }

        await ProjectModel.findOneAndUpdate({
                _id: id,
            },
            data, {
                new: true,
            }
        ).then((docs) => res.json(docs));
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteProject = async(req, res) => {
    await ProjectModel.findOneAndDelete({
        _id: req.params.id,
    }).then((docs) => {
        removeDirectory(docs.title);
        res.status(200).json(docs);
    });
};