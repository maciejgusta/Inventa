import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import CameraCodeScanner from "@/components/CameraCodeScanner";
import ScanButton from "@/components/ScanButton";
import AddPopUp from "@/components/AddPopUp";
import { withDelay } from "react-native-reanimated";

export default function App() {
  const [isScanning, setIsScanning] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const showModal = () => {
    setModalVisible(true);
  };

  async function hideModal(){
    setModalVisible(false);
    await delay(1000);
    startScanning();
  };

  const startScanning = () => {
    setIsScanning(true);
  };

  const handleScan = () => {
    showModal();
    setIsScanning(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <CameraCodeScanner onScan={handleScan} isScanning={isScanning} />
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
