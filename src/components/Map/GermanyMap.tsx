// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { motion } from 'framer-motion';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Correction de l'icône par défaut de Leaflet pour éviter l'erreur "missing icon"
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });



// export const GermanyMap = () => {
//   return (
//     <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg my-10">
//       <MapContainer center={[51.1657, 10.4515]} zoom={6} scrollWheelZoom={true} className="h-full w-full">
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {places.map((place, idx) => (
//           <Marker position={place.position as [number, number]} key={idx}>
//             <Popup>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="text-center"
//               >
//                 <img
//                   src={place.image}
//                   alt={place.name}
//                   className="w-full h-32 object-cover rounded-md mb-2"
//                 />
//                 <h3 className="font-bold text-lg">{place.name}</h3>
//                 <p className="text-sm text-gray-600">{place.description}</p>
//               </motion.div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };
