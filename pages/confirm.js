// import { useEffect, useState } from 'react'
// import tw from 'tailwind-styled-components'
// import Map from './components/Map'
// import { useRouter } from 'next/router'
// import RideSelector from './components/RideSelector'

// const Confirm = () => {
//     const router = useRouter()
//     const { pickup, dropoff }= router.query

//     const [pickupCoordinates, setPickupCoordinates ]= useState([0, 0])
//     const [dropoffCoordinates, setDropoffCoordinates ]= useState([0,0])



//     const getPickupCoordinates = (pickup) => {
//         // const pickup ="Pune";
//         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
//             new URLSearchParams({
//                 access_token:"pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
//                 limit: 1
//             })
//         )
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data.features[0].center)
//             setPickupCoordinates(data.features[0].center)
//         })
//     }
//     const getDropoffCoordinates = (dropoff) => {
//         // const dropoff ="Mumbai";
//         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
//             new URLSearchParams({
//                 access_token:"pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
//                 limit: 1
//             })
//         )
//         .then(response => response.json())
//         .then(data => {
//             console.log("Dropoff")
//             setDropoffCoordinates(data.features[0].center)
//             // console.log(data.features[0].center)
//         })
//     }

//     useEffect( () =>{
//         getPickupCoordinates(pickup);
//         getDropoffCoordinates(dropoff);
//     }, [pickup, dropoff])
    
//   return (
//     <div className="flex flex-col h-screen ">
//       <Map
//           pickupCoordinates={pickupCoordinates}
//           dropoffCoordinates={dropoffCoordinates}
//       /> 
//       <div className='flex-1 flex flex-col ' >
//       <div className="flex-1">
//            < RideSelector 
//                pickupCoordinates={pickupCoordinates}
//                dropoffCoordinates={dropoffCoordinates}
//             />
            
//            </div>
//            <div className='border-t-2 border-gray-300 '>
//            <div className='bg-black text-white my-4 mx-4 py-4 text-center'>
//             Confirm GoTogether
            
//            </div>
//            </div>

//         {/* {pickupCoordinates}
//         {dropoffCoordinates} */}
//         </div> 
//     </div>
//   )
// }

// export default Confirm
// import { useEffect, useState } from "react";
// import tw from "tailwind-styled-components";
// import Map from "./components/Map";
// import { useRouter } from "next/router";
// import RideSelector from "./components/RideSelector";

// const Confirm = () => {
//   const router = useRouter();
//   const { pickup, dropoff } = router.query;

//   const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
//   const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
//   const [route, setRoute] = useState(null); // State to store route data

//   // Fetch pickup coordinates
//   const getPickupCoordinates = (pickup) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPickupCoordinates(data.features[0].center);
//       });
//   };

//   // Fetch dropoff coordinates
//   const getDropoffCoordinates = (dropoff) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setDropoffCoordinates(data.features[0].center);
//       });
//   };

//   // Fetch route between pickup and dropoff locations
//   const fetchRoute = (pickupCoords, dropoffCoords) => {
//     fetch(
//       `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoords[0]},${pickupCoords[1]};${dropoffCoords[0]},${dropoffCoords[1]}?geometries=geojson&access_token=pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setRoute(data.routes[0].geometry); // Store route geometry
//       });
//   };

//   useEffect(() => {
//     if (pickup) getPickupCoordinates(pickup);
//     if (dropoff) getDropoffCoordinates(dropoff);
//   }, [pickup, dropoff]);

//   useEffect(() => {
//     if (
//       pickupCoordinates[0] !== 0 &&
//       dropoffCoordinates[0] !== 0 &&
//       pickupCoordinates[1] !== 0 &&
//       dropoffCoordinates[1] !== 0
//     ) {
//       fetchRoute(pickupCoordinates, dropoffCoordinates);
//     }
//   }, [pickupCoordinates, dropoffCoordinates]);

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Map Component with route */}
//       <Map
//         pickupCoordinates={pickupCoordinates}
//         dropoffCoordinates={dropoffCoordinates}
//         route={route} // Pass the route data
//       />
//       <div className="flex-1 flex flex-col">
//         <div className="flex-1">
//           <RideSelector
//             pickupCoordinates={pickupCoordinates}
//             dropoffCoordinates={dropoffCoordinates}
//           />
//         </div>
//         <div className="border-t-2 border-gray-300">
//             <div className='flex justify-between bg-white p-3 shadow-xl w-full md:w-[30%] border-[1px] items-center
//             rounded-lg'>
//                 <h2>Make payment For</h2>
//                 <button className="p-3 bg-black text-white rounded-lg text-center">Request </button>
//             </div>
//           {/* <div className="bg-black text-white my-4 mx-4 py-4 text-center">
//             Confirm GoTogether
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Confirm;
// 'use client'

// import { useEffect, useState } from "react";
// import Map from "./components/Map";
// import { useRouter } from "next/router";
// import RideSelector from "./components/RideSelector";


// const Confirm = () => {
//   const router = useRouter();
//   const { pickup, dropoff } = router.query;

//   const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
//   const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
//   const [selectedVehicle, setSelectedVehicle] = useState();
//   const [rideDuration, setRideDuration]= useState();

//   const getPickupCoordinates = (pickup) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPickupCoordinates(data.features[0].center);
//       });
//   };

//   const getDropoffCoordinates = (dropoff) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setDropoffCoordinates(data.features[0].center);
//       });
//   };

//   useEffect(() => {
//     if (pickup) getPickupCoordinates(pickup);
//     if (dropoff) getDropoffCoordinates(dropoff);
//   }, [pickup, dropoff]);

//   return (
//     <div className="flex flex-col h-screen">
//       <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
//       <div className="flex-1 flex flex-col">
//         <div className="flex-1">
//           <RideSelector
//             pickupCoordinates={pickupCoordinates}
//             dropoffCoordinates={dropoffCoordinates}
//             setSelectedVehicle={setSelectedVehicle}
//           />
//         </div>
//         <div className="border-t-2 border-gray-300 p-4">
//           {selectedVehicle ? (
//             <button className="p-3  bg-black text-white text-center rounded-lg cursor-pointer"
//            onClick={()=>router.push('/hello?amount='+(electedVehicle.multiplier*rideDuration).toFixed(2))}
//            >Request {selectedVehicle.name}
//             </button>
//           ) : (
//             <div className="text-gray-500 text-center py-2">
//               Please select a vehicle to continue.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Confirm;

// 'use client'

// import { useEffect, useState } from "react";
// import Map from "./components/Map";
// import { useRouter } from "next/router";
// import RideSelector from "./components/RideSelector";

// const Confirm = () => {
//   const router = useRouter();
//   const { pickup, dropoff } = router.query;

//   const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
//   const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
//   const [selectedVehicle, setSelectedVehicle] = useState();
//   const [rideDuration, setRideDuration] = useState(0);
//   const [amount, setAmount] = useState(0);

//   const getPickupCoordinates = (pickup) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPickupCoordinates(data.features[0].center);
//       });
//   };

//   const getDropoffCoordinates = (dropoff) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setDropoffCoordinates(data.features[0].center);
//       });
//   };

//   useEffect(() => {
//     if (pickup) getPickupCoordinates(pickup);
//     if (dropoff) getDropoffCoordinates(dropoff);
//   }, [pickup, dropoff]);

//   return (
//     <div className="flex flex-col h-screen">
//       <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
//       <div className="flex-1 flex flex-col">
//         <div className="flex-1">
//           <RideSelector
//             pickupCoordinates={pickupCoordinates}
//             dropoffCoordinates={dropoffCoordinates}
//             setSelectedVehicle={setSelectedVehicle}
//             setAmount={setAmount}
//           />
//         </div>
//         <div className="border-t-2 border-gray-300 p-4">
//           {selectedVehicle ? (
//             <button
//               className="p-3 bg-black text-white text-center rounded-lg cursor-pointer"
//               onClick={() => router.push(`/hello?amount=${amount}`)}
//             >
//               Request {selectedVehicle}
//             </button>
//           ) : (
//             <div className="text-gray-500 text-center py-2">
//               Please select a vehicle to continue.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Confirm;

'use client'

import { useEffect, useState } from "react";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
  const [selectedVehicle, setSelectedVehicle] = useState();
  const [rideDuration, setRideDuration] = useState(0);
  const [amount, setAmount] = useState(0);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    if (pickup) getPickupCoordinates(pickup);
    if (dropoff) getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <div className="flex flex-col h-screen">
      <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <RideSelector
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            setSelectedVehicle={setSelectedVehicle}
            setAmount={setAmount}
          />
        </div>
        <div className="border-t-2 border-gray-300 p-4">
          {selectedVehicle ? (
            <div className="flex justify-center">
              <button
                className="w-full mx-4 p-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-center rounded-lg cursor-pointer"
                onClick={() => router.push(`/hello?amount=${amount}`)}
              >
                Request {selectedVehicle}
              </button>
            </div>
          ) : (
            <div className="text-gray-700 font-bold text-center py-2">
              Please select a vehicle to continue
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirm;