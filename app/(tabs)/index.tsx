import { StyleSheet, Text, View } from "react-native";

import { Image } from "expo-image";

const zdjecie = require('@/assets/images/background-image.png');

export default function Index()
{
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image source={zdjecie} style={styles.image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 340,
    height: 440,
    borderRadius: 18,
  }
});