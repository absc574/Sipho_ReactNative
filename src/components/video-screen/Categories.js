// import { View, Text, TouchableOpacity,Image } from 'react-native'
// import React from 'react'
// import {useAuth0} from 'react-native-auth0'

// const Categories = ({title, ImageSrc, type, setType}) => {

//     const {user} = useAuth0();

//   return (
//       <TouchableOpacity>
//         <View 
//             className={`w-24 h-24 items-center justify-center ${
//                 type === title.toLowerCase() ? "bg-gray-200" : ""
//             }`}
//         >
//             <Image source={ImageSrc} className="w-full h-full object-cover" />
//         </View>
//         <Text>{title}</Text>
//       </TouchableOpacity> 
//   )
// }

// export default Categories