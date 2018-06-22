import React from 'react';
import Drawer from './../drawer/drawer.js';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
import {mapStateToProps} from "./../../store/selector.js"

// isItLogged(true)
// function isItLogged(log) {
//   if(log) {
//     return TabNav
//   }
// }
class login extends React.Component {
  render() {
    console.log(this.props.loggedIn);
    if (this.props.loggedIn) {
      return (
          <View style={{flex:1}}>
            <Drawer/>
          </View>
      );
    }
    else {
      return (
          <View style={{flex:1}}>
            <Text>ko</Text>
          </View>
      );
    }

  }
}

export default connect(mapStateToProps)(login);
