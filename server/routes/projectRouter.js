const router = require("express").Router();
const projectController = require("../controller/ProjectController");
const upload = require("../middlewares/upload");

router.get("/projects", projectController.getProject);
router.get("/project/:slug", projectController.getOneProject);
router.post(
    "/project",
    upload.single("preview"),
    projectController.createProject
);
router.put(
    "/project/:id",
    upload.single("preview"),
    projectController.editProject
);
router.delete("/project/:id", projectController.deleteProject);

module.exports = router;