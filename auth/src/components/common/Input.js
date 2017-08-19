import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => { // props can be received by (props) => {}
  const { inputStyle, labelStyle, containerStyle } = styles;

  console.log("Input Component")

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput // using state for reusable component purpose
        secureTextEntry={secureTextEntry} // undefined is considered as false
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle} // {{ height:20, width: 100 }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2 // since input and label are siblings, so 2 means 2/3
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1// and 1 means 1/3
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
