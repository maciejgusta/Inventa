import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DefaultButton from "@/components/DefaultButton";
import { useState } from "react";

interface AddPopUpProps {
  showModal: () => void;
  hideModal: () => void;
  modalVisible: boolean;
}

export default function AddPopUp({
  modalVisible,
  showModal,
  hideModal,
}: AddPopUpProps) {
  const [text, setText] = useState("");

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={hideModal}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Dodaj przedmiot</Text>
          <TextInput placeholder="Wpisz coś..." value={""} />
          <View style={styles.buttoncontainer}>
            <DefaultButton onPress={hideModal} text="Zamknij" />
            <DefaultButton onPress={hideModal} text="Zapisz" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Przezroczyste tło dla efektu overlay
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    height: "85%",
    padding: "4%",
    backgroundColor: "#25292e", // Poprawny format koloru
    borderRadius: 10,
    justifyContent: "flex-end", // Ustaw przyciski na dole
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },

  title: {
    flex: 1,
    color: "white",
    fontSize: 18,
    alignSelf: "center",
  },
});
