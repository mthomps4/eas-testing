import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { useAssets } from "expo-asset";
import Constants from "expo-constants";

export default function App() {
  const [assets, error] = useAssets(require("./assets/baby_groot.png"));

  const identifier =
    Platform.OS === "ios"
      ? Constants.manifest?.ios?.bundleIdentifier
      : Constants.manifest?.android?.versionCode;

  if (!assets && !error) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  const [logo] = assets;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>{Constants.manifest.name}</Text>
      <Text style={styles.subheader}>{Constants.manifest.version}</Text>
      <Text style={styles.text}>{identifier || "local"}</Text>
    </View>
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
