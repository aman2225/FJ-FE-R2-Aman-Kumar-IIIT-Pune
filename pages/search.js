// import React from 'react'
// import tw from 'tailwind-styled-components'

// const search = () => {
//   return (
//     <div className="flex flex-col bg-gray-200 items-start h-screen ">
        
        
//          <div className="flex items-start gap-2 bg-white w-full px-4"> 
//         <div className="flex-1 flex flex-col items-start justify-center  mx-left rounded-lg h-12">
//             <img
//               src="https://img.icons8.com/ios-filled/50/000000/left.png" // Replace with reserve image path
//               alt="BackButton"
//               className="h-10 mb-1"
//             />
//             {/* <span>Reserve</span> */}
//           </div>
          
//         </div>
//         <div className='flex flex-row bg-white w-full'>
//         <div className="flex-1 flex flex-col items-start mx-left w-4">
//             <img
//               src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" // Replace with reserve image path
//               alt="circle"
//               className="h-10 mb-1"
//             />
//             <img
//               src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" // Replace with reserve image path
//               alt="Line"
//               className="h-10 mb-1"
//             />
//             <img
//               src="/i6.png" // Replace with reserve image path
//               alt="Square"
//               className="h-9 mb-1"
//             />
//             </div>

//             <div className='h-10 bg-gray-200 '>
//                 Hello
//                 Where to?
//             </div>
            
//             </div>
            
//             {/* <span>Reserve</span> */}
//           </div>
     
//   )
// }

// export default search
// import React from 'react';

// const Search = () => {
//   return (
//     <div className="flex flex-col bg-gray-200 h-screen">
//       {/* Back Button Section */}
//       <div className="flex items-center bg-white w-full px-4 py-2">
//         <img
//           src="https://img.icons8.com/ios-filled/50/000000/left.png"
//           alt="Back Button"
//           className="h-8"
//         />
//       </div>

//       {/* Input Section */}
//       <div className="flex bg-white w-full px-4 py-4">
//         {/* Icons Section */}
//         <div className="flex flex-col items-center mr-4">
//           <img
//             src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
//             alt="Circle"
//             className="h-10"
//           />
//           <img
//             src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
//             alt="Line"
//             className="h-8"
//           />
//           <img
//             src="/i6.png"
//             alt="Square"
//             className="h-10"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="flex flex-col flex-1">
//           <input
//             type="text"
//             placeholder="Enter pickup location"
//             className="bg-gray-200 p-2 mb-8 rounded outline-none border-none"
//             style={{ marginRight: '15px' }}
//           />
//           <input
//             type="text"
//             placeholder="Where to?"
//             className="bg-gray-200 p-2 mb-1 rounded outline-none border-none"
//             style={{ marginRight: '15px' }}
            
//           />
//           <div className="flex h-10 ">
//           <img
//             src="https://img.icons8.com/ios/50/000000/plus-math.png"
//             alt="Plus"
//             className="h-10 w-10"
//           />
//           </div>
          
//         </div>
        
//       </div>
      
//     </div>
//   );
// };

// export default Search;
// import React from 'react';

// const Search = () => {
//   return (
//     <div className="flex flex-col bg-gray-200 h-screen">
//       {/* Back Button Section */}
//       <div className="flex items-center bg-white w-full px-4 py-2">
//         <img
//           src="https://img.icons8.com/ios-filled/50/000000/left.png"
//           alt="Back Button"
//           className="h-8"
//         />
//       </div>

//       {/* Input Section */}
//       <div className="relative bg-white w-full px-6 py-4">
//         {/* Icons Section */}
//         <div className="absolute left-4 top-4 flex flex-col items-center">
//           <img
//             src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
//             alt="Circle"
//             className="h-10"
//           />
//           <img
//             src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
//             alt="Line"
//             className="h-10"
//           />
//           <img
//             src="/i6.png"
//             alt="Square"
//             className="h-8"
//           />
//         </div>

//         {/* Text Inputs */}
//         <div className="flex flex-col ml-12">
//           <input
//             type="text"
//             placeholder="Enter pickup location"
//             className="bg-gray-200 p-3 rounded mb-4 border border-gray-300 focus:outline-none border-none"
//             style={{ marginRight: '20px' }}
//           />
//           <input
//             type="text"
//             placeholder="Where to?"
//             className="bg-gray-200 p-3 rounded border border-gray-300 focus:outline-none border-none"
//             style={{ marginRight: '20px' }}
//           />
//         </div>

//         {/* Plus Icon */}
//         <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full shadow-md">
//           <img
//             src="https://img.icons8.com/ios-filled/50/000000/plus-math.png"
//             alt="Plus Icon"
//             className="h-6 w-6"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;

// import React from "react";

// const Search = () => {
//   return (
//     <div className="flex flex-col bg-gray-200 h-screen">
//       {/* Back Button Section */}
//       <div className="flex items-center bg-white w-full px-4 py-2">
//         <img
//           src="https://img.icons8.com/ios-filled/50/000000/left.png"
//           alt="Back Button"
//           className="h-8"
//         />
//       </div>

//       {/* Input Section */}
//       <div className="flex bg-white w-full px-4 py-4 relative">
//         {/* Icons Section */}
//         <div className="flex flex-col items-center mr-4">
//           <img
//             src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
//             alt="Circle"
//             className="h-4"
//           />
//           <img
//             src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
//             alt="Line"
//             className="h-8"
//           />
//           <img
//             src="/i6.png"
//             alt="Square"
//             className="h-4"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="flex flex-col flex-1">
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Enter pickup location"
//               className="bg-gray-200 p-2 rounded outline-none border-none w-full"
              
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Where to?"
//               className="bg-gray-200 p-2 rounded outline-none border-none w-full"
//             />
//           </div>
//         </div>

//         {/* Plus Icon */}
//         <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//           <img
//             src="https://img.icons8.com/ios/50/000000/plus-math.png"
//             alt="Plus"
//             className="h-10 w-10 rounded-full bg-gray-200 p-2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;

// import React from "react";

// const Search = () => {
//   return (
//     <div className="flex flex-col bg-gray-200 h-screen">
//       {/* Back Button Section */}
//       <div className="flex items-center bg-white w-full px-4 py-2">
//         <img
//           src="https://img.icons8.com/ios-filled/50/000000/left.png"
//           alt="Back Button"
//           className="h-8"
//         />
//       </div>

//       {/* Main Input Section */}
//       <div className="flex bg-white w-full px-4 py-4 relative items-center">
//         {/* Left Icons Section */}
//         <div className="flex flex-col items-center mr-1">
//           <img
//             src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
//             alt="Circle"
//             className="h-3"
//           />
//           <img
//             src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
//             alt="Line"
//             className="h-8"
//           />
//           <img
//             src="/i6.png"
//             alt="Square"
//             className="h-3"
//           />
//         </div>

//         {/* Input Fields */}
//         <div className="flex flex-col flex-1 pr-14">
//           <div className="mb-3">
//             <input
//               type="text"
//               placeholder="Enter pickup location"
//               className="bg-gray-200 p-1 rounded outline-none border-none w-full"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Where to?"
//               className="bg-gray-200 p-1 rounded outline-none border-none w-full"
//             />
//           </div>
//         </div>

//         {/* Plus Icon */}
//         <div className="absolute right-5 top-10 flex items-center">
//           <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200">
//             <img
//               src="https://img.icons8.com/ios/50/000000/plus-math.png"
//               alt="Plus"
//               className="h-8 w-8"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;
// import React from "react";

// const Search = () => {
//   return (
//     <div className="flex flex-col bg-gray-200 h-screen">
//       {/* Back Button Section */}
//       <div className="flex items-center bg-white w-full px-4 py-2">
//         <img
//           src="https://img.icons8.com/ios-filled/50/000000/left.png"
//           alt="Back Button"
//           className="h-8"
//         />
//       </div>

//       {/* Main Input Section */}
//       <div className="flex bg-white w-full px-4 py-4 relative items-center">
//         {/* Left Icons Section */}
//         <div className="flex flex-col items-center mr-1">
//           <img
//             src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
//             alt="Circle"
//             className="h-3"
//           />
//           <img
//             src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
//             alt="Line"
//             className="h-8"
//           />
//           <img
//             src="/i6.png"
//             alt="Square"
//             className="h-3"
//           />
//         </div>

//         {/* Input Fields */}
//         <div className="flex flex-col flex-1 pr-14">
//           <div className="mb-3">
//             <input
//               type="text"
//               placeholder="Enter pickup location"
//               className="bg-gray-200 p-2 rounded outline-none border-none w-full"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Where to?"
//               className="bg-gray-200 p-2 rounded outline-none border-none w-full"
//             />
//           </div>
//         </div>

//         {/* Plus Icon */}
//         <div className="absolute right-5 top-10 flex items-center">
//           <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200">
//             <img
//               src="https://img.icons8.com/ios/50/000000/plus-math.png"
//               alt="Plus"
//               className="h-4 w-4"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Saved Places Section */}
//       <div className="flex items-center bg-white w-full px-4 py-3 mt-3">
//         <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-400 mr-4">
//           <img
//             src="https://img.icons8.com/ios-filled/50/FFFFFF/star--v1.png"
//             alt="Star"
//             className="h-6 w-6"
//           />
//         </div>
//         <p className="text-gray-700 text-lg font-bold">Saved Places</p>
//       </div>
//     </div>
//   );
// };

// export default Search;

// import React from "react";

// const Search = () => {
//   return (
//     <div className="flex flex-col bg-gray-200 h-screen">
//       {/* Back Button Section */}
//       <div className="flex items-center bg-white w-full px-4 py-2">
//         <img
//           src="https://img.icons8.com/ios-filled/50/000000/left.png"
//           alt="Back Button"
//           className="h-8"
//         />
//       </div>

//       {/* Main Input Section */}
//       <div className="flex bg-white w-full px-4 py-4 relative items-center">
//         {/* Left Icons Section */}
//         <div className="flex flex-col items-center mr-1">
//           <img
//             src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
//             alt="Circle"
//             className="h-3"
//           />
//           <img
//             src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
//             alt="Line"
//             className="h-8"
//           />
//           <img
//             src="/i6.png"
//             alt="Square"
//             className="h-3"
//           />
//         </div>

//         {/* Input Fields */}
//         <div className="flex flex-col flex-1 pr-14">
//           <div className="mb-3">
//             <input
//               type="text"
//               placeholder="Enter pickup location"
//               className="bg-gray-200 p-2 rounded outline-none border-none w-full"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Where to?"
//               className="bg-gray-200 p-2 rounded outline-none border-none w-full"
//             />
//           </div>
//         </div>

//         {/* Plus Icon */}
//         <div className="absolute right-5 top-10 flex items-center">
//           <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200">
//             <img
//               src="https://img.icons8.com/ios/50/000000/plus-math.png"
//               alt="Plus"
//               className="h-4 w-4"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Saved Places Section */}
//       <div className="flex items-center bg-white w-full px-4 py-4 mt-1">
//         <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-400 mr-4">
//           <img
//             src="https://img.icons8.com/ios-filled/50/FFFFFF/star--v1.png"
//             alt="Star"
//             className="h-6 w-6"
//           />
//         </div>
//         <p className="text-gray-700 text-lg font-bold">Saved Places</p>
//       </div>

//       {/* Confirm Locations Button */}
//       <div className="mt-4 px-5">
//         <button className="bg-black text-white text-lg font-bold w-full py-4 rounded">
//           Confirm Locations
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Search;

// import {useState} from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const Search = () => {

//     const [pickup, setPickup ]= useState("");
//     const [dropoff, setDropoff ]=useState("");


//   const router = useRouter();

//   return (
//     <div className="flex flex-col bg-gray-200 h-screen">
//       {/* Back Button Section */}
//       <div className="flex items-center bg-white w-full px-4 py-2">
//         <div
//           className="h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition duration-200"
//           onClick={() => router.push("/")} // Navigate to index.js when clicked
//         >
//           <img
//             src="https://img.icons8.com/ios-filled/50/000000/left.png"
//             alt="Back Button"
//             className="h-5"
//           />
//         </div>
//       </div>

//       {/* Main Input Section */}
//       <div className="flex bg-white w-full px-4 py-4 relative items-center">
//         {/* Left Icons Section */}
//         <div className="flex flex-col items-center mr-1">
//           <img
//             src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
//             alt="Circle"
//             className="h-3"
//           />
//           <img
//             src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
//             alt="Line"
//             className="h-8"
//           />
//           <img
//             src="/i6.png"
//             alt="Square"
//             className="h-3"
//           />
//         </div>

//         {/* Input Fields */}
//         <div className="flex flex-col flex-1 pr-14">
//           <div className="mb-3">
//             <input
//               type="text"
//               placeholder="Enter pickup location"
//               value={pickup}
//               onChange={(e)=> setPickup(e.target.value)}
//               className="bg-gray-200 p-2 rounded outline-none border-none w-full"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Where to?"
//               value={dropoff}
//               onChange={(e)=> setDropoff(e.target.value)}
//               className="bg-gray-200 p-2 rounded outline-none border-none w-full"
//             />
//           </div>
//         </div>

//         {/* Plus Icon */}
//         {/* <div className="absolute right-5 top-10 flex items-center">
//           <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200">
//             <img
//               src="https://img.icons8.com/ios/50/000000/plus-math.png"
//               alt="Plus"
//               className="h-4 w-4"
//             />
//           </div>
//         </div> */}
//       </div>

//       {/* Saved Places Section */}
//       <div className="flex items-center bg-white w-full px-4 py-4 mt-1">
//         <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-400 mr-4">
//           <img
//             src="https://img.icons8.com/ios-filled/50/FFFFFF/star--v1.png"
//             alt="Star"
//             className="h-6 w-6 cursor-pointer"
//           />
//         </div>
//         <p className="text-gray-700 text-lg font-bold">Saved Places</p>
//       </div>

//       {/* Confirm Locations Button */}
//       <div className="mt-1 px-4">
//         <Link href={{
//             pathname:"/confirm",
//             query:{
//                 pickup: pickup,
//                 dropoff:dropoff
//             }           
//             }}>
//         <button className="bg-black text-white text-xl text-center font-bold mt-2 mx=4 w-full py-3 rounded cursor-pointer transform hover:scale-97 transition text-xl">
//           Confirm Locations
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Search;

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);

  const router = useRouter();

  const geocodingClient = mbxGeocoding({
    accessToken: 'pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA', // Replace with your Mapbox access token
  });

  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setPickup(value);

    if (value.length > 2) {
      const response = await geocodingClient
        .forwardGeocode({
          query: value,
          autocomplete: true,
          limit: 5,
        })
        .send();

      const suggestions = response.body.features.map((feature) => ({
        placeName: feature.place_name,
        coordinates: feature.center,
      }));
      setPickupSuggestions(suggestions);
    } else {
      setPickupSuggestions([]);
    }
  };

  const handleDropoffChange = async (e) => {
    const value = e.target.value;
    setDropoff(value);

    if (value.length > 2) {
      const response = await geocodingClient
        .forwardGeocode({
          query: value,
          autocomplete: true,
          limit: 5,
        })
        .send();

      const suggestions = response.body.features.map((feature) => ({
        placeName: feature.place_name,
        coordinates: feature.center,
      }));
      setDropoffSuggestions(suggestions);
    } else {
      setDropoffSuggestions([]);
    }
  };

  const handleSuggestionClick = (type, suggestion) => {
    if (type === "pickup") {
      setPickup(suggestion.placeName);
      setPickupSuggestions([]);
    } else {
      setDropoff(suggestion.placeName);
      setDropoffSuggestions([]);
    }
  };

  return (
    <div className="flex flex-col bg-gray-200 h-screen">
      {/* Back Button */}
      <div className="flex items-center bg-white w-full px-4 py-2">
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition duration-200"
          onClick={() => router.push("/")}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back Button"
            className="h-5"
          />
        </div>
      </div>

      {/* Main Input Section */}
      <div className="flex bg-white w-full px-4 py-4 relative items-center">
        {/* Left Icons */}
        <div className="flex flex-col items-center mr-1">
          <img
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            alt="Circle"
            className="h-5"
          />
          <img
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            alt="Line"
            className="h-10"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            alt="Square"
            className="h-5"
          />
        </div>

        {/* Input Fields */}
        <div className="flex flex-col flex-1 pr-14">
        <div className="mb-3 relative">
  <input
    type="text"
    placeholder="Enter Pickup Location"
    value={pickup}
    onChange={handlePickupChange}
    className="bg-[#1E1F29] text-gray-100 p-3 rounded-lg outline-none border-none w-full dark:bg-white"
  />
  {pickupSuggestions.length > 0 && (
    <ul className="bg-white absolute top-full left-0 dark:bg-white shadow-md w-full z-10">
      {pickupSuggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => handleSuggestionClick("pickup", suggestion)}
          className="cursor-pointer hover:bg-gray-400 px-4 py-2 dark:hover:bg-gray-100"
        >
          {suggestion.placeName}
        </li>
      ))}
    </ul>
  )}
  </div>
  <div className="relative mt-3">
    <input
      type="text"
      placeholder="Enter Drop Off Location"
      value={dropoff}
      onChange={handleDropoffChange}
      className="bg-[#1E1F29] text-gray-100 p-3 rounded-lg outline-none border-none w-full dark:bg-white"
    />
    {dropoffSuggestions.length > 0 && (
      <ul className="bg-white absolute top-full left-0 dark:bg-white shadow-md w-full z-10">
        {dropoffSuggestions.map((suggestion, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick("dropoff", suggestion)}
            className="cursor-pointer hover:bg-gray-400 px-4 py-2 dark:hover:bg-gray-100"
          >
            {suggestion.placeName}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>
      </div>

      {/* Saved Places Section */}
      {/* <div className="flex items-center bg-white w-full px-4 py-4 mt-1">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-400 mr-4">
          <img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/star--v1.png"
            alt="Star"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
        <p className="text-gray-700 text-lg font-bold">Saved Places</p>
      </div> */}

      {/* Confirm Locations Button */}
      <div className="mt-1 px-4">
        <Link
          href={{
            pathname: "/confirm",
            query: {
              pickup: pickup,
              dropoff: dropoff,
            },
          }}
        > <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white text-xl text-center font-bold mt-2 mx-auto w-full py-3 rounded cursor-pointer transform hover:scale-97 transition">
        Confirm Locations
      </button>
      
          {/* <button className=" text-white text-xl text-center font-bold mt-2 mx=4 w-full py-3 rounded cursor-pointer transform hover:scale-97 transition text-xl">
            Confirm Locations
          </button> */}
        </Link>
      </div>
    </div>
  );
};

export default Search;
