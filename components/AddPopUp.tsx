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
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={hideModal}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <DefaultButton onPress={hideModal} text="Zamknij" />
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
    backgroundColor: "#25292e", // Zmieniono na poprawny format koloru
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 0,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
