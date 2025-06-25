import { SafeAreaView } from 'react-native';

import WebView from 'react-native-webview';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <WebView
          source={{ uri: 'https://timeline.remotion.dev/' }} 
        />
      </SafeAreaView>
  );
}

