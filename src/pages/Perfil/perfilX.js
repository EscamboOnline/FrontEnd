import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import colors from '../../constants/colors';
import { headerStyles } from '../../components/header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BarraNavegacao from '../../components/navegador';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const { width } = Dimensions.get('window');
const BUTTON_COUNT = 4;
const BUTTON_MARGIN = 8;
const buttonSize = (width - 25 - BUTTON_MARGIN * (BUTTON_COUNT - 1)) / BUTTON_COUNT;

const avatarSize = buttonSize * 1.75;

const baseWidth = 375;
const scale = width / baseWidth;

const itensData = [
    {
        id: '1',
        image: require('../../assets/phone.png'),
    },
    {
        id: '2',
        image: require('../../assets/bike.png'),
    },
    {
        id: '3',
        image: require('../../assets/prateleiras.jpg'),
    },
    {
        id: '4',
        image: require('../../assets/cadeira.png'),
    },
    {
        id: '5',
        image: require('../../assets/phone.png'),
    },
    {
        id: '6',
        image: require('../../assets/bike.png'),
    },
    {
        id: '7',
        image: require('../../assets/prateleiras.jpg'),
    },
    {
        id: '8',
        image: require('../../assets/cadeira.png'),
    },
];

const totalItens = itensData.length;


const reviewsData = [
    { id: 1, userImg: 'https://i.pravatar.cc/60?img=4', name: 'João Silva', username: '@joaosilva', comment: 'Ótimo serviço, super recomendo!' },
    { id: 2, userImg: 'https://i.pravatar.cc/60?img=5', name: 'Maria Oliveira', username: '@mariaoliveira', comment: 'Gostei muito da experiência!' },
    { id: 3, userImg: 'https://i.pravatar.cc/60?img=6', name: 'Rui Braga', username: '@albraga', comment: 'Pode melhorar, mas no geral é bom. YaaaaaaaHuuuHaaaaaaaaaaaaaaaa' },
];

const userData = [
    { id: 1, userImg: 'https://i.pravatar.cc/150?img=6', name: 'Rui Braga', username: '@albraga' }
];

export default function UserPerfil() {
    const [selectedTab, setSelectedTab] = useState('itens');
    const [exitModalVisible, setExitModalVisible] = useState(false);

    const navigation = useNavigation();


    const [showCommentButton, setShowCommentButton] = useState(false);

    function showButton() {
        setShowCommentButton(prev => !prev);
    }


    return (
        <SafeAreaView style={styles.container}>

            {/*Header*/}
            <View style={headerStyles.header}>
                <TouchableOpacity
                    style={headerStyles.backButton}
                    onPress={() => navigation.navigate('UserPerfil')}
                >
                    <MaterialIcons
                        name="play-arrow"
                        size={30 * scale}
                        color="#000"
                        style={{ transform: [{ scaleX: -1 }] }}
                    />
                </TouchableOpacity>


                {/*Não apagar!! Ele serve para ilustrar uma situação*/}
                <TouchableOpacity onPress={showButton} style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Mostrar Comentário</Text>
                </TouchableOpacity>
            </View>

            {/* Avatar e Nome */}
            <Image
                source={{ uri: userData[0].userImg }}
                style={styles.avatar}
            />

            <Text style={styles.title}>{userData[0].name}</Text>
            <Text style={styles.username}>{userData[0].username}</Text>

            <View style={styles.centeredItens}>
                <Image source={require('../../assets/estrelas.png')} style={styles.estrelas} />
                <Text style={styles.itensContagem}>{totalItens}</Text>
                <Text style={styles.itensLegenda}>Itens cadastrados</Text>
            </View>

            {/* Aba de seleção Notificações / Reviews */}
            <View style={styles.containerOptions}>
                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedTab === 'itens' && styles.optionButtonSelected
                    ]}
                    onPress={() => setSelectedTab('itens')}
                >
                    <Text
                        style={[
                            styles.textOptions,
                            selectedTab === 'itens' && styles.textOptionsSelected
                        ]}
                    >
                        Itens
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedTab === 'reviews' && styles.optionButtonSelected
                    ]}
                    onPress={() => setSelectedTab('reviews')}
                >

                    <Text
                        style={[
                            styles.textOptions,
                            selectedTab === 'reviews' && styles.textOptionsSelected
                        ]}
                    >
                        Reviews
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.commentConteiner}>
                {showCommentButton && (
                    <TouchableOpacity style={styles.buttonComment} onPress={() => navigation.navigate('Comentar')}>
                        <Text style={styles.buttonCommentText}>Comentar</Text>
                    </TouchableOpacity>
                )}
            </View>


            {/* Conteúdo da aba selecionada */}
            <View style={styles.content}>
                {selectedTab === 'itens' && (
                    <FlatList
                        style={styles.listaQd}
                        data={itensData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Image source={item.image} style={styles.itemImage} />
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )}

                {selectedTab === 'reviews' && (
                    <FlatList
                        data={reviewsData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.reviewItem}>
                                <Image source={{ uri: item.userImg }} style={styles.reviewImage} />
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

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
        fontFamily: 'Montserrat',
        paddingBottom: 65 * scale,
    },
    avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: 75,
        alignSelf: 'center',
        marginBottom: 8,
    },
    title: {
        textAlign: 'center',
        fontSize: 20 * scale,
        fontWeight: 'bold',
        color: colors.black,
        fontFamily: 'Montserrat',
    },
    username: {
        textAlign: 'center',
        fontSize: 15 * scale,
        color: colors.black,
        opacity: 0.7,
        marginBottom: 5,
        fontWeight: 'bold',
    },

    //center

    centeredItens: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginBottom: 10,
    },
    estrelas: {
        width: 170,
        height: 25,
        resizeMode: 'contain',
        marginBottom: 8,
    },

    itensContagem: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
        opacity: 0.75
    },

    itensLegenda: {
        fontSize: 14,
        color: colors.fourthGray,
    },


    //options
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 30,
    },
    containerOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    optionButton: {
        padding: 3,
        borderRadius: 7,
        backgroundColor: colors.fourthGray,
        flex: 1,
        alignItems: "center",
    },
    optionButtonSelected: {
        backgroundColor: colors.red,
        borderRadius: 7,
    },
    textOptions: {
        fontSize: 23 * scale,
        color: colors.thirdGray,
        fontWeight: 'bold',
    },
    textOptionsSelected: {
        color: colors.white,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },

    //botao comment

    commentConteiner:{
        paddingHorizontal: 10,
    },
    buttonCommentText: {
        color: colors.white,
        fontSize: 23,
        fontWeight: 'bold',
    },
    buttonComment: {
        width: "100%",
        height: 40,
        backgroundColor: colors.red,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',

    },

    // itens
    listaQd: {
        flex: 1,
        paddingHorizontal: 10,
    },
    item: {
        height: 'auto',
        width: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
        marginBottom: 30,
    },

    itemImage: {
        width: 200,
        height: 200,
        borderRadius: 8,
        marginRight: 10,
    },

    // Reviews
    reviewItem: {
        flexDirection: 'row',
        paddingVertical: 16 * scale,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondGray,
        position: 'relative',
        paddingHorizontal: 10,
    },
    reviewImage: {
        width: 50 * scale,
        height: 50 * scale,
        borderRadius: 30 * scale,
        marginRight: 12,
    },
    reviewTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    reviewName: {
        fontWeight: 'bold',
        fontSize: 16 * scale,
        color: colors.black,
    },
    reviewUsername: {
        fontSize: 14 * scale,
        color: colors.black,
        opacity: 0.7,
        marginBottom: 6,
    },
    reviewComment: {
        fontSize: 15 * scale,
        color: colors.black,
    },
    estralasIcon: {
        width: 100 * scale,
        height: 16 * scale,
        position: 'absolute',
        top: 20,
        right: 10,
    }
});