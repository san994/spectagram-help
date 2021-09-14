import React, { Component } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  StyleSheet,
  Platform, 
  StatusBar, 
  SafeAreaView, 
  TextInput, 
  Image
} from 'react-native';

import DropDownPicker from "react-native-dropdown-picker";

import {RFValue} from 'react-native-responsive-fontsize';


export default class CreatePost extends Component {
    constructor(){
        super()
        this.state={
            preview_Image:'image_1',
            dropdownHeight:40,
            caption:''
        }
    }
    render() {
        let previewImage ={
            'image_1':"../assets/image_1.jpg",
            'image_2':"../assets/image_2.jpg",
            'image_3':"../assets/image_3.jpg",
            'image_4':"../assets/image_4.jpg",
            'image_5':"../assets/image_5.jpg",
            'image_6':"../assets/image_6.jpg",
            'image_7':"../assets/image_7.jpg",
        }
        return (
            <View>
            <SafeAreaView/>
             <View>
             <View>
                <Image source={require('../assets/logo.png')}></Image>
              </View>
              <View>
                   <Text >Spectagram</Text>
              </View>
            </View>
            <View>
             <ScrollView>
                 <Image source={previewImage[this.state.preview_Image]}></Image>
                 <View>
                     <DropDownPicker
                      item={[
                          {label:'image 1',value:'image_1'},
                          {label:'image 2',value:'image_2'},
                          {label:'image 3',value:'image_3'},
                          {label:'image 4',value:'image_4'},
                          {label:'image 5',value:'image_5'},
                          {label:'image 6',value:'image_6'},
                          {label:'image 7',value:'image_7'},
                      ]}
 
                       defaultValue={this.state.preview_Image}

                       containerStyle={{
                          height: 40,
                          borderRadius: 20,
                          marginBottom: 10
                        }}
      
                        onOpen={() => {
                          this.setState({ dropdownHeight: 170 });
                        }}
      
                        onClose={() => {
                          this.setState({ dropdownHeight: 40 });
                        }}
      
                        style={{ backgroundColor: "transparent" }}
                        
                        itemStyle={{
                          justifyContent: "flex-start"
                        }}
      
                        dropDownStyle={{ backgroundColor: "#2f345d" }}
      
                        labelStyle={{
                          color: "white",
                         
                        }}
      
                        arrowStyle={{
                          color: "white",
                       
                        }}
      
                        onChangeItem={item =>
                          this.setState({
                            preview_Image: item.value
                          })
                        }
                      
                     />
                 </View>

                 <TextInput
                  onChangetext={caption=> this.setState({ caption })}
                  placeholder={'caption'}
                  numberofLine={4}
                  multiLine={true}
                 />

             </ScrollView>
            </View>
            <View style={{flex:0.08}}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.85
    }
  })