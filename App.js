import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [counter,setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor='lightgray'/>

      <TouchableOpacity onPress={() => {setCounter(0)}}>
        <View style={{backgroundColor:"#CA907E",width:300,height:80,borderRadius:30,borderColor:"#994636",borderWidth:2,alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"#EAF4D3",fontWeight:"300",fontSize:20,}}>{counter}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.box}>
        <TouchableOpacity onPress={() => {setCounter(counter+1)}}>
          <View style={styles.square}><Text style={styles.text}>1</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setCounter(counter+2)}}>
          <View style={styles.square}><Text style={styles.text}>2</Text></View>          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setCounter(counter+3)}}>
          <View style={styles.square}><Text style={styles.text}>3</Text></View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
      <TouchableOpacity onPress={() => {setCounter(counter+4)}}>
        <View style={styles.square}><Text style={styles.text}>4</Text></View>        
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setCounter(counter+5)}}>
        <View style={styles.square}><Text style={styles.text}>5</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setCounter(counter+6)}}>
        <View style={styles.square}><Text style={styles.text}>6</Text></View>
      </TouchableOpacity>
      </View>
      <View style={styles.box}>
      <TouchableOpacity onPress={() => {setCounter(counter+7)}}>
        <View style={styles.square}><Text style={styles.text}>7</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setCounter(counter+8)}}>
        <View style={styles.square}><Text style={styles.text}>8</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setCounter(counter+9)}}>
        <View style={styles.square}><Text style={styles.text}>9</Text></View>
      </TouchableOpacity>
      </View>
      {/* <View style={styles.box}>
        <View style={styles.square}><Text style={[styles.text,{fontSize:15},]}>RESET</Text></View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBD8AE',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  square: {
    backgroundColor: "#EAF4D3",
    width: 70,
    height: 70,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderColor: "#994636",
    borderWidth: 2,
  },
  box: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    color: "#895B1E",
    fontSize: 20,
    textShadowColor: "black",
    fontWeight: "200",
  },
});
