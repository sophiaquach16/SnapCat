import React, { Component } from 'react'
import { BackHandler, Text, Image, View, Dimensions, StyleSheet, Alert, Button } from 'react-native'
import Camera from 'react-native-camera';
import { Images } from '../Themes'

export default class CatCamera extends Component {
  componentWillMount() {
    const { goBack } = this.props.navigation;
    BackHandler.addEventListener('hardwareBackPress', function() {
      goBack();
      return true;
    });
  }
  sendPicture(photo) {
    let data = new FormData();
    data.append('name', 'newPhoto');
    data.append('photo', {
      uri: photo.path,
      type: 'image/jpg',
      name: 'random.jpg'

    });
    data.append("location": {
        "latitude": "23.234",
        "longitude": "23.765"
    });
    data.append("submited_by": "placeholderperson")
    /*let data = {
      "location": {
        "latitude": "23.234",
        "longitude": "23.765"
      },
      "photo": photo.path,
      "submited_by": "placeholderperson"
    }*/
    console.debug('send picture?');
    fetch('https://shielded-journey-70465.herokuapp.com/submitCat', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
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