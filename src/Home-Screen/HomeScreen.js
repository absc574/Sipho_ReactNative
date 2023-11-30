import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/constant/Button';
import COLORS from '../components/constant/Color';
import { useAuth0 } from 'react-native-auth0';




const HomeScreen = () => {
  const { authorize,  user, getCredentials, error } = useAuth0();
  const onLogin = async () => {
    await authorize({ scope: 'openid profile email', audience: 'https://c-me' });
    const credentials = await getCredentials();
    console.log('Token info', credentials.accessToken)
  }

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/logo.png")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ]
            }}
          />
          <Image
            source={require("../assets/logo.png")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" }
              ]
            }}
          />
          <Image
            source={require("../assets/logo.png")}
            style={{
              height: 100,
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" }
              ]
            }}
          />
          <Image
            source={require("../assets/logo.png")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ]
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%"
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white
            }}>

            MATLALA GROUP
          </Text>
          <View style={{ marginVertical: 22 }}>
            <Text style={{
              fontSize: 20,
              color: COLORS.white,
              marginVertical: 4,

            }}>
              Connect with us and start watching
            </Text>

           {!user ?(
             <Text style={{ color: COLORS.white }}>Welcome, {user.name}!</Text>
           ): (
            <Button title="Get started" onPress={onLogin}/>
           )

           }

          </View>

        </View>

      </View>

    </LinearGradient>
  );
};

export default HomeScreen
