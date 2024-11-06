import { WhiteBalance } from "expo-camera/legacy";
import React from "react";
import { TextInput, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface InputTextProps {
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  inputStyle?: ViewStyle;
}

export default function InputText({
  placeholder,
  value,
  onChangeText,
  style,
  inputStyle,
}: InputTextProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style, inputStyle]} // Połączenie domyślnych stylów z przekazanymi
      placeholderTextColor="#aaa" // Ustawienie koloru placeholdera (opcjonalne)
    />
  );
}

const styles = StyleSheet.create({
    input: {
        
    },
});
