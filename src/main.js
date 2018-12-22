import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon, Button } from "react-native-elements";


class Content extends React.Component {
  render() {
    const uri =
      "https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png";

    return (
      <View>



        <Text style={{ color: "red", fontSize: 24 }}>
          hi Leo, Open up App.js to start working on your app!
        </Text>
        <Button
  title='BUTTON' />

<Button
  raised
  color="yellow"
  icon={{name: 'cached'}}
  title='BUTTON WITH ICON' />

<Button
  large
  rightIcon={{name: 'code'}}
  title='LARGE WITH RIGHT ICON' />

<Button
  large
  icon={{name: 'envira', type: 'font-awesome'}}
  title='LARGE WITH ICON TYPE' />

      </View>
    );
  }
}



export default Content;
