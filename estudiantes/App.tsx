import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProviderEstudiantes from './Provider/ProviderEstudiantes';
import ConsumerEstudiantes from './Consumer/ConsumerEstudiantes';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lista de estudiantes</Text>
      <ProviderEstudiantes>
        <ConsumerEstudiantes></ConsumerEstudiantes>
      </ProviderEstudiantes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width: "100%",
   height: "100%",
   paddingTop: 20,
   paddingLeft: 20,
   paddingRight: 20,
   paddingBottom: 60,
   backgroundColor: "white"
  },
});

