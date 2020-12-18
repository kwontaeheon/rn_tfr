
// https://docs.expo.io/guides/authentication/#google

// 스크린 이동은??

import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '705980003268-m4sjefkh31ieiu4m6gbc100pbit2c2jq.apps.googleusercontent.com',
    iosClientId: '705980003268-q5gu3rp1pc8mias8qoecd7lmcpl481mj.apps.googleusercontent.com',
    androidClientId: '705980003268-m4sjefkh31ieiu4m6gbc100pbit2c2jq.apps.googleusercontent.com',
    webClientId: '705980003268-8ct5qea5r1vge6ve3qk6sspq10h0bq82.apps.googleusercontent.com',
    
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      
      }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        
        promptAsync()
        }}
    />
  );
}