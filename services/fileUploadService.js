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
    console.log(`Exception occured: ${error}`)
  }
}

exports.uploadFileUploadRequestId = async (requestId, form, headerName, propertyName, fileName) => {
  try {
    let fileUploadData
    const updateObject = {} ;
    updateObject[`${form}Data.${headerName}.properties.${propertyName}.file_name`] = fileName;
    console.log(`updateObject: ${JSON.stringify(updateObject)}`)

    fileUploadData = await fileUploadSchema.findByIdAndUpdate(
      requestId,
      updateObject,
      { returnDocument: "after" })

    if (fileUploadData != null) {
      return fileUploadData
    }
    return null
  } catch (error) {
    console.log(`Exception occured: ${error}`)
  }
}

exports.updateFooterData = async (requestId, data) => {
  try {
    console.log(`requestId: ${requestId}, data: ${JSON.stringify(data.footerData.footer)}`)

    const fileUpload = await fileUploadSchema.findOne({ homologationRequest: requestId })
    if(fileUpload != null && fileUpload.footerData != null){
      const footerDataToUpdate = data.footerData.footer;
      const footerData = await fileUploadSchema.findByIdAndUpdate(fileUpload._id, { 'footerData.footer': footerDataToUpdate }, { returnDocument: "after" })
      console.log(`footerData: ${JSON.stringify(footerData)}`)
      return footerData;
    }
  } catch (error) {
    console.log(`Exception occured: ${error}`)
  }
}

exports.findOrCreateFileUpload = async (requestId) => {
  console.log(`inside findOrCreateFileUpload`)
  let fileUpload = await fileUploadSchema.findOne({ homologationRequest: requestId })
    if (fileUpload == null) {
      console.log(`creatng new fileUpload collection for requestId: ${requestId}`)
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
        Grab_handle_Straps_3_wheeler: {},
        Spray_Suppression_Rear_Mud_Gaurd: {},
        Two_Wheeler_Stand: {},
        Fire_Fighting_System: {},
        Dimensions_and_weights: {},
        Windscreen_and_Wiping_System: {},
        R_Point: {},
        Rear: {},
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
        footer: {},
      }
      
      fileUpload = await fileUploadSchema.create({
        homologationRequest: requestId,
        form1AData: form1AData,
        form7Data: form7Data,
        form11Data: form11Data,
        footerData: footerData,
      })
      console.log(`fileUpload: ${fileUpload}`)
    }
  return fileUpload
}