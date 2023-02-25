import { Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24, fontFamily: 'NotoSans_500Medium', fontWeight: '500' }
})

const Heading = ({ children }: { children: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default Heading