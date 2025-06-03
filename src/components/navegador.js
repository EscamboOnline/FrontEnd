import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, FlatList, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export default function navegador() {
    const navigation = useNavigation();

    return(
        <View>
            <TouchableHighlight>
                <View>
                    <IconButton
                        icon={() => <MaterialDesignIcons name="home" color="#fff" size={50}/>}
                    />
                    <Text>Home</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight>
                <View>
                    <IconButton
                        icon={() => <MaterialDesignIcons name="message-outline" color="#fff" size={50}/>}
                    />
                    <Text>Chat</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight>
                <IconButton
                    icon={() => <MaterialDesignIcons name="plus" color="#fff" size={50}/>}
                />
            </TouchableHighlight>

            

            <TouchableHighlight>
                <View>
                    <IconButton
                        icon={() => <MaterialDesignIcons name="magnify" color="#fff" size={50}/>}
                    />
                    <Text>Search</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight>
                <View>
                    <IconButton
                        icon={() => <MaterialDesignIcons name="account" color="#fff" size={50}/>}
                    />
                    <Text>Perfil</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const style = StyleSheet.create({
    
})