import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    registrationName: "",
    isMalaysian: "",
    tinNumber: "",
    idType: "",
    idNumber: "",
    msicCode: "",
    industry: "",
    city: "",
    street: "",
    state: "",
    country: "",
    contactNumber: "",
    clientId: "",
    clientSecret: "",
    isVerified: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('value',value,name);
    
    setFormData({ ...formData, [name]: value });
  };

  const handleMsicCodeChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      msicCode: value,
      industry:
        value === "30110"
          ? "Building of ships and boats"
          : "Travel agency activities",
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData.idNumber);


 

    try {
      const response = await axios.post(
        "http://localhost:7000/api/general/save-travel-agent-data",
        { formData }
      );
      console.log("API Response:", response.data.userData);

      localStorage.setItem(
        "travelAgentData",
        JSON.stringify(response.data.userData)
      );
      console.log("User data saved to local storage.");

      alert("API call successful!");
      navigate("/my-profile");
    } catch (error) {
      console.error("Error making API call:", error);
      alert("Failed to make the API call.");
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("travelAgentData");
    if (storedData) {
      // navigate("/my-profile");
    }
  }, []);

  return (
    <div className="bg-[#008B8B] py-20">
      <h2 className="text-3xl text-white font-bold mb-6 text-center">
        Agent Registration Form
      </h2>

      <div className="min-h-screen py-8 flex items-center justify-center section-container">
        <form
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              Registration Name
            </label>
            <input
              type="text"
              name="registrationName"
              value={formData.registrationName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              Are you a Malaysian individual?
            </label>
            <select
              name="isMalaysian"
              value={formData.isMalaysian}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              TIN Number
            </label>
            <input
              type="text"
              name="tinNumber"
              value={formData.tinNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* id type selection */}

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font-semibold">
              {formData.isMalaysian === "yes"
                ? "MyKad/MyTetra Identification Number"
                : "Passport/MyPR/MyKAS Identification Number"}
            </label>
            <select
              name="idType"
              value={formData.idType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              required
            >
              {formData.isMalaysian === "yes" ? (
                <>
                  <option>Select</option>
                  <option value="mykad">MyKad</option>
                  <option value="mytetra">MyTetra</option>
                </>
              ) : (
                <>
                  <option>Select</option>
                  <option value="passport">Passport</option>
                  <option value="mypr">MyPR</option>
                  <option value="mykas">MyKAS</option>
                </>
              )}
            </select>

            <div className="mt-4">
              <label className="block text-gray-700 pb-2 font-semibold">
                {formData.idType === "mykad"
                  ? "Enter MyKad number"
                  : formData.idType === "mytetra"
                  ? "Enter MyTetra number"
                  : formData.idType === "passport"
                  ? "Enter Passport number"
                  : formData.idType === "mypr"
                  ? "Enter MyPR number"
                  : formData.idType === "mykas"
                  ? "Enter MyKAS number"
                  : "Enter ID number"}
              </label>

              <input
                type="text"
                name="idNumber"
                placeholder={
                  formData.idType === "mykad"
                    ? "Enter MyKad number"
                    : formData.idType === "mytetra"
                    ? "Enter MyTetra number"
                    : formData.idType === "passport"
                    ? "Enter Passport number"
                    : formData.idType === "mypr"
                    ? "Enter MyPR number"
                    : formData.idType === "mykas"
                    ? "Enter MyKAS number"
                    : "Enter ID number"
                }
                value={formData.idNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* id type selection ends */}

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              MSIC Code
            </label>
            <select
              name="msicCode"
              value={formData.msicCode}
              onChange={handleMsicCodeChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="30110">30110</option>
              <option value="79110">79110</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              Street
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              Client ID
            </label>
            <input
              type="text"
              name="clientId"
              value={formData.clientId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 pb-2 font semi-bold">
              Client Secret
            </label>
            <input
              type="password"
              name="clientSecret"
              value={formData.clientSecret}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#008B8B] text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
           Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
