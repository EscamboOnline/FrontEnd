import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import inventario from '../pages/inventario';
import addItem from '../pages/inventario/addItem'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="inventario"
              component={inventario}
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
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="addItem"
              component={addItem}
              options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}