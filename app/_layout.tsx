import { Stack } from "expo-router";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return <ClerkProvider tokenCache={tokenCache}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex : 1 }}>
        <Stack screenOptions={{headerShown : false}}>
          {/* <Stack.Screen name="index" options={{headerShown : false}} /> */}
        </Stack>
      </SafeAreaView> 
    </SafeAreaProvider>
  </ClerkProvider>
}
