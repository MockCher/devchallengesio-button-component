import { useState } from "react"
import { StyleSheet, View } from "react-native"
import Button, { ButtonColor, ButtonSize, ButtonVariant } from "./Button"
import Heading from "./Heading"
import SelectionRow from "./SelectionRow"

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', borderWidth: 1, borderRadius: 20, borderColor: '#000', padding: 20, marginTop: 10 },
    buttonSpace: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})

const PlaygroundView = () => {
    const [variant, setVariant] = useState<ButtonVariant>('default')
    const [size, setSize] = useState<ButtonSize>('md')
    const [color, setColor] = useState<ButtonColor>('default')
    const [icon, setIcon] = useState<'none' | 'start' | 'end'>('none')
    const [disabled, setDisabled] = useState<boolean>(false)
    const [showShadow, setShowShadow] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <Heading>Playground</Heading>
            <SelectionRow label="Variant">
                <Button color={variant === 'default' ? 'secondary' : 'primary'} label='Default' onPress={() => setVariant('default')} />
                <Button color={variant === 'outline' ? 'secondary' : 'primary'} label='Outline' onPress={() => setVariant('outline')} />
                <Button color={variant === 'text' ? 'secondary' : 'primary'} label='Text' onPress={() => setVariant('text')} />
            </SelectionRow>
            <SelectionRow label="Size">
                <Button color={size === 'sm' ? 'secondary' : 'primary'} label='SM' onPress={() => setSize('sm')} />
                <Button color={size === 'md' ? 'secondary' : 'primary'} label='MD' onPress={() => setSize('md')} />
                <Button color={size === 'lg' ? 'secondary' : 'primary'} label='LG' onPress={() => setSize('lg')} />
            </SelectionRow>
            <SelectionRow label="Color">
                <Button color={color === 'default' ? 'secondary' : 'primary'} label='Default' onPress={() => setColor('default')} />
                <Button color={color === 'primary' ? 'secondary' : 'primary'} label='Primary' onPress={() => setColor('primary')} />
                <Button color={color === 'secondary' ? 'secondary' : 'primary'} label='Secondary' onPress={() => setColor('secondary')} />
                <Button color={color === 'danger' ? 'secondary' : 'primary'} label='Danger' onPress={() => setColor('danger')} />
            </SelectionRow>
            <SelectionRow label="Icon">
                <Button color={icon === 'none' ? 'secondary' : 'primary'} label='No icon' onPress={() => setIcon('none')} />
                <Button color={icon === 'start' ? 'secondary' : 'primary'} label='Icon on start' onPress={() => setIcon('start')} />
                <Button color={icon === 'end' ? 'secondary' : 'primary'} label='Icon on end' onPress={() => setIcon('end')} />
            </SelectionRow>
            <SelectionRow label="Shadow">
                <Button color={!showShadow ? 'secondary' : 'primary'} label='Shadow' onPress={() => setShowShadow(true)} />
                <Button color={showShadow ? 'secondary' : 'primary'} label='No Shadow' onPress={() => setShowShadow(false)} />
            </SelectionRow>
            <SelectionRow label="Disabled">
                <Button color={!disabled ? 'secondary' : 'primary'} label='Disabeled' onPress={() => setDisabled(true)} />
                <Button color={disabled ? 'secondary' : 'primary'} label='Not disabled' onPress={() => setDisabled(false)} />
            </SelectionRow>
            <View style={styles.buttonSpace}>
                <Button
                    label='Playground'
                    variant={variant}
                    size={size}
                    color={color}
                    startIcon={icon === 'start' ? 'local-grocery-store' : undefined}
                    endIcon={icon === 'end' ? 'local-grocery-store' : undefined}
                    disabled={disabled}
                    shadow={showShadow}
                />
            </View>
        </View >
    )

}

export default PlaygroundView