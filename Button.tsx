import { useEffect, useMemo, useState } from "react"
import { Pressable, StyleSheet, Text } from "react-native"

const useButtonStyle = (buttonColor: string, textColor: string) => {

    return useMemo(() => StyleSheet.create({
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
    }), [buttonColor, textColor])
}

const Button = ({ buttonColor = '#E0E0E0', textColor = '#3F3F3F', hoverButtonColor = '#AEAEAE' }) => {

    const [isPressed, setIsPressed] = useState(false)

    const _in = () => setIsPressed(true)
    const _out = () => setIsPressed(false)

    const styles = useButtonStyle(isPressed ? hoverButtonColor : buttonColor, textColor)

    return (
        <Pressable style={styles.buttonContainer} onPressIn={_in} onPressOut={_out} onHoverIn={_in} onHoverOut={_out}>
            <Text style={styles.buttonText}>Button</Text>
        </Pressable>
    )
}

export default Button