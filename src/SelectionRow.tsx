import { PropsWithChildren } from "react"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: { flexDirection: 'column', width: '100%', marginBottom: 15 },
    text: { marginBottom: 10 },
    content: { flexDirection: 'row', justifyContent: 'space-evenly', width: '90%' }
})

const SelectionRow = ({ label, children }: PropsWithChildren<{ label: string }>) => (
    <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.content}>{children}</View>
    </View>
)

export default SelectionRow