import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Feather, Entypo } from '@expo/vector-icons';
import BarraNavegacao from '../../components/navegador';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Superior Search Bar */}
            <View style={styles.searchBar}>
                <Ionicons name="search" size={24} color="#888" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search..."
                    style={styles.input}
                    placeholderTextColor="#888"
                />
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                {/* Add your main content here */}
            </View>

            {/* Inferior Navigation Bar */}
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={28} color="#007AFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Feather name="search" size={28} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                    <MaterialIcons name="add-circle-outline" size={32} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <FontAwesome5 name="bell" size={26} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Entypo name="user" size={28} color="#888" />
                </TouchableOpacity>
            </View>

            <BarraNavegacao />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 45,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    content: {
        flex: 1,
        // Add your content styles here
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        borderTopWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        paddingBottom: 10,
    },
});