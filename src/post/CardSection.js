import React from 'react';
import { View ,StyleSheet} from 'react-native';

const CardSection = (props) => {
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
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor:'#686cc3',
    borderColor: '#007aff',
    flexDirection: 'row',
    borderColor: '#ddd',
  }
};
export default CardSection;