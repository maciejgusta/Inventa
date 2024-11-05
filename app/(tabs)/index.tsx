import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import CameraCodeScanner from "@/components/CameraCodeScanner";
import ScanButton from "@/components/ScanButton";
import AddPopUp from "@/components/AddPopUp";

export default function App() {
  const [isScanning, setIsScanning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const startScanning = () => {
    setIsScanning(true);
  };

  const handleScan = () => {
    showModal(); // Wywołaj funkcję showModal, aby pokazać modal po zeskanowaniu
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

      <AddPopUp modalVisible={modalVisible} showModal={showModal} hideModal={hideModal} />
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
