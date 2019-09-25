import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (

    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    height:45,
    borderColor: '#007aff',
    borderWidth: 1,
    backgroundColor:'rgb(237,245,255)',
    flexDirection: 'row',
    borderColor: '#ddd',
  }
};

export default Card;