// import { Stack } from "expo-router";
// import { ClerkProvider } from '@clerk/clerk-expo'
// import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "../components/InitialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

export default function RootLayout() {
  return <ClerkAndConvexProvider>
    <SafeAreaProvider>
      <SafeAreaView style={{flex : 1 }}>
        {/* <Stack screenOptions={{headerShown : false}} /> */}
          {/* <Stack.Screen name="index" options={{headerShown : false}} /> */}
        {/* </ Stack> */}
         <InitialLayout />
      </SafeAreaView> 
    </SafeAreaProvider>
  </ClerkAndConvexProvider>
}
