// import React from 'react';
// import { Button, Text, View, Alert } from 'react-native';
// import { useAuth0 } from 'react-native-auth0';
// import { useNavigation } from '@react-navigation/native';
// import Background from '../Background';
// import Btn from '../Btn';

// import { blue, white, lightBlue } from '../constantsColor';

// const Login = () => {

//   const { authorize, clearSession, user, getCredentials, error } = useAuth0();
//   const navigation = useNavigation();

//   const onLogin = async () => {
//     await authorize({ scope: 'openid profile email', audience: 'https://c-me' });
//     const credentials = await getCredentials();
//     // Alert.alert('AccessToken: ' + credentials?.accessToken);
//     console.log('Token info', credentials.accessToken)
//     // console.log('tokeniser', token)
//     navigation.navigate('VideoScreen')
//   }
 
//   const loggedIn = user !== undefined && user !== null;
//   const onLogout = async () => {
//     try {
//       await clearSession();

//     } catch (error) {
//       console.log('Log out cancelled');
//     }
//   };
//   return (

//     <Background>
//       <View  style={{ marginHorizontal: 40, marginVertical: 100 }}>
//          {!user && <Text>Your are not logged in</Text>}
//         <Text style={{ color: '#000000', fontSize: 64, fontWeight: 'bold', marginBottom: 40 }}>Matlala Group Tv</Text>
//         < Btn bgColor={blue} textColor={white} btnLabel="Login" Press={loggedIn ? onLogout : onLogin} />
//         <Btn bgColor={lightBlue} textColor={blue} btnLabel="Watch Episode" />
//       </View>
//     </Background>

//   )
// }
// export default Login;