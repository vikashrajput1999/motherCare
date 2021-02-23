import { Assets } from '@react-navigation/stack';
import React from 'react';
import { CheckBox } from 'react-native';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <ImageBackground
      source={require('../assets/mcbk1.jpg')}
      style={{height, width, flex: 1,}}>
      <View
        style={{
          //  backgroundColor: 'red',
          width: width,
          height: height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
             backgroundColor: '#c4deff',
            // backgroundColor: '#d9e3f0',
            borderWidth: 5,
            borderColor: 'black',
            height: height * 0.12,
            width: width * 0.9,
            // borderRadius: height * 0.02,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'black',
            shadowOffset: {width: 4, height: 8},
            shadowOpacity: 5
          }}>
          <Text
            style={{
              fontSize: height * 0.06,
              padding: 5,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Mother Care
          </Text>
        </TouchableOpacity>
      </View>
        

      <View
        style={{
          width,
          height: height * 0.7,
            // backgroundColor: 'pink',
          paddingTop: height * 0.02,
          marginTop: -60,
          // flexDirection: 'row'
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View style= {{width, height: height * 0.14, flexDirection: 'row', justifyContent: 'center'}}>
          {/* <View style={{width: width * 0.2,  height: height * 0.11, justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
 
              <Image source={require('../assets/peticn.png')}
               style={{width: width * 0.2, height: height * 0.09, justifyContent: 'center', }}>
               </Image>

          </View> */}

         <View style={{height: height * 0.15, alignItems:'center', justifyContent: 'center', padding: 5}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriesScreen')}
            activeOpacity={0.7}
            style={{ 
              width: width * 0.85,
              height: height * 0.12,
              backgroundColor: '#fccb3c',
              marginTop: 5,
               marginRight: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.04,
              borderWidth: 5,
              borderColor: 'black',
              shadowColor: 'black',
              shadowOpacity: 12,
              shadowOffset: {width: 20, height: 5}
              
            }}>
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold'}}>
              Add Details
            </Text>
          </TouchableOpacity>
         </View>
        </View>

        <View style= {{width, height: height * 0.14, marginTop: 30, flexDirection: 'row', justifyContent: 'center'}}>
          {/* <View style={{width: width * 0.2, height: height * 0.11, justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
 
              <Image source={require('../assets/peticn.png')}
               style={{width: width * 0.2, height: height * 0.09, justifyContent: 'center', }}>
               </Image>

          </View> */}

         <View style={{height: height * 0.13, alignItems:'center', justifyContent: 'center', padding: 5}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewDetails')}
            activeOpacity={0.7}
            style={{ 
              width: width * 0.85,
              height: height * 0.12,
              backgroundColor: '#fccb3c',
              marginTop: -15,
               marginRight: -5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.04,
              borderWidth: 5,
              shadowColor: 'black',
              shadowOpacity: 12,
              shadowOffset: {width: 20, height: 5}
              
            }}>
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold'}}>
              View Details
            </Text>
          </TouchableOpacity>
         </View>
        </View>

        <View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{
              width: width * 0.8,
              height: height * 0.1,
              backgroundColor: '#becc',
              // marginLeft: -60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.025,
              borderWidth: 5,
              borderColor: 'black'
            }}>
            
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold' }}>About Us</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>


    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

