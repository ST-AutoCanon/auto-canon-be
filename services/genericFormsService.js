const form1AService = require("./form1AService");
const form7Service = require("./form7Service");
const form8Service = require("./form8Service");
const form11Service = require("./form11Service");
const form13Service = require("./form13Service");
const fileUploadService = require("./fileUploadService");

const loadash = require("lodash")

const calculateFormPercentage = async (formDataObj) => {
  delete formDataObj['homologationRequest'];
  delete formDataObj['createdAt'];
  delete formDataObj['updatedAt'];
  delete formDataObj['__v'];
  delete formDataObj['_id'];
  const totalComponents = Object.keys(formDataObj).length
  if(totalComponents <= 0) {
    return 0
  }
  let allComponentsPerceSummation = 0
  for (const component of Object.keys(formDataObj)) {
    let percentFilled = 0
    let totalProps = 0
    let filledProps = 0;

    const componentData = formDataObj[component];
    delete componentData['label'];
    const componentDataKey = Object.keys(componentData)
    const componentDataArr = componentData[componentDataKey]

    if(componentDataArr.length == 0){
      percentFilled = 0
    } else {
      for (const data of componentDataArr) {
          if(data.supplier && data.supplier.active){
              delete data['supplier'];
              delete data['_id'];
              for (const subSectionData of Object.keys(data)) {
                  const properties = data[subSectionData].properties
                  totalProps = totalProps + Object.keys(properties).length
                  Object.keys(properties).forEach(prop => {
                      if(properties[prop]['value'] !== ''){
                          filledProps++
                      }
                  })
              }
          }
        }
        percentFilled = (filledProps / totalProps) * 100;
        allComponentsPerceSummation = allComponentsPerceSummation + percentFilled
    }
  }
  return (allComponentsPerceSummation/totalComponents).toFixed(2)
}

exports.getFormsData = async (requestId) => {
    console.log(`fetching forms for requestId: ${requestId}`)
    let formsData = {}
    const form7ForRequest = await form7Service.getForm7ForRequestId(requestId)
    if (form7ForRequest != null) {
      formsData.form7Data = form7ForRequest
      const form7ForRequestcp = loadash.cloneDeep(form7ForRequest)
      const percentageFilled = await calculateFormPercentage(form7ForRequestcp)
      formsData.form7Data.percentageFilled = percentageFilled
    }
    const form8ForRequest = await form8Service.getForm8ForRequestId(requestId)
    if (form8ForRequest != null) {
      formsData.form8Data = form8ForRequest
      const form8ForRequestcp = loadash.cloneDeep(form8ForRequest)
      const percentageFilled = await calculateFormPercentage(form8ForRequestcp)
      formsData.form8Data.percentageFilled = percentageFilled
    }
    const form11ForRequest = await form11Service.getForm11ForRequestId(requestId)
    if (form11ForRequest != null) {
      formsData.form11Data = form11ForRequest
      const form11ForRequestcp = loadash.cloneDeep(form11ForRequest)
      const percentageFilled = await calculateFormPercentage(form11ForRequestcp)
      formsData.form11Data.percentageFilled = percentageFilled
    }
    const form13ForRequest = await form13Service.getForm13ForRequestId(requestId)
    if (form13ForRequest != null) {
      formsData.form13Data = form13ForRequest
      const form13ForRequestcp = loadash.cloneDeep(form13ForRequest)
      const percentageFilled = await calculateFormPercentage(form13ForRequestcp)
      formsData.form13Data.percentageFilled = percentageFilled
    }
    const form1AForRequest = await form1AService.getForm1AForRequestId(requestId)
    if(form1AForRequest != null) {
      formsData.form1AData = form1AForRequest
      const form1ADatacp = loadash.cloneDeep(form1AForRequest)
      const percentageFilled = await calculateFormPercentage(form1ADatacp)
      formsData.form1AData.percentageFilled = percentageFilled
    }
    return formsData
};

exports.getFileUploadData = async (requestId) => {
  console.log(`fetching FileUploadData for requestId: ${requestId}`)
  return await fileUploadService.getFileUploadRequestId(requestId)
};


exports.createFormsComponentDataForSupplier = async (component, supplierId, requestId, forms) => {
  const formsData = {}
  for (const form of forms) {
    if (form === "7") {
      console.log(`creating empty form for ${form}`)
      formsData.form7Data = await form7Service.createEmptyForm7ComponentDataForSupplier(component, supplierId, requestId)
    }
    if (form === "8") {
      console.log(`creating empty form for ${form}`)
      formsData.form8Data = await form8Service.createEmptyForm8ComponentDataForSupplier(component, supplierId, requestId)
    }
    if (form === "11") {
      console.log(`creating empty form for ${form}`)
      formsData.form11Data = await form11Service.createEmptyForm11ComponentDataForSupplier(component, supplierId, requestId)
    }
    if (form === "13") {
      console.log(`creating empty form for ${form}`)
      formsData.form13Data = await form13Service.createEmptyForm13ComponentDataForSupplier(component, supplierId, requestId)
    }
    if (form === "1A") {
       console.log(`creating empty form for ${form}`)
       formsData.form1AData = await form1AService.createEmptyForm1AComponentDataForSupplier(component, supplierId, requestId)
    }
  }
  return formsData
}

exports.updateFormsData = async (requestId, data, formType) => {
  let updatedFormData
  if (formType === "7") {
    updatedFormData = await form7Service.updateForm7Data(requestId, data)
  }
  if (formType === "8") {
    updatedFormData = await form8Service.updateForm8Data(requestId, data)
  }
  if (formType === "11") {
    updatedFormData = await form11Service.updateForm11Data(requestId, data)
  }
  if (formType === "13") {
    updatedFormData = await form13Service.updateform13Data(requestId, data)
  }
  if (formType === "1A") {
    updatedFormData = await form1AService.updateform1AData(requestId, data)
  }
  console.log(`returning updatedFormData: ${JSON.stringify(updatedFormData)}`)
  return updatedFormData
}

exports.createFormModelsForRequestId = async (requestId) => {
  try {
    console.log(`creating empty forms for requestId: ${requestId}`)
    const formsData = {}
    const form7ForRequest = await form7Service.findOrCreateForm7(requestId)
    if (form7ForRequest != null) formsData.form7Data = form7ForRequest
    const form8ForRequest = await form8Service.findOrCreateForm8(requestId)
    if (form8ForRequest != null) formsData.form8Data = form8ForRequest
    const form11ForRequest = await form11Service.findOrCreateForm11(requestId)
    if (form11ForRequest != null) formsData.form11Data = form11ForRequest
    const form13ForRequest = await form13Service.findOrCreateForm13(requestId)
    if (form13ForRequest != null) formsData.form13Data = form13ForRequest
    const form1AForRequest = await form1AService.findOrCreateForm1A(requestId)
    if (form1AForRequest != null) formsData.form1AData = form1AForRequest
    return formsData
  } catch (error) {
    console.log(`Exception occured: ${error}`)
    res.status(200).json({
      status: "failure",
      body: error,
    })
  }
}

exports.createFileUploadModelsForRequestId = async (requestId) => {
  try {
    console.log(`creating empty file uploads for requestId: ${requestId}`)
    return await fileUploadService.findOrCreateFileUpload(requestId)
    
  } catch (error) {
    console.log(`Exception occured: ${error}`)
    res.status(200).json({
      status: "failure",
      body: error,
    })
  }
}