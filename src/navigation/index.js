import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Inventario from '../pages/Inventario';
import UserPerfil from '../pages/Perfil';
import PerfilConfig from '../pages/Perfil/perfilConfig';
import Suporte from '../pages/Perfil/suporte';
import EscamboFeitos from '../pages/Perfil/escamboFeitos';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator

      initialRouteName='UserPerfil'
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Inventario"
        component={Inventario}
      />

      <Stack.Screen
        name="UserPerfil"
        component={UserPerfil}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PerfilConfig"
        component={PerfilConfig}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Suporte"
        component={Suporte}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EscamboFeitos"
        component={EscamboFeitos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}