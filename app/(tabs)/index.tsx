import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import CameraCodeScanner from "@/components/CameraCodeScanner";
import ScanButton from "@/components/ScanButton";


export default function App() {
  const [isScanning, setIsScanning] = useState(false);

  const startScanning = () => {
    setIsScanning(true);
  };

  const handleScan = (data: string) => {
    Alert.alert("Kod zeskanowany", `Dane: ${data}`);
    setIsScanning(false); // Wyłącz skanowanie po odczytaniu kodu
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <CameraCodeScanner onScan={handleScan} isScanning={isScanning} />
      </View>
      <View style={styles.scanButtonContainer}>
        <ScanButton onPress={startScanning} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  scanButtonContainer: {
    paddingBottom: 30,
  },
});
