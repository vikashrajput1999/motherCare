import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function CategoriesScreen({navigation}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {details: item})}
      style={{
        width: width * 0.91,
         alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.13,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        // justifyContent: 'center',
        borderWidth: 5,
        marginTop: height * 0.018,
        shadowColor: 'blue',
        shadowOffset: {width: 1, height: 10},
        shadowOpacity: 20,
        shadowRadius: 5,
      }}>
      
      <View
        style={{
          width: width * 0.6,
          height: height * 0.1,
          // borderRadius: 40,
          flexDirection: 'row',
          marginLeft: 5,
          // marginTop: 10,
          borderWidth: 4,
          borderTopLeftRadius: 30,
          borderBottomStartRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          
        }}>
        {/* <Image
          source={require('../assets/ptimg.png')}
          style={{height: height * 0.1, width: width * 0.2}}
        /> */}
        <Text
          style={{
            fontSize: height * 0.033,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            color: 'black',
          }}>
          {item}
        </Text>
        
      </View>
        <View style={{width: width * 0.23, height: height * 0.1, marginLeft: 10}}>
           <Image
                 source={require('../assets/mtimg.png')}
                style={{height: height * 0.1, width: width * 0.22}}
           />
        </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{width, height}}>
      <ImageBackground
        style={{width, height}}
        blurRadius={1}
        source={require('../assets/mcbk.png')}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0,0,0,0.7)',
            height: height * 0.065,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() => navigation.goBack()}>
            <Icon
              name="ios-arrow-back-outline"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: height * 0.03,
                fontWeight: 'bold',
              }}>
              Categories
            </Text>
          </View>
          <View style={{padding: 20}}>
            <Text></Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            //  backgroundColor: '#f5fa',
            height: height * 0.85,
          }}>
          {/* <Text style={{fontSize: height * 0.1}}>slfj</Text> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={['Food','Medicine','Clothes', 'Footwear', 'Precautions', 'Liquids', 'Beauty','Other']}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
