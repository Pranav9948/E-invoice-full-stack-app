import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [agentData, setAgentData] = useState(null);
  const [isValidTaxpayer, setIsValidTaxpayer] = useState(false);
  const [isVerifiedTaxpayer, setIsVerifiedTaxpayer] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("travelAgentData");
    if (storedData) {
      setAgentData(JSON.parse(storedData));
    }
  }, [isVerifiedTaxpayer]);

  const config = {
    headers: {
      authorizationtoken: agentData?.accessToken,
    },
  };

  const storedData = localStorage.getItem("travelAgentData");
  if (storedData) {
    const agentData = JSON.parse(storedData);

    console.log("Agent Data:", agentData);
  }

  const handleTaxpayerValidation = async () => {
    const { tinNumber, idNumber, idType } = agentData;

    try {
      const response = await axios.post(
        "http://localhost:7000/api/general/verificationTIN",

        {
          tinNumber,
          idType,
          idNumber,
        },
        config
      );
      console.log("API Response:", response.data);
      setIsVerifiedTaxpayer(true);

      alert("API call successful!");

      agentData.isVerified = true;

      localStorage.setItem("travelAgentData", JSON.stringify(agentData));
    } catch (error) {
      console.error("Error making API call:", error);
      alert("Failed to make the API call.");
    }
  };

  return (
    <div className="bg-[#008B8B] py-20 min-h-screen">
      <div className="section-container">
        {/* card starts */}

        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-96">
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 h-24"></div>
            <div className="flex justify-center -mt-12">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white overflow-hidden">
                <img
                  src="https://marketplace.canva.com/EAFvvrEdW20/1/0/1600w/canva-blue-and-yellow-illustrative-travel-agency-logo-TWAjs1N3SXo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-center text-2xl font-bold text-gray-800">
                {agentData?.registrationName}
              </h2>
              <p className="text-center text-gray-600 mt-1">
                {agentData?.industry}
              </p>
              <div className="mt-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-semibold w-32">TIN Number:</span>
                  <span>{agentData?.tinNumber}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-semibold w-32">ID Number:</span>
                  <span>{agentData?.idNumber}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-semibold w-32">City:</span>
                  <span>{agentData?.city}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-semibold w-32">Street:</span>
                  <span>{agentData?.street}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-semibold w-32">State:</span>
                  <span>{agentData?.state}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-semibold w-32">Country:</span>
                  <span>{agentData?.country}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-semibold w-32">Contact:</span>
                  <span>{agentData?.contactNumber}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-100 border-t">
              {agentData?.isVerified ? (
                <Link to={"/submit-einvoice"}>
                  <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition">
                    Submit-Einvoice
                  </button>
                </Link>
              ) : (
                <div className="flex flex-col items-center gap-1 w-full">
                  <button
                    onClick={handleTaxpayerValidation}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-2"
                  >
                    Verify TIN
                  </button>

                <div className="w-full">
                 <Link to={"/"}>
                  <button
                   
                    className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-600 transition mb-2"
                  >
                    Back to Register
                  </button>
                  </Link>
                  </div>
                </div>


              )}
            </div>
          </div>
        </div>

        {/* card ends */}
      </div>
    </div>
  );
};

export default MyProfile;
