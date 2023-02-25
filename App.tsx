import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './src/Button';
import { useFonts, NotoSans_500Medium } from '@expo-google-fonts/noto-sans';
import { useState } from 'react';
import PlaygroundView from './src/PlaygroundView';
import Heading from './src/Heading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  navigation: { width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'space-between' },
  page: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center' },
})

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
      <View style={styles.navigation}>
        <Button color={page === 0 ? 'primary' : 'secondary'} label={'Variants'} onPress={() => setPage(0)} />
        <Button color={page === 1 ? 'primary' : 'secondary'} label={'Sizes'} onPress={() => setPage(1)} />
        <Button color={page === 2 ? 'primary' : 'secondary'} label={'Colors'} onPress={() => setPage(2)} />
      </View>
      <View style={styles.navigation}>
        <Button color={page === 3 ? 'primary' : 'secondary'} label={'Icons'} onPress={() => setPage(3)} />
        <Button color={page === 4 ? 'primary' : 'secondary'} label={'Shadows'} onPress={() => setPage(4)} />
        <Button color={page === 5 ? 'primary' : 'secondary'} label={'Disabled'} onPress={() => setPage(5)} />
      </View>
      <Button color={page === 6 ? 'primary' : 'secondary'} label={'Playground'} onPress={() => setPage(6)} />
      {
        page === 0 && (
          <View style={styles.page}>
            <Heading>Variants</Heading>
            <Button label='Default' color='danger' variant='default' />
            <Button label='Outline' color='danger' variant='outline' />
            <Button label='Text' color='danger' variant='text' />
          </View>)
      }
      {
        page === 1 && (
          <View style={styles.page}>
            <Heading>Sizes</Heading>
            <Button label='sm' size='sm' />
            <Button label='md' size='md' />
            <Button label='lg' size='lg' />
          </View>)
      }
      {
        page === 2 && (
          <View style={styles.page}>
            <Heading>Colors</Heading>
            <Button label='Default' color='default' />
            <Button label='Primary' color='primary' />
            <Button label='Secondary' color='secondary' />
            <Button label='Danger' color='danger' />
          </View>)
      }
      {
        page === 3 && (
          <View style={styles.page}>
            <Heading>Icons</Heading>
            <Button label='No Icon' color='primary' />
            <Button label='Icon start' color='primary' startIcon='local-grocery-store' />
            <Button label='Icon end' color='primary' endIcon='local-grocery-store' />
          </View>)
      }
      {
        page === 4 && (
          <View style={styles.page}>
            <Heading>Shadows</Heading>
            <Button label='With Shadow' color='primary' />
            <Button label='Without Shadow' color='primary' shadow={false} />
          </View>)
      }
      {
        page === 5 && (
          <View style={styles.page}>
            <Heading>Disabled</Heading>
            <Button label='disabeld default' color='primary' disabled />
            <Button label='disabeld outline' variant='outline' color='primary' disabled />
            <Button label='disabled text' variant='text' color='primary' disabled />
          </View>)
      }
      {
        page === 6 && (
          <View style={styles.page}>
            <PlaygroundView />
          </View>)
      }


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
