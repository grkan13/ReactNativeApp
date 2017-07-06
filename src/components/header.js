import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style = { viewStyle }>
      <Text style = { textStyle} > Header < /Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },

  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 60,
    paddingTop:15,
    shadowColor: '#000',
    shadowOffset: {width:0 , height: 10}
  }
};

export default Header;
