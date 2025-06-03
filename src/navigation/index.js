import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

//Perfil ----
import UserPerfil from '../pages/Perfil';
import PerfilConfig from '../pages/Perfil/perfilConfig';
import Suporte from '../pages/Perfil/suporte';
import EscambosFeitos from '../pages/Perfil/escamboFeitos';
import ComprovanteTroca from "../pages/Perfil/comprovante";

// Inventario ----
import Inventario from '../pages/Inventario';
import AddItem from "../pages/Inventario/addItem";
import VerItem from "../pages/Inventario/verItem";
// import editarItem from "../pages/Inventario/editarItem";

// Chat ----
import Contatos from "../pages/Chat";
import Chat from "../pages/Chat/chat";

// Pra se localizar melhor (daqui pra frente terá muita página) dá um ctrl+F e escreve uma das categorias abaixo:
// - Perfil
// - inventário 
// - Chat


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="addItem">
      
      {/* ---------- Parte do Login ---------- */}

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

      {/* ---------- Parte do Perfil ---------- */}
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

      {/* ---------- Parte do inventário ---------- */}
      <Stack.Screen
        name="Inventario"
        component={Inventario}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="addItem"
        component={AddItem}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="verItem"
        component={VerItem}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="editarItem"
        component={editarItem}
        options={{ headerShown: false }}
      /> */}

      {/* ---------- Parte do Chat ---------- */}

      <Stack.Screen
        name="contatos"
        component={Contatos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="chat"
        component={Chat}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}