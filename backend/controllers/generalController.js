const axios = require("axios");
var colors = require("colors");
const { validateRequest } = require("../helpers");
const fs = require("fs");
const path = require("path");


const filePath = path.join(__dirname, "userData.json");

// Function to save user data
function saveUserData(data) {
    try {
        let existingData = [];
        if (fs.existsSync(filePath)) {
            const rawData = fs.readFileSync(filePath, "utf8");
            existingData = rawData ? JSON.parse(rawData) : [];
        }
        
        existingData.push(data);

       
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf8");
        console.log("Data saved successfully.");
    } catch (error) {
        console.error("Error saving user data:", error);
    }
}


const API_HEADERS = {
  Accept: "application/json",
  "Accept-Language": "en",
  "Content-Type": "application/json",
};

const validateTIN = async (tin, idType, idValue, authorizationToken) => {
  const apiUrl = `https://preprod-api.myinvois.hasil.gov.my/api/v1.0/taxpayer/validate/${tin}`;
  try {
    const response = await axios.get(apiUrl, {
      params: { idType, idValue },
      headers: {
        ...API_HEADERS,
        Authorization: `Bearer ${authorizationToken}`,
      },
    });

    return response.status;
  } catch (error) {
    // Network or unknown error
    throw { status: 500, message: "Failed to connect to the TIN API.", error };
  }
};

exports.getTravelAgentData = async (req, res) => {
  try {
    const { authorizationtoken } = req.headers;

    if (!authorizationtoken) {
      return res.status(400).json({
        error: "Missing required headers or document data",
        message: "Ensure  authorization token",
      });
    }

    const { tin, idType, idValue } = req.query;

    // Validate request parameters
    const validationError = validateRequest(tin, idType, idValue);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    try {
      const validationResult = await validateTIN(
        tin,
        idType,
        idValue,
        authorizationtoken
      );
      console.log("TIN Validation Result:", validationResult);

      if (validationResult === 200) {
        return res.status(200).json({
          message: "You have a valid TIN!",
          data: { tin, idType, idValue, validationResult },
        });
      } else {
        return res.status(404).json({
          message: "INvalid TIN!",
          data: { tin, idType, idValue, validationResult },
        });
      }
    } catch (error) {
      console.log("error".red, error.message);
      return error.message;
    }
  } catch (err) {
    console.log("error".red, error.message);
    return error.message;
  }
};


 const loginAsIntermediary = async (tin, clientId, clientSecret) => {

  
  const onbehalfofTIN = tin;
  
  

  console.log('Client ID:', clientId, 'Client Secret:', clientSecret);




  const baseURL = 'https://preprod-api.myinvois.hasil.gov.my';  // Replace with actual URL

  try {
      
      const response = await axios.post(
          `${baseURL}/connect/token`,
          new URLSearchParams({
              client_id: clientId,
              client_secret: clientSecret,
              grant_type: 'client_credentials',
              scope: 'InvoicingAPI'
          }),
          {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'onbehalfof':  encodeURIComponent(onbehalfofTIN)
              }
          }
      );

      

      
    return response.data.access_token;



  } catch (error) {

      console.log('error'.red,error?.response?.data)
      
      res.status(400).json({ error: error.response?.data?.error || 'Authentication failed' });
  }
};



exports.saveTravelAgentData = async (req, res) => {
  try {

    const {registrationName,
      isMalaysian,
      tinNumber,
      idNumber,
      msicCode,
      industry,
      city,
      street,
      state,
      country,
      contactNumber,
      clientId,
      clientSecret}=req.body.formData;



      const accessToken= await loginAsIntermediary(tinNumber, clientId, clientSecret)

  




      const userData = {
        id: Date.now().toString(),
        registrationName:registrationName,
        isMalaysian:isMalaysian,
        tinNumber:tinNumber,
        idNumber:idNumber,
        msicCode:msicCode,
        industry:industry,
        city:city,
        street:street,
        state:state,
        country:country,
        contactNumber:contactNumber,
        clientId:clientId,
        clientSecret:clientSecret,
        accessToken:accessToken
    };





    saveUserData(userData);
    res.status(201).json({ message: "User data saved successfully.", userData });


    
  }

  catch(error) {
    console.log("error".red, error.message);
    return error.message;
  }


}

