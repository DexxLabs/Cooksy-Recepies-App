import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../data/colors';
import {fonts} from '../data/font';
import {TextInput} from 'react-native-gesture-handler';
//UI
const {height, width} = Dimensions.get('window');

const Login = () => {
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
};

export default Login;

const styles = StyleSheet.create({
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
