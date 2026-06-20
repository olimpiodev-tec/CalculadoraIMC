import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaeaea"
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    width: '80%',
    height: 50,
    backgroundColor: '#dedddd',
    fontSize: 16,
    marginBottom: 20
  },
  botao: {
    backgroundColor: '#007BFF',
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontSize: 20,
    color: 'white',
  }
})

export default function App() {
  return (
    <View style={styleApp.container}>
      <Text style={styleApp.title}>Aplicativo para Calcular IMC</Text>

      <TextInput 
        style={styleApp.input}
        placeholder='Peso'
        keyboardType='numeric' />

        <TextInput 
        style={styleApp.input}
        placeholder='Altura'
        keyboardType='numeric' />

        <TouchableOpacity style={styleApp.botao}>
          <Text style={styleApp.textoBotao}>Calcular</Text>
        </TouchableOpacity>
    </View>
    
  );
}
