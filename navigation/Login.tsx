import * as Google from 'expo-google-app-auth';
import {Button} from 'react-native';
import React from 'react';
// https://docs.expo.io/versions/v38.0.0/sdk/google/ 
// https://m.blog.naver.com/PostView.nhn?blogId=chandong83&logNo=221890147009&categoryNo=22&proxyReferer=https:%2F%2Fwww.google.com%2F


// 된거같은 로그.. 
// success
// ya29.a0AfH6SMCvUfe_PQRyqPldluLRyDU7PzgkPox69m1-oY5rz6GhE6_tkDPyzbqBicEdKrc3I5uDtr4u9mkBMv7yejAGZWG6nfqi58Ns_nf7CLE1I6EN1UBdrV0ZDjxtOG5Ht0Xhvr1MGUd51f-wcY0UrK9kFlL5tDubaPB7RY2OKWA
// Object {
//   "email": "kwontaeheon@gmail.com",
//   "familyName": "Kwon",
//   "givenName": "Taeheon",
//   "id": "105487263462602985397",
//   "name": "Taeheon Kwon",
//   "photoUrl": "https://lh3.googleusercontent.com/-SHl9nxC-w1o/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckMqTtpzHdqN05V-uHGnO0UfbDZJg/s96-c/photo.jpg",
// }



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
      console.log(result.accessToken); // ya29.a0AfH6SMCvUfe_PQRyqPldluLRyDU7PzgkPox69m1-oY5rz6GhE6_tkDPyzbqBicEdKrc3I5uDtr4u9mkBMv7yejAGZWG6nfqi58Ns_nf7CLE1I6EN1UBdrV0ZDjxtOG5Ht0Xhvr1MGUd51f-wcY0UrK9kFlL5tDubaPB7RY2OKWA
      console.log(result.user); // // Object {
        //   "email": "kwontaeheon@gmail.com",
        //   "familyName": "Kwon",
        //   "givenName": "Taeheon",
        //   "id": "105487263462602985397",
        //   "name": "Taeheon Kwon",
        //   "photoUrl": "https://lh3.googleusercontent.com/-SHl9nxC-w1o/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckMqTtpzHdqN05V-uHGnO0UfbDZJg/s96-c/photo.jpg",
        // }
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
