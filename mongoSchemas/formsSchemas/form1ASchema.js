const mongoose = require("mongoose")

//-----Safety Critical Components 1 start------ Done

const TyresSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Front_Tyre: {
    label: { type: String, default: "Front Tyre" },
    properties: {
      Variant: {
        value: { type: String, default: "" },
        label: { type: String, default: "Variant" },
      },
      Type: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type" },
      },
      Size: {
        value: { type: String, default: "" },
        label: { type: String, default: "Size" },
      },
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      TAC: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC" },
      },
      Dynamic_rolling: {
        value: { type: String, default: "" },
        label: { type: String, default: "Dynamic rolling" },
      },
    },
  },
  Rear_Tyre: {
    label: { type: String, default: "Rear Tyre" },
    properties: {
      Variant: {
        value: { type: String, default: "" },
        label: { type: String, default: "Variant" },
      },
      Type: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type" },
      },
      Size: {
        value: { type: String, default: "" },
        label: { type: String, default: "Size" },
      },
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      TAC: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC" },
      },
      Dynamic_rolling: {
        value: { type: String, default: "" },
        label: { type: String, default: "Dynamic rolling" },
      },
    },
  },
  Any_other_Tyre: {
    label: { type: String, default: "Any other Tyre" },
    properties: {
      Variant: {
        value: { type: String, default: "" },
        label: { type: String, default: "Variant" },
      },
      Type: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type" },
      },
      Size: {
        value: { type: String, default: "" },
        label: { type: String, default: "Size" },
      },
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      TAC: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC" },
      },
      Dynamic_rolling: {
        value: { type: String, default: "" },
        label: { type: String, default: "Dynamic rolling" },
      },
    },
  },
  Tyre_Description: {
    label: { type: String, default: "Tyre Decription" },
    properties: {
      Laden: {
        value: { type: String, default: "" },
        label: { type: String, default: "Laden" },
      },
      Unladen_Driver: {
        value: { type: String, default: "" },
        label: { type: String, default: "Unladen(Driver)" },
      },
      Tyre_wheel_combinations_Sizes: {
        value: { type: String, default: "" },
        label: { type: String, default: "Tyre/wheel (rim) combinations Sizes" },
      },
      Minimum_speed_category_symbol: {
        value: { type: String, default: "" },
        label: { type: String, default: "Minimum-speed category symbol compatible with the theoretical maximum design speed of the vehicle" },
      },
      Minimum_load_capacity_index: {
        value: { type: String, default: "" },
        label: { type: String, default: "Minimum load-capacity index with the maximum load on each tyre" },
      },
      Categories_compatible_for_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Categories of use compatible for the vehicle" },
      },
    },
  },
})

const WheelRimSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Front_Wheel_Rim: {
    label: { type: String, default: "Front Wheel Rim" },
    properties: {
      Make_of_front_wheel_Rim: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of front wheel Rim" },
      },
      BIS_License_Number_validity: {
        value: { type: String, default: "" },
        label: { type: String, default: "BIS License/TAC Number with its Validity" },
      },
      Part_Number_of_wheelrim_supplier: {
        value: { type: String, default: "" },
        label: { type: String, default: "Part Number of wheelrim supplier" },
      },
      Size: {
        value: { type: String, default: "" },
        label: { type: String, default: "Size" },
      },
      Rim_Type: {
        value: { type: String, default: "" },
        label: { type: String, default: "Rim Type" },
      },
    },
  },
  Rear_Wheel_Rim: {
    label: { type: String, default: "Rear Wheel Rim" },
    properties: {
      Make_of_rear_wheel_Rim: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of rear wheel Rim" },
      },
      BIS_License_Number_validity: {
        value: { type: String, default: "" },
        label: { type: String, default: "BIS License/TAC Number with its Validity" },
      },
      Part_Number_of_wheelrim_supplier: {
        value: { type: String, default: "" },
        label: { type: String, default: "Part Number of wheelrim supplier" },
      },
      Size: {
        value: { type: String, default: "" },
        label: { type: String, default: "Size" },
      },
      Rim_Type: {
        value: { type: String, default: "" },
        label: { type: String, default: "Rim Type" },
      },
    },
  },
})

const HornSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Horn: {
    label: { type: String, default: "Horn" },
    properties: {
      Make_of_the_Horn: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Horn" },
      },
      Select_Horn_Type: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Horn Type" },
      },
      Operating_voltage_of_Horn: {
        value: { type: String, default: "" },
        label: { type: String, default: "Operating voltage of the Horn" },
      },
      No_of_Horns: {
        value: { type: String, default: "" },
        label: { type: String, default: "No. of Horns used in the vehicle" },
      },
      TAC_Number_Validity: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number & Its Validity" },
      },
      Drawing_showing_location: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default: "Drawing(s) showing the location of the audible warning device(s) in relation to the structure of the vehicle",
        },
      },
      Dimensional_material_Details: {
        value: { type: String, default: "" },
        label: { type: String, default: "Dimensional & material Details of the part in front of the Horn(s)  which may obstruct audibility" },
      },
    },
  },
})

// const LigthingSignalingSchema = mongoose.Schema({
//   supplier: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "supplier",
//   },
//   Headline: {
//     label: { type: String, default: "Headline" },
//     properties: {
//       Lighting_signaling_devices: {
//         value: { type: String, default: "" },
//         label: { type: String, default: "Lighting and light-signaling devices" },
//       },
//     },
//   },
//   Annexure_1: {
//     label: { type: String, default: "Annexure-1" },
//     properties: {
//       Lighting_signaling_devices: {
//         value: { type: String, default: "" },
//         label: { type: String, default: "List of all devices (Enclose annexure, if required)" },
//       },
//     },
//   },
//   Annexure_2: {
//     label: { type: String, default: "Annexure-2" },
//     properties: {
//       Lighting_signaling_devices: {
//         value: { type: String, default: "" },
//         label: { type: String, default: "List of all devices (Enclose annexure, if required)" },
//       },
//     },
//   },
// })

const HeadLampSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Main_Beam_Head_Lamp: {
    label: { type: String, default: "Main Beam Head Lamp LED type" },
    properties: {
      Main_Beam_Head_Lamp_make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Main Beam Head Lamp make" },
      },
      Select_Type_led_head_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Type of led used in the head lamp" },
      },
      TAC_Number: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number" },
      },
      Number_of_beam_lights_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number of main beam lights provided and Colour of light" },
      },
    },
  },
  Main_Beam_Headlamp_Filament_Type: {
    label: { type: String, default: "Main Beam Headlamp Filament Type" },
    properties: {
      Make_of_main_beam_bulb: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of main beam bulb" },
      },
      Category_bulb_per_AIS034: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category of bulb as per AIS-034" },
      },
      TAC_Number_Main_beam_headlamp_bulb: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Main beam headlamp bulb" },
      },
    },
  },
  Dipped_Beam_Headlamp_LED_Type: {
    label: { type: String, default: "Dipped Beam Headlamp LED Type" },
    properties: {
      Make_of_dipped_beam_head_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Dipped beam head lamp" },
      },
      Select_Type_led_dipped_beam_headlamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Type of lens used in the Dipped Beam headlamp" },
      },
      TAC_Number: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number" },
      },
      Number_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light" },
      },
    },
  },
  Dipped_Beam_Headlamp_Filament_Type: {
    label: { type: String, default: "Dipped Beam Headlamp Filament Type" },
    properties: {
      Make_of_dipped_beam_head_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Dipped beam head lamp" },
      },
      Category_per_AIS034: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-035" },
      },
      Select_Type_led_dipped_beam_headlamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Type of lens used in the Dipped Beam headlamp" },
      },
      TAC_Number: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number" },
      },
    },
  },
})

const PositionLampsSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Front_Position_Lamp_LED_Type: {
    label: { type: String, default: "Front Position Lamp LED Type" },
    properties: {
      Make_of_front_Position_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of front Position lamp" },
      },
      TAC_Number_of_Front_Position_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Front Position Lamp" },
      },
      Number_of_Front_Position_lamps_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number of Front Position lamps and Colour of light " },
      },
    },
  },
  Front_Position_Lamp_Bulb_Type: {
    label: { type: String, default: "Front Position Lamp Bulb Type" },
    properties: {
      Front_Position_Lamp_Bulb_Filament_Type: {
        value: { type: String, default: "" },
        label: { type: String, default: "Front Position Lamp Bulb-Filament Type" },
      },
      Make_of_Front_Position_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Front Position Lamp" },
      },
      Category_as_per_AIS034: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-034" },
      },
      TAC_Number_of_Front_Position_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Front Position Lamps" },
      },
    },
  },
  Front_Parking_Lamp_LED_Type: {
    label: { type: String, default: "Front Parking Lamp-LED Type" },
    properties: {
      Front_Parking_Lamp_LED: {
        value: { type: String, default: "" },
        label: { type: String, default: "Front Parking Lamp-LED" },
      },
      Make_of_Front_Parking_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Front Parking Lamp" },
      },
      TAC_No_Front_Parking_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC No of Front Parking lamp" },
      },
      Number_of_Front_parking_lamps_and_their_colour: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number of Front prking lamps and their colour" },
      },
    },
  },
  Front_Parking_Lamp_Bulb_type: {
    label: { type: String, default: "Front Parking Lamp Bulb type" },
    properties: {
      Make_of_Front_parking_lamp_bulb: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Front parking lamp bulb" },
      },
      Category_as_per_AIS_035: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-035" },
      },
      TAC_No_Front_Parking_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC number of Front Parking lamp" },
      },
    },
  },
  Parking_Lamp_Bulb_Rear: {
    label: { type: String, default: "Parking Lamp Bulb Rear" },
    properties: {
      Parking_Lamp_bulb_Rear: {
        value: { type: String, default: "" },
        label: { type: String, default: "Parking Lamp bulb – Rear" },
      },
      Make_of_Parking_lamp_bulb_rear: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Parking lamp bulb rear" },
      },
      Category_as_per_AIS035: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-035" },
      },
      TAC_Number: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Rear Parking Lamp" },
      },
    },
  },
  Stop_Lamp_LED_Type: {
    label: { type: String, default: "Stop Lamp LED Type" },
    properties: {
      Make_of_Stop_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Stop lamp " },
      },
      TAC_Number: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Stop Lamp" },
      },
      Number_of_Stop_lamps_installed_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number of Stop lamps installed and Colour of light " },
      },
    },
  },
  Stop_Lamp_bulb_Type: {
    label: { type: String, default: "Stop Lamp Bulb Type" },
    properties: {
      Make_of_Stop_lamp_bulb: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Stop lamp bulb" },
      },
      Category_as_per_AIS035: {
        value: { type: String, default: "" },
        label: { type: String, default: " Category as per AIS-035" },
      },
      TAC_Number: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Stop Lamp bulb" },
      },
    },
  },
})

//-----Safety Critical Components 1 end------

//===============================================================================================

//-----Safety Critical Components 2 start------

const RearRegistrationPlateSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Registration_Plate_Lamp_LED_Type: {
    label: { type: String, default: "Registration Plate Lamp LED Type" },
    properties: {
      Make_Rear_Reg_Plate_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Rear Registration Plate Lamp" },
      },
      TAC_Rear_Reg_Plate_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC number of Rear Registration Plate Lamp" },
      },
      Number_and_Colour_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light" },
      },
    },
  },
  Registration_Plate_Lamp_bulb_type: {
    label: { type: String, default: "Registration Plate Lamp bulb type" },
    properties: {
      Make_Number_Plate_Lamp_Bulb: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Number Plate Lamp Bulb" },
      },
      Category_per_AIS_035: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-035" },
      },
      TAC_Number_Plate_Lamp_Bulb: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC of Number Plate Lamp Bulb" },
      },
    },
  },
})

const DirectionIndicatorLampSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Front_Dir_Indicator_LED_Type: {
    label: { type: String, default: "Front Direction Indicator LED Type" },
    properties: {
      Make_Front_Direction_Indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Front Direction Indicator" },
      },
      TAC_Num_Front_Direction_Indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Front Direction Indicator" },
      },
      Front_Dir_Indiactors_colors: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number of Front Directional Indiactors Provided and their Colours" },
      },
    },
  },
  Front_Dir_indicator_Bulb_Type: {
    label: { type: String, default: "Front Direction indicator Bulb Type" },
    properties: {
      Make_Front_Dir_Indicators: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Front Direction Indicators" },
      },
      Category_per_AIS_035: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-035" },
      },
      TAC_Dir_Indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Direction Indicator" },
      },
    },
  },
  Rear_Direction_Indicator_LED_Type: {
    label: { type: String, default: "Rear Direction Indicator LED Type" },
    properties: {
      Make_Front_Direction_Indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Rear Direction Indicator" },
      },
      TAC_Front_Direction_Indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC No. of Rear Direction Indicator" },
      },
      Number_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light " },
      },
    },
  },
  Rear_Direction_Indicator_Bulb_Type: {
    label: { type: String, default: "Rear Direction Indicator Bulb Type" },
    properties: {
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      Category_per_AIS_035: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-035" },
      },
      TAC_BIS_License_E_Marking_no: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification: TAC No. / BIS License No. / E- Marking" },
      },
      Flasher_Direc_Indicators: {
        value: { type: String, default: "" },
        label: { type: String, default: "Flasher for Direction Indicators" },
      },
      Flashing_Frequency: {
        value: { type: String, default: "" },
        label: { type: String, default: "Flashing Frequency of direction indicator ( No of flashes / minute )" },
      },
    },
  },
  Side_Direction_Indicator: {
    label: { type: String, default: "Side Direction Indicator" },
    properties: {
      Make_Side_Direction_Indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Side Direction Indicator" },
      },
      TAC_Num_Side_Direc_Indiacator: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Side Direction indiacator" },
      },
      Num_and_Colour_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light " },
      },
      Make_Flasher_Direc_Indicators: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Flasher for Direction Indicators" },
      },
      Flashing_Freq_direc_indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "Flashing Frequency of direction indicator ( No of flashes / minute )" },
      },
    },
  },
})

const HazardWarningLampSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Hazard_Warn_lamp_Front_Led: {
    label: { type: String, default: "Hazard warning lamp Front Led Type" },
    properties: {
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      TAC_BIS_License_EMarking_num: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification: TAC No. / BIS License No. / E- Marking" },
      },
      Num_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light  " },
      },
    },
  },
  Front_Dir_indicator_Bulb_Type: {
    label: { type: String, default: "Front Direction indicator Bulb Type" },
    properties: {
      Make_Front_Dir_Indicators: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Front Direction Indicators" },
      },
      Category_per_AIS_035: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-035" },
      },
      TAC_Dir_Indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Direction Indicator" },
      },
    },
  },
  Hazard_warning_Lamp_LED_Type: {
    label: { type: String, default: "Hazard warning Lamp LED Type" },
    properties: {
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      Category_per_AIS_034: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-034" },
      },
      TAC_BIS_EMarking_num: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification: TAC No. / BIS License No. / E- Marking" },
      },
    },
  },
  Rear_Hazard_Lamp: {
    label: { type: String, default: "Rear Hazard Lamp" },
    properties: {
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      TAC_BIS_License_E_Marking_no: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification: TAC No. / BIS License No. / E- Marking" },
      },
      Num_and_Colour_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light" },
      },
    },
  },
  Side_Hazard_Lamp: {
    label: { type: String, default: "Side Direction Indicator" },
    properties: {
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      TAC_BIS_LicenseEMarking_num: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification: TAC No. / BIS License No. / E- Marking" },
      },
      Num_and_Colour_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light " },
      },
      Max_intensity_Head_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum intensity of Head lamp" },
      },
      Diagram_location_lighting: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default: "Diagram showing the location of the lighting and light-signaling devices on vehicle with relevant dimensions (see AIS-009)",
        },
      },
    },
  },
})

const RetroReflectorsSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Front_White_Reflector: {
    label: { type: String, default: "Front White Reflector" },
    properties: {
      Make_Front_Reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Front Reflector" },
      },
      Type_Front_Reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type of Front Reflector" },
      },
      TAC_Num_Front_Reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Front Reflector" },
      },
      TAC_Validity: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Validity" },
      },
      Num_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light" },
      },
      Reflective_Surface_Area: {
        value: { type: String, default: "" },
        label: { type: String, default: "Reflective surface Area" },
      },
      Shape: {
        value: { type: String, default: "" },
        label: { type: String, default: "Shape (Square / rectangular / circular / elliptical /other)" },
      },
    },
  },
  Rear_Red_Reflector: {
    label: { type: String, default: "Rear Red Reflector" },
    properties: {
      Make_Rear_Red_Reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Rear Red Reflector" },
      },
      Type_Rear_Reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type Rear Reflector" },
      },
      TAC_Num_Rear_Reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Rear Reflector" },
      },
      Num_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light  " },
      },
      Reflective_surface_Area: {
        value: { type: String, default: "" },
        label: { type: String, default: "Reflective surface Area" },
      },
      Shape: {
        value: { type: String, default: "" },
        label: { type: String, default: "Shape (Square / rectangular / circular / elliptical /other)" },
      },
    },
  },
  Side_Amber_Reflector: {
    label: { type: String, default: "Side Amber Reflector" },
    properties: {
      Make_side_amber_reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the side amber reflector" },
      },
      Type_Side_Reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type Side Reflector" },
      },
      TAC_Num_Side_Reflector: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Side Reflector" },
      },
      Num_and_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light  " },
      },
      Reflective_surface_Area: {
        value: { type: String, default: "" },
        label: { type: String, default: "Reflective surface Area" },
      },
      Shape: {
        value: { type: String, default: "" },
        label: { type: String, default: "Shape (Square / rectangular / circular / elliptical /other)" },
      },
    },
  },
})

const HydraulicBrakeHoseSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Hydraulic_Brake_Hose: {
    label: { type: String, default: "Hydraulic Brake Hose" },
    properties: {
      Make_Brake_Hose: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Brake Hose" },
      },
      TAC_Num_Brake_Hose: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Brake Hose" },
      },
    },
  },
})

const BrakeFluidSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Hydraulic_Brake_Fluid: {
    label: { type: String, default: "Hydraulic Brake Hose" },
    properties: {
      Make_of_Brake_Fluid: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Brake Fluid" },
      },
    },
  },
})

//-----Safety Critical Components 2 end------

//===============================================================================================

//-----Safety Critical Components 3 start------ Done

const RearViewMirrorSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Rear_View_Mirror: {
    label: { type: String, default: "Rear View  Mirror" },
    properties: {
      Make_Rear_View_Mirrors: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Rear View Mirrors" },
      },
      TAC_Number_Validity: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number & Its Validity" },
      },
      Select_Mirror_Class: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Mirror Class" },
      },
      Drawing_Installation_Dimension: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default:
            "Drawing(s) showing the location & Installation Dimension Details of the rear-view mirror(s) in relation to the structure of the vehicle",
        },
      },
      Precise_vehicle_structure: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default:
            "Precise information concerning the type of attachment, including that part of the vehicle structure to which the rear-view mirror is attached",
        },
      },
    },
  },
})

const ReversingLampSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Reversing_Lamp: {
    label: { type: String, default: "Reversing Lamp" },
    properties: {
      Make_Reverse_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Reverse Lamp" },
      },
      TAC_Num_Reverse_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number of Reverse lamp" },
      },
      Number_Colour_of_light: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number and Colour of light" },
      },
    },
  },
  Reverse_Lamp_Bulb_Type: {
    label: { type: String, default: "Reverse Lamp Bulb Type" },
    properties: {
      Make_Reverse_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Reverse Lamp" },
      },
      Category_per_AIS_035: {
        value: { type: String, default: "" },
        label: { type: String, default: "Category as per AIS-035" },
      },
      TAC_Number_Reverse_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "TAC Number Reverse Lamp" },
      },
    },
  },
})
//-----Safety Critical Components 3 end------

//===============================================================================================

//-----Vehicle OK 3 start------ Done

const VehicleGeneralInformationSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Manufacturer_Details: {
    label: { type: String, default: "Manufacturer Details" },
    properties: {
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      Basic_model_and_its_variant: {
        value: { type: String, default: "" },
        label: { type: String, default: "Basic model and its variant(s)" },
      },
      variant: {
        value: { type: String, default: "" },
        label: { type: String, default: "variant(s)" },
      },
      Vehicle_category: {
        value: { type: String, default: "" },
        label: { type: String, default: "Vehicle category (IS 14272)" },
      },
      Name_and_address_of_manufacturer: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default:
            "Name and address of manufacturer with contact persons’ name, designation, e-mail, phone nos. etc. Provide details of importer, if applicable.",
        },
      },
      Name_and_address_of_assembly_plants: {
        value: { type: String, default: "" },
        label: { type: String, default: "Name(s) and address (es) of assembly plants" },
      },
      Name_address_mfr_auth_rep: {
        value: { type: String, default: "" },
        label: { type: String, default: "Name and address of manufacturer's authorized representative. if any" },
      },
      Position_affixing_type_approval: {
        value: { type: String, default: "" },
        label: { type: String, default: "Position and method of affixing the component type-approval mark for components " },
      },
      Name_and_address_of_the_vehicle_importer: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default: "Name and address of the vehicle importer",
        },
      },
      Name_and_address_of_assembly_plants: {
        value: { type: String, default: "" },
        label: { type: String, default: "Name(s) and address (es) of assembly plants" },
      },
    },
  },
})

const GeneralArrangementVehicleSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  General_arrangement_vehicle: {
    label: { type: String, default: "General arrangement of the vehicle" },
    properties: {
      Upload_Drawing_Vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload Drawing Showing Typical Vehicle" },
      },
      Upload_Drawing_complete_Vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload Drawing of the complete Vehicle indicating overall length, width and height." },
      },
      Number_of_axles_and_Wheels: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number of axles and Wheels" },
      },
      Number_of_seating_positions: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number of seating positions" },
      },
      Type_possible_variants_and_versions: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default:
            "Type (state any possible variants and versions: each variant and each version must be identified by a code consisting of numbers or a combination of letters and numbers)",
        },
      },
      Commercial_name: {
        value: { type: String, default: "" },
        label: { type: String, default: "Commercial name (s)" },
      },
      Wheel_base: {
        value: { type: String, default: "" },
        label: { type: String, default: "Wheel base (mm)" },
        units: {type: String, default: "mm"}
      }
    },
  },
})

// const VehicleDimensionsSchema = mongoose.Schema({
//   supplier: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "supplier",
//   },
//   General_arrangement_vehicle: {
//     label: { type: String, default: "General arrangement of the vehicle" },
//     properties: {
//       Wheel_base: {
//         value: { type: String, default: "" },
//         label: { type: String, default: "Wheel base (mm)" },
//       },
//     },
//   },
// })

const WeightsSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Kerb_Weight: {
    label: { type: String, default: "Kerb Weight" },
    properties: {
      Vehicle_kerb_weight: {
        value: { type: String, default: "" },
        label: { type: String, default: "Vehicle kerb weight" },
        units: {type: String, default: "Kg"}
      },
      Distribution_weight_between_axles: {
        value: { type: String, default: "" },
        label: { type: String, default: "Distribution of that weight between the axles" },
      },
      Reference_weight: {
        value: { type: String, default: "" },
        label: { type: String, default: "Reference weight" },
        units: {type: String, default: "Kg"}
      },
    },
  },
  Gross_Vehicle_Weight: {
    label: { type: String, default: "Gross Vehicle Weight" },
    properties: {
      Gross_Vehicle_Weight: {
        value: { type: String, default: "" },
        label: { type: String, default: "Gross Vehicle Weight" },
        units: {type: String, default: "Kg"}
      },
      Division_of_weight_between_axles: {
        value: { type: String, default: "" },
        label: { type: String, default: "Division of that weight  between the axles" },
      },
    },
  },
  Maximum_Carrying_capacity: {
    label: { type: String, default: "Maximum Carrying capacity" },
    properties: {
      Max_permissible_weight: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum technically permissible  weight  (maximum permissible axle weight) on each of the axles" },
        units: {type: String, default: "Kg"}
      },
      Max_permissible_weight_front_axle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum technically permissible  weight distribution on front axle" },
        units: {type: String, default: "Kg"}
      },
      Max_permissible_weight_rear_axle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum technically permissible  weight distribution on rear axle" },
        units: {type: String, default: "Kg"}
      },
      Max_GCW_kg: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum GCW kg (for articulated / combination vehicles)" },
      },
    },
  },
})

const SuspensionSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Suspension: {
    label: { type: String, default: "Suspension" },
    properties: {
      Upload_Drawing_Suspension: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload Drawing Suspension arrangement" },
      },
      Brief_desc_ECUs: {
        value: { type: String, default: "" },
        label: { type: String, default: "Brief description of the ECUs if any used in the suspension" },
      },
      springs_at_front_and_Rear: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type of springs provided at front and Rear" },
      },
      Anti_roll_bar: {
        value: { type: String, default: "" },
        label: { type: String, default: "Anti-roll bar if provided" },
      },
      Shock_absorbers_at_front_rear: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type of Shock absorbers provided at the front and Rear" },
      },
    },
  },
})

const BrakesSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Brief_Brake_Information: {
    label: { type: String, default: "Brief Brake Information" },
    properties: {
      Drawing_Braking_System: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload Drawing showing the Schematic Layout of Braking System" },
      },
      Make_of_Brake: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Brake system" },
      },
      Type_of_Braking_System: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Type of Braking System" },
      },
      Braking_System_Numbers: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Type of Braking System Provided and Their Numbers" },
      },
      Make_of_Brake_Shoes_or_Discs: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Brake Shoes or Discs" },
      },
      Braking_medium_Linkage: {
        value: { type: String, default: "" },
        label: { type: String, default: "select Type of Braking medium or Linkage" },
      },
    },
  },
  Parts_of_Brake_System: {
    label: { type: String, default: "Parts of Brake System" },
    properties: {
      Drawing_Brake_shoes: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload Drawing Showing the Brake shoes / pads Details" },
      },
      Linings_pads: {
        value: { type: String, default: "" },
        label: { type: String, default: "Linings and/or pads (Indicate make, grade of material or identification mark) " },
      },
      Brake_Actuation_method: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Brake Actuation method" },
      },
      Hydraulic_Reservoir_Applicable: {
        value: { type: String, default: "" },
        label: { type: String, default: "Whether hydraulic Reservoir Applicable" },
      },
      Front_rear_pads: {
        value: { type: String, default: "" },
        label: { type: String, default: "Front and rear pad/liner dimensions including Inner and Outer pads" },
      },
      Front_rear_braking: {
        value: { type: String, default: "" },
        label: { type: String, default: "Front and rear braking area" },
      },
      Diameter_front_rear_disc_drum: {
        value: { type: String, default: "" },
        label: { type: String, default: "Diameter of front and rear disc or drum" },
        units: {type: String, default: "mm"}
      },
    },
  },
  ABS: {
    label: { type: String, default: "ABS" },
    properties: {
      ABS_provided: {
        value: { type: String, default: "" },
        label: { type: String, default: "Whether ABS provided" },
      },
      wheels_ABS_acting: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select on which wheels ABS is acting" },
      },
      Sensors_to_detect_wheel_lockup: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Sensors used in each Wheel to detect wheel lockup" },
      },
      ID_SensorsHydraulic_Reservoir: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification number(ID) / Part No. of Sensors" },
      },
      ABS_Modulator_front_Rear_Wheel: {
        value: { type: String, default: "" },
        label: { type: String, default: "make of ABS Modulator used for front and Rear Wheel" },
      },
      ID_Modulator_Each_wheel: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification number(ID) / Part No of Modulator of Each wheel" },
      },
      Make_of_ABS_ECU: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of ABS ECU" },
      },
      Make_of_ABS_controller: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of ABS controller" },
      },
      ID_ABS_Controller: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification number(ID) / Part No of ABS Controller  " },
      },
    },
  },
  Drawing: {
    label: { type: String, default: "Drawing" },
    properties: {
      Drawing_parking_brake_and_mechanism: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload drawing showing details of parking brake and its mechanism" },
      },
    },
  },
  ECU: {
    label: { type: String, default: "ECU" },
    properties: {
      Desc_ECUs_in_braking_system: {
        value: { type: String, default: "" },
        label: { type: String, default: "Brief description of the if any ECUs used in the braking system" },
      },
    },
  },
  BrakeTypes: {
    label: { type: String, default: "Brake Types" },
    properties: {
      friction_front_wheel_brakes: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select type of friction member used in front wheel brakes" },
      },
      friction_rear_wheel_brakes: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select type of friction member used in Rear wheel brakes" },
      },
    },
  },
  Service_Brake_Controls: {
    label: { type: String, default: "Service Brake Controls" },
    properties: {
      Service_front_Brake_control: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Service front Brake control" },
      },
      Service_rear_Brake_control: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Rear Service Brake Control Type" },
      },
      Service_combined_Brake_control: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Combined Service Brake Control Type" },
      },
    },
  },
  Free_Play_Ratio: {
    label: { type: String, default: "Free Play and Ratio's" },
    properties: {
      Front_brake_lever: {
        value: { type: String, default: "" },
        label: { type: String, default: "Front brake lever free play recommended" },
      },
      Rear_brake_lever: {
        value: { type: String, default: "" },
        label: { type: String, default: "Rear brake Actuation Lever Free Play Recommended" },
      },
      combined_brake_lever: {
        value: { type: String, default: "" },
        label: { type: String, default: "Combined Brake Lever Free Play Recommended" },
      },
      Brake_Pedal_ratio: {
        value: { type: String, default: "" },
        label: { type: String, default: "Brake Pedal ratio" },
      },
      Hand_Lever_Ratio: {
        value: { type: String, default: "" },
        label: { type: String, default: "Hand Lever Ratio" },
      },
      Nominal_Size_master_cylinder: {
        value: { type: String, default: "" },
        label: { type: String, default: "Nominal Size of master cylinder (Dia. & stroke), mm" },
      },
    },
  },
  Wheel_Cyclinders: {
    label: { type: String, default: "Wheel Cyclinders" },
    properties: {
      Front_Wheel_Cylinder_Dia: {
        value: { type: String, default: "" },
        label: { type: String, default: "Front Wheel Cylinder Dia " },
      },
      Rear_Wheel_Cylinder_Dia: {
        value: { type: String, default: "" },
        label: { type: String, default: "Rear Wheel Cylinder dia" },
      },
      Make_of_Wheel_Cylinders: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Wheel Cylinders" },
      },
    },
  },
  Parking_Brake: {
    label: { type: String, default: "Parking Brake" },
    properties: {
      Type_of_Regenerative_brake: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Type of Regenerative brake used in the vehicle " },
      },
      separate_control_regenerative_braking: {
        value: { type: String, default: "" },
        label: { type: String, default: "If, Type A, is there a separate control for activating regenerative braking" },
      },
      Make_of_Wheel_Cylinders: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Wheel Cylinders" },
      },
    },
  },
})

const VehicleControlsLocationSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Vehicle_Controls: {
    label: { type: String, default: "Vehicle Controls" },
    properties: {
      Horn_control_Provided: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select where the Horn control is Provided " },
      },
      Head_lamp_Beam_switch: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select where the Head lamp Beam selecter switch is Given" },
      },
      Front_Fog_Lamp_Control: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select where the Front Fog Lamp Control is Given " },
      },
      Rear_Fog_Lamp_Control: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select where the Rear Fog Lamp Control is Given " },
      },
      Direction_indicators: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select where the Direction Indicator Control is Provided " },
      },
      Hazard_warning_signal: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Where the Hazard warning signal control is provided " },
      },
      Position_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select where the Position Lamps control is Provided " },
      },
      Parking_Lamps: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select where the Parking  Lamps control is Provided  " },
      },
      Front_brake_control: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the front  brake control" },
      },
      Rear_brake_control: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Foot Rear Brake Control " },
      },
      Hand_Rear_Wheel_Brake: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Hand Rear Wheel Brake Control " },
      },
      parking_brake: {
        value: { type: String, default: "" },
        label: { type: String, default: "Location of where parking brake is provided" },
      },
      Any_other_control: {
        value: { type: String, default: "" },
        label: { type: String, default: "Any other control" },
      },
    },
  },
})

const TellTalesSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Tell_Tales: {
    label: { type: String, default: "Tell-Tales" },
    properties: {
      Head_lamp_Driving_beam: {
        value: { type: String, default: "" },
        label: { type: String, default: "Head lamp Driving beam" },
      },
      Head_lamp_Passing_beam: {
        value: { type: String, default: "" },
        label: { type: String, default: "Head lamp Passing beam" },
      },
      Fog_Lamps_Front: {
        value: { type: String, default: "" },
        label: { type: String, default: "Fog Lamps - Front" },
      },
      Fog_Lamps_Rear: {
        value: { type: String, default: "" },
        label: { type: String, default: "Fog Lamps - Rear" },
      },
      Direction_indicators: {
        value: { type: String, default: "" },
        label: { type: String, default: "Direction indicators " },
      },
      Hazard_warning_signal: {
        value: { type: String, default: "" },
        label: { type: String, default: "Hazard warning signal" },
      },
      Position_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Position Lamp" },
      },
      Master_lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Master lamp" },
      },
      Parking_Lamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Parking Lamp" },
      },
      Other_tell_tale: {
        value: { type: String, default: "" },
        label: { type: String, default: "Any other tell-tale " },
      },
    },
  },
})

const IndicatorsSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Indicators: {
    label: { type: String, default: "Tell-Tales" },
    properties: {
      Speedometer: {
        value: { type: String, default: "" },
        label: { type: String, default: "Speedometer" },
      },
      Any_other_Indicator: {
        value: { type: String, default: "" },
        label: { type: String, default: "Any other Indicator" },
      },
    },
  },
})

const VehicleIdentificationNumberSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  VINNumbering: {
    label: { type: String, default: "VIN Numbering" },
    properties: {
      Location_VIN_on_Chassis: {
        value: { type: String, default: "" },
        label: { type: String, default: "Specify the Location of VIN on Chassis " },
      },
      Method_inscription_VIN_chassis: {
        value: { type: String, default: "" },
        label: { type: String, default: "Method of inscription of VIN on the chassis" },
      },
      Seria_number_type: {
        value: { type: String, default: "" },
        label: { type: String, default: "The serial numbering (of production vehicles) of the type begins with No" },
      },
      Photo_location_VIN: {
        value: { type: String, default: "" },
        label: { type: String, default: "Photographs and/or drawings showing the location of VIN." },
      },
      Height_VIN_characters: {
        value: { type: String, default: "" },
        label: { type: String, default: "Height of VIN characters. " },
      },
    },
  },
})


const SteeringSuspensionAntiTheftSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Steering_System: {
    label: { type: String, default: "Steering System" },
    properties: {
      Steering_control_provided: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Type Steering control provided" },
      },
      location_of_steering_wheel: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the location of steering wheel" },
      },
      Steering_working_mechanism: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Steering working mechanism" },
      },
      Make_Steering_system: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Steering system" },
      },
      steering_gear_ratio: {
        value: { type: String, default: "" },
        label: { type: String, default: "Specify steering gear ratio" },
      },
      Max_rotation_steering_wheel: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum No. of rotation of steering wheel from lock to lock" },
      },
      Brief_desc_ECUs: {
        value: { type: String, default: "" },
        label: { type: String, default: "Brief description of the ECUs if used in the steering system" },
      },
    },
  },
  Suspension: {
    label: { type: String, default: "Suspension" },
    properties: {
      Upload_Drawing_Suspension: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload Drawing Suspension arrangement" },
      },
      Brief_desc_ECUs: {
        value: { type: String, default: "" },
        label: { type: String, default: "Brief description of the ECUs if any used in the suspension" },
      },
      springs_at_front_and_Rear: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type of springs provided at front and Rear" },
      },
      Anti_roll_bar: {
        value: { type: String, default: "" },
        label: { type: String, default: "Anti-roll bar if provided" },
      },
      Shock_absorbers_at_front_rear: {
        value: { type: String, default: "" },
        label: { type: String, default: "Type of Shock absorbers provided at the front and Rear" },
      },
    },
  },
  Lock_Anti_theft_device: {
    label: { type: String, default: "Lock / Anti theft device" },
    properties: {
      Type_of_handle_Lock: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Type of handle Lock / Anti Theft / Protective Device" },
      },
      Make_of_Anti_Theft_Device: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Anti Theft/ Protective Device" },
      },
    },
  },
})


const HandleLockSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Lock_Anti_theft_device: {
    label: { type: String, default: "Lock / Anti theft device" },
    properties: {
      Type_of_handle_Lock: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Type of handle Lock / Anti Theft / Protective Device" },
      },
      Make_of_Anti_Theft_Device: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of Anti Theft/ Protective Device" },
      },
    },
  },
})

const TwoWheelerAggregatesSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Grab_handle_Straps: {
    label: { type: String, default: "Grab Handle" },
    properties: {
      Handholds_pillion_Rider: {
        value: { type: String, default: "" },
        label: { type: String, default: "Nos of Handholds for pillion Rider " },
      },
      Type_Handhold_Pillion_rider: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select of Type of Handhold provided for Pillion rider " },
      },
      Drawing_handhold_Strap: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload the drawing showing the details of handhold /Strap " },
      },
      Handholds_passenger_3_wheeler: {
        value: { type: String, default: "" },
        label: { type: String, default: "No of Handholds provided for passenger on 3 wheeler" },
      },
    },
  },
  Two_Wheeler_Foot_Rest: {
    label: { type: String, default: "Two Wheeler Foot Rest" },
    properties: {
      No_Foot_Rests_Floor_Boards: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select No of Foot Rests or Floor Boards Provided" },
      },
      Drawing_Footrest_Floor_Boards: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload Drawing showing the Footrest / Floor Boards details" },
      },
    },
  },
  Spray_Suppression_Rear_Mud_Gaurd: {
    label: { type: String, default: "Spray Suppression / Rear Mud Gaurd" },
    properties: {
      Diagram_spray_suppression: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default: "Diagram showing general arrangement of spray suppression system, Angle θ and relevant dimensions as specified in AIS-103 :2009",
        },
      },
      Tyre_max_Width: {
        value: { type: String, default: "" },
        label: { type: String, default: "Tyre Overall Width (Maximum of variants and tyre makes)" },
      },
    },
  },
  Two_Wheeler_Stand: {
    label: { type: String, default: "Two Wheeler Stand" },
    properties: {
      Type_Stand_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the type of Stand(s) Provided in the vehicle" },
      },
      No_stands_In_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the No of stands provided in the vehicle" },
      },
      Retention_system_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the retention system in the vehicle" },
      },
      One_spring_per_stand: {
        value: { type: String, default: "" },
        label: { type: String, default: "In case of only one spring per stand" },
      },
      Wire_Diameter_Spring: {
        value: { type: String, default: "" },
        label: { type: String, default: "Wire Diameter of Spring (mm)" },
        units: {type: String, default: "mm"}
      },
      Free_length_spring: {
        value: { type: String, default: "" },
        label: { type: String, default: "Free length of the spring (mm)" },
        units: {type: String, default: "mm"}
      },
      Outer_Coil_diameter: {
        value: { type: String, default: "" },
        label: { type: String, default: "Outer Coil diameter (mm)" },
        units: {type: String, default: "mm"}
      },
      Assembled_length: {
        value: { type: String, default: "" },
        label: { type: String, default: "Assembled length in “in-use position” (mm)" },
        units: {type: String, default: "mm"}
      },
      Assembled_length_not_in_use: {
        value: { type: String, default: "" },
        label: { type: String, default: "Assembled length in “not-in-use position” (mm)" },
        units: {type: String, default: "mm"}
      },
      Specify_Spring_Material: {
        value: { type: String, default: "" },
        label: { type: String, default: "Specify Spring Materialgram" },
      },
      Diagram_Stands_installation: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload the Diagram showing the Stands installation" },
      },
    },
  },
})

const GrabHandleSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Grab_handle_Straps: {
    label: { type: String, default: "Grab handle / Straps" },
    properties: {
      Drawing_handhold_Strap: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload the drawing showing the details of handhold /Strap " },
      },
      Handholds_passenger_3_wheeler: {
        value: { type: String, default: "" },
        label: { type: String, default: "No of Handholds provided for passenger on 3 wheeler" },
      },
    },
  },
})

const TwoWheelerExternalProjectionSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  External_Projection_Details: {
    label: { type: String, default: "External Projection Details" },
    properties: {
      compliance_per_AIS_120: {
        value: { type: String, default: "" },
        label: { type: String, default: "Details of compliance as per AIS-120 mentioned  in Clause 5.1.1 of AIS-147." },
      },
      Leg_Guard_two_wheelers: {
        value: { type: String, default: "" },
        label: { type: String, default: "Details of Leg Guard provided in two wheelers" },
      },
      Material_of_Leg_Gaurd: {
        value: { type: String, default: "" },
        label: { type: String, default: "material of Leg Gaurd" },
      },
      Width_of_Guard: {
        value: { type: String, default: "" },
        label: { type: String, default: "Width of the Guard (from body frame to extreme end laterally)" },
      },
    },
  },
})

const DriveTrainSystemSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Transmission: {
    label: { type: String, default: "Transmission" },
    properties: {
      Drawing_transmission_arrangement: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload Drawing showing the transmission arrangement" },
      },
      type_Transmission_arrangement: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the type of Transmission arrangement" },
      },
      Type_Gear_box_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select Type of Gear box used in the vehicle" },
      },
      Primary_ratio_transmission_system: {
        value: { type: String, default: "" },
        label: { type: String, default: "specify the primary ratio of transmission system " },
      },
      Reverse_gear_max_speed: {
        value: { type: String, default: "" },
        label: { type: String, default: "Whether reverse gear/ mode provided if yes specify max speed " },
      },
      ECUs_in_transmission: {
        value: { type: String, default: "" },
        label: { type: String, default: "Brief description of the ECUs if used in the transmission" },
      },
      Max_Design_speed_of_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum Design speed of the vehicle" },
      },
    },
  },
})

//-----Vehicle OK 3 end------

//===============================================================================================

//-----Miscellaneous 3 start------ Done

const FireFightingSystemSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Fire_Fighting_System: {
    label: { type: String, default: "Fire Fighting System" },
    properties: {
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      Weight: {
        value: { type: String, default: "" },
        label: { type: String, default: "Weight" },
        units: {type: String, default: "Kg"}
      },
      Schematic_Arrangement_position: {
        value: { type: String, default: "" },
        label: { type: String, default: "Schematic representation indicating the arrangement and position" },
      },
      Alterations_on_original_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Details of the alterations done on original vehicle (separate Annexure can be enclosed)" },
      },
      Photo_fire_fighting_system: {
        value: { type: String, default: "" },
        label: { type: String, default: "Photograph of vehicle with fire fighting system" },
      },
    },
  },
})

const VehiclePerformanceSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Vehicle_Performance: {
    label: { type: String, default: "Vehicle Performance" },
    properties: {
      Max_hill_star_ability: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default: "Maximum hill-starting ability (Gradeability) at the maximum technically permissible mass declared by the manufacturer",
        },
      },
    },
  },
})
//-----Miscellaneous 3 end------

//===============================================================================================

//-----L5 - OK start------ Done

// TODO : Companent / Sub component Name is missing  for this page

const DimensionSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Dimension: {
    label: { type: String, default: "Dimension" },
    properties: {
      Over_all_length_of_Vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Over all length of Vehicle" },
        units: {type: String, default: "mm"}
      },
      Over_all_width_of_Vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Over all width of Vehicle" },
        units: {type: String, default: "mm"}
      },
      Unladen_weight_of_the_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Unladen/ Kerb weight of the vehicle" },
        units: {type: String, default: "Kg"}
      },
      Front_overhang: {
        value: { type: String, default: "" },
        label: { type: String, default: "Front overhang" },
        units: {type: String, default: "mm"}
      },
    },
  },
})
const PayloadSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Payload: {
    label: { type: String, default: "Payload" },
    properties: {
      Maximum_payload_declared_by_manufacturer: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum payload declared by manufacturer" },
      },
    },
  },
})

const WindscreenWipingSystemSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Windscreen_and_Wiping_System: {
    label: { type: String, default: "Windscreen and Wiping System" },
    properties: {
      Make_of_windscreen: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of windscreen" },
      },
      BIS_License_Number_of_Windscreen: {
        value: { type: String, default: "" },
        label: { type: String, default: "BIS License Number of Windscreen " },
      },
      Make_and_Materials_used: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make and Materials used" },
      },
      BIS_license_number: {
        value: { type: String, default: "" },
        label: { type: String, default: "BIS license number:" },
      },
      Upload_Drawing: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default: "Upload Drawing showing the 'H' and 'R' Point , Wiping area, Dimension of wiper arm and Co-ordinates of mounting ",
        },
      },
    },
  },
})

const SeatingArrangementSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Seating_Arrangement: {
    label: { type: String, default: "Seating Arrangement" },
    properties: {
      Number_of_seats: {
        value: { type: String, default: "" },
        label: { type: String, default: "Number of Seats" },
      },
      Location_of_seats: {
        value: { type: String, default: "" },
        label: { type: String, default: "Location of seats" },
      },
    },
  },
})

const RPointSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  R_Point: {
    label: { type: String, default: "R Point" },
    properties: {
      Coordinates_of_drawing: {
        value: { type: String, default: "" },
        label: { type: String, default: "Coordinates or drawing of the R point declared by manufacturer for Driver seat" },
      },
      Intended_seat_back_inclination_Driving_seat: {
        value: { type: String, default: "" },
        label: { type: String, default: "Intended seat-back inclination Driving seat" },
      },
    },
  },
})

const SeatingDimensionSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  SeatingDimension: {
    label: { type: String, default: "Seating Dimension" },
    properties: {
      width_front_and_rear: {
        value: { type: String, default: "" },
        label: { type: String, default: "Width, mm (minimum width, maximum width at front end & maximum width at rear end)" },
        units: {type: String, default: "mm"}
      },
      width_mm: {
        value: { type: String, default: "" },
        label: { type: String, default: "Width, mm (minimum width, maximum width)" },
        units: {type: String, default: "mm"}
      },
      Select_type_of_seats_provided_for_Passenger: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select type of seats provided for Passenger" },
      },
      Passenger_seat_width: {
        value: { type: String, default: "" },
        label: { type: String, default: "Passenger seat width" },
        units: {type: String, default: "mm"}
      },
      Passenger_seat_depth: {
        value: { type: String, default: "" },
        label: { type: String, default: "Passenger seat depth" },
        units: {type: String, default: "mm"}
      },
      Passengers_Leg_space_dimension: {
        value: { type: String, default: "" },
        label: { type: String, default: "Passengers Leg space dimension, mm" },
        units: {type: String, default: "mm"}
      },
      Filament_lamp_category_for_headlamp: {
        value: { type: String, default: "" },
        label: { type: String, default: "Filament lamp category for headlamp " },
      },
      Seat_base_height_of_driver_seat: {
        value: { type: String, default: "" },
        label: { type: String, default: "Seat base height of driver seat" },
      },
      Seat_base_height_og_passenger_seat: {
        value: { type: String, default: "" },
        label: { type: String, default: "Seat base height og passenger seat" },
      },
    },
  },
})

const HPointSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  HPoint: {
    label: { type: String, default: "H Point" },
    properties: {
      seat_back_upper_edge_driver: {
        value: { type: String, default: "" },
        label: { type: String, default: "Seat back upper edge height from H point of Driver Seat" },
        units: {type: String, default: "mm"}
      },
      seat_back_upper_edge_passenger: {
        value: { type: String, default: "" },
        label: { type: String, default: "Seat back upper edge height from H point of Passenger Seat" },
        units: {type: String, default: "mm"}
      },
      Seat_back_height_of_Driver_seat: {
        value: { type: String, default: "" },
        label: { type: String, default: "Seat back height of Driver seat" },
        units: {type: String, default: "mm"}
      },
      Seat_back_height_of_Passenger_seat: {
        value: { type: String, default: "" },
        label: { type: String, default: "Seat bacck height of Passenger seat " },
        units: {type: String, default: "mm"}
      },
      Free_height_Driver_Seat: {
        value: { type: String, default: "" },
        label: { type: String, default: "Free height over seating position (Head Room) from H point for Driver Seat" },
        units: {type: String, default: "mm"}
      },
      Free_height_Passenger_Seat: {
        value: { type: String, default: "" },
        label: { type: String, default: "Free height over seating position (Head Room) from H poin for Passenger Seat" },
        units: {type: String, default: "mm"}
      },
    },
  },
})

const RearEntryProvisionSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Rear_Entry_Provision: {
    label: { type: String, default: "Rear Entry Provision" },
    properties: {
      Upload_drawing_showing_rear_of_vehicle: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload  drawing showing the dimesnions showing the Steps if Entry provided form rear of vehicle" },
      },
      Maximum_height_from_ground: {
        value: { type: String, default: "" },
        label: { type: String, default: "Maximum height from ground" },
        units: {type: String, default: "mm"}
      },
      Width_of_step: {
        value: { type: String, default: "" },
        label: { type: String, default: "Width of step" },
        units: {type: String, default: "mm"}
      },
      Depth_of_step: {
        value: { type: String, default: "" },
        label: { type: String, default: "Depth of step " },
        units: {type: String, default: "mm"}
      },
      Protective_structure_adjacent_seat: {
        value: { type: String, default: "" },
        label: { type: String, default: "Protective structure top edge height from adjacent seat base top surface, mm" },
        units: {type: String, default: "mm"}
      },
    },
  },
})
//-----L5 - OK end------

//===============================================================================================

//-----Electric - OK start------ Done
// TODO : Sub component Name is missing  for this page

const InstrumentClusterSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Instrument_Cluster: {
    label: { type: String, default: "Instrument Cluster" },
    properties: {
      Make_of_the_Instrument_Cluster: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make of the Instrument Cluster" },
      },
      Type_of_Instrument_Cluster: {
        value: { type: String, default: "" },
        label: { type: String, default: "Select the Type of Instrument Cluster" },
      },
      Range_of_Speed_Displayed_min_to_max: {
        value: { type: String, default: "" },
        label: { type: String, default: "Specify the Range of Speed Displayed min to max" },
      },
      Major_markings_in_graduation: {
        value: { type: String, default: "" },
        label: { type: String, default: "Specify the major markings in graduation" },
      },
      Minor_markings_in_graduation: {
        value: { type: String, default: "" },
        label: { type: String, default: "Specify the minor markings in graduation" },
      },
      Tolerance_of_measuring_mechanism_of_the_speedometer: {
        value: { type: String, default: "" },
        label: { type: String, default: "Tolerance of the measuring mechanism of the speedometer" },
      },
      Technical_Contant_of_the_Speedometer: {
        value: { type: String, default: "" },
        label: { type: String, default: "Technical Contant of the Speedometer" },
      },
      Method_of_speed_or_Drive_mechanism_utilized: {
        value: { type: String, default: "" },
        label: { type: String, default: "Method of speed sending / Drive mechanism utilized " },
      },
      Overall_transmission_ratio_or_wheel_revolution: {
        value: { type: String, default: "" },
        label: { type: String, default: "Overall transmission ratio of the drive mechanism or pulse / wheel revolution " },
      },
      Drawing_showing_the_Complete_Instrument_Cluster: {
        value: { type: String, default: "" },
        label: { type: String, default: "Upload the drawing showing the Complete Instrument Cluster " },
      },
    },
  },
})

const CriticalElectricalDevicesSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },
  Critical_Electrical_Devices: {
    label: { type: String, default: "Critical Electrical Devices" },
    properties: {
      List_of_all_subassemblies: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default:
            "List of all subassemblies, which includes an electronic oscillator or switching frequency greater than 9 kHz (like ECU, instrument Cluster, Body Control Module etc.)",
        },
      },
      Device_Name: {
        value: { type: String, default: "" },
        label: { type: String, default: "Device  Name" },
      },
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
      Identification_number_or_PartNo_or_DrawingNo: {
        value: { type: String, default: "" },
        label: { type: String, default: "Identification number(ID) / Part No./Drawing No." },
      },
      List_of_all_Electrical_components: {
        value: { type: String, default: "" },
        label: {
          type: String,
          default: "List of all Electrical components, which include Broadband EMI sources (like HVAC Motor, Wiper Motor and Horn etc.)",
        },
      },
      Device_Name: {
        value: { type: String, default: "" },
        label: { type: String, default: "Device Name" },
      },
      Make: {
        value: { type: String, default: "" },
        label: { type: String, default: "Make" },
      },
    },
  },
})

//-----Electric - OK end------

const form1ASchema = mongoose.Schema(
  {
    Tyres: {
      label: { type: String, default: "Tyres" },
      TyresData: [TyresSchema],
    },
    Wheel_Rim: {
      label: { type: String, default: "Wheel Rim" },
      WheelRim: [WheelRimSchema],
    },
    Horn: {
      label: { type: String, default: "Horn" },
      Horn: [HornSchema],
    },
    // Ligthing_Signaling: {
    //   label: { type: String, default: "Lighting and light-signaling devices" },
    //   LigthingSignaling: [LigthingSignalingSchema],
    // },
    Head_Lamp: {
      label: { type: String, default: "Head Lamp" },
      HeadLamp: [HeadLampSchema],
    },
    Position_Lamps: {
      label: { type: String, default: "Position Lamps" },
      PositionLamps: [PositionLampsSchema],
    },
    Rear_Registration_Plate: {
      label: { type: String, default: "Rear Registration Plate / Number Plate lamp" },
      RearRegistrationPlate: [RearRegistrationPlateSchema],
    },
    Direction_Indicator_Lamp: {
      label: { type: String, default: "Direction Indicator Lamp" },
      DirectionIndicatorLamp: [DirectionIndicatorLampSchema],
    },
    Hazard_Warning_Lamp: {
      label: { type: String, default: "Hazard Warning Lamp" },
      HazardWarningLamp: [HazardWarningLampSchema],
    },
    Retro_Reflectors: {
      label: { type: String, default: "Retro Reflectors" },
      RetroReflectors: [RetroReflectorsSchema],
    },
    Hydraulic_Brake_Hose: {
      label: { type: String, default: "Hydraulic Brake Hose" },
      HydraulicBrakeHose: [HydraulicBrakeHoseSchema],
    },
    Brake_Fluid: {
      label: { type: String, default: "Brake Fluid" },
      BrakeFluid: [BrakeFluidSchema],
    },
    Rear_View_Mirror: {
      label: { type: String, default: "Rear View Mirror" },
      RearViewMirror: [RearViewMirrorSchema],
    },
    Reversing_Lamp: {
      label: { type: String, default: "Reversing Lamp" },
      ReversingLamp: [ReversingLampSchema],
    },
    Vehicle_General_Information: {
      label: { type: String, default: "Vehicle General Information" },
      VehicleGeneralInformation: [VehicleGeneralInformationSchema],
    },
    General_arrangement_vehicle: {
      label: { type: String, default: "General arrangement of the vehicle" },
      GeneralArrangementVehicle: [GeneralArrangementVehicleSchema],
    },
    // Vehicle_Dimensions: {
    //   label: { type: String, default: "Vehicle Dimensions" },
    //   VehicleDimensions: [VehicleDimensionsSchema],
    // },
    Weights: {
      label: { type: String, default: "Weights" },
      WeightsData: [WeightsSchema],
    },
    Suspension: {
      label: { type: String, default: "Suspension" },
      SuspensionData: [SuspensionSchema],
    },
    Brakes: {
      label: { type: String, default: "Brakes" },
      BrakesData: [BrakesSchema],
    },
    SteeringSuspensionAntiTheft: {
      label: { type: String, default: "Steering + Suspension + Handle Lock / Anti Theft Device" },
      SteeringSuspensionAntiTheftData: [SteeringSuspensionAntiTheftSchema],
    },
    Vehicle_Controls_and_Their_Location: {
      label: { type: String, default: "Vehicle Controls and Their Location" },
      VehicleControlsLocation: [VehicleControlsLocationSchema],
    },
    Tell_Tales: {
      label: { type: String, default: "Tell Tales" },
      TellTales: [TellTalesSchema],
    },
    Indicators: {
      label: { type: String, default: "Indicators" },
      IndicatorsData: [IndicatorsSchema],
    },
    Vehicle_Identification_Number: {
      label: { type: String, default: "Vehicle Identification Number" },
      VehicleIdentificationNumber: [VehicleIdentificationNumberSchema],
    },
    Handle_Lock_Anti_Theft_Device: {
      label: { type: String, default: "Handle Lock / Anti Theft Device" },
      HandleLock: [HandleLockSchema],
    },
    Two_Wheeler_Aggregates: {
      label: { type: String, default: "Two Wheeler Aggregates" },
      TwoWheelerAggregatesData: [TwoWheelerAggregatesSchema],
    },
    Grab_handle: {
      label: { type: String, default: "Grab handle" },
      GrabHandle: [GrabHandleSchema],
    },
    Two_Wheeler_External_Projection: {
      label: { type: String, default: "Two Wheeler External Projection" },
      TwoWheelerExternalProjection: [TwoWheelerExternalProjectionSchema],
    },
    Drive_Train_System: {
      label: { type: String, default: "Drive Train System" },
      DriveTrainSystemData: [DriveTrainSystemSchema],
    },
    FireFightingSystem: {
      label: { type: String, default: "Fire Fighting System" },
      FireFightingSystemData: [FireFightingSystemSchema],
    },
    VehiclePerformance: {
      label: { type: String, default: "Vehicle Performance" },
      VehiclePerformanceData: [VehiclePerformanceSchema],
    },
    Dimension: {
      label: { type: String, default: "Dimension" },
      DimensionData: [DimensionSchema],
    },

    Payload: {
      label: { type: String, default: "Payload" },
      PayloadData: [PayloadSchema],
    },

    Windscreen_and_Wiping_System: {
      label: { type: String, default: "Windscreen and Wiping System" },
      WindscreenAndWipingSystem: [WindscreenWipingSystemSchema],
    },

    Seating_Arrangement: {
      label: { type: String, default: "Seating Arrangement" },
      SeatingArrangementData: [SeatingArrangementSchema],
    },
    RPoint: {
      label: { type: String, default: "R Point" },
      RPointData: [RPointSchema],
    },
    SeatingDimension: {
      label: { type: String, default: "Seating Dimension" },
      SeatingDimensionData: [SeatingDimensionSchema],
    },
    H_Point: {
      label: { type: String, default: "H Point" },
      HPointData: [HPointSchema],
    },
    Rear_Entry_Provision: {
      label: { type: String, default: "Rear Entry Provision" },
      RearEntryProvision: [RearEntryProvisionSchema],
    },
    Instrument_Cluster: {
      label: { type: String, default: "Instrument Cluster" },
      InstrumentCluster: [InstrumentClusterSchema],
    },
    Critical_Electrical_Devices: {
      label: { type: String, default: "Critical Electrical Devices" },
      CriticalElectricalDevices: [CriticalElectricalDevicesSchema],
    },
    homologationRequest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HomologationRequest",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("form1A", form1ASchema)
