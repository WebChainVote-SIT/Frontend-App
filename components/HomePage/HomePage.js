import * as React from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidSmall1 = () => {
  return (
    <View style={styles.androidSmall1}>
      <LinearGradient
        style={styles.androidSmall1Child}
        locations={[0.02, 0.98]}
        colors={["rgba(210, 211, 213, 0)", "#c6c6c7"]}
      />
      <View style={[styles.vectorParent, styles.vectorLayout]}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          //   source={require("../assets/rectangle-4.png")}
        />
        <View
          style={[
            styles.loginAsAVoterWrapper,
            styles.loginLayout1,
            styles.button,
          ]}
        >
          <Button title="Login as a Voter" color="black" />
        </View>
      </View>
      <View style={[styles.vectorGroup, styles.vectorLayout]}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          //   source={require("../assets/rectangle-4.png")}
        />
        <View
          style={[
            styles.loginAsAnAdminWrapper,
            styles.loginLayout,
            styles.button,
          ]}
        >
          <Button title="Login as a Admin" color="black" />
        </View>
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        // source={require("../assets/vector2.png")}
      />
    </View>
  );
};

export default AndroidSmall1;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 2,
    // paddingHorizontal: 2,
    borderRadius: 14,
    // elevation: 1,
    backgroundColor: "black",
  },
  vectorLayout: {
    height: 40,
    width: 308,
    position: "absolute",
  },
  loginLayout1: {
    height: 50,
    width: 260,
    position: "absolute",
  },
  loginTypo: {
    textAlign: "center",
    color: "white",
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "800",
    lineHeight: 28,
    fontSize: 20,
    left: 10,
    top: 10,
  },
  loginLayout: {
    height: 50,
    width: 260,
    position: "absolute",
  },
  androidSmall1Child: {
    width: "100%",
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    position: "absolute",
    height: "100%",
  },
  groupChild: {
    top: -20,
    left: -24,
    // borderRadius: Border.br_base,
    width: 356,
    height: 88,
    position: "absolute",
  },
  loginAsA: {
    height: 30,
    width: 206,
    position: "absolute",
  },
  loginAsAVoterWrapper: {
    left: 51,
    top: 5,
    height: 100,
  },
  vectorParent: {
    top: 335,
    left: 27,
  },
  loginAsAn: {
    textAlign: "center",
    color: "white",
    //fontFamily: "Poppins_800ExtraBold",
    fontWeight: "800",
    lineHeight: 28,
    fontSize: 20,
    left: 10,
    top: 10,
  },
  loginAsAnAdminWrapper: {
    left: 51,
    top: 5,
    height: 100,
  },
  vectorGroup: {
    top: 420,
    left: 26,
  },
  vectorIcon: {
    top: 114,
    left: 66,
    width: 230,
    height: 101,
    position: "absolute",
  },
  androidSmall1: {
    // borderRadius: Border.br_xs,
    // backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%",
  },
});
