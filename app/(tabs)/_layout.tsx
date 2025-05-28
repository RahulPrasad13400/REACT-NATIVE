import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown : false, tabBarShowLabel : false, 
      tabBarActiveTintColor : "#4B0082",
      tabBarInactiveTintColor : COLORS.grey,
      tabBarStyle : {
        backgroundColor : "white",
        position : "absolute",
        paddingBottom : 8,
        borderTopWidth : 0,
        height : 40,
        elevation : 0
      }
    }}>
        <Tabs.Screen name="index" options={{tabBarIcon : ({size, color})=>{
            return <Ionicons name="home" size={size} color={color} />
        }}} />
        <Tabs.Screen name="bookmarks" options={{tabBarIcon : ({size, color})=>{
                return <Ionicons name="bookmark" size={size} color={color} />
            }
        }} />
        <Tabs.Screen name="create" options={{tabBarIcon : ({size})=>{
            return <Ionicons name="add-circle" size={size} color={COLORS.primary} />
        }}} />
        <Tabs.Screen name="notifications" options={{tabBarIcon : ({size, color}) =>{
          return <Ionicons name="heart" size={size} color={color} />
        }}} />
        <Tabs.Screen name="profile" options={{tabBarIcon : ({size, color}) =>{
          return <Ionicons name="person-circle" size={size} color={color} />
        }}} />
    </Tabs> 
  )
}
