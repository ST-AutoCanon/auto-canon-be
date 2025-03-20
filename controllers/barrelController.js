
// const Barrel = require("../mongoSchemas/barrel"); // Import Barrel model

// // Function to generate final output
// const generateFinalOutput = (
//   barrel1,
//   barrelA1,
//   barrel2,
//   barrel3,
//   barrel4,
//   serialNumber
// ) => {
//   return barrel1 + barrelA1 + barrel2 + barrel3 + barrel4 + serialNumber;
// };

// // Handle barrel data submission
// const submitBarrelData = async (req, res) => {

//     // Extract the user information from the authenticated request
//     const username = req.user?.username || "unknown_user"; // Default to "unknown_user" if not provided

//   // Destructure the incoming data from the request body with lowercase keys
//   const { barrel1, barrel1A, barrel2, barrel3, barrel4, serialNumber } = req.body;

//   // Validate input values
//   if (
//     barrel1.length !== 2 ||
//     barrel1A.length !== 2 ||
//     barrel2.length !== 2 ||
//     barrel3.length !== 2 ||
//     barrel4.length !== 1 ||
//     serialNumber.length !== 3
//   ) {
//     return res.status(400).json({
//       message:
//         "Error: One or more barrels do not meet the required digit constraints.",
//     });
//   }

//   const finalOutput = generateFinalOutput(
//     barrel1,
//     barrel1A,
//     barrel2,
//     barrel3,
//     barrel4,
//     serialNumber
   
//   );

//   // Check if the finalOutput already exists in the database
//   const existingBarrel = await Barrel.findOne({ finalOutput });

//   if (existingBarrel) {
//     return res.status(400).json({
//       message: "Error: PART/ASSY Number  is already taken.",
//     });
//   }

//   // Create a new barrel document
//   const newBarrel = new Barrel({
//     barrel1,
//     barrel1A,
//     barrel2,
//     barrel3,
//     barrel4,
//     serialNumber,
//     finalOutput,
//     submittedBy: username, // Store the username of the submitter
//     submittedAt: new Date(), // Timestamp of submission
//   });

//   // Save the new barrel data to the MongoDB database
//   try {
//     await newBarrel.save();
//     res.status(200).json({
//       message: "Data saved successfully!",
//       finalOutput, // Include the 12-digit number in the response
//       submittedBy: username, // Include the submitter's username in the response
    
//     });
//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(500).json({ message: "Error: Unable to save data." });
//   }
// };

// module.exports = { submitBarrelData };

///////////////////////////////////////////////////////////////////////////
// const Barrel = require("../mongoSchemas/barrel"); // Import Barrel model

// // Function to generate the final output
// const generateFinalOutput = (barrel1, barrel1A, barrel2, barrel3, barrel4, serialNumber,) => {
//   return barrel1 + barrel1A + barrel2 + barrel3 + barrel4 + serialNumber;
// };

// // Handle barrel data submission
// const submitBarrelData = async (req, res) => {
//   const username = req.user?.username || "unknown_user"; // Get the username from the request, default to "unknown_user" if not available

//   const { barrel1, barrel1A, barrel2, barrel3, barrel4 ,description } = req.body; // Extract barrel inputs from the request body

//   // Validate input values
//   if (
//     barrel1.length !== 2 ||
//     barrel1A.length !== 2 ||
//     barrel2.length !== 2 ||
//     barrel3.length !== 2 ||
//     barrel4.length !== 1
//   ) {
//     return res.status(400).json({
//       message: "Error: One or more barrels do not meet the required digit constraints.",
//     });
//   }

//   try {
//     let nextSerialNumber;
//     let finalOutput;

//     // Construct the base 12-digit number (excluding the serial number for now)
//     const basePartNumber = barrel1 + barrel1A + barrel2 + barrel3 + barrel4;

//     // Check for any existing numbers that match the base part number in the database
//     const existingBarrel = await Barrel.findOne({ finalOutput: new RegExp(`^${basePartNumber}\\d{3}$`) })
//       .sort({ finalOutput: -1 }) // Sort to get the latest serial number
//       .exec();

//     if (existingBarrel) {
//       // If the base part number exists, get the last serial number
//       const lastSerialNumber = existingBarrel.finalOutput.slice(-3); // Get the last 3 digits (serial number)
//       const incrementedSerial = parseInt(lastSerialNumber, 10) + 1; // Increment the serial number

//       if (incrementedSerial > 999) {
//         // If serial number exceeds 999, wrap around to 000
//         nextSerialNumber = "000";
//       } else {
//         nextSerialNumber = incrementedSerial.toString().padStart(3, "0"); // Pad with leading zeros
//       }

//       finalOutput = basePartNumber + nextSerialNumber; // Generate the new 12-digit final output
//     } else {
//       // If the base part number does not exist, start with serial number "000"
//       nextSerialNumber = "000";
//       finalOutput = basePartNumber + nextSerialNumber;
//     }

//     // Check if the finalOutput is already present in the database (extra safety check for duplicates)
//     const duplicateCheck = await Barrel.findOne({ finalOutput });
//     if (duplicateCheck) {
//       return res.status(400).json({
//         message: "Error: Unable to generate a unique serial number. Please try again.",
//       });
//     }

//     // Create a new barrel document with the generated serial number and final output
//     const newBarrel = new Barrel({
//       barrel1,
//       barrel1A,
//       barrel2,
//       barrel3,
//       barrel4,
//       serialNumber: nextSerialNumber,
//       finalOutput,
//       submittedBy: username,
//       submittedAt: new Date(),
//       description,
//     });

//     // Save the new barrel data to the database
//     await newBarrel.save();

//     // Send success response with final output and the user who submitted the data
//     res.status(200).json({
//       message: "Data saved successfully!",
//       finalOutput,
//       submittedBy: username,
//     });
//     console.log("newBarrel:",newBarrel);
//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(500).json({ message: "Error: Unable to save data." });
//   }
// };

// module.exports = { submitBarrelData };
////////////////////////////////////////////////
//i am commenting below on jan 8 

// // controllers/barrelController.js
// const { submitBarrelData1 } = require('../services/barrelService'); // Import the service function

// // Handle barrel data submission
// const submitBarrelData = async (req, res) => {
//   console.log('Received user:', req.user);  // Check user from the token
//   console.log('Received data:', req.body);  // Check the submitted data
//   const requestId = req.params.requestId;
//   console.log('Request Barrel ID:', requestId);

//   const username = req.user?.username || "unknown_user"; // Get the username from the request, default to "unknown_user" if not available
//   console.log('usrname:',username);
//   const { barrel1, barrel1A, barrel2, barrel3, barrel4, description } = req.body; // Extract barrel inputs from the request body

//   // Validate input values
//   if (
//     barrel1.length !== 2 ||
//     barrel1A.length !== 2 ||
//     barrel2.length !== 2 ||
//     barrel3.length !== 2 ||
//     barrel4.length !== 1
//   ) {
//     return res.status(400).json({
//       message: "Error: One or more barrels do not meet the required digit constraints.",
//     });
//   }

//   try {
//     const { finalOutput, submittedBy } = await submitBarrelData1(username, barrel1, barrel1A, barrel2, barrel3, barrel4, description);

//     // Send success response with final output and the user who submitted the data
//     res.status(200).json({
//       message: "Data saved successfully!",
//       finalOutput,
//       submittedBy,
//     });
//     console.log("New barrel created:", finalOutput);
//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(500).json({ message: "Error: Unable to save data." });
//   }
// };

// // Export the controller function
// module.exports = { submitBarrelData }; 


// controllers/barrelController.js












////111111
// const { submitBarrelData1 } = require('../services/barrelService'); // Import the service function

// // Handle barrel data submission
// const submitBarrelData = async (req, res) => {
//   console.log('Received user:', req.user);  // Check user from the token
//   console.log('Received data:', req.body);  // Check the submitted data


//   const _id = req.user?._id;
//   const username = req.user?.username || "unknown_user"; // Get the username from the request, default to "unknown_user"
//   console.log('username:', username);
//   console.log('_id:', _id);
  
//   const { barrel1, barrel1A, barrel2, barrel3, barrel4, description } = req.body; // Extract barrel inputs from the request body

//   // Validate input values
//   if (
//     barrel1.length !== 2 ||
//     barrel1A.length !== 2 ||
//     barrel2.length !== 2 ||
//     barrel3.length !== 2 ||
//     barrel4.length !== 1
//   ) {
//     return res.status(400).json({
//       message: "Error: One or more barrels do not meet the required digit constraints.",
//     });
//   }

//   try {
//     const { finalOutput, submittedBy } = await submitBarrelData1(
//       username,
//       _id, // Pass the requestId to the service
//       barrel1,
//       barrel1A,
//       barrel2,
//       barrel3,
//       barrel4,
//       description
//     );

//     // Send success response with final output and the user who submitted the data
//     res.status(200).json({
//       message: "Data saved successfully!",
//       finalOutput,
//       submittedBy,
//     });
//     console.log("New barrel created:", finalOutput);
    
//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(500).json({ message: "Error: Unable to save data." });
//   }
// };

// module.exports = { submitBarrelData };
///////111111

const Barrel = require("../mongoSchemas/barrel"); // Import the Barrel model
const { submitBarrelData1,getAllBarrelsForUser ,getBarrelByFinalOutputt,deleteBarrelByFinalOutputt,deleteAllBarrelsService} = require('../services/barrelService'); // Import the service function

// Handle barrel data submission



//   const getBarrelsForUser = async (req, res) => {
//     // const { username } = req.user.username; // Assuming `userId` is available in the `req.user` object
//   console.log('user:',req.user);
//   console.log('User Data:',req.body);
//   const username = req.user.username || 'checkcount3@yopmail.com'; // Get username directly
//   const usreName=username;
//   // const username = 'checkcount4@yopmail.com';
// console.log("username:",username);
//     try {
//       // Call the service to fetch all barrels for the user
//       // const barrels = await getAllBarrelsForUser(userId);
//       const barrels = await getAllBarrelsForUser(usreName);
//   console.log('barrels::',barrels)
//       if (!barrels || barrels.length === 0) {
//         return res.status(404).json({ message: "No barrel data found for this user." });
//       }
  
//       res.status(200).json({ barrels }); // Return the list of barrels
//     } catch (error) {
//       console.error("Error fetching barrel data:", error);
//       res.status(500).json({ message: "Unable to fetch barrel data.", error: error.message });
//     }
//   };
  
const getBarrelsForUser = async (req, res) => {
  // console.log('user:',req.user._id);
    // console.log('User Data:',req.body);
    // const username = req.user.username || 'checkcount3@yopmail.com'; // Get username directly
    
    
  const finalOutputPrefix  = req.user._id; // Extract the prefix from request parameters

  // console.log("Fetching barrels with finalOutput prefix:", finalOutputPrefix);

  try {
    const barrels = await getAllBarrelsForUser(finalOutputPrefix);

    if (!barrels || barrels.length === 0) {
      return res.status(404).json({ message: "No barrel data found for this prefix." });
    }

    res.status(200).json({ barrels });
  } catch (error) {
    console.error("Error fetching barrel data:", error);
    res.status(500).json({ message: "Unable to fetch barrel data.", error: error.message });
  }
};

  const getBarrelByFinalOutput = async (req, res) => {
    const { finalOutput } = req.params; // Access finalOutput from request parameters
    
    try {
      // Call the service to fetch the barrel by finalOutput
      const barrel = await getBarrelByFinalOutputt(finalOutput); // Assuming the function getBarrelByFinalOutput is defined in your service
      
      if (!barrel) {
        return res.status(404).json({ message: "No barrel data found for this finalOutput." });
      }
  
      res.status(200).json(barrel); // Return the barrel data
    } catch (error) {
      console.error("Error fetching barrel data by finalOutput:", error);
      res.status(500).json({ message: "Unable to fetch barrel data.", error: error.message });
    }
  };
  const deleteBarrelByFinalOutput = async (req, res) => {
    const { finalOutput } = req.params; // finalOutput is passed in the route 
    if (!finalOutput) {
      return res.status(400).json({ message: 'Final output parameter is missing.' });
    }
  
    try {
      // Call the service to delete the barrel by finalOutput
      const result = await deleteBarrelByFinalOutputt(finalOutput);
      
      res.status(200).json({
        message: 'Barrel data deleted successfully.',
        deletedCount: result.deletedCount
      });
      console.log('Finaloutput Deleted successfully');
    } catch (error) {
      console.error(`Error deleting barrel with finalOutput "${finalOutput}":`, error.message);
      res.status(500).json({ message: `Failed to delete barrel: ${error.message}` });
    }
  };
  const deleteAllBarrels = async (req, res) => {
    try {
      // Call the service to delete all barrels
      const result = await deleteAllBarrelsService();  // Use the correct service function
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'No barrels found to delete.' });
      }
  
      res.status(200).json({
        message: 'All barrel data deleted successfully.',
        deletedCount: result.deletedCount
      });
      console.log('All barrels deleted successfully');
    } catch (error) {
      console.error('Error deleting all barrels:', error.message);
      res.status(500).json({ message: `Failed to delete barrels: ${error.message}` });
    }
  };
  
  
  ////
  const submitBarrelData = async (req, res) => {
    console.log('Received user:', req.user); // Check user from the token
    console.log('Received data:', req.body); // Check the submitted data
    console.log('req.user._id:', req.user._id); // Log the user ID
  
    const username = req.user?.username || "unknown_user"; // Get the username from the request, default to "unknown_user" if not available
    console.log('Username:', username);
  
    // Destructure the required fields from the request body
    const { 
      barrel1, barrel1A, barrel2, barrel3, barrel4, 
      description, partNumbers, descriptions,       
      angleA, angleB, length, distA, distB, 
      designer, date, applicable 
    } = req.body;
  
    // Validate input values
    if (
      barrel1.length !== 2 ||
      barrel1A.length !== 2 ||
      barrel2.length !== 2 ||
      barrel3.length !== 2 ||
      barrel4.length !== 1
    ) {
      return res.status(400).json({
        message: "Error: One or more barrels do not meet the required digit constraints.",
      });
    }
  
    try {
      // Construct the base part number (excluding the serial number for now)
      const basePartNumber = `${barrel1}${barrel1A}${barrel2}${barrel3}${barrel4}`;
      console.log('Base Part Number:', basePartNumber);
  
      // Generate the base output with a serial number starting from 000
      let serialSuffix = "000"; // Start with the first serial number "000"
      let finalOutput = `${req.user._id}-${basePartNumber}${serialSuffix}`;
      
      // Check if the finalOutput with serial number already exists in the database
      let duplicateCheck = await Barrel.findOne({ finalOutput });
  
      if (duplicateCheck) {
        let counter = 1;
        // Loop through the serial numbers until we find an available one
        while (duplicateCheck) {
          serialSuffix = counter.toString().padStart(3, '0'); // Ensure 3 digits (e.g., 001, 002)
          finalOutput = `${req.user._id}-${basePartNumber}${serialSuffix}`;
          duplicateCheck = await Barrel.findOne({ finalOutput });
          counter++;
  
          // If counter exceeds 999, break the loop to prevent infinite checks
          if (counter > 999) {
            throw new Error("Unable to generate a unique serial number. Please try again later.");
          }
        }
      }
  
      // Create the barrel entry with the final generated output and additional data
      const newBarrel = new Barrel({
        barrel1,
        barrel1A,
        barrel2,
        barrel3,
        barrel4,
        serialNumber: serialSuffix,
        finalOutput,
        submittedBy: username,
        submittedAt: new Date(),
        description,
        partNumbers,    // Store part numbers as an array
        descriptions,   // Store descriptions as an array  
        angleA,         // Store angle A
        angleB,         // Store angle B
        length,         // Store length
        distA,          // Store Dist A
        distB,          // Store Dist B
        designer,       // Store designer
        date,           // Store date
        applicable      // Store applicable (string)
      });
  
      // Save the new barrel data to the database
      const savedBarrel = await newBarrel.save();
  
      // Return only the final output (with 3-digit serial number) for display purposes
      const finalOutputForDisplay = savedBarrel.finalOutput.slice(-12); // Extract the final part of the serial output
  
      console.log('Final Output for Display:', finalOutputForDisplay);
  
      // Send success response with final output and submitted by details
      res.status(200).json({
        message: "Data saved successfully!",
        finalOutput: finalOutputForDisplay, // Send only the final serial number part
        submittedBy: username,
      });
  
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Error: Unable to save data." });
    }
  };
  
  
  
  
  module.exports = {  getBarrelsForUser,getBarrelByFinalOutput,submitBarrelData ,deleteBarrelByFinalOutput,deleteAllBarrels};
