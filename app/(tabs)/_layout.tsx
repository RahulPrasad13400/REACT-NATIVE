import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarShowLabel : false}}>
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
        <Tabs.Screen name="notifications" />
        <Tabs.Screen name="profile" />
    </Tabs>
  )
}
