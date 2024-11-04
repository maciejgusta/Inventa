import { Text, View, Pressable, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
};

export default function PermissionButton({ onPress }: Props) {
    return (
        <View>
            <Pressable style={styles.button} onPress={onPress}>
                <Text>Grant Permission</Text>
            </Pressable>
        </View>
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
})
