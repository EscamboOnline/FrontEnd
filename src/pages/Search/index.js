import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BarraNavegacao from '../../components/navegador';

//adcionei ai
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { headerStyles } from '../../components/header';

import colors from "../../constants/colors";

const { width } = Dimensions.get('window');

const baseWidth = 375;
const scale = width / baseWidth;


const na_sua_vibe = [
    { id: 1, userImg: 'https://i.pravatar.cc/40?img=1', title: 'Seu pedido foi enviado' },
    { id: 2, userImg: 'https://i.pravatar.cc/40?img=2', title: 'Nova mensagem recebida' },
    { id: 3, userImg: 'https://i.pravatar.cc/40?img=3', title: 'Atualização disponível' },
];

const secoes = [
    { id: 1, userImg: 'https://i.pravatar.cc/60?img=4', name: 'João Silva', username: '@joaosilva', comment: 'Ótimo serviço, super recomendo!' },
    { id: 2, userImg: 'https://i.pravatar.cc/60?img=5', name: 'Maria Oliveira', username: '@mariaoliveira', comment: 'Gostei muito da experiência!' },
    { id: 3, userImg: 'https://i.pravatar.cc/60?img=6', name: 'Rui Braga', username: '@albraga', comment: 'Pode melhorar, mas no geral é bom. YaaaaaaaHuuuHaaaaaaaaaaaaaaaa' },
];

export default function Inventario() {

    const [selectedTab, setSelectedTab] = useState('na_sua_vibe');

    const navigation = useNavigation();
  



    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView>

                <View style={headerStyles.header}>
                    <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate('Home')}>
                        <MaterialIcons name="play-arrow" size={30} color="#000" style={{ transform: [{ scaleX: -1 }] }} />
                    </TouchableOpacity>

                    <Text style={headerStyles.headerTitle}>Navegação</Text>

                    {/* Espaço vazio para balancear layout e centralizar o título */}
                    <View style={{ width: 40 }} />
                </View>

                {/* Barra de pesquisa */}
                <Searchbar placeholder="" style={styles.barraPesquisa} inputStyle={{ minHeight: 0 }}/>

            </SafeAreaView>

            <View style={styles.containerOptions}>
                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedTab === 'na_sua_vibe' && styles.optionButtonSelected
                    ]}
                    onPress={() => setSelectedTab('na_sua_vibe')}
                >
                    <Text
                        style={[
                            styles.textOptions,
                            selectedTab === 'na_sua_vibe' && styles.textOptionsSelected
                        ]}
                    >
                        Na sua vibe
                    </Text>
                </TouchableOpacity>

                <View style={styles.verticalDivider} />

                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedTab === 'secoes' && styles.optionButtonSelected
                    ]}
                    onPress={() => setSelectedTab('secoes')}
                >

                    <Text
                        style={[
                            styles.textOptions,
                            selectedTab === 'secoes' && styles.textOptionsSelected
                        ]}
                    >
                        Seções
                    </Text>
                </TouchableOpacity>
            </View>

            {/*Mudança de estilo*/}

            <View style={styles.content}>
                {selectedTab === 'na_sua_vibe' && (
                    <FlatList
                        data={na_sua_vibe}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            
                             {/*Só mudar o que está aqui dentro*/},
                             
                            <View style={styles.notificationItem}>
                                <Image source={{ uri: item.userImg }} style={styles.notificationImage}/>
                                <Text style={styles.notificationText}>{item.title}</Text>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )}

                {selectedTab === 'secoes' && (
                    <FlatList
                        data={secoes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (

                            {/*Só mudar o que está aqui dentro*/},

                            <View style={styles.reviewItem}>
                                <TouchableOpacity   onPress={() => navigation.navigate('PerfilX')}><Image source={{ uri: item.userImg }} style={styles.reviewImage}/></TouchableOpacity>
                                <Image
                                    source={require('../../assets/estrelas.png')}
                                    style={styles.estralasIcon}
                                />
                                <View style={styles.reviewTextContainer}>
                                    <Text style={styles.reviewName}>{item.name}</Text>
                                    <Text style={styles.reviewUsername}>{item.username}</Text>
                                    <Text style={styles.reviewComment}>{item.comment}</Text>
                                </View>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>

            <BarraNavegacao />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    barraPesquisa: {
        borderRadius: 10,
        height: 40,
        marginBlock: 20,
        marginInline: 20,
    },

    //Options
    containerOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
    },
    optionButton: {
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: colors.secondGray,
    },
    optionButtonSelected: {
        borderColor: colors.red,
    },
    textOptions: {
        fontSize: 17.5 * scale,
        color: colors.fourthGray,
        fontWeight: 'bold',
    },
    textOptionsSelected: {
        color: colors.red,
        fontWeight: 'bold',
    },

    content: {
        flex: 1,
    },


});