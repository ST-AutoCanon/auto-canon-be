const fs = require('fs');
const { uploadFileUploadRequestId, updateFooterData } = require('../services/fileUploadService');

exports.fileUpload = async (req) => {
    try {
        const headerName = req.body.headerName;
        const form = req.body.form
      
        const originalname = req.file.originalname.replace(/\s+/g, '_')
        const requestId = req.params.requestId.replace(/\//g, '');    
        const propertyName = req.body.propertyName || 'default';
        const filename = `${requestId}-${originalname}`;

        console.log(`adding image: ${filename} for property: ${propertyName}`)

        const fileUploadData = await uploadFileUploadRequestId(requestId, form, headerName, propertyName, filename )
        console.log(`file: "${filename}" uploaded successfully: fileUploadData: ${fileUploadData}`)
        return fileUploadData;
    } catch (error) {
      console.log(`Exception occured: ${error}`);
    }
  }

  exports.footerDataUpdate = async (req, res, next) => {
    try {
      const requestId = req.params.requestId
      const { data } = req.body
      if (!requestId || !data ) {
        throw new Error(`Request footerDataUpdate doesnt contain required parameters: requestId: "${requestId}" , data: "${data}"`)
      }
      const footerData = await updateFooterData(requestId, data)
      if(footerData != null){
        console.log(`footerData: ${footerData} updated`)
        res.status(200)
        .json({ status: "success", body: footerData })
      } else {
        res.status(200)
      .json({status: "failure"})
      }
    } catch (error) {
      console.log(`Exception occured: ${error}`)
      res.status(200)
      .json({status: "failure",body: error})
    }
  }

  exports.fileDownload = async (req, res, next) => {
    try {
        const filename = req.params.filename;
        const filePath = `/app/uploads/${filename}`;
    
        console.log(`looking for file: ${filePath}`)
        // Check if the file exists
        if (fs.existsSync(filePath)) {
            res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
            res.setHeader('Content-Type', 'application/pdf');
    
            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
        } else {
            res.status(404).send('File not found.');
        }
    } catch (error) {
      console.log(`Exception occured: ${error}`);
      res.status(200).json({
        status: "failure",
        body: error,
      });
    }
  }