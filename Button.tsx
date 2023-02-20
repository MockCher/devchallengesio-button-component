import { useMemo } from "react"
import { Pressable, StyleSheet, Text } from "react-native"

const Button = ({ buttonColor = '#E0E0E0', textColor = '#3F3F3F' }) => {

    const styles = useMemo(() => StyleSheet.create({
        buttonContainer: {
            backgroundColor: buttonColor,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 6
        },
        buttonText: {
            fontSize: 14,
            color: textColor,
            fontWeight: '500',
            shadowColor: "rgba(51, 51, 51, 0.2)",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
        }
    }), [buttonColor])

    return (
        <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Button</Text>
        </Pressable>
    )
}

export default Button