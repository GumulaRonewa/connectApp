import React from 'react';
import { View ,StyleSheet} from 'react-native';

const CardS = (props) => {
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
    backgroundColor:'rgb(237,245,255)',
    borderColor: '#007aff',
    flexDirection: 'row',
    borderColor: '#ddd',
  }
};
export default CardS;