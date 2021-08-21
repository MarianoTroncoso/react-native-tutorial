import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const App = () => {
  const [seletedImage, setSeletedImage] = useState(null);

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("permission to access camera is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSeletedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image</Text>
      <Image
        source={{
          uri:
            seletedImage !== null
              ? seletedImage.localUri
              : "https://picsum.photos/200/200",
        }}
        style={styles.image}
      ></Image>
      <TouchableOpacity onPress={openImagePicker} style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightpink",
    color: "darkslategrey",
  },
  title: {
    fontSize: 30,
    color: "rebeccapurple",
    fontWeight: "500",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "lightcoral",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    textTransform: "uppercase",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default App;
