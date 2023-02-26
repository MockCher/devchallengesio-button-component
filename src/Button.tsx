import { useMemo, useState } from "react"
import { Platform, Pressable, StyleSheet, Text, ViewStyle } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonVariant = 'default' | 'outline' | 'text'
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
    variant?: ButtonVariant
    disabled?: boolean
    startIcon?: string
    endIcon?: string
    color?: ButtonColor
    size?: ButtonSize
    label: string
    onPress?: () => void
    shadow?: boolean
    style?: ViewStyle

}

const useButtonStyle = (
    variant: ButtonVariant,
    color: ButtonColor,
    size: ButtonSize,
    isPressed: boolean,
    disabled: boolean,
    shadow: boolean) => {

    return useMemo(() => {

        const sizeStyles = StyleSheet.create({
            sm: {
                paddingHorizontal: 12,
                paddingVertical: 6,
            },
            md: {
                paddingHorizontal: 16,
                paddingVertical: 8,
            },
            lg: {
                paddingHorizontal: 22,
                paddingVertical: 11,
            }
        })

        const colorsStyles = StyleSheet.create({
            disabled: {
                backgroundColor: '#E0E0E0',
                color: '#3F3F3F',
                borderColor: '#E0E0E0',
            },
            default: {
                backgroundColor: '#E0E0E0',
                color: '#3F3F3F',
            },
            defaultHovered: {
                backgroundColor: '#AEAEAE',
                color: '#3F3F3F',
            },
            defaultFaded: {
                backgroundColor: 'rgba(41, 98, 255, 0.1)',
                color: '#3F3F3F',
            },
            primary: {
                backgroundColor: '#2962FF',
                color: '#FFFFFF',
            },
            primaryHovered: {
                backgroundColor: '#0039CB',
                color: '#FFFFFF',
            },
            primaryFaded: {
                backgroundColor: 'rgba(41, 98, 255, 0.1)',
                color: '#FFFFFF',
            },
            secondary: {
                backgroundColor: '#455A64',
                color: '#FFFFFF',
            },
            secondaryHovered: {
                backgroundColor: '#1C313A',
                color: '#FFFFFF',
            },
            secondaryFaded: {
                backgroundColor: 'rgba(69, 90, 100, 0.1)',
                color: '#FFFFFF',
            },
            danger: {
                backgroundColor: '#D32F2F',
                color: '#FFFFFF',
            },
            dangerHovered: {
                backgroundColor: '#9A0007',
                color: '#FFFFFF',
            },
            dangerFaded: {
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
                color: '#FFFFFF',
            },
        })

        const variantStyle = StyleSheet.create({
            default: {
                backgroundColor: disabled
                    ? colorsStyles.disabled.backgroundColor
                    : colorsStyles[`${color}${isPressed
                        ? 'Hovered'
                        : ''}`].backgroundColor,
                color: disabled
                    ? colorsStyles.disabled.color
                    : colorsStyles[`${color}${isPressed
                        ? 'Hovered'
                        : ''}`].color,
                borderColor: disabled
                    ? colorsStyles.disabled.backgroundColor
                    : colorsStyles[`${color}${isPressed
                        ? 'Hovered'
                        : ''}`].backgroundColor
            },
            outline: {
                backgroundColor: isPressed
                    ? colorsStyles[`${color}Faded`].backgroundColor
                    : 'transparent',
                color: disabled
                    ? colorsStyles.disabled.color
                    : colorsStyles[`${color}Hovered`].backgroundColor,
                borderColor: disabled
                    ? colorsStyles.disabled.color
                    : colorsStyles[`${color}Hovered`].backgroundColor,
            },
            text: {
                backgroundColor: disabled
                    ? 'transparent'
                    : isPressed
                        ? colorsStyles[`${color}Faded`].backgroundColor
                        : 'transparent',
                color: disabled
                    ? colorsStyles.disabled.color
                    : colorsStyles[`${color}Hovered`].backgroundColor,
                borderColor: disabled
                    ? 'transparent'
                    : isPressed
                        ? colorsStyles[`${color}Faded`].backgroundColor
                        : 'transparent',
            }
        })

        const shadowStyles = StyleSheet.create({
            shadow: {
                shadowColor: "rgba(51, 51, 51, 0.2)",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
            },
            noShadow: {}
        })

        return StyleSheet.create({
            buttonContainer: {
                backgroundColor: variantStyle[variant].backgroundColor,
                paddingHorizontal: sizeStyles[size].paddingHorizontal,
                paddingVertical: sizeStyles[size].paddingVertical,
                borderRadius: 6,
                alignItems: 'center',
                flexDirection: 'row',

                borderWidth: 1,
                borderColor: variantStyle[variant].borderColor,
                ...(shadow ? shadowStyles.shadow : shadowStyles.noShadow),
            },
            buttonText: {
                fontSize: 14,
                color: variantStyle[variant].color,
                fontFamily: 'NotoSans_500Medium',
                fontWeight: '500',
                textAlign: 'center'
            },
            iconLeft: {
                marginRight: 8
            },
            iconRight: {
                marginLeft: 8
            }
        })
    }, [variant, isPressed, disabled, size, color])
}

const Button = ({
    variant = 'default',
    color = 'default',
    size = 'md',
    disabled = false,
    startIcon,
    endIcon,
    label,
    onPress,
    shadow = true,
    style }: ButtonProps) => {

    const [isPressed, setIsPressed] = useState(false)

    const _in = () => disabled ? () => { } : setIsPressed(true)
    const _out = () => disabled ? () => { } : setIsPressed(false)

    const styles = useButtonStyle(
        variant,
        color,
        size,
        isPressed,
        disabled,
        shadow
    )

    const buttonEvents = Platform.select({
        native: {
            onPressIn: _in,
            onPressOut: _out,
        },
        web: {
            onPressIn: _in,
            onHoverIn: _in,
            onFocus: _in,
            onBlur: _out,
            onHoverOut: _out
        }
    })

    return (
        <Pressable
            style={[styles.buttonContainer, style]}
            {...buttonEvents}
            onPress={onPress}
        >
            {startIcon && <MaterialIcons
                style={styles.iconLeft}
                name="local-grocery-store"
                size={14}
                color={styles.buttonText.color}
            />}
            <Text style={styles.buttonText}>{label}</Text>
            {endIcon && <MaterialIcons
                style={styles.iconRight}
                name="local-grocery-store"
                size={14}
                color={styles.buttonText.color}
            />}
        </Pressable>
    )
}

export default Button