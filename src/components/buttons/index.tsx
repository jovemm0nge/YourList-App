import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface IGenericButton {
  text: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0CC0DF',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export function GenericButton({ text, onPress }: IGenericButton) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
