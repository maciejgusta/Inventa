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
import InputText from "@/components/TextInput";

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
  const [kodKreskowy, setKodKreskowy] = useState("");
  const [nazwa, setNazwa] = useState("");
  const [ilosc, setIlosc] = useState("");
  const [cena, setCena] = useState("");
  const [jednostka, setJednostka] = useState("");


  const handleHideModal = () => {
    setKodKreskowy("");
    setNazwa("");
    setIlosc("");
    setCena("");
    setJednostka("");


    hideModal();
  };

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
          <View style={styles.inputContainer}>
            <InputText
              placeholder="Kod kreskowy..."
              value={kodKreskowy}
              onChangeText={setKodKreskowy}
              style={styles.input}
              inputStyle={styles.customInput}
            />
            <InputText
              placeholder="Nazwa..."
              value={nazwa}
              onChangeText={setNazwa}
              style={styles.input}
              inputStyle={styles.customInput}
            />
            <InputText
              placeholder="Cena..."
              value={ilosc}
              onChangeText={setIlosc}
              style={styles.input}
              inputStyle={styles.customInput}
            />
            <InputText
              placeholder="Ilość..."
              value={cena}
              onChangeText={setCena}
              style={styles.input}
              inputStyle={styles.customInput}
            />
            <InputText
              placeholder="Jednostka..."
              value={jednostka}
              onChangeText={setJednostka}
              style={styles.input}
              inputStyle={styles.customInput}
            />
          </View>
          <View style={styles.buttoncontainer}>
            <DefaultButton style={{ flex: 1, marginHorizontal: 5 }} onPress={handleHideModal} text="Zamknij" />
            <DefaultButton style={{ flex: 1, marginHorizontal: 5 }} onPress={handleHideModal} text="Zapisz" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    height: "88%",
    padding: "4%",
    backgroundColor: "#25292e",
    borderRadius: 10,
    justifyContent: "center",
  },
  
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
    marginTop: 20, // Dodaj odstęp nad przyciskami
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  input: {
    borderColor: "#fff",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  customInput: {
    color: "#fff",
  },
  inputContainer: {
    marginBottom: 20, // Opcjonalne: odstęp nad przyciskami
  },
});

