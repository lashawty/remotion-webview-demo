import { SafeAreaView } from 'react-native';

import WebView from 'react-native-webview';

// before running this, you need to:
// 1. install "react-native-webview"  => yarn add react-native-webview
// 2. update the .env.local file in the web repo
// 3. NEXT_PUBLIC_API_URL=http://192.168.213.168:5283/api/ // replace with your own
// 4. run yarn dev on the web repo, you will see: - Network: http://192.168.213.168:3000
// 5. replace the domain constant below with your own

/**
 * This is the entry point for the video preview page.
 * props {
 *  projectId: string;
 *  videoId: string;
 *  token: string;
 * }
 */
const projectId = 'cf4521b5-b13e-4b1e-a116-366c9ac7c198'; 
const videoId = 'f9c6c4c5-5a35-4e6e-a0da-530b858b1a21';

// access token from BE
const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzYzExNDA5YS0zNTEyLTRlNjQtOTA0YS1hMmI1MjZjYTYxNzUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJWaWV3ZXIiLCJlbWFpbCI6Imh1c3RsZTA5ODVAZ21haWwuY29tIiwiZXhwIjoxNzU4Nzg2OTA4LCJpc3MiOiJ3d3cubGl2ZVN0cmVhbUNsYXNzLmFwcCIsImF1ZCI6Ind3dy5saXZlU3RyZWFtQ2xhc3MuY29tIn0.TaXidNTcoZh0O6CDk2TFvC8c4zAIA3CP1i8uNN6Nba_zban5eE4YAU9qQN_fxeosEqqRFrK7K25k1-lrvzYkwA';

/**
 * domain of the web app
 * replace the domain with your own
 */
const domain = 'http://192.168.213.168:3000'; // dev => run yarn dev on the web repo, you will see: - Network: http://192.168.213.168:3000

export default function VideoPreview() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: `${domain}/preview/${projectId}/${videoId}?token=${token}` }} 
          allowsInlineMediaPlayback
          webviewDebuggingEnabled
          mediaPlaybackRequiresUserAction={false}
        />
      </SafeAreaView>
  );
}

