import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'
function IconButton({ icon, size, color, onPress }) {
    const navigation = useNavigation()
    return (
        <Pressable style={({pressed})=>{pressed && styles.pressed}} onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} color={color} size={size} />
            </View>
        </Pressable>
    )
}
export default IconButton
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        margin: 8
    },
    pressed:{
        opacity:0.75
    }
})