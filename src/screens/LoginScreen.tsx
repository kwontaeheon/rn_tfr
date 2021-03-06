import * as Google from 'expo-google-app-auth';
import {Button} from 'react-native';

import useLogin from '../hooks/useLogin';
import React, { useEffect } from 'react';
import useDiary from '../hooks/useDiary';
// https://docs.expo.io/versions/v38.0.0/sdk/google/ 
// https://m.blog.naver.com/PostView.nhn?blogId=chandong83&logNo=221890147009&categoryNo=22&proxyReferer=https:%2F%2Fwww.google.com%2F



import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../../types';

import {loginData} from '../modules/loginManager';


export default function LoginScreen({
  navigation,
}:
 StackScreenProps<RootStackParamList, 'LoginScreen'>) {
  const { login, onLoginSuccess } = useLogin();
  const { diary, onAddDiary, onRemoveDiary, onModifyDiary, onFetchMoreDiary } = useDiary();

  async function loginGoogle({navigation}) {
    

    const config = {
      // clientId: `705980003268-8ct5qea5r1vge6ve3qk6sspq10h0bq82.apps.googleusercontent.com`,
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
      //  email, familyName, givenName, id, name, photoUrl
      onLoginSuccess(String(result.accessToken),
         String(result.user.email),
         String(result.user.familyName),
         String(result.user.givenName),
          String("Google_" + result.user.id),
            String(result.user.name),
              String(result.user.photoUrl)
         )
      navigation.replace('Root');
    }
  }

  useEffect(() =>  {
    if (login != undefined) {
      // 조건수정필요함 
      if (login.email != undefined 
        && login.email != "") {
        console.log('already logined!')
        console.log(login);
        navigation.replace('Root');
      }
    }
  },);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> 마음일기에 구글로 로그인하세요.</Text>
      <TouchableOpacity onPress={() => loginGoogle({navigation})} style={styles.link}>
        <Text style={styles.linkText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
