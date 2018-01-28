import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import DrawerButton from '../Components/DrawerButton.js'
import { Images } from '../Themes'
import { Button } from 'react-native'
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return ( 
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
              <Button
                title='Snap a pic'
                onPress={() => navigate('CatCamera')}
              />
          </View>

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}