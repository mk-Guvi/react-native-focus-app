import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components';
import { colors } from '../utils';
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');

  return (
    <View style={styles.constainer}>
      <View style={styles.inputContainer}>
        <TextInput
          label={'What whould you focus on ?'}
          style={styles.textInput}
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            title={'+'}
            size={50}
            onPress={() => {
              if (subject) {
                addSubject(subject);
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    
  },
  button: { justifyContent: 'center' },

  inputContainer: {
    width: '100%',
    padding: 25,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textInput: {
    flex: 0.9,
  },
});
