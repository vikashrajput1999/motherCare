import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function ViewDetails({navigation}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const [dataItems, setDataItems] = React.useState([]);
  const AllData = Object.values(state);
  const allKeys = Object.keys(state);
  let mArray = [];
  React.useEffect(() => {
    allKeys.map((key) => {
      state[key].map((e) => {
        mArray.push({...e, type: key});
      });
    });
    setDataItems(mArray);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          // backgroundColor: 'black',
          flexDirection: 'row',
          width: width * 0.96,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddDetails', {item: item, details: details})
          }
          style={{
            width: width * 0.86,
            height: height * 0.28,
            borderWidth: 5,
            borderColor: 'black',
            // borderTopStartRadius: 40,
            // borderBottomEndRadius: 40,
            elevation: 1,
            borderRadius: 40,
            backgroundColor: '#8ed1fc',
            justifyContent: 'space-between',
            shadowColor: 'black',
            shadowOffset: {width: 4, height: 20},
            shadowOpacity: 20,
            shadowRadius: 5,

            marginTop: height * 0.01,
          }}>
          <View
            style={{
              //  backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            {/**
             * 
            <View
              style={{
                width: width * 0.2,
                alignItems: 'flex-end',
                borderRadius: 10,
                height: height * 0.1,
                borderWidth: 2,
                // borderColor: 'black'
              }}>
              
            </View>
             */}

            {/* <Text style={{fontSize: height * 0.04, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginRight: 20}}>
                  Pet Image 
                </Text> */}

            <View style={{marginLeft: 10}}>
              {item.image.length ? (
                <Image
                  source={{uri: item.image}}
                  style={{
                    // flexDirection: 'row',
                    marginTop: 7,
                    // marginLeft: 5,
                    height: height * 0.08,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 40,
                    width: width * 0.18,
                  }}
                />
              ) : (
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  No Image
                </Text>
              )}
            </View>
            <View
              style={{
                width: width * 0.51,
                height: height * 0.08,
                borderBottomWidth: 10,
                borderTopWidth: 5,
               // borderRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopColor: 'orange',
                borderBottomColor: 'black',
                justifyContent: 'center',
                backgroundColor: '#fff',
                marginLeft: 10,
                marginTop: 4,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {item.place}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: width * 0.73,
              height: height * 0.075,
              borderBottomWidth: 10,
              borderTopWidth: 5,
              alignSelf: 'center',
              // borderRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderTopColor: 'orange',
              borderBottomColor: 'black',
              justifyContent: 'center',
              backgroundColor: '#fff',
              // marginLeft: 10,
              marginTop: -10,
            }}>
            <View
              style={{
                //  backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                Date:
              </Text>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.from}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: width * 0.73,
              height: height * 0.075,
              borderBottomWidth: 10,
              borderTopWidth: 5,
              alignSelf: 'center',
              // borderRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderTopColor: 'orange',
              borderBottomColor: 'black',
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginBottom: 5,
            }}>
            <View
              style={{
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                Quantity:
              </Text>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.to}
              </Text>
            </View>
          </View>
      </TouchableOpacity>
      </View>
      
    );
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width, height}}
        blurRadius={0}
        source={require('../assets/mcbk1.jpg')}>
      <View style={{width, height}}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0,0,0,0.8)',
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
              View Details
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
            // backgroundColor: '#f5fafa',
            height: height * 0.9,
          }}>
          {dataItems.length ? (
            <FlatList
              data={dataItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <View
              style={{
                width: width * 0.85,
                height: height * 0.18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#8ed1fc',
                //  borderTopRightRadius: height * 0.03,
                //  borderBottomLeftRadius: height * 0.03,
                 borderRadius: 20,
                borderColor: 'black',
                borderWidth: 5,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                No Data Found , Please click on ' + ' to add data in category
                details page
              </Text>
            </View>
          )}
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
