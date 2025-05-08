import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function login() {
  return (
    <View style={styles.container}>

     <View style={styles.brandSection}> 
      <View style={styles.logoContainer}>
       <Ionicons name='camera' size={32} color={COLORS.primary} />
      </View>
      <Text style={styles.appName}>Flickify</Text>
      <Text style={styles.tagline}>Share the moments</Text>
     </View>

     <View style={styles.illustrationContainer}>
      <Image source={require("../../assets/images/Online world-cuate.png")} style={styles.illustration} resizeMode='cover' />
     </View>

     <View style={styles.loginSection}> 
      <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
        <View style={styles.googleIconContainer}>
          <Ionicons name='logo-google' size={20} color={COLORS.surface} />
        </View>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By continuing, you agree to our Terms and Privacy Policy
      </Text>
     </View>

    </View>
  )
}
