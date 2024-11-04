import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
};

export default function ScanButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.circleButton,
          pressed && { backgroundColor: "#ccc" }, // zmiana koloru na lekko szary przy naciśnięciu
        ]}
        onPress={onPress}
      >
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
