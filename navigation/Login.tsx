import * as Google from 'expo-google-app-auth';
import {Button} from 'react-native';
import React from 'react';
// export default function Login() {
// }
// 된거같긴한데..
export default function App({navigation}) {
  async function login() {
    
    const config = {
      // expoClientId: `705980003268-8ct5qea5r1vge6ve3qk6sspq10h0bq82.apps.googleusercontent.com`,
      // iosClientId: `<YOUR_IOS_CLIENT_ID>`,
      androidClientId: `705980003268-ajooolpei4vgbbfqkm61u71n6jl4nsen.apps.googleusercontent.com`,
      // iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
      // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
    };
    const result  = await Google.logInAsync(config);
    console.log(result.type)
    if (result.type === 'success') {
      /* Log-Out */
      console.log(result.accessToken);
      console.log(result.user);
      // await Google.logOutAsync({ accessToken, ...config });
      /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
    }
  }

  return (
    <Button
      title="Login"
      onPress={() => {
        login()
        }}
    />
  );
}
