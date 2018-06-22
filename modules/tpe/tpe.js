import React from 'react';
import { Text, View, Button, ScrollView} from 'react-native';
import PageHeader from "./../pageheader/pageheader.js";
import { SearchBar, ListItem } from 'react-native-elements'
import { dataped } from "./../data/data.js"


class Tpe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TepList: dataped,
      TepListSrc: dataped,
    }
  }

  render(){
    return(
      <View style={{flex:1}}>
        <PageHeader navigation={this.props.navigation}/>
        <SearchBar
          lightTheme
          round
          searchIcon={{ size: 28 }}
          placeholder='Rechercher un TPE'
          onChangeText={(value) => this.setState({TepList : this.state.TepListSrc.filter(Tep => Tep.serial.includes(value))})}
          onClear={(value) => this.setState({TepList : this.state.TepListSrc.filter(Tep => Tep.serial.includes(value))})}
          />

        <ScrollView>
          {
    this.state.TepList.map((tpe,i) => (
      <ListItem
        key={i}
        title={tpe.serial}
        subtitle={"Caisse "+tpe.numks}
      />
    ))
  }
</ScrollView>
      </View>

    )
  }
}

export default Tpe
