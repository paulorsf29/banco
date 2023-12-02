import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Funcionalidade from './componentes/funcionalidade';

export default function App() {
  const[credito,setCredito] = useState(0.0)
  const[data1,setData1] = useState(0)
  const[debito,setDebito] = useState(0.0)
  const[resp1,setResp1] = useState("")
  const[resp2,setResp2] = useState("")

  const[data2,setData2] = useState(0)
  const[saldo,setSaldo] = useState(1200)
  
  function LancaCredito() {
    let cred = new Funcionalidade(credito , 0)
    let cr = cred.lancaCredito()
    let novoSaldo = cr + saldo;

    setSaldo(novoSaldo)
    setResp1("adicionado "+novoSaldo+" na data "+data1)
  }
  function LancaDebito() {
    let debit = new Funcionalidade(0,debito)
    let deb = debit.lancarDebito()
    let novoSaldo = saldo - deb

    setSaldo(novoSaldo)
    setResp2("debitado "+novoSaldo+" na data "+data2)
  }
  return (
    <View style={styles.container}>
      <Image src=''></Image>
      <Text>seu saldo é {saldo}</Text>
      <Text>lançar credito</Text>
      <TextInput onChangeText={setCredito}/>
      <Text>digite a data do lançamento</Text>
      <TextInput onChangeText={setData1}/>
      <Button title='lança credito' onPress={LancaCredito}></Button>
      <Text>{resp1}</Text>

      <Text>lançar debito</Text>
      <TextInput onChangeText={setDebito}/>
      <Text>digite a data do lançamento</Text>
      <TextInput onChangeText={setData2}/>
      <Button title='lança debito' onPress={LancaDebito}></Button>
      <Text>{resp2}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
