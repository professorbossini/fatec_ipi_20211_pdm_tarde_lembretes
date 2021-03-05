import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LembreteInput = (props) => {
  const [lembrete, setLembrete] = useState('');
  
  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  }

  return (
    <View style={styles.lembreteView}>
      <TextInput 
        style={styles.lembreteTextInput}
        placeholder="Lembrar..."
        onChangeText={capturarLembrete}
        value={lembrete}
      />
      <View style={{width: '80%'}}>
        <Button 
          title="+"
          onPress={() => {
            props.onAdicionarLembrete(lembrete)
            setLembrete('')
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lembreteView: {
    marginBottom: 12,
    alignItems: 'center'
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 8,
    textAlign: 'center',
    marginBottom: 4
  }
});


export default LembreteInput;