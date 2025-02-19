import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../data/colors';
import {fonts} from '../data/font';
import {FlatList, Pressable, ScrollView, TextInput} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CategoryBox from '../components/CategoryBox';
import { AppUser, cooksy, recipeCategories } from '../data/cooksyData';
import MainCard from '../components/MainCard';
//UI
const {height, width} = Dimensions.get('window');

const txt = ['Breakfast?','Hungry?','What to eat today?','Starving?','Got any craving?']

const SearchBarText = () => {
  return txt[Math.floor(Math.random()*(txt.length))]
}

const Login = () => {
  const [user,setUser]=useState(true)
  const [seletedId,setSelectedId] = useState(1)
  const [seletedCategory,setSelectedCategory] = useState('Popular')
  const navigation = useNavigation()
  if(!user){
  return (
    <View style={{flex: 1, backgroundColor: colors.background, padding: 12}}>
      <StatusBar backgroundColor={colors.background} />
      <View style={styles.textWrapper}>
        <Text style={styles.mainText}>Login</Text>
      </View>

      <View style={styles.loginBox}>
        <View style={{}}>
          <TextInput
            style={styles.inputBox}
            caretHidden={true}
            placeholder="Enter Number"
            keyboardType="decimal-pad"
            height="50"
          />
        </View>
        <View>
          <TouchableOpacity>                                                                                            
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

return(
  <View style={{flex:1,backgroundColor: colors.background,paddingHorizontal:12}}>
  <StatusBar backgroundColor={colors.background}/>
  {/* Header */}
  <View style={styles.headerbar}>
    <View style={styles.menu}>
      <Text style={styles.headerText}>Hello</Text>
      <Text style={styles.headerTextMain}>{AppUser}</Text>
    </View>
    <View style={styles.heart}>
      <Image style={{height:30, width:30}} source={require('../images/heart.png')}/>
    </View>
  </View>

  {/* searchBar */}
  <View style={styles.searchbarWrapper}>
    <TextInput style={styles.searchBar} placeholderTextColor={colors.text} placeholder={SearchBarText()} caretHidden={true} />
  </View>

  {/* categories */}
  <View style={styles.categoryWrapper}>
    <Text style={{fontFamily:fonts.m,color: colors.text,fontSize:16}}>Categories</Text>
    <View style={{marginVertical:15,flexDirection:'row'}}>
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={recipeCategories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={()=>{setSelectedId(item.id)
        setSelectedCategory(item.name)}}>
          <CategoryBox name={item.name} focused={seletedId==item.id}/>
        </Pressable>
      )}
    />
    </View>
  </View>


  {/* recepies */}
  <View style={styles.categoryWrapper}>
    <Text style={{fontFamily:fonts.b,color: colors.text,fontSize:20}}>{seletedCategory}</Text>
    <View style={{marginVertical:15,flexDirection:'row'}}>
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={cooksy}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
          <MainCard title={item.title} time={item.time}/>
        </Pressable>
      )}
    />
    </View>
  </View>
  </View>
)
};

export default Login;

const styles = StyleSheet.create({
  categoryWrapper: {
    marginVertical:6,
  },
  searchBar:{
    borderBlockColor: colors.sec,
    borderRadius: 18,
    backgroundColor: colors.sec,
    height: height/18,
    padding:12,
    fontFamily: fonts.s
  },
  searchbarWrapper:{
    marginVertical: 15
  },
  headerText:{
    color: colors.text,
    fontFamily : fonts.m,
    fontSize:16

  },
  headerTextMain:{
    color: colors.text,
    fontFamily : fonts.b,
    fontSize:28
  },
  menu:{
    
  },
  heart:{},
  headerbar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6
  },
  mainText: {
    fontFamily: fonts.b,
    color: colors.text,
    fontSize: 24,
  },
  loginBox: {
    width: width / 1.05,
    height: height / 4.5,
    backgroundColor: colors.sec,
    borderRadius: 20,
    position: 'absolute',
    top: height / 2 - height / 6,
    padding: 16,
    left: width / 2 - width / 2.1,
    justifyContent: 'space-evenly',
  },
  textWrapper: {},
  inputBox: {
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: fonts.s,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  loginButtonText: {
    fontFamily: fonts.b,
    color: colors.text,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 16,
    backgroundColor: colors.pri,
    borderRadius: 10,
    marginVertical: 6,
  },
});
