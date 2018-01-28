
import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import DrawerButton from '../Components/DrawerButton.js'
import { Images } from '../Themes'
import Swiper from 'SnapCat/node_modules/react-native-drawer-layout-polyfill/dist/SwipeCards.js'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return ( 
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
              <Button
                onPress={() => console.log('hi')}
                title="Meow!"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <Swiper/>
          </View>

          <View style={styles.section} >
              <Button
                title='Snap a pic'
                onPress={() => navigate('CatCamera')}
              />
          </View>
        </ScrollView>
      </View>
    )
  }
}
