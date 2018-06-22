import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Picker } from 'react-native';
import { Container, Header, Content, Accordion, Icon, Body, Left, Title, Subtitle, Right } from "native-base";
import { Button } from "react-native-elements";
import PageHeader from "./../pageheader/pageheader.js"
import { datatill } from "./../data/data.js"
import {mapStateToProps} from "./../../store/selector.js"
import { connect } from "react-redux";

class AccordionTills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigation: this.props.navigation
    }
  }

  _renderIcon = (status) => {
    if (status === "OK") {
      return <Icon style={{ fontSize: 18, color:"green" }} name="check" type="FontAwesome" />
    }
    if (status === "WARNING") {
      return <Icon style={{ fontSize: 18, color:"orange" }} name="warning" type="FontAwesome" />
    }
    else {
      return <Icon style={{ fontSize: 18, color:"red" }} name="close" type="FontAwesome" />
    }
  }

  _renderHeader = (title) => {
    return (
      <View
        style={styles.header}
      >
        <Text style={styles.title}>
          Caisse {title.numks}
        </Text>
        <Text>
          {title.serial}
        </Text>
        {this._renderIcon(title.state)}

        <Icon style={{ fontSize: 12 }} name="chevron-down" type="FontAwesome" />
      </View>
    );
  }

  _renderContent = (content) => {
    return (
      <View style={styles.content}>
        <View style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          width:"100%",
          marginBottom:10,
        }}>
          <Text>Modèle : {content.model}</Text>
          <Text>Marque : {content.brand}</Text>
          <Text>Etat : {content.status}</Text>
          <Text>N° de série : {content.serial}</Text>
          <Text>Dernier inventaire : {content.lastinventory}</Text>
        </View>
        <Button
          light
          icon={{name: 'check-square-o', type: 'font-awesome'}}
          buttonStyle={{
            backgroundColor: "rgba(72, 167,74, 1)",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            width: 120,
            height: 40,
            margin: 5,
          }}
          title='Confirmer' />
        <Button
          light
          icon={{name: 'edit', type: 'font-awesome'}}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            width: 100,
            height: 40,
            margin:5,

          }}
          title='Modifier' />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Container style={styles.padder}>
          <PageHeader navigation={this.props.navigation}/>
          <Content padder >
            <Text>Etat des caisses{console.log(this.props.loggedIn)}</Text>
            <Accordion
              dataArray={datatill}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
               />
          </Content>
        </Container>
    </View>
    );
  }
}

export default connect(mapStateToProps)(AccordionTills);

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: "row",
    padding: 16,
    marginBottom:2,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width:'100%',
    borderColor:'#A6B3C1',
    borderTopWidth:1,
  },
  pageheader: {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0082C3",
    borderColor:'#A6B3C1',
    borderBottomWidth:1,
  },
  pagetitle: {
    fontWeight:"bold",
    fontSize:21,
    color:"white",
  },
  title: {
    fontSize:16,
    fontWeight:"bold",
  },
  content: {
    marginBottom:15,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    flex:1,
    flexWrap:"wrap",
    width:"93%",
  },
  padder: {
    display:"flex",
    flex:1,
    flexWrap:"wrap",
    justifyContent:"flex-end",
  },
});
