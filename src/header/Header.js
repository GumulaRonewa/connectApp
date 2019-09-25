

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Card from './Card';

const Header = (props) => {

  return (
    <Card style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.styleTitle}>{props.headerText}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  styleTitle: {
    fontSize: 24,
    alignSelf: 'center',
    alignItems: 'center',
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: '500'
  }

});

export default Header;
