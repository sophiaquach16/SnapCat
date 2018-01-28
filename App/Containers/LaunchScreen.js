
import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.centered}>
            <Image source={Images.cat} style={{height: 250, width: 250, marginTop: 30}} />
            <Button
              onPress={() => console.log('hi')}
              title="Meow!"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />

      </View>
    )
  }
}
