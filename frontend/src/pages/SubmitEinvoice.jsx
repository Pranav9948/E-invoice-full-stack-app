import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitEinvoice = () => {
  const agentBooking = {
    id: 2,
    uuid: "8690084e-56e9-4364-8047-8fde98ba0394",
    ref_no: "DTM00002",
    guest_name: "Jos Butler",
    check_in: "2024-12-17T00:00:00.000Z",
    check_out: "2024-12-18T00:00:00.000Z",
    preferred_location: "India",
    foreign_guest: false,
    adult_resident: "2",
    adult_non_resident: "0",
    child_resident: "0",
    child_non_resident: "0",
    infant_resident: "0",
    infant_non_resident: "0",
    toddler_resident: "0",
    toddler_non_resident: "0",
    rooms_count: "2",
    email: "josbuttler@gmail.com",
    package_id: 1,
    package_type: "vendor",
    vendor_id: 2,
    package_option_id: 1,
    package_price_type: "per_room",
    budget: 5000,
    total_amount: 8050,
    tax_with_total_amount: 8855,
    activity_amount: 3000,
    discount: null,
    additional_charges: 400,
    package_amount: 3000,
    activity: ["Adventure Travel"],
    primary_contact: "917736228299",
    sec_contact: null,
    communication_type: "whatsapp",
    whatsapp_no: "917736228299",
    weChat_no: null,
    require_transfer: false,
    is_company_booking: false,
    company_name: "Josettan Sons",
    special_notes: "Live happy ",
    assigned_to: 1,
    created_by_id: 1,
    agent_id: 1,
    paid_amount: null,
    tax_amount: 805,
    booking_status: "active",
    booking_process: "estimate",
    invoice_address: "RR-1234",
    payment_status: "pending",
    discount_method: null,
    discount_type: null,
    discount_value: 0,
    total_discount: 0,
    deposit_amount: 0,
    cut_off_date: "2024-12-17T00:00:00.000Z",
    expiry: false,
    canceled_on: null,
    canceled_by: null,
    canceled_notes: null,
    canceled_done_by: null,
    createdAt: "2024-11-28T13:33:02.624Z",
    updatedAt: "2024-11-28T13:42:27.953Z",
    Agent: {
      name: null,
      id: 1,
      GeneralSettings: {
        logo: "https://s3.ap-east-1.amazonaws.com/summerbayresort-test/Agent_Documents/j64wnbusinesslogo.jpg",
        id: 1,
      },
    },
    Vendor: {
      vendor_name: "Whispering woods",
      id: 2,
    },
    PackageOpt: {
      name: "1 Nights",
      package_price_type: "per_room",
      id: 1,
    },
    BookingPax: [
      {
        id: 3,
        uuid: "436fb135-ce59-4b3a-a5ba-b93c217fb759",
        package_id: 1,
        package_option_id: 1,
        room_type_id: 1,
        bed_type_id: 1,
        stay_id: 4,
        check_in: "2024-12-17T00:00:00.000Z",
        check_out: "2024-12-18T00:00:00.000Z",
        total_amount: 1600,
        package_amount: 1500,
        additional_nights: 0,
        additional_night_amount: 0,
        additional_charges_amount: 100,
        discount: null,
        transport_amount: null,
        pax_type: "adult",
        name: "Adult 1",
        date_of_birth: "1960-11-28T00:00:00.000Z",
        gender: null,
        is_disabled: false,
        email: null,
        mobile_no: null,
        country: null,
        city: null,
        non_resident: false,
        passport: null,
        local_id: null,
        booking_id: 2,
        createdAt: "2024-11-28T13:34:17.858Z",
        updatedAt: "2024-11-28T13:42:27.929Z",
        deletedAt: null,
        Country: null,
        City: null,
        BookingPaxPackage: {
          name: "Whispering Woods Adventure",
        },
        PackageOption: {
          name: "1 Nights",
        },
        BkgPaxAddCharge: [
          {
            amount: 100,
            VendorCharge: {
              name: "Laundry",
            },
          },
          {
            amount: 100,
            VendorCharge: {
              name: "Laundry",
            },
          },
        ],
      },
      {
        id: 4,
        uuid: "a7db8df1-b506-4452-825a-d35cef296544",
        package_id: 1,
        package_option_id: 1,
        room_type_id: 1,
        bed_type_id: 1,
        stay_id: 6,
        check_in: "2024-12-17T00:00:00.000Z",
        check_out: "2024-12-18T00:00:00.000Z",
        total_amount: 1600,
        package_amount: 1500,
        additional_nights: 0,
        additional_night_amount: 0,
        additional_charges_amount: 100,
        discount: null,
        transport_amount: null,
        pax_type: "adult",
        name: "Adult 2",
        date_of_birth: "1960-11-28T00:00:00.000Z",
        gender: null,
        is_disabled: false,
        email: null,
        mobile_no: null,
        country: null,
        city: null,
        non_resident: false,
        passport: null,
        local_id: null,
        booking_id: 2,
        createdAt: "2024-11-28T13:34:17.858Z",
        updatedAt: "2024-11-28T13:42:27.929Z",
        deletedAt: null,
        Country: null,
        City: null,
        BookingPaxPackage: {
          name: "Whispering Woods Adventure",
        },
        PackageOption: {
          name: "1 Nights",
        },
        BkgPaxAddCharge: [
          {
            amount: 100,
            VendorCharge: {
              name: "Laundry",
            },
          },
          {
            amount: 100,
            VendorCharge: {
              name: "Laundry",
            },
          },
        ],
      },
    ],
    BookingPack: [
      {
        id: 2,
        AgentPkg: {
          name: "Whispering Woods Adventure",
          id: 1,
        },
        AgentPkgOpt: {
          name: "1 Nights",
          id: 1,
        },
      },
    ],
  };

  const packageRooms = [
    {
      id: 4,
      uuid: "700d8bce-71a8-43c7-8fba-5ff0923201ec",
      vendor_id: 2,
      room_type_id: 1,
      bed_type_id: 1,
      room_count: "1",
      adult_count: "1",
      child_count: "0",
      infant_count: "0",
      toddler_count: "0",
      total_amount: "1600",
      additional_charges_amount: "0",
      discount: 0,
      booking_id: 2,
      createdAt: "2024-11-28T13:34:32.885Z",
      updatedAt: "2024-11-28T13:42:27.929Z",
      deletedAt: null,
      RoomTypes: {
        id: 1,
        room_name: "Forest View Deluxe Room",
        max_pax: "2",
        vendor_id: 2,
      },
      BedCounts: {
        id: 1,
        bed_type_id: 1,
        BedTypes: {
          id: 1,
          bed_name: "Single Bed",
        },
      },
      BookingStayPax: [
        {
          id: 3,
          uuid: "436fb135-ce59-4b3a-a5ba-b93c217fb759",
          package_id: 1,
          package_option_id: 1,
          room_type_id: 1,
          bed_type_id: 1,
          stay_id: 4,
          check_in: "2024-12-17T00:00:00.000Z",
          check_out: "2024-12-18T00:00:00.000Z",
          total_amount: 1600,
          package_amount: 1500,
          additional_nights: 0,
          additional_night_amount: 0,
          additional_charges_amount: 100,
          discount: null,
          transport_amount: null,
          pax_type: "adult",
          name: "Adult 1",
          date_of_birth: "1960-11-28T00:00:00.000Z",
          gender: null,
          is_disabled: false,
          email: null,
          mobile_no: null,
          country: null,
          city: null,
          non_resident: false,
          passport: null,
          local_id: null,
          booking_id: 2,
          createdAt: "2024-11-28T13:34:17.858Z",
          updatedAt: "2024-11-28T13:42:27.929Z",
          deletedAt: null,
          BookingPaxPackage: {
            name: "Whispering Woods Adventure",
          },
          BkgPaxAddCharge: [
            {
              amount: 100,
              VendorCharge: {
                name: "Laundry",
              },
            },
            {
              amount: 100,
              VendorCharge: {
                name: "Laundry",
              },
            },
          ],
          Country: null,
          City: null,
        },
      ],
    },
    {
      id: 6,
      uuid: "c453ef09-3780-4bad-a95b-864dd8ae70c3",
      vendor_id: 2,
      room_type_id: 1,
      bed_type_id: 1,
      room_count: "2",
      adult_count: "1",
      child_count: "0",
      infant_count: "0",
      toddler_count: "0",
      total_amount: "1600",
      additional_charges_amount: "0",
      discount: 0,
      booking_id: 2,
      createdAt: "2024-11-28T13:42:23.365Z",
      updatedAt: "2024-11-28T13:42:27.930Z",
      deletedAt: null,
      RoomTypes: {
        id: 1,
        room_name: "Forest View Deluxe Room",
        max_pax: "2",
        vendor_id: 2,
      },
      BedCounts: {
        id: 1,
        bed_type_id: 1,
        BedTypes: {
          id: 1,
          bed_name: "Single Bed",
        },
      },
      BookingStayPax: [
        {
          id: 4,
          uuid: "a7db8df1-b506-4452-825a-d35cef296544",
          package_id: 1,
          package_option_id: 1,
          room_type_id: 1,
          bed_type_id: 1,
          stay_id: 6,
          check_in: "2024-12-17T00:00:00.000Z",
          check_out: "2024-12-18T00:00:00.000Z",
          total_amount: 1600,
          package_amount: 1500,
          additional_nights: 0,
          additional_night_amount: 0,
          additional_charges_amount: 100,
          discount: null,
          transport_amount: null,
          pax_type: "adult",
          name: "Adult 2",
          date_of_birth: "1960-11-28T00:00:00.000Z",
          gender: null,
          is_disabled: false,
          email: null,
          mobile_no: null,
          country: null,
          city: null,
          non_resident: false,
          passport: null,
          local_id: null,
          booking_id: 2,
          createdAt: "2024-11-28T13:34:17.858Z",
          updatedAt: "2024-11-28T13:42:27.929Z",
          deletedAt: null,
          BookingPaxPackage: {
            name: "Whispering Woods Adventure",
          },
          BkgPaxAddCharge: [
            {
              amount: 100,
              VendorCharge: {
                name: "Laundry",
              },
            },
            {
              amount: 100,
              VendorCharge: {
                name: "Laundry",
              },
            },
          ],
          Country: null,
          City: null,
        },
      ],
    },
  ];

  const bookingTransportation = [
    {
      id: 3,
      uuid: "94f256f1-608c-4a38-a6a6-af34c06a5c08",
      transport_type: "boat",
      from_location: "Port Blair Airport",
      from_to: "Port Blair",
      pickup_date: "2024-11-17T00:00:00.000Z",
      pickup_time: "23:09",
      self_vendor: null,
      vendor_id: null,
      vendor_name: null,
      non_resident_price_change: true,
      adult_resident_count: "1",
      adult_resident_price: 250,
      child_resident_count: "0",
      child_resident_price: 0,
      infant_resident_count: "0",
      infant_resident_price: 0,
      toddler_resident_count: "0",
      toddler_resident_price: 0,
      adult_non_resident_count: "1",
      adult_non_resident_price: 400,
      child_non_resident_count: "0",
      child_non_resident_price: 0,
      infant_non_resident_count: "0",
      infant_non_resident_price: 0,
      toddler_non_resident_count: "0",
      toddler_non_resident_price: 0,
      total_cost: 650,
      booking_id: 2,
      createdAt: "2024-11-28T13:35:45.916Z",
      updatedAt: "2024-11-28T13:35:45.916Z",
    },
    {
      id: 4,
      uuid: "e27dd619-1f10-4464-a91c-181ecb689688",
      transport_type: "land",
      from_location: "Port Blair",
      from_to: "Havelock Island",
      pickup_date: "2024-11-18T00:00:00.000Z",
      pickup_time: "08:10",
      self_vendor: null,
      vendor_id: null,
      vendor_name: null,
      non_resident_price_change: true,
      adult_resident_count: "1",
      adult_resident_price: 300,
      child_resident_count: "0",
      child_resident_price: 0,
      infant_resident_count: "0",
      infant_resident_price: 0,
      toddler_resident_count: "0",
      toddler_resident_price: 0,
      adult_non_resident_count: "1",
      adult_non_resident_price: 500,
      child_non_resident_count: "0",
      child_non_resident_price: 0,
      infant_non_resident_count: "0",
      infant_non_resident_price: 0,
      toddler_non_resident_count: "0",
      toddler_non_resident_price: 0,
      total_cost: 800,
      booking_id: 2,
      createdAt: "2024-11-28T13:36:17.968Z",
      updatedAt: "2024-11-28T13:36:17.968Z",
    },
  ];

  const bookingTaxes = [
    {
      id: 17,
      uuid: "7637c960-0f12-4c07-af4f-e18097166b46",
      booking_id: 2,
      tax_id: 1,
      amount: 805,
      createdAt: "2024-11-28T13:42:27.951Z",
      updatedAt: "2024-11-28T13:42:27.951Z",
      AgentTax: {
        id: 1,
        uuid: "88b91609-3037-469b-b051-1f6dca560961",
        tax_type: "direct",
        tax_name: "Sales Tax",
        percentage: 10,
        rangeTaxes: null,
        status: true,
        agent_id: 1,
        createdAt: "2024-11-28T11:14:47.993Z",
        updatedAt: "2024-11-28T11:14:47.993Z",
      },
    },
  ];

  const bookingActivities = [
    {
      id: 2,
      uuid: "dce228e4-68a1-4799-9873-3eb70afcf5ed",
      product_id: 1,
      vendor_id: null,
      agent_product: true,
      qty: null,
      total_amount: 3000,
      adult_resident_count: "1",
      adult_nonresident_count: "1",
      child_resident_count: null,
      child_nonresident_count: null,
      date: "2024-12-17T00:00:00.000Z",
      ref_image:
        "https://s3.ap-east-1.amazonaws.com/summerbayresort-test/product_enquiry_activity/gdm4iScubadiver.webp",
      special_notes:
        "Guided Forest Trek - 🥾\nTreehouse Stay - 🛖\nNature Yoga - 🧘‍♂\nForest Picnic - 🍴\nBirdwatching - 🦜\nNight Safari - 🌙",
      booking_id: 2,
      createdAt: "2024-11-28T13:33:47.121Z",
      updatedAt: "2024-11-28T13:33:47.121Z",
      Vendor: null,
      Product: {
        product_name: "Scuba Diving Session",
        charge_by: "pax",
        conditions: ["data_and_time", "spec_req", "to_public"],
        product_belongs_to: "agent",
        id: 1,
      },
    },
  ];

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    documentType: "",
    documentCurrencyCode: "",
    taxCurrencyCode: "",
    hasCustomerTin: false,
    customerTin: "EI00000000020", // Default value if no TIN
    addressLine: "",
    city: "",
    country: "",
    countryIdentificationCode: "",
  });

  const currencyOptions = ["MYR", "INR"];

  const countryOptions = [
    { code: "IND", name: "India" },
    { code: "MY", name: "Malaysia" },
  ];

  const documentTypes = [
    { code: "01", description: "Invoice" },
    { code: "02", description: "Credit Note" },
    { code: "03", description: "Debit Note" },
    { code: "04", description: "Refund Note" },
    { code: "11", description: "Self-billed Invoice" },
    { code: "12", description: "Self-billed Credit Note" },
    { code: "13", description: "Self-billed Debit Note" },
    { code: "14", description: "Self-billed Refund Note" },
  ];

  const handleTinCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      hasCustomerTin: !prev.hasCustomerTin,
      customerTin: !prev.hasCustomerTin ? "" : "EI00000000020",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [agentData, setAgentData] = useState(null);

  const payload = {
    formData,
    agentData,
    agentBooking,
    packageRooms,
    bookingTransportation,
    bookingActivities,
    bookingTaxes,
  };

  useEffect(() => {
    const storedData = localStorage.getItem("travelAgentData");
    if (storedData) {
      setAgentData(JSON.parse(storedData));
    }
  }, []);

  const config = {
    headers: {
      authorizationtoken: agentData?.accessToken,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

  

    try {
      const response = await axios.post(
        "http://localhost:7000/api/invoice/submit",
        payload,
        config
      );

      const { submissionUID, acceptedDocuments, rejectedDocuments } =
        response.data;

      alert(`Submission successful!
      UID: ${acceptedDocuments[0].uuid}
      Accepted Documents: ${acceptedDocuments.length}
      Rejected Documents: ${rejectedDocuments.length}`);

      if (rejectedDocuments.length <= 0) {
        navigate("/download-einvoice");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="bg-[#008B8B] py-20 min-h-screen">
      <h2 className="text-3xl text-white font-bold mb-6 text-center">
        Submit E-Invoice
      </h2>

      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Invoice Form</h2>

          {/* Document Type */}

          <div className="mb-4">
            <label className="block text-gray-700 pb-3">Document Type</label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            >
              <option value="" disabled>
                Select Document Type
              </option>
              {documentTypes.map((type) => (
                <option key={type.code} value={type.code}>
                  {type.description}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Document Currency Code
            </label>
            <select
              name="documentCurrencyCode"
              value={formData.documentCurrencyCode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            >
              <option value="" disabled>
                Select Currency
              </option>
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          {/* Tax Currency Code */}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Tax Currency Code
            </label>
            <select
              name="taxCurrencyCode"
              value={formData.taxCurrencyCode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            >
              <option value="" disabled>
                Select Currency
              </option>
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          {/* Customer TIN */}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-bold">
              Customer Details
            </label>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={formData.hasCustomerTin}
                onChange={handleTinCheckboxChange}
                className="mr-2"
              />
              <span>Does the customer have a TIN?</span>
            </div>
            {formData.hasCustomerTin && (
              <input
                type="text"
                name="customerTin"
                value={formData.customerTin}
                onChange={handleChange}
                placeholder="Enter Customer TIN"
                className="w-full border border-gray-300 p-2 rounded-lg"
                required
              />
            )}
          </div>

          {/* Address Line */}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Address Line</label>
            <input
              type="text"
              name="addressLine"
              value={formData.addressLine}
              onChange={handleChange}
              placeholder="Enter Address Line"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>

          {/* City */}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>

          {/* Country */}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              {countryOptions.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Country Identification Code */}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Country Identification Code
            </label>
            <select
              name="countryIdentificationCode"
              value={formData.countryIdentificationCode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            >
              <option value="" disabled>
                Select Code
              </option>
              {countryOptions.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#008B8B] text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit E-invoice
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitEinvoice;
