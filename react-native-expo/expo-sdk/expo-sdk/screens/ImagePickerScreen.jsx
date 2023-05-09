import { useState } from "react";
import { Button, Image, ScrollView, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

function ImagePickerScreen() {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets);
      setImages([...images, result.assets[0].uri]);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <ScrollView>
        {images.reverse().map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width: 400, height: 400, marginBottom: 20 }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ImagePickerScreen;
