const Barrel = require("../mongoSchemas/barrel"); // Import Barrel model

// Function to generate final output
const generateFinalOutput = (
  barrel1,
  barrelA1,
  barrel2,
  barrel3,
  barrel4,
  serialNumber
) => {
  return barrel1 + barrelA1 + barrel2 + barrel3 + barrel4 + serialNumber;
};

// Handle barrel data submission
const submitBarrelData = async (req, res) => {
  // Destructure the incoming data from the request body with lowercase keys
  const { barrel1, barrel1A, barrel2, barrel3, barrel4, serialNumber } = req.body;

  // Validate input values
  if (
    barrel1.length !== 2 ||
    barrel1A.length !== 2 ||
    barrel2.length !== 2 ||
    barrel3.length !== 2 ||
    barrel4.length !== 1 ||
    serialNumber.length !== 3
  ) {
    return res.status(400).json({
      message:
        "Error: One or more barrels do not meet the required digit constraints.",
    });
  }

  const finalOutput = generateFinalOutput(
    barrel1,
    barrel1A,
    barrel2,
    barrel3,
    barrel4,
    serialNumber
  );

  // Check if the finalOutput already exists in the database
  const existingBarrel = await Barrel.findOne({ finalOutput });

  if (existingBarrel) {
    return res.status(400).json({
      message: "Error: PART/ASSY Number is already taken.",
    });
  }

  // Create a new barrel document
  const newBarrel = new Barrel({
    barrel1,
    barrel1A,
    barrel2,
    barrel3,
    barrel4,
    serialNumber,
    finalOutput,
  });

  // Save the new barrel data to the MongoDB database
  try {
    await newBarrel.save();
    res.status(200).json({
      message: "Data saved successfully!",
      finalOutput, // Include the 12-digit number in the response
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Error: Unable to save data." });
  }
};

module.exports = { submitBarrelData };