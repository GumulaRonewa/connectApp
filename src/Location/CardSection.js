import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 70,
    backgroundColor:'rgb(237,245,255)',
    borderColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2 
  }
};

export default CardSection;
