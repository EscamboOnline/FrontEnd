import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Inventario from '../pages/Inventario';
import UserPerfil from '../pages/Perfil';
import PerfilConfig from '../pages/Perfil/perfilConfig';
import Suporte from '../pages/Perfil/suporte';
import EscambosFeitos from '../pages/Perfil/escamboFeitos';
import ComprovanteTroca from "../pages/Perfil/comprovante";
import addItem from "../pages/Inventario/addItem";
import PerfilX from "../pages/Perfil/perfilX";
import Comentar from "../pages/Perfil/comentar"


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="PerfilX">
      
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
        name="EscambosFeitos"
        component={EscambosFeitos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ComprovanteTroca"
        component={ComprovanteTroca}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PerfilX"
        component={PerfilX}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Comentar"
        component={Comentar}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="addItem"
        component={addItem}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}