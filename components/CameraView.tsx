import { Text, View, StyleSheet, Button } from "react-native";
import { Camera, CameraType } from "expo-camera/legacy";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "expo-router";

interface CameraViewProps {
  onScan: (data: string) => void;
  isScanning: boolean;
}

export default function CameraView({ onScan, isScanning }: CameraViewProps) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isFocused, setIsFocused] = useState(false);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    if (isScanning) {
      onScan(data);
    }
  };

  // Sprawdzanie focus na karcie
  useFocusEffect(
    useCallback(() => {
      setIsFocused(true);
      return () => setIsFocused(false);
    }, [])
  );

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, []);

  if (!permission || !permission.granted) {
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera
          style={styles.camera}
          type={type}
          ratio="1:1"
          onBarCodeScanned={isScanning ? handleBarCodeScanned : undefined}
        />
      )}
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
  camera: {
    width: "100%",
    aspectRatio: 1,
  },
});
