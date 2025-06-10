import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

//Perfil ----
import UserPerfil from '../pages/Perfil';
import PerfilConfig from '../pages/Perfil/perfilConfig';
import Suporte from '../pages/Perfil/suporte';
import EscambosFeitos from '../pages/Perfil/escamboFeitos';
import ComprovanteTroca from "../pages/Perfil/comprovante";
import PerfilX from "../pages/Perfil/perfilX";
import Comentar from "../pages/Perfil/comentar";

// Inventario ----
import Inventario from '../pages/Inventory';
import AddItem from '../pages/Inventory/addItem';
import EditarItem from '../pages/Inventory/editarItem';
import VerItem from '../pages/Inventory/verItem';


// Chat ----
import Contatos from "../pages/Chat";
import Chat from "../pages/Chat/chat";

//Search
import Search from '../pages/Search';

// Pra se localizar melhor (daqui pra frente terá muita página) dá um ctrl+F e escreve uma das categorias abaixo:
// - Perfil
// - inventário 
// - Chat


const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator initialRouteName="Contatos">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
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
        component={AddItem}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="verItem"
        component={VerItem}
        options={{ headerShown: false }}
      />

      { <Stack.Screen
        name="editarItem"
        component={EditarItem}
        options={{ headerShown: false }}
      /> }

      {/* ---------- Parte do Chat ---------- */}

      <Stack.Screen
        name="Contatos"
        component={Contatos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />

      {/*------------Search---------------*/}
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}