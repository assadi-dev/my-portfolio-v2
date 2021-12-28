const multer = require("multer");
const { verifDirectory } = require("./directoryManager");

const maxSize = 5 * 1024 * 1024;

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const dir = `client/public/uploads/profile`;
        verifDirectory(dir, callback(null, dir));
    },
    filename: (req, file, callback) => {
        const name = file.originalname.toLowerCase().split(" ").join("_");
        const extension = name.split(".")[1];

        callback(null, `${Date.now()}.${extension}`);
    },
});

const fileFilter = (req, file, callback) => {
    if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/gif"
    ) {
        callback(null, true);
    } else {
        callback(null, false);
        return callback(new Error("Allowed only .png, .jpg, .jpeg and .gif"));
    }
};

module.exports = multer({
    storage: storage,
    fileFilter: fileFilter,
});