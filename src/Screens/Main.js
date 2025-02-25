import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../data/colors';
import { fonts } from '../data/font';
import { FlatList, Pressable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CategoryBox from '../components/CategoryBox';
import { AppUser, cooksy, recipeCategories } from '../data/cooksyData';
import MainCard from '../components/MainCard';
import * as Animatable from 'react-native-animatable';

// UI
const { height, width } = Dimensions.get('window');

const txt = ['Breakfast?', 'Hungry?', 'What to eat today?', 'Starving?', 'Got any craving?'];

const SearchBarText = () => txt[Math.floor(Math.random() * txt.length)];

const Login = () => {
  const [user, setUser] = useState(true);
  const [selectedId, setSelectedId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const navigation = useNavigation();

  if (!user) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, padding: 12 }}>
        <StatusBar backgroundColor={colors.background} />
        <View style={styles.textWrapper}>
          <Text style={styles.mainText}>Login</Text>
        </View>
        <View style={styles.loginBox}>
          <TextInput style={styles.inputBox} placeholder="Enter Number" keyboardType="decimal-pad" height={50} />
          <TouchableOpacity>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const renderHeader = () => (
    <>
      {/* Header */}
      <View style={styles.headerbar}>
        <View style={styles.menu}>
          <Text style={styles.headerText}>Hello</Text>
          <Text style={styles.headerTextMain}>{AppUser}</Text>
        </View>
        <View style={styles.heart}>
          <Image style={{ height: 30, width: 30 }} source={require('../images/heart.png')} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchbarWrapper}>
        <TextInput style={styles.searchBar} placeholderTextColor={colors.text} placeholder={SearchBarText()} />
      </View>

      {/* Categories */}
      <View style={styles.categoryWrapper}>
        <Text style={{ fontFamily: fonts.b, color: colors.text, fontSize: 18, marginBottom:12 }}>Categories</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recipeCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setSelectedId(item.id);
                setSelectedCategory(item.name);
              }}
            >
              <CategoryBox name={item.name} focused={selectedId == item.id} />
            </Pressable>
          )}
        />
      </View>

      {/* Selected Category Title */}
      <View style={styles.categoryWrapper}>
        <Text style={{ fontFamily: fonts.b, color: colors.text, fontSize: 18 }}>{selectedCategory}</Text>
      </View>
    </>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, paddingHorizontal: 12 }}>
      <StatusBar backgroundColor={colors.background} />
      <FlatList
        ListHeaderComponent={renderHeader} 
        data={cooksy.filter((recipe) => recipe.category.includes(selectedCategory))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable>
              <MainCard title={item.title} img={item.img} time={item.time} desc={item.desc} diffculty={item.difficulty} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  categoryWrapper: {
    marginVertical:6
  },
  searchBar: {
    borderBlockColor: colors.sec,
    borderRadius: 18,
    backgroundColor: colors.sec,
    height: height / 18,
    padding: 12,
    fontFamily: fonts.s,
  },
  searchbarWrapper: {
    marginVertical: 15,
  },
  headerText: {
    color: colors.text,
    fontFamily: fonts.m,
    fontSize: 16,
  },
  headerTextMain: {
    color: colors.text,
    fontFamily: fonts.b,
    fontSize: 28,
  },
  menu: {},
  heart: {},
  headerbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
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
    padding: 16,
    backgroundColor: colors.pri,
    borderRadius: 10,
    marginVertical: 6,
  },
});
