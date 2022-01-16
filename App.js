import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Test')}
        style={({pressed}) => [
          {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
        ]}
        hitSlop={50}>
        <Text style={{color: 'black'}}>To TestScreen</Text>
      </Pressable>
    </View>
  );
}

function TestScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Test Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
