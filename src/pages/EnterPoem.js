import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {Buttons} from '../components';

const {width, height} = Dimensions.get('screen');
const numbers = [
  {id: 0, number: 1, isCheck: false, option: true},
  {id: 1, number: 5, isCheck: false, option: false},
  {id: 2, number: 10, isCheck: false, option: false},
  {id: 3, number: 15, isCheck: false, option: false},
];

const newDate = new Date();

const EnterPoem = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisibleEnd, setDatePickerVisibilityEnd] = useState(false);
  const [firstTimes, setStartTimes] = useState(newDate.setHours(9,0));
  const [endTimes, setEndTimes] = useState(newDate.setHours(11,0));
  const [counter, setCounter] = useState(1);
  const[yeni,setYeni]=useState()

  const getData = async () => {
    let savedTimeStart = await AsyncStorage.getItem('@startHour')
   
   setStartTimes(newDate.setHours(parseInt(savedTimeStart),0))
  
}
  const endData = async () => {
    let savedTimeEnd = await AsyncStorage.getItem('@endHour')
  
   setEndTimes(newDate.setHours(parseInt(savedTimeEnd),0))
  //  console.log(savedTimeEnd)
  
}
  const howMany = async () => {
    let savedCount = await AsyncStorage.getItem('@howMany')
  
   setCounter((parseInt(savedCount)))
  
}
// console.log(new Date(firstTimes).getHours())

React.useEffect(()=>{
  getData(),endData(),howMany()
  console.log("çağır")
},[yeni])

// console.log(parseInt(moment(firstTimes).format('LT').split(" ").shift()))

const storeData = async (value) => {
  try {
    const startHour = JSON.stringify(new Date(firstTimes).getHours())
    const endHour = JSON.stringify(new Date(endTimes).getHours())
    const count = JSON.stringify(counter)
    await AsyncStorage.setItem('@startHour', startHour)
    await AsyncStorage.setItem('@endHour', endHour)
    await AsyncStorage.setItem('@howMany', count)
  } catch (e) {
    console.warn("Hata",e)
  }
}


  function selectPage() {
    storeData()
    navigation.navigate("Interest")
 
  

  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showDatePickerEnd = () => {
    setDatePickerVisibilityEnd(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideDatePickerEnd = () => {
    setDatePickerVisibilityEnd(false);
  };

  const handleConfirm = (date) => {
    // console.log(date)
    if(endTimes<date){
      hideDatePicker()
      alert("ALAAARRRMMMMMM")

    }

    else{

      setStartTimes(date);
      hideDatePicker();
    }
  };

  
  const handleConfirms = (param) => {
    if(firstTimes>param){
      hideDatePickerEnd()
      alert("ALAAARRRMMMMMM")
      
    }
    
    else{
      
      setEndTimes(param);
      // console.log(new Date(param).getHours())
      hideDatePickerEnd();
    }

    
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <View>
        <ImageBackground
          source={require('../assets/reminder_last.png')}
          style={{
            width: Dimensions.get('window').width,
            aspectRatio: 0.99,
          }}></ImageBackground>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={styles.container}>
          <View style={styles.mottoView}>
            <Text style={styles.mottoText}>Set daily Poems reminders</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionFirstBox}>
              <Text style={styles.sectionFirstBoxText}>How Many</Text>
            </View>

            <View style={styles.sectionSecondBox}>
              <View>
                <TouchableOpacity
                  onPress={() => setCounter(counter - 1)}
                  style={styles.minus}>
                  <Text style={styles.minusAndPlusText}>-</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.number}>
                <Text style={styles.numberText}>
                  {counter <= 1 ? 1 : counter}
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => setCounter(counter + 1)}
                  style={styles.plus}>
                  <Text style={styles.minusAndPlusText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionFirstBox}>
              <Text style={styles.sectionFirstBoxText}>Start at</Text>
            </View>

            <View style={styles.sectionSecondBox}>
              <View style={styles.clock}>
                <TouchableOpacity onPress={showDatePicker}>
                  <Text>{moment(firstTimes).format('LT')}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="time"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  is24Hour={true}
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionFirstBox}>
              <Text style={styles.sectionFirstBoxText}>End at</Text>
            </View>

            <View style={styles.sectionSecondBox}>
              <View style={styles.clock}>
              
                <TouchableOpacity onPress={showDatePickerEnd}>
                  <Text> {moment(endTimes).format('LT')} </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisibleEnd}
                  mode="time"
                  onConfirm={handleConfirms}
                  onCancel={hideDatePickerEnd}
                  is24Hour={true}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.getView}>
          <Buttons onSelectPage={() => selectPage()} title="Continue" />
        </View>
      </View>
    </View>
  );
};

export {EnterPoem};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: 'red',
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: 30,
  },
  mottoView: {
    // borderWidth: 2,
    // borderColor: '#f4511e',
    justifyContent: 'center',
    marginBottom: 10,
  },
  mottoText: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  getView: {
    flex: 0.4,
    // borderWidth: 2,
    // borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: height * 0.05,
  },
  section: {
    flexDirection: 'row',
    marginVertical: 10,
    // borderWidth: 2,
    // borderColor: 'purple',
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 18.2,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
  },
  sectionFirstBox: {
    // borderWidth: 2,
    flexDirection: 'row',
    // borderColor: 'purple',
    width: Dimensions.get('window').width / 3.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionFirstBoxText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionSecondBox: {
    flexDirection: 'row',
    // borderWidth: 2,
    // borderColor: 'purple',
    width: Dimensions.get('window').width / 2.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  plus: {
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    paddingHorizontal: 7,
    borderRadius: 8,
  },
  minusAndPlusText: {
    fontSize: 18,
  },
  number: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  clock: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderWidth: 2,
    borderColor: '#a4a4a4',
    borderRadius: 10,
  },
  numberText: {
    paddingTop: 4,
  },
  button: {
    backgroundColor: '#e53935',
    width: Dimensions.get('window').width * 0.75,
    aspectRatio: 5.5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    color: 'white',
  },
});

// import React, {useState} from 'react';
// import {SafeAreaView, View, Text, ScrollView, FlatList} from 'react-native';
// import {NumberItem, Button} from '../components';
// import {numberItem, enterPoem} from '../styles';

// const numbers = [
//   {id: 0, number: 1, isCheck: false, option: true},
//   {id: 1, number: 5, isCheck: false, option: false},
//   {id: 2, number: 10, isCheck: false, option: false},
//   {id: 3, number: 15, isCheck: false, option: false},
// ];

// const EnterPoem = (props) => {
//   const [list, setList] = useState(numbers);

//   function selectPage() {
//     props.navigation.navigate('Period');
//   }

//   async function changeColor(nums) {

//     let reset = [
//       { id: 0, number: 1, isCheck: false },
//       { id: 1, number: 5, isCheck: false },
//       { id: 2, number: 10, isCheck: false },
//       { id: 3, number: 15, isCheck: false },
//     ]
//     const numberIndex = reset.findIndex(item => item.id == nums)
//     reset[numberIndex].isCheck = true;
//     setList(reset)

//   }

//   const renderNumber = ({item}) => {
//     return <NumberItem item={item} onChange={() => changeColor(item.id)} />;
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={numberItem.general}>
//         <View style={numberItem.poemContainer}>
//           <Text style={numberItem.poemText}>
//             How many poems do you want to see in a day?
//           </Text>
//         </View>

//         <View style={numberItem.viewNumbers}>
//           <FlatList
//             data={list}
//             renderItem={renderNumber}
//             keyExtractor={(item, index) => index.toString()}
//             numColumns={2}
//           />
//         </View>

//         <View style={enterPoem.buttonView}>
//           <Button onSelect={() => selectPage()} />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export {EnterPoem};
