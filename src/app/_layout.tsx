import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { Text, View } from 'react-native'

import '../global.css'
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync()

export default function LayoutApp() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) return null

  if (fontsLoaded) SplashScreen.hideAsync()

  return (
    <>
      <View>
        <Text className='font-regular text-2xl'>AQUI!!!</Text>
      </View>

      <StatusBar backgroundColor='#0E0F11' style='light' translucent={false} />
    </>
  )
}
