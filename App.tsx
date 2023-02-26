import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button, { ButtonColor, ButtonSize, ButtonVariant } from './src/Button';
import { useFonts, NotoSans_500Medium } from '@expo-google-fonts/noto-sans';
import { useState } from 'react';
import PlaygroundView from './src/PlaygroundView';
import Heading from './src/Heading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  layout: {
    width: '100%',
    flex: 1,
    flexDirection: Platform.OS === 'web' ? 'row' : 'column'
  },
  navigation: {
    flexWrap: 'wrap',
    marginBottom: 20,
    flexDirection: Platform.OS === 'web' ? 'column' : 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    alignItems: 'center'
  },
  page: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
})

const PAGES = [
  'Variants',
  'Sizes',
  'Colors',
  'Icons',
  'Shadows',
  'Disabled',
  'Playground',
]

const VARIANTS: ButtonVariant[] = ['default', 'outline', 'text']
const SIZES: ButtonSize[] = ['sm', 'md', 'lg']
const COLORS: ButtonColor[] = ['default', 'primary', 'secondary', 'danger']
const ICONS = [{ label: 'none' }, { label: 'Icon on start', startIcon: 'local-grocery-store' }, { label: 'Icon on end', endIcon: 'local-grocery-store' }]
const SHADOWS = [{ label: 'With Shadow' }, { label: 'Without Shadow', shadow: false }]

export default function App() {

  const [page, setPage] = useState(0);

  let [fontsLoaded] = useFonts({
    NotoSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.navigation}>
          {PAGES.map((pageName, index) => (<Button color={page === index ? 'primary' : 'secondary'} label={pageName} onPress={() => setPage(index)} style={{ margin: 5 }} />))}
        </View>
        <View style={styles.page}>
          <Heading>{PAGES[page]}</Heading>
          {page === 0 && (
            VARIANTS.map((variantName, index) => <Button key={index} color='primary' variant={variantName} label={VARIANTS[index]} />)
          )}
          {page === 1 && (
            SIZES.map((sizeName, index) => <Button key={index} color='primary' size={sizeName} label={SIZES[index]} />)
          )}
          {page === 2 && (
            COLORS.map((colorName, index) => <Button key={index} color={colorName} label={COLORS[index]} />)
          )}
          {page === 3 && (
            ICONS.map((iconSettings, index) => <Button key={index} color='primary' {...iconSettings} />)
          )}
          {page === 4 && (
            SHADOWS.map((shadowSettings, index) => <Button key={index} color='primary' {...shadowSettings} />)
          )}
          {page === 5 && (
            VARIANTS.map((variantName, index) => <Button key={index} color='primary' disabled variant={variantName} label={'disabled ' + VARIANTS[index]} />)
          )}
          {
            page === 6 && (
              <PlaygroundView />
            )
          }
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
