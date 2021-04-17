
// import React from 'react';
// import { useCurrentPosition } from 'react-use-geolocation';

 
// function CurrentLocation(props) {
//   const [position, error] = useCurrentPosition();
// const{getCurrent} = props
//   if (!position && !error) {
//     return <p>Waiting...</p>;
//   }
 
//   if (error) {
//     return <p>{error.message}</p>;
//   }
//   getCurrent(position)
//   return (
//     <div>
//       {/* <p>
//         Latitude: {position.coords.latitude}
//       </p>
//       <p>
//         Longitude: {position.coords.longitude}
//       </p> */}

//     </div>
//   );
// }
// export default CurrentLocation