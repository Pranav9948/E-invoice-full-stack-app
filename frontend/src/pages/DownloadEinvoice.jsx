



import React, { useEffect } from "react";
import { useState } from "react";
import QRCode from "react-qr-code";
import { PDFViewer } from "@react-pdf/renderer";
import PdfEinvoice from "../components/PdfEinvoice";
import axios from "axios";

function DownloadEinvoice() {
  const [qrIsVisible, setQrIsVisible] = useState(false);
  const [url, setUrl] = useState("");
  const [showInvoiceButton,setShowInvoiceButton] = useState(false);
  const [pdfData,setPdfData]=useState()
  const [agentData, setAgentData] = useState(null);

  const generatePdf = () => {
    console.log("generating pdf");

    const uuid = pdfData.uuid;
    const longId = pdfData.longId;

    const validationLink = `https://preprod.myinvois.hasil.gov.my/${uuid}/share/${longId}`;
    console.log('validation linkk',validationLink);
    
    setUrl(validationLink);

    setQrIsVisible(true);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("travelAgentData");
    if (storedData) {
      setAgentData(JSON.parse(storedData));
    }
  }, []);




  const [uuid, setUuid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uuid) {
      alert("Please enter a valid UUID");
      return;
    }

    try {
    
      const response = await axios.post(
        "http://localhost:7000/api/pdf/get-pdf-data",
        { UUID: uuid }, 
        {
          headers: {
            authorizationtoken: agentData.accessToken, 
          },
        }
      );
      setPdfData(response.data);

      
      alert("API call successful!");
      setShowInvoiceButton(true)
    } catch (error) {
      console.error("Error making API call:", error);
      alert("Failed to make the API call.");
    }
  };

  return (
    <>
    
    { showInvoiceButton && <div className="flex flex-col items-center justify-center h-screen">
        {!qrIsVisible && (
          <button
            onClick={generatePdf}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Pdf Invoice
          </button>
        )} 


        {qrIsVisible && (
          <PDFViewer style={{width: "100%", height: "100vh"}}>
            <PdfEinvoice pdfData={pdfData} />
          </PDFViewer>
       )}  </div> }

      { !showInvoiceButton && <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md space-y-4"
        >
          <h2 className="text-xl font-bold text-gray-700 text-center">
            Enter UUID
          </h2>
          <input
            type="text"
            value={uuid}
            onChange={(e) => setUuid(e.target.value)}
            placeholder="Enter UUID"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
           className="w-full bg-[#008B8B] text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div> }
    </>
  );
}

export default DownloadEinvoice