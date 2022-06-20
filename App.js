import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useAssets } from "expo-asset";
import Constants from "expo-constants";

const profile = Constants.manifest?.extra?.profile;

export default function App() {
  const [assets, error] = useAssets(require("./assets/baby_groot.png"));

  // const buildNumber =
  //   Platform.OS === "ios"
  //     ? Constants.manifest?.ios?.buildNumber
  //     : Constants.manifest?.android?.versionCode;

  // const identifier =
  //   Platform.OS === "ios"
  //     ? Constants.manifest?.ios?.bundleIdentifier
  //     : Constants.manifest?.android?.publishBundlePath; // not right

  if (!assets && !error) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  const [logo] = assets;

  const manifest = JSON.stringify(Constants.manifest, null, 2);
  const manifest2 = JSON.stringify(Constants.manifest2, null, 2);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#AAFF22" style="auto" translucent={false} />
      <ScrollView>
        <Image source={logo} style={styles.logo} />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#ccc",
          }}
        >
          <Text>{manifest}</Text>
          <Text>{manifest2}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "teal",
  },
  subheader: {
    fontSize: 24,
    color: "teal",
  },
  text: {
    fontSize: 14,
    color: "teal",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
