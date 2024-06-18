const form8Schema = require("../mongoSchemas/formsSchemas/form8Schema");
const {getSupplierByKey} = require('../controllers/supplierController')


const WheelRimData = async (supplierId, form8) => {
  const WheelRim = {
    supplier: supplierId,
    Front_Wheel_Rim: {},
    Rear_Wheel_Rim: {},
  }
  console.log(`creating data: ${JSON.stringify(WheelRim)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(form8._id, { $push: { "Wheel_Rim.WheelRim": WheelRim } }, { returnDocument: "after" })
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const HornData = async (supplierId, form8) => {
  const Horn = {
    supplier: supplierId,
    Horn: {},
  }
  console.log(`creating data: ${JSON.stringify(Horn)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(form8._id, { $push: { "Horn.Horn": Horn } }, { returnDocument: "after" })
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const TractionBatterypackData = async (supplierId, form8) => {
  const TractionBatterypack = {
    supplier: supplierId,
    Traction_Battery_Pack: {},
  }
  console.log(`creating data: ${JSON.stringify(TractionBatterypack)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Traction_Battery_Pack.TractionBatterypack": TractionBatterypack } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const HeadLampData = async (supplierId, form8) => {
  const HeadLamp = {
    supplier: supplierId,
    Main_Beam_Head_Lamp_LED_type: {},
    Main_Beam_Headlamp_Filament_Type: {},
    Dipped_Beam_Headlamp_LED_Type: {},
    Dipped_Beam_Headlamp_Filament_Type: {}
  }
  console.log(`creating data: ${JSON.stringify(HeadLamp)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(form8._id, { $push: { "Head_Lamp.HeadLamp": HeadLamp } }, { returnDocument: "after" })
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const DaytimeRunningLampData = async (supplierId, form8) => {
  const DaytimeRunningLamp = {
    supplier: supplierId,
    Daytime_Running_Lamp: {},
  }
  console.log(`creating data: ${JSON.stringify(DaytimeRunningLamp)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Daytime_Running_Lamp.DaytimeRunningLamp": DaytimeRunningLamp } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const PositionLampsData = async (supplierId, form8) => {
  const PositionLamps = {
    supplier: supplierId,
    Front_Position_Lamp_LED_Type: {},
    Front_Position_Lamp_Bulb_Type: {},
    Parking_Lamp_Bulb_Rear: {},
    Stop_Lamp_LED_Type: {},
    Stop_lamp_bulb_Filament_Type: {},
  }
  console.log(`creating data: ${JSON.stringify(PositionLamps)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Position_Lamps.PositionLamps": PositionLamps } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const RearRegistrationPlateNumberPlatelampData = async (supplierId, form8) => {
  const RearRegistrationPlateNumberPlatelamp = {
    supplier: supplierId,
    Registration_Plate_Lamp_LED_Type: {},
    Registration_Plate_Lamp_bulb_type: {},
  }
  console.log(`creating data: ${JSON.stringify(RearRegistrationPlateNumberPlatelamp)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Rear_Registration_Plate_lamp.RearRegistrationPlatelamp": RearRegistrationPlateNumberPlatelamp } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const DirectionIndicatorLampData = async (supplierId, form8) => {
  const DirectionIndicatorLamp = {
    supplier: supplierId,
    Front_Direction_Indicator_LED_Type: {},
    Front_Direction_indicator_Bulb_Type: {},
    Rear_Direction_Indicator_LED_Type: {},
    Rear_Direction_Indicator_Bulb_Type: {},
    Side_Direction_Indicator: {},
  }
  console.log(`creating data: ${JSON.stringify(DirectionIndicatorLamp)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Direction_Indicator_Lamp.DirectionIndicatorLamp": DirectionIndicatorLamp } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const RetroReflectorsData = async (supplierId, form8) => {
  const RetroReflectors = {
    supplier: supplierId,
    Front_White_Reflector: {},
    Rear_Red_Reflector: {},
    Side_Amber_Reflector: {},
  }
  console.log(`creating data: ${JSON.stringify(RetroReflectors)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Retro_Reflectors.RetroReflectors": RetroReflectors } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const HydraulicBrakeHoseData = async (supplierId, form8) => {
  const HydraulicBrakeHose = {
    supplier: supplierId,
    Hydraulic_Brake_Hose: {},
  }
  console.log(`creating data: ${JSON.stringify(HydraulicBrakeHose)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Hydraulic_Brake_Hose.HydraulicBrakeHose": HydraulicBrakeHose } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const BrakeFluidData = async (supplierId, form8) => {
  const BrakeFluid = {
    supplier: supplierId,
    Hydraulic_Brake_Fluid: {},
  }
  console.log(`creating data: ${JSON.stringify(BrakeFluid)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Brake_Fluid.BrakeFluid": BrakeFluid } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const SpraySuppressionData = async (supplierId, form8) => {
  const SpraySuppression = {
    supplier: supplierId,
    Spray_Suppression_System: {},
  }
  console.log(`creating data: ${JSON.stringify(SpraySuppression)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Spray_Suppression.SpraySuppression": SpraySuppression } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const HandleLockData = async (supplierId, form8) => {
  const HandleLock = {
    supplier: supplierId,
    Protective_Device_Handle_Lock: {},
  }
  console.log(`creating data: ${JSON.stringify(HandleLock)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Handle_Lock.HandleLock": HandleLock } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const RearViewMirrorData = async (supplierId, form8) => {
  const RearViewMirror = {
    supplier: supplierId,
    Rear_View_Mirror: {},
  }
  console.log(`creating data: ${JSON.stringify(RearViewMirror)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Rear_View_Mirror.RearViewMirror": RearViewMirror } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const WindscreenData = async (supplierId, form8) => {
  const Windscreen = {
    supplier: supplierId,
    Windscreen: {},
  }
  console.log(`creating data: ${JSON.stringify(Windscreen)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Wind_screen.Windscreen": Windscreen } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const SideglassData = async (supplierId, form8) => {
  const Sideglass = {
    supplier: supplierId,
    Side_Glass: {},
  }
  console.log(`creating data: ${JSON.stringify(Sideglass)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Side_glass.Sideglass": Sideglass } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const RearglassData = async (supplierId, form8) => {
  const Rearglass = {
    supplier: supplierId,
    Rear_Glass: {},
  }
  console.log(`creating data: ${JSON.stringify(Rearglass)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Rear_glass.Rearglass": Rearglass } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const WindscreenwipingData = async (supplierId, form8) => {
  const Windscreenwiping = {
    supplier: supplierId,
    Wiping_System: {},
  }
  console.log(`creating data: ${JSON.stringify(Windscreenwiping)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Windscreen_wiping.Windscreenwiping": Windscreenwiping } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const ReversingLampData = async (supplierId, form8) => {
  const ReversingLamp = {
    supplier: supplierId,
    Reversing_Lamp: {},
    Reverse_Lamp_Bulb_Type: {},
  }
  console.log(`creating data: ${JSON.stringify(ReversingLamp)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Reversing_Lamp.ReversingLamp": ReversingLamp } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

const GrabhandleData = async (supplierId, form8) => {
  const Grabhandle = {
    supplier: supplierId,
    Grab_handle_Straps: {},
  }
  console.log(`creating data: ${JSON.stringify(Grabhandle)} data for form8: ${form8._id}`)
  const updateform8Data = await form8Schema.findByIdAndUpdate(
    form8._id,
    { $push: { "Grab_handle.Grabhandle": Grabhandle } },
    { returnDocument: "after" }
  )
  console.log(`updateform8Data: ${updateform8Data}`)
  return updateform8Data
}

exports.getForm8ForRequestId = async (requestId) => {
  try {
    const form8Data = await form8Schema.findOne({
      homologationRequest: requestId,
    }).lean()
    .populate({path: "Wheel_Rim.WheelRim.supplier"})
    .populate({path:"Horn.Horn.supplier"} )
    .populate({path:"Traction_Battery_Pack.TractionBatterypack.supplier"} )
    .populate({path:"Head_Lamp.HeadLamp.supplier"})
    .populate({path:"Daytime_Running_Lamp.DaytimeRunningLamp.supplier"} )
    .populate({path:"Position_Lamps.PositionLamps.supplier"})
    .populate({path:"Rear_Registration_Plate_lamp.RearRegistrationPlatelamp.supplier"})
    .populate({path:"Direction_Indicator_Lamp.DirectionIndicatorLamp.supplier"} )
    .populate({path:"Retro_Reflectors.RetroReflectors.supplier"})
    .populate({path:"Hydraulic_Brake_Hose.HydraulicBrakeHose.supplier"} )
    .populate({path:"Brake_Fluid.BrakeFluid.supplier"})
    .populate({path:"Spray_Suppression.SpraySuppression.supplier"})
    .populate({path:"Handle_Lock.HandleLock.supplier"})
    .populate({path:"Rear_View_Mirror.RearViewMirror.supplier"} )
    .populate({path:"Wind_screen.Windscreen.supplier"})
    .populate({path:"Side_glass.Sideglass.supplier"})
    .populate({path:"Rear_glass.Rearglass.supplier"})
    .populate({path:"Windscreen_wiping.Windscreenwiping.supplier"})
    .populate({path:"Reversing_Lamp.ReversingLamp.supplier"})
    .populate({path:"Grab_handle.Grabhandle.supplier"})
    if (form8Data != null) {
      return form8Data
    }
    return null;
  } catch (error) {
    console.log(`Exception occured: ${error}`);
    res.status(200).json({
      status: "failure",
      body: error,
    });
  }
};

exports.createEmptyForm8ComponentDataForSupplier = async (component, supplierId, requestId) => {
  try {
    console.log(`fetching form8 data for requestId: ${requestId}`)
    const form8 = await findOrCreateForm8(requestId)
    switch (component) {
      case "Wheel Rim":
        return await WheelRimData(supplierId, form8)
      case "Horn":
        return await HornData(supplierId, form8)
      case "Traction Battery Pack":
        return await TractionBatterypackData(supplierId, form8)
      case "Head Lamp":
        return await HeadLampData(supplierId, form8)
      case "Daytime Running Lamp":
        return await DaytimeRunningLampData(supplierId, form8)
      case "Position Lamps":
        return await PositionLampsData(supplierId, form8)
      case "Rear Registration Plate / Number Plate lamp":
        return await RearRegistrationPlateNumberPlatelampData(supplierId, form8)
      case "Direction Indicator Lamp":
        return await DirectionIndicatorLampData(supplierId, form8)
      case "Retro Reflectors":
        return await RetroReflectorsData(supplierId, form8)
      case "Hydraulic Brake Hose":
        return await HydraulicBrakeHoseData(supplierId, form8)
      case "Brake Fluid":
        return await BrakeFluidData(supplierId, form8)
      case "Spray Suppression":
        return await SpraySuppressionData(supplierId, form8)
      case "Handle Lock":
        return await HandleLockData(supplierId, form8)
      case "Rear View Mirror":
        return await RearViewMirrorData(supplierId, form8)
      case "Wind screen":
        return await WindscreenData(supplierId, form8)
      case "Side glass":
        return await SideglassData(supplierId, form8)
      case "Rear glass":
        return await RearglassData(supplierId, form8)
      case "Windscreen wiping":
        return await WindscreenwipingData(supplierId, form8)
      case "Reversing Lamp":
        return await ReversingLampData(supplierId, form8)
      case "Grab handle":
        return await GrabhandleData(supplierId, form8)
      default:
        break
    }
  } catch (error) {
    console.log(`Exception occured: ${error}`)
    return error
  }
}


exports.updateForm8Data = async (requestId, data) => {
  try {
    const form8 = await form8Schema.findOne({ homologationRequest: requestId })
    if (form8 == null) {
      throw new Error(`form8 doesnt exist with id: ${requestId}`)
    }
    let updatedform8Data
    console.log(`updating ${JSON.stringify(data)} data for form8: ${form8._id}`)
    if (data.Front_Wheel_Rim) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Wheel_Rim.WheelRim.$[wheelRim].Front_Wheel_Rim": data.Front_Wheel_Rim,
          },
        },
        { arrayFilters: [{ "wheelRim._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Rear_Wheel_Rim) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Wheel_Rim.WheelRim.$[wheelRim].Rear_Wheel_Rim": data.Rear_Wheel_Rim,
          },
        },
        { arrayFilters: [{ "wheelRim._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Horn) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Horn.Horn.$[horn].Horn": data.Horn,
          },
        },
        { arrayFilters: [{ "horn._id": data._id }], returnDocument: "after" }
      )
    }

    if (data.Traction_Battery_Pack) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Traction_Battery_Pack.TractionBatterypack.$[tractionBatterypack].Traction_Battery_Pack": data.Traction_Battery_Pack,
          },
        },
        { arrayFilters: [{ "tractionBatterypack._id": data._id }], returnDocument: "after" }
      )
    }

    if (data.Main_Beam_Head_Lamp_LED_type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Head_Lamp.HeadLamp.$[headLamp].Main_Beam_Head_Lamp_LED_type": data.Main_Beam_Head_Lamp_LED_type,
          },
        },
        { arrayFilters: [{ "headLamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Main_Beam_Headlamp_Filament_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Head_Lamp.HeadLamp.$[headLamp].Main_Beam_Headlamp_Filament_Type": data.Main_Beam_Headlamp_Filament_Type,
          },
        },
        { arrayFilters: [{ "headLamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Dipped_Beam_Headlamp_LED_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Head_Lamp.HeadLamp.$[headLamp].Dipped_Beam_Headlamp_LED_Type": data.Dipped_Beam_Headlamp_LED_Type,
          },
        },
        { arrayFilters: [{ "headLamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Dipped_Beam_Headlamp_Filament_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Head_Lamp.HeadLamp.$[headLamp].Dipped_Beam_Headlamp_Filament_Type": data.Dipped_Beam_Headlamp_Filament_Type,
          },
        },
        { arrayFilters: [{ "headLamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Daytime_Running_Lamp) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Daytime_Running_Lamp.DaytimeRunningLamp.$[daytimeRunningLamp].Daytime_Running_Lamp": data.Daytime_Running_Lamp,
          },
        },
        { arrayFilters: [{ "daytimeRunningLamp._id": data._id }], returnDocument: "after" }
      )
    }

    if (data.Front_Position_Lamp_LED_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Position_Lamps.PositionLamps.$[positionLamps].Front_Position_Lamp_LED_Type": data.Front_Position_Lamp_LED_Type,
          },
        },
        { arrayFilters: [{ "positionLamps._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Front_Position_Lamp_Bulb_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Position_Lamps.PositionLamps.$[positionLamps].Front_Position_Lamp_Bulb_Type": data.Front_Position_Lamp_Bulb_Type,
          },
        },
        { arrayFilters: [{ "positionLamps._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Parking_Lamp_Bulb_Rear) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Position_Lamps.PositionLamps.$[positionLamps].Parking_Lamp_Bulb_Rear": data.Parking_Lamp_Bulb_Rear,
          },
        },
        { arrayFilters: [{ "positionLamps._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Stop_Lamp_LED_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Position_Lamps.PositionLamps.$[positionLamps].Stop_Lamp_LED_Type": data.Stop_Lamp_LED_Type,
          },
        },
        { arrayFilters: [{ "positionLamps._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Stop_lamp_bulb_Filament_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Position_Lamps.PositionLamps.$[positionLamps].Stop_lamp_bulb_Filament_Type": data.Stop_lamp_bulb_Filament_Type,
          },
        },
        { arrayFilters: [{ "positionLamps._id": data._id }], returnDocument: "after" }
      )
    }

    if (data.Registration_Plate_Lamp_LED_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Rear_Registration_Plate_lamp.RearRegistrationPlatelamp.$[rearRegistrationPlatelamp].Registration_Plate_Lamp_LED_Type":
              data.Registration_Plate_Lamp_LED_Type,
          },
        },
        { arrayFilters: [{ "rearRegistrationPlatelamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Registration_Plate_Lamp_bulb_type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Rear_Registration_Plate_lamp.RearRegistrationPlatelamp.$[rearRegistrationPlatelamp].Registration_Plate_Lamp_bulb_type":
              data.Registration_Plate_Lamp_bulb_type,
          },
        },
        { arrayFilters: [{ "rearRegistrationPlatelamp._id": data._id }], returnDocument: "after" }
      )
    }

    if (data.Front_Direction_Indicator_LED_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Direction_Indicator_Lamp.DirectionIndicatorLamp.$[directionIndicatorLamp].Front_Direction_Indicator_LED_Type":
              data.Front_Direction_Indicator_LED_Type,
          },
        },
        { arrayFilters: [{ "directionIndicatorLamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Front_Direction_indicator_Bulb_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Direction_Indicator_Lamp.DirectionIndicatorLamp.$[directionIndicatorLamp].Front_Direction_indicator_Bulb_Type":
              data.Front_Direction_indicator_Bulb_Type,
          },
        },
        { arrayFilters: [{ "directionIndicatorLamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Rear_Direction_Indicator_LED_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Direction_Indicator_Lamp.DirectionIndicatorLamp.$[directionIndicatorLamp].Rear_Direction_Indicator_LED_Type":
              data.Rear_Direction_Indicator_LED_Type,
          },
        },
        { arrayFilters: [{ "directionIndicatorLamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Rear_Direction_Indicator_Bulb_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Direction_Indicator_Lamp.DirectionIndicatorLamp.$[directionIndicatorLamp].Rear_Direction_Indicator_Bulb_Type":
              data.Rear_Direction_Indicator_Bulb_Type,
          },
        },
        { arrayFilters: [{ "directionIndicatorLamp._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Side_Direction_Indicator) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Direction_Indicator_Lamp.DirectionIndicatorLamp.$[directionIndicatorLamp].Side_Direction_Indicator": data.Side_Direction_Indicator,
          },
        },
        { arrayFilters: [{ "directionIndicatorLamp._id": data._id }], returnDocument: "after" }
      )
    }

    if (data.Front_White_Reflector) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Retro_Reflectors.RetroReflectors.$[retroReflectors].Front_White_Reflector": data.Front_White_Reflector,
          },
        },
        { arrayFilters: [{ "retroReflectors._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Rear_Red_Reflector) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Retro_Reflectors.RetroReflectors.$[retroReflectors].Rear_Red_Reflector": data.Rear_Red_Reflector,
          },
        },
        { arrayFilters: [{ "retroReflectors._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Side_Amber_Reflector) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Retro_Reflectors.RetroReflectors.$[retroReflectors].Side_Amber_Reflector": data.Side_Amber_Reflector,
          },
        },
        { arrayFilters: [{ "retroReflectors._id": data._id }], returnDocument: "after" }
      )
    }

    if (data.Hydraulic_Brake_Hose) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Hydraulic_Brake_Hose.HydraulicBrakeHose.$[hydraulicBrakeHose].Hydraulic_Brake_Hose": data.Hydraulic_Brake_Hose,
          },
        },
        { arrayFilters: [{ "hydraulicBrakeHose._id": data._id }], returnDocument: "after" }
      )
    }
    if (data.Hydraulic_Brake_Hose) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Hydraulic_Brake_Hose.HydraulicBrakeHose.$[hydraulicBrakeHose].Hydraulic_Brake_Hose": data.Hydraulic_Brake_Hose,
          },
        },
        {
          arrayFilters: [{ "hydraulicBrakeHose._id": data._id }],
          returnDocument: "after",
        }
      )
    }
    if (data.Hydraulic_Brake_Fluid) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Brake_Fluid.BrakeFluid.$[brakeFluid].Hydraulic_Brake_Fluid": data.Hydraulic_Brake_Fluid,
          },
        },
        {
          arrayFilters: [{ "brakeFluid._id": data._id }],
          returnDocument: "after",
        }
      )
    }
    if (data.Spray_Suppression_System) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Spray_Suppression.SpraySuppression.$[spraySuppression].Spray_Suppression_System": data.Spray_Suppression_System,
          },
        },
        {
          arrayFilters: [{ "spraySuppression._id": data._id }],
          returnDocument: "after",
        }
      )
    }
    if (data.Protective_Device_Handle_Lock) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Handle_Lock.HandleLock.$[handleLock].Protective_Device_Handle_Lock": data.Protective_Device_Handle_Lock,
          },
        },
        {
          arrayFilters: [{ "handleLock._id": data._id }],
          returnDocument: "after",
        }
      )
    }
    if (data.Rear_View_Mirror) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Rear_View_Mirror.RearViewMirror.$[rearViewMirror].Rear_View_Mirror": data.Rear_View_Mirror,
          },
        },
        {
          arrayFilters: [{ "rearViewMirror._id": data._id }],
          returnDocument: "after",
        }
      )
    }
    if (data.Windscreen) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Wind_screen.Windscreen.$[windscreen].Windscreen": data.Windscreen,
          },
        },
        {
          arrayFilters: [{ "windscreen._id": data._id }],
          returnDocument: "after",
        }
      )
    }
    if (data.Side_Glass) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Side_glass.Sideglass.$[sideglass].Side_Glass": data.Side_Glass,
          },
        },
        {
          arrayFilters: [{ "sideglass._id": data._id }],
          returnDocument: "after",
        }
      )
    }

    if (data.Rear_Glass) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Rear_glass.Rearglass.$[rearglass].Rear_Glass": data.Rear_Glass,
          },
        },
        {
          arrayFilters: [{ "rearglass._id": data._id }],
          returnDocument: "after",
        }
      )
    }

    if (data.Wiping_System) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Windscreen_wiping.Windscreenwiping.$[windscreenwiping].Wiping_System": data.Wiping_System,
          },
        },
        {
          arrayFilters: [{ "windscreenwiping._id": data._id }],
          returnDocument: "after",
        }
      )
    }

    if (data.Reversing_Lamp) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Reversing_Lamp.ReversingLamp.$[reversingLamp].Reversing_Lamp": data.Reversing_Lamp,
          },
        },
        {
          arrayFilters: [{ "reversingLamp._id": data._id }],
          returnDocument: "after",
        }
      )
    }

    if (data.Reverse_Lamp_Bulb_Type) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Reversing_Lamp.ReversingLamp.$[reversingLamp].Reverse_Lamp_Bulb_Type": data.Reverse_Lamp_Bulb_Type,
          },
        },
        {
          arrayFilters: [{ "reversingLamp._id": data._id }],
          returnDocument: "after",
        }
      )
    }

    if (data.Grab_handle_Straps) {
      updatedform8Data = await form8Schema.findByIdAndUpdate(
        form8._id,
        {
          $set: {
            "Grab_handle.Grabhandle.$[grabhandle].Grab_handle_Straps": data.Grab_handle_Straps,
          },
        },
        {
          arrayFilters: [{ "grabhandle._id": data._id }],
          returnDocument: "after",
        }
      )
    }
    return updatedform8Data
  } catch (error) {
    console.log(`Exception occured: ${error}`)
    return error
  }
}

const findOrCreateForm8 = async (requestId) => {
  console.log(`inside findOrCreateForm8`)
  let form8 = await form8Schema.findOne({ homologationRequest: requestId })
    if (form8 == null) {
      console.log(`creatng new form8 collection for requestId: ${requestId}`)
      form8 = await form8Schema.create({
        homologationRequest: requestId,
      })
      const defaultSupplier = await getSupplierByKey();
      if(defaultSupplier){
        console.log(`adding defaultSupplier for GrabhandleData of key: ${defaultSupplier.supplierKey} and id: ${defaultSupplier._id}`)
        await GrabhandleData(defaultSupplier._id, form8)
      } else{
        console.log(`inside findOrCreateForm8 :defaultSupplier is not found`)
      }
    }
    return form8
}

exports.findOrCreateForm8 = findOrCreateForm8