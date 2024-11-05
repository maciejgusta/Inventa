import { Text, View, Pressable, StyleSheet, ViewStyle } from "react-native";

type Props = {
  onPress: () => void;
  text: string;
  style?: ViewStyle;
  textstyle?: ViewStyle;
};

export default function DefaultButton({ onPress, text, style, textstyle }: Props) {
  return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          style,
          pressed && { backgroundColor: "#ccc" },
           
        ]}
      >
        <Text style={textstyle}>{text}</Text>
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
    width: "40%",
    height: "100%",
    alignItems: "center",
  },
});
