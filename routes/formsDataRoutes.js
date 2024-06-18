const express = require("express");
const router = express.Router();
const { authenticateTokenMiddleWare } = require("../middleware/authMiddleware");
const formController = require("../controllers/formController");
const fileUploadController = require("../controllers/fileUploadController");

router
  .route("/:requestId")
  .get(authenticateTokenMiddleWare, formController.getFormsForRequest)
  .post(authenticateTokenMiddleWare, formController.updateFormsData)

router
  .route("/createFormsForSupplier/:requestId")
  .post(authenticateTokenMiddleWare, formController.createFormsForSupplier);

router
  .route("/download/:filename")
  .get(authenticateTokenMiddleWare, fileUploadController.fileDownload);

router
  .route("/footer/:requestId")
  .post(authenticateTokenMiddleWare, fileUploadController.footerDataUpdate);

module.exports = router;
