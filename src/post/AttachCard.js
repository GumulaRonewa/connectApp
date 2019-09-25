import React from 'react';
import { View } from 'react-native';

const AttachCard = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 50,
    backgroundColor:'rgb(237,245,255)',
    flexDirection: 'column',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2 
  }
};

export default AttachCard;