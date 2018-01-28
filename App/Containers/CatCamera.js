import React, { Component } from 'react'
import { BackHandler, Text, Image, View, Dimensions, StyleSheet, Alert, Button } from 'react-native'
import Camera from 'react-native-camera';
import { Images } from '../Themes'
import RNFS from 'react-native-fs'

export default class CatCamera extends Component {
  componentWillMount() {
    const { goBack } = this.props.navigation;
    BackHandler.addEventListener('hardwareBackPress', function() {
      goBack();
      return true;
    });
  }
  sendPicture(photo) {
    let file = photo.path;
    let photoBinary = null;
    RNFS.readFile(file, 'base64')
    .then(res => { 
      console.log('read ok')
      photoBinary = res;
    })
    .catch(err => {
      console.log('read error')
      console.log(err)
    })
    let data = {
      "location": {
        "latitude": "53.234",
        "longitude": "53.765"
      },
      "photo": photoBinary,
      "submited_by": "ihopethismakesit"
    }
    console.debug('send picture?');
    console.debug(photoBinary);
    fetch('https://shielded-journey-70465.herokuapp.com/submitCat', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.debug(res)
    });
  }



  takePicture() {
   const { navigate } = this.props.navigation;
   this.camera.capture()
      .then(
        (data) => {
          console.debug('Taking a picture')
          console.debug(data.path);
          console.debug(JSON.stringify(data));
          this.sendPicture(data)
          navigate('LaunchScreen')
        }
      )
      .catch(err => console.error(err));
  }

  render () {
    return (
      <Camera
         ref={(cam) => {
             this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
             <Button title="CLICK" style={styles.capture} onPress={this.takePicture.bind(this)}>
             </Button>
      </Camera>
    )
  }
}


const styles = StyleSheet.create({
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:100
  }
})



/*
  capture: {
     flex: 0,
     backgroundColor: '#fff',
     borderRadius: 5,
     color: '#000',
     padding: 10,
     margin: 40
  }
  */