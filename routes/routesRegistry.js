const multer = require('multer');

const userAuthRoutes = require("./userAuthRoutes");
const userRegistrationRoutes = require("./userRegistrationRoutes")
const homologationRequest = require("./homologationRequestRoutes");
const supplierRoutes = require("./supplierRoutes");
const modelDataRoutes = require("./modelDataRoutes");
const formsDataRoutes = require("./formsDataRoutes")
const { authenticateTokenMiddleWare } = require("../middleware/authMiddleware");
const fileUploadController = require("../controllers/fileUploadController");


// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const requestId = req.params.requestId.replace(/\//g, '');    
    const originalname = file.originalname.replace(/\s+/g, '_')
    const filename = `${requestId}-${originalname}`;
    console.log(`Uploading Image: ${filename}`)
    cb(null, filename);
  }
});

exports.registerRoutes = async (app) => {
  app.use("/api/user", userAuthRoutes);
  app.use("/api/userRegistration", userRegistrationRoutes)
  app.use("/api/homologationRequest", homologationRequest);
  app.use("/api/supplier", supplierRoutes);
  app.use("/api/getModelData", modelDataRoutes);
  app.use("/api/forms", formsDataRoutes);
  app.use("/api/files", formsDataRoutes);

  const upload = multer({
    storage: storage,
    limits: { fileSize: 20 * 1024 * 1024 } // Set fileSize limit to 10MB
  });

  app.post('/api/files/upload/:requestId/', authenticateTokenMiddleWare, upload.single('image'), async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No image uploaded.');
    }
    const fileUpload = await fileUploadController.fileUpload(req)
    res.status(200)
    .json({ status: "success", body: fileUpload })
  });
};
