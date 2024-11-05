import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Adding() {
  const [modalVisible, setModalVisible] = useState(false);

  // Funkcja do pokazania modala
  const showModal = () => {
    setModalVisible(true);
  };

  // Funkcja do ukrycia modala
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Pokaż Pop-up" onPress={showModal} />

      <Modal
        animationType="fade" // Typ animacji
        transparent={true} // Ustawienie przezroczystości
        visible={modalVisible} // Widoczność modala
        onRequestClose={hideModal} // Zamknięcie modala po naciśnięciu przycisku wstecz (Android)
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>To jest pop-up!</Text>
            <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
              <Text style={styles.buttonText}>Zamknij</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Przezroczyste tło
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000", // Cień dla lepszego efektu
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Dla Androida
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
