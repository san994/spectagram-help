import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, SafeAreaView,Platform,StatusBar} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize'
import Ionicons from "react-native-vector-icons/Ionicons";

export default class StoryCard extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                   <View style={styles.authorContainer}>
                       <View>
                         <Image source={require("../assets/profile_img.png")} style={styles.profileImage}></Image>
                       </View>
                       <View>
                         <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                       </View>
                   </View>
                   <Image source={require("../assets/post.jpeg")}style={styles.postImage}/>
                   <View style={styles.captionContainer}>
                      <Text style={styles.captionText}>{this.props.post.caption}</Text>
                   </View>
                   <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                   </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
      },
      authorContainer:{
        paddingLeft: RFValue(20),
        justifyContent: "center"
      },
      authorNameText:{
        fontSize: RFValue(18),
        color: "white"
      },
      profileImage:{
        resizeMode: "contain",
        height: RFValue(250), 
        alignItems: "center",
      },
      postImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
      },
      actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
      },
      captionText:{
        fontSize: RFValue(18),
        color: "white"
      },
      captionContainer:{
        paddingLeft: RFValue(20),
        justifyContent: "center"
      },
      likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
      },
      likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
      }
})