const fileUploadSchema = require("../mongoSchemas/fileUploadSchema")


exports.getFileUploadRequestId = async (requestId) => {
  try {
    const fileUploadData = await fileUploadSchema.findOne({
      homologationRequest: requestId,
    })
    if (fileUploadData != null) {
      return fileUploadData
    }
    return null
  } catch (error) {
  }
}

exports.uploadFileUploadRequestId = async (requestId, form, headerName, propertyName, fileName) => {
  try {
    let fileUploadData
    const updateObject = {} ;
    updateObject[`${form}Data.${headerName}.properties.${propertyName}.file_name`] = fileName;

    fileUploadData = await fileUploadSchema.findByIdAndUpdate(
      requestId,
      updateObject,
      { returnDocument: "after" })

    if (fileUploadData != null) {
      return fileUploadData
    }
    return null
  } catch (error) {
  }
}





exports.updateFooterData = async (requestId, data) => {
  try {

    const fileUpload = await fileUploadSchema.findOne({ homologationRequest: requestId })
    let footerupdated;
    if(fileUpload != null && fileUpload.footerData != null){
      const footerDataToUpdate = data.footerData.footer;
       footerupdated = await fileUploadSchema.findByIdAndUpdate(fileUpload._id, { 'footerData.footer': footerDataToUpdate }, { returnDocument: "after" })
           
    }
    if(fileUpload != null && fileUpload.footerData != null){
            const footerDataToUpdate = data.footerData.sealSign;
             footerupdated = await fileUploadSchema.findByIdAndUpdate(fileUpload._id, { 'footerData.sealSign': footerDataToUpdate }, { returnDocument: "after" })
           
          }

    if(fileUpload != null && fileUpload.form11Data != null){
      const footerDataToUpdate = data.form11Data.diagrams;
       footerupdated = await fileUploadSchema.findByIdAndUpdate(fileUpload._id, { 'form11Data.diagrams': footerDataToUpdate }, { returnDocument: "after" })
     
    }
    return footerupdated
  } catch (error) {
  }
}


exports.findOrCreateFileUpload = async (requestId) => {
  let fileUpload = await fileUploadSchema.findOne({ homologationRequest: requestId })
    if (fileUpload == null) {
      const form1AData = {
        General_arrangement_vehicle: {},
        Transmission: {},
        InstrumentClusterSchema: {},
        Suspension: {},
        Brief_Brake_Information: {},
        ABS: {},
        Make_of_modulator: {},
        Side_Hazard_Lamp: {},
        Coupling_devices: {},
        VINNumbering: {},
        Horn: {},
        Rear_View_Mirror: {},
        Grab_handle_Straps: {},
        strap_and_HandelHold:{},
        Grab_handle_Straps_3_wheeler: {},
        Spray_Suppression_Rear_Mud_Gaurd: {},
        Two_Wheeler_Stand: {},
        Fire_Fighting_System: {},
        Dimensions_and_weights: {},
        Windscreen_and_Wiping_System: {},
        R_Point: {},
        Rear: {},
        Device_to_protect_against_unauthorized_use:{},
      }

      const form7Data = {
        Body_Overhang: {},
      }

      const form11Data = {
        diagrams: {},
      }

      const form13Data = {
        Body_Overhang: {},
      }

      const footerData = {
        SealSign:{},
        footer: {},
      }
      
   
      fileUpload = await fileUploadSchema.create({
        homologationRequest: requestId,
        form1AData: form1AData,
        form7Data: form7Data,
        form11Data: form11Data, 
        form13Data: form13Data,     
        footerData: footerData,
      })
    }
  return fileUpload
}

exports.insertNewFileUpload = async (fileUploadData) => {
  // const FileUploadModel = require("../mongoSchemas/fileUploadSchema");
  return await fileUploadSchema.create(fileUploadData);
};