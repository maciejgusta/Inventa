import { Text, View, Pressable, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  text: string;
};

export default function DefaultButton({ onPress, text }: Props) {
  return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed && { backgroundColor: "#ccc" }, // zmiana koloru na lekko szary przy naciśnięciu
        ]}
      >
        <Text>{text}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderColor: "#ffd33d",
    borderRadius: 10,
    borderWidth: 3,
    padding: 5,
    marginTop: 15,
  },
});
