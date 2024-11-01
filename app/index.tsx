import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Google from '@/assets/images/google-logo.svg';

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
  <>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
    />
    <ImageBackground source={require("@/assets/images/ecommerce-splash.jpg")}
    style={{ flex: 1 }}
    resizeMode="cover"
    >
      <View style={styles.container}>
        <LinearGradient
          colors={[
            "transparent",
            'rgba(225, 225, 225, 0.9)', 
            'rgba(225, 225, 225, 1)',]}
          style={styles.background}
          >
            <View style={styles.wrapper}>
                <Text style={styles.title}>TokoKu</Text>
                <Text style={styles.description}>solusi belanja hemat kapanpun di manapun</Text>

                <View style={styles.lgnWrapper}>
                  <Link href={"/signup"} asChild>
                    <TouchableOpacity style={styles.btn}>
                    <Ionicons name="mail-outline" size={20} color="black" />
                      <Text style={styles.btnText}>Lanjut dengan Email?</Text>
                    </TouchableOpacity>
                  </Link>

                  <TouchableOpacity style={styles.btn}>
                      <Google width={20} height={20} />
                      <Text style={styles.btnText}>Lanjut dengan Google?</Text>
                  </TouchableOpacity>

                </View>
              <Text style={styles.lgnText}>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3925153061. */}
                Sudah punya akun?{" "}
                <Link href={"/signin"} asChild>
                  <TouchableOpacity>
                    <Text style={styles.lgnSpanText}>SignIn</Text>
                  </TouchableOpacity>
                </Link>
              </Text>
            </View>
        </LinearGradient> 
      </View>
    </ImageBackground>
  </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    justifyContent:'flex-end'
  },
  wrapper:{
    paddingBottom:50,
    paddingHorizontal:20,
    alignItems:'center'
  },
  title:{
    fontSize:22,
    color:Colors.primary,
    fontWeight:700,
    letterSpacing:2.4,    
    marginBottom:5
  },
  description:{
    fontSize:14,
    color:Colors.gray,
    letterSpacing:1.2,
    lineHeight:30,    
    marginBottom:20,
    textTransform:'capitalize'
  },
  lgnWrapper:{
    alignSelf:'stretch',
  },
  btn:{
    flexDirection:'row',
    padding:10,
    borderColor:Colors.gray,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
    gap:5,
  },
  btnText:{
    fontSize:14,
    fontWeight:600,
    color:Colors.black
  },
  lgnText:{
    marginTop:30,
    fontSize:14,
    color:Colors.black,
    lineHeight:24
  },
  lgnSpanText:{
    color:Colors.primary,
    fontWeight:600
  }
});
