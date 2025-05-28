import { useAuth } from '@clerk/clerk-expo'
import { Stack, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function InitialLayout() {

  const { isLoaded, isSignedIn } = useAuth() 

  const segments = useSegments()
  const router = useRouter()

  useEffect(()=>{

    if(!isLoaded){
        return
    }

    const inAuthScreen = segments[0] === '(auth)'
    if(!inAuthScreen && !isSignedIn){
         router.replace("/(auth)/login")
    }else if(isSignedIn && inAuthScreen){
        router.replace("/(tabs)")
    }

  },[isLoaded, isSignedIn, segments])

  if(!isLoaded) return null

  return <Stack screenOptions={{headerShown : false}} />
  
} 

