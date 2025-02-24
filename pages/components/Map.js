// import { useEffect } from 'react'
// import tw from 'tailwind-styled-components'
// import mapboxgl from 'mapbox-gl'

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA';
// const Map = () => {
//     useEffect( () => {
//         if (mapboxgl.current) return
//         const map = new mapboxgl.Map( {
//           container: "map",
//           style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
//           center: [78.96288, 20.59368],
//           zoom: 3,
//         })
//       })
//   return(
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100vh',
//         backgroundColor: '#f87171',
//       }}
//     >
//       <map
//         id="map"
//         style={{
//           flex: 1,
//           backgroundColor: '#ef4444',
//         }}
//       />
//        <div
//       style={{
//         flex: 1, // This makes the other section take the remaining half
//         backgroundColor: '#3b82f6',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'white',
//         fontSize: '24px',
//         fontWeight: 'bold',
//       }}
//     >
//       Start
//     </div>
//     </div>
//   );
  
// }

// export default Map

// //return (<div id="map"></div>)
// import { useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA';

// const Map = () => {
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: 'map', // Matches the ID of the map container div
//       style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', // Replace with your preferred map style
//       center: [78.96288, 20.59368], // Coordinates for India
//       zoom: 3,
//     });

//     return () => map.remove(); // Cleanup on component unmount
//   }, []);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column', // Allows stacking of children in a column
//         height: '100vh', // Full height of the viewport
//       }}
//     >
//       <div
//         id="map"
//         style={{
//           flex: 1, // Takes up half of the screen
//           backgroundColor: '#ef4444', // Fallback background color
//         }}
//       />
//       <div
//         style={{
//           flex: 1, // Occupies the other half of the screen
//           backgroundColor: '#f87171', // Fallback color for the empty section
//         }}
//       />
//     </div>
//   );
// };

// export default Map;
// import { useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import tw from 'tailwind-styled-components'

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA';

// const Map = (props) => {
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: 'map', // Matches the ID of the map container div
//       style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
//       center: [78.96288, 20.59368],
//       zoom: 3,
//     });
//     if(props.pickupCoordinates){
//         addToMap(map, props.pickupCoordinates)
//     }

//     if(props.dropoffCoordinates){
//         addToMap(map, props.dropoffCoordinates)
//     }

//     if(props.pickupCoordinates && props.dropoffCoordinates){
//         map.fitBounds([
//             props.dropoffCoordinates,
//             props.pickupCoordinates
//         ], {
//             padding: 60
//         })
//     }

//     // return () => map.remove(); // Cleanup on component unmount
//   }, [props.pickupCoordinates,props.dropoffCoordinates]);
//   const addToMap =(map, Coordinates) => {
//     const marker1 = new mapboxgl.Marker()
//       .setLngLat(Coordinates)
//       .addTo(map)
//   }
// //   useEffect(()=>{
// //     if(pickupCoordinates){
// //         addToMap()
// //     }
// //     // console.log(props.pickupCoordinates)
// //     // console.log(props.dropoffCoordinates)
// //   }, [props.pickupCoordinates,props.dropoffCoordinates])

//   return (
//     <div
//       id="map"
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//       }}
//     />
//   );
// };

// export default Map;

// import { useEffect, useRef, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import tw from 'tailwind-styled-components';
// import * as turf from '@turf/turf';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA';

// const Map = (props) => {
//   const mapContainerRef = useRef();
//   const mapRef = useRef();
//   const pointRef = useRef(null);
//   const routeRef = useRef(null);
//   const [disabled, setDisabled] = useState(true);
//   const steps = 500;
//   let counter = 0;

//   // Function to add markers to the map
//   const addMarker = (map, coordinates, markerId) => {
//     const marker = new mapboxgl.Marker()
//       .setLngLat(coordinates)
//       .addTo(map);
//     return marker;
//   };

//   // Function to animate the route
//   const animate = () => {
//     const start =
//       routeRef.current.features[0].geometry.coordinates[
//         counter >= steps ? counter - 1 : counter
//       ];
//     const end =
//       routeRef.current.features[0].geometry.coordinates[
//         counter >= steps ? counter : counter + 1
//       ];

//     if (!start || !end) {
//       setDisabled(false);
//       return;
//     }

//     pointRef.current.features[0].geometry.coordinates =
//       routeRef.current.features[0].geometry.coordinates[counter];
//     pointRef.current.features[0].properties.bearing = turf.bearing(
//       turf.point(start),
//       turf.point(end)
//     );

//     mapRef.current.getSource('point').setData(pointRef.current);

//     if (counter < steps) {
//       requestAnimationFrame(animate);
//     }

//     counter = counter + 1;
//   };

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
//       center: [78.96288, 20.59368],
//       zoom: 3,
//     });

//     mapRef.current = map;

//     // Add markers if coordinates are provided
//     if (props.pickupCoordinates) {
//       addMarker(map, props.pickupCoordinates, 'pickup-marker');
//     }
//     if (props.dropoffCoordinates) {
//       addMarker(map, props.dropoffCoordinates, 'dropoff-marker');
//     }

//     // Add route animation if both coordinates are provided
//     if (props.pickupCoordinates && props.dropoffCoordinates) {
//       const route = {
//         type: 'FeatureCollection',
//         features: [
//           {
//             type: 'Feature',
//             geometry: {
//               type: 'LineString',
//               coordinates: [props.pickupCoordinates, props.dropoffCoordinates],
//             },
//           },
//         ],
//       };
//       routeRef.current = route;

//       const point = {
//         type: 'FeatureCollection',
//         features: [
//           {
//             type: 'Feature',
//             properties: {},
//             geometry: {
//               type: 'Point',
//               coordinates: props.pickupCoordinates,
//             },
//           },
//         ],
//       };
//       pointRef.current = point;

//       const lineDistance = turf.length(route.features[0]);
//       const arc = [];

//       for (let i = 0; i < lineDistance; i += lineDistance / steps) {
//         const segment = turf.along(route.features[0], i);
//         arc.push(segment.geometry.coordinates);
//       }

//       route.features[0].geometry.coordinates = arc;

//       map.on('load', () => {
//         map.addSource('route', {
//           type: 'geojson',
//           data: route,
//         });

//         map.addSource('point', {
//           type: 'geojson',
//           data: point,
//         });

//         map.addLayer({
//           id: 'route',
//           source: 'route',
//           type: 'line',
//           paint: {
//             'line-width': 2,
//             'line-color': '#007cbf',
//           },
//         });

//         // map.addLayer({
//         //   id: 'point',
//         //   source: 'point',
//         //   type: 'symbol',
//         //   layout: {
//         //     'icon-image': 'car',
//         //     'icon-size': 1.5,
//         //     'icon-rotate': ['get', 'bearing'],
//         //     'icon-rotation-alignment': 'map',
//         //     'icon-allow-overlap': true,
//         //     'icon-ignore-placement': true,
//         //   },
//         // });

//         animate(counter);
//       });

//       // Fit the map to the bounds of the pickup and dropoff coordinates
//       map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
//         padding: 60,
//       });
//     }

//     // Cleanup on component unmount
//     return () => map.remove();
//   }, [props.pickupCoordinates, props.dropoffCoordinates]);

//   return (
//     <div
//       ref={mapContainerRef}
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//       }}
//     />
//   );
// };

// export default Map;

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA';

const Map = (props) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const pointRef = useRef(null);
  const routeRef = useRef(null);
  const steps = 500;
  let counter = 0;

  // Function to add a marker
  const addMarker = (map, coordinates) => {
    return new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  // Function to animate the route
  const animate = () => {
    const start = routeRef.current.features[0].geometry.coordinates[counter];
    const end =
      routeRef.current.features[0].geometry.coordinates[
        Math.min(counter + 1, routeRef.current.features[0].geometry.coordinates.length - 1)
      ];

    if (!start || !end) return;

    pointRef.current.features[0].geometry.coordinates = start;
    pointRef.current.features[0].properties.bearing = turf.bearing(turf.point(start), turf.point(end));

    mapRef.current.getSource('point').setData(pointRef.current);

    if (counter < steps - 1) {
      counter++;
      requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [78.96288, 20.59368],
      zoom: 3,
    });

    mapRef.current = map;

    if (props.pickupCoordinates) {
      addMarker(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addMarker(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      const route = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [props.pickupCoordinates, props.dropoffCoordinates],
            },
          },
        ],
      };
      routeRef.current = route;

      const point = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: props.pickupCoordinates,
            },
          },
        ],
      };
      pointRef.current = point;

      const lineDistance = turf.length(route.features[0]);
      const arc = [];

      for (let i = 0; i < lineDistance; i += lineDistance / steps) {
        const segment = turf.along(route.features[0], i);
        arc.push(segment.geometry.coordinates);
      }

      route.features[0].geometry.coordinates = arc;

      map.on('load', () => {
        map.addSource('route', {
          type: 'geojson',
          data: route,
        });

        map.addSource('point', {
          type: 'geojson',
          data: point,
        });

        map.addLayer({
          id: 'route',
          source: 'route',
          type: 'line',
          paint: {
            'line-width': 2,
            'line-color': '#007cbf',
          },
        });

        // map.addLayer({
        //   id: 'point',
        //   source: 'point',
        //   type: 'symbol',
        //   layout: {
        //     'icon-image': 'car', // Ensure this icon exists in your Mapbox style
        //     'icon-size': 1.5,
        //     'icon-rotate': ['get', 'bearing'],
        //     'icon-rotation-alignment': 'map',
        //     'icon-allow-overlap': true,
        //     'icon-ignore-placement': true,
        //   },
        // });

        // animate(); // Start the animation after loading
      });

      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }

    return () => map.remove();
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  return <div ref={mapContainerRef} style={{ flex: 1, backgroundColor: 'white' }} />;
};

export default Map;
