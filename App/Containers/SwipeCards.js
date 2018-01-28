'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
 
import SwipeCards from 'react-native-swipe-cards';
 
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    )
  }
}
 
class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more meows for now!</Text>
      </View>
    )
  }
}
 
const cards = [
  {name: '1', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'},
  {name: '2', image: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'},
  {name: '3', image: 'https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg'},
  {name: '5', image: 'https://media2.giphy.com/media/12PA1eI8FBqEBa/giphy.gif'}
]
 
const cards2 = [
]
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }
 
  handleYup (card) {
    console.log("yup")
  }
 
  handleNope (card) {
    console.log("nope")
  }
 
  cardRemoved (index) {
    console.log('Meow!');
 
    let CARD_REFRESH_LIMIT = 3
 
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
 
      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)
 
        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }
 
    }
 
  }
 
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}
 
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
 
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}
 
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})