import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, ScrollView, FlatList } from 'react-native';
import LembreteInput from './components/LembreteInput';
import LembreteItem from './components/LembreteItem';

export default function App() {
  //const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const  [contadorLembretes, setContadorLembretes] = useState(0);
  // const capturarLembrete = (lembrete) => {
  //   setLembrete(lembrete);
  // }
  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes + 1);
      //setLembrete('');
      return [...lembretes, {key: contadorLembretes.toString(), value: lembrete}]
    });    
  }
  const removerLembrete = (keyASerRemovida)  => {
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => {
        return lembrete.key !== keyASerRemovida
      })
    });  
  }
  //operador spread
  //lembretes = [a, b, c]
  //...lembretes = a, b, c
  return (
    <View style={styles.container}>
      <LembreteInput onAdicionarLembrete={adicionarLembrete}/>
      <View
        style={{width: '80%',  alignSelf: "center"}}
      >
        <FlatList
          
          data={lembretes}
          renderItem={
            lembrete => (
              <LembreteItem 
                lembrete={lembrete.item.value} 
                onDelete={removerLembrete}
                chave={lembrete.item.key}
              />
            )
          }
        />
      </View>
        {
          /*
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              { lembretes.map((lembrete) => <View style={styles.itemNaLista} key={lembrete}><Text>{lembrete}</Text></View>)}
            </View>      
          </ScrollView>
          */ 
        }      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  lembreteInputView: {
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: { 
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 2, 
    textAlign: 'center' 
  },
  lembreteInputButton: { 
    width: '80%' 
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center'
  }
});
