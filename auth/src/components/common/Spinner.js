import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} /> 
    </View>
  );
};

const styles = {
  spinnerStyle: {
      flex: 1, // to make it full in width
      justifyContent: 'center', // to make it nicely centered
      alignItems: 'center'
  }
};

export { Spinner };
