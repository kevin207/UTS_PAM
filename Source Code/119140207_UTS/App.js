import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Beranda from './layer/Beranda';
import Rincian from './layer/Rincian';
import Pesanan from './layer/Pesanan';
import Pembatalan from './layer/Pembatalan';
import Konfirmasi from './layer/Konfirmasi';
import Detail from './layer/Detail';

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Beranda' screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="Pesanan" component={Pesanan} />
        <Stack.Screen name="Pembatalan" component={Pembatalan} />
        <Stack.Screen name="Beranda" component={Beranda} />
        <Stack.Screen name="Rincian" component={Rincian} />
        <Stack.Screen name="Konfirmasi" component={Konfirmasi} /> 
        <Stack.Screen name="Detail" component={Detail} /> 

      </Stack.Navigator>

    </NavigationContainer>
  );

};

export default App;