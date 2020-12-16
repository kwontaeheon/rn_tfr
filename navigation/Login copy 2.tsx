import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";
export default function  login({navigation})  {
// const OpenURLButton = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     // Checking if the link is supported for links with custom URL scheme.
//     const supported = await Linking.canOpenURL(url);

//     if (supported) {
//       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//       // by some browser in the mobile
//       await Linking.openURL(url).then(result => {
//         navigation.navigate('Root');
//       });
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);

//   return <Button title={children} onPress={handlePress} />;
// };


//   return (
//     <View style={styles.container}>
//       <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
//       <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
//     </View>
//   );
  return (
    google({
      appId: '705980003268-q5gu3rp1pc8mias8qoecd7lmcpl481mj.apps.googleusercontent.com',
      callback: 'com.maumilgi:/oauth2redirect',
    }).then((info: any) => {
      console.log(info.user); // - user details from the provider
      console.log(info.credentials) ; // - tokens from the provider
      navigation.navigate('Root');
    }).catch((error: any) => {
      // error.code
      console.log(error.description);
    })
  )
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

