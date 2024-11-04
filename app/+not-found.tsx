import { StyleSheet, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function PageNotFound()
{
    return (
        <>
            <Stack.Screen options={{title: 'Oops, page not found'}}/>
            <View style={styles.container}>
                <Link href={"/"} style={styles.button}>
                Go to Home Screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
})