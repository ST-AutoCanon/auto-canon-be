const mongoose = require("mongoose");

const vehicleGeneralInformationSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Manufacturer_Details: {
    label: { type: String, default: "Manufacturer Details" },
    properties: {
      Basic_model: {
        value: { type: String, default: "" },
        label: { type: String, default: "Basic model" },
      },
      variant: {
        value: { type: String, default: "" },
        label: { type: String, default: "variant(s)" },
      },
      Manufacturer_name_and_address: {
        value: { type: String, default: "" },
        label: { type: String, default: "Manufacturer’s name and address" },
        display: { type: Boolean, default: false },
      },
    },
  },
})

const VehicleIdentificationNumberSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  VIN_Numbering: {
    label: { type: String, default: "VIN Numbering" },
    properties: {
      Specify_the_Location_of_VIN_on_Chassis: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default: "Specify the Location of VIN on Chassis",
        },
        display: { type: Boolean, default: false },
      },
      Height_of_VIN_characters: {
        value: { type: String, default: "" },
        label: { type: String, default: "Height of VIN characters." },
        display: { type: Boolean, default: false },
      },
      Position_of_the_code_for_month_in_the_Chassis_number: {
        value: { type: String, default: "" },
        label: { type: String, default: "Position of the code for month of production in  the Chassis number" },
      },
      Example_of_Engine_Motor_No: {
        value: { type: String, default: "" },
        label: { type: String, default: "Example of Engine/Motor No" },
      },
      Example_of_Chassis_No_with_Month_Year_of_Manufacture: {
        value: { type: String, default: "" },
        label: { type: String, default: "Example of Chassis No. (Vehicle Identification Number) with Month & Year of Manufacture" },
      },
    },
  },
})

const form11Schema = mongoose.Schema(
  {
    Vehicle_General_Information: {
      label: { type: String, default: "Vehicle General Information" },
      vehicleGeneralInformation: [vehicleGeneralInformationSchema],
    },
    Vehicle_Identification_Number: {
      label: { type: String, default: "Vehicle Identification Number" },
      VehicleIdentificationNumber: [VehicleIdentificationNumberSchema],
    },
    homologationRequest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HomologationRequest",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("form11", form11Schema);