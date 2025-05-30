import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    Dimensions
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import colors from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { conditionStyles} from '../../constants/condicao';
import { headerStyles} from '../../constants/header';

const { width } = Dimensions.get('window');

const baseWidth = 375;
const scale = width / baseWidth;

export default function EscambosFeitos() {
    const navigation = useNavigation();

    const [trades] = useState([
        {
            id: 1,
            receivedItem: {
                title: 'Item do Usuário',
                description: 'Recebido nesta troca. Produto em ótimo estado.',
                rating: 'Ótimo',
                image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
            },
            tradedItem: {
                title: 'Item Trocado',
                description: 'Item que você entregou na troca.',
                rating: 'Ótimo',
                image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=200&fit=crop',
            }
        },
        {
            id: 2,
            receivedItem: {
                title: 'Item do Usuário',
                description: 'Recebido nesta troca. Produto em ótimo estado.',
                rating: 'Ótimo',
                image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
            },
            tradedItem: {
                title: 'Item Trocado',
                description: 'Item que você entregou na troca.',
                rating: 'Ótimo',
                image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=200&fit=crop',
            }
        }
    ]);

    const renderTradeItem = (trade) => (
        <View key={trade.id} style={styles.tradeCard}>
            {/* Linha forte antes do primeiro item */}
            <View style={styles.strongDivider} />
            <Text style={styles.tradeTitle}>Troca #{trade.id}</Text>

            {[trade.receivedItem, trade.tradedItem].map((item, index) => (
                <React.Fragment key={index}>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <View style={styles.itemContent}>
                            <View style={styles.imageWrapper}>
                                <Image source={{ uri: item.image }} style={styles.itemImage} />
                            </View>

                            <View style={styles.itemDetails}>
                                <Text style={styles.description}>{item.description}</Text>
                                <View style={conditionStyles.ratingContainer}>
                                    <Text style={conditionStyles.ratingText}>{item.rating}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Linha fraca entre os itens */}
                    {index === 0 && <View style={styles.weakDivider} />}
                </React.Fragment>
            ))}


            <TouchableOpacity style={styles.receiptButton} onPress={() => navigation.navigate('ComprovanteTroca')}>
                <Text style={styles.receiptButtonText}>Ver comprovante</Text>
            </TouchableOpacity>
            {/* Linha forte após o segundo item */}
            <View style={styles.strongDivider} />
        </View>

    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={headerStyles.header}>
                <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate('UserPerfil')}>
                    <MaterialIcons name="play-arrow" size={30 * scale} color="#000" style={{ transform: [{ scaleX: -1 }] }}/>
                </TouchableOpacity>

                <Text style={headerStyles.headerTitle}>Escambos Feitos</Text>

                {/* Espaço vazio para balancear layout e centralizar o título */}
                <View style={{ width: 40 * scale }} />
            </View>


            <ScrollView 
                style={styles.scrollView} 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={[styles.contentContainer, { paddingBottom: 30 * scale }]}
            >
                <View style={styles.contentContainer}>
                    {trades.map(renderTradeItem)}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 10 * scale,
    },
    
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30 * scale,
        backgroundColor: colors.white,
        paddingHorizontal: 15 * scale,
    },

    backButton: {
        width: 40 * scale,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    headerTitle: {
        fontSize: 22 * scale,
        fontWeight: 'bold',
        color: colors.darkGray,
        textAlign: 'center',
        flex: 1,
    },

    scrollView: {
        flex: 1,
    },
    
    contentContainer: {
        paddingTop: 10 * scale,
        gap: 8 * scale,
    },
    
    tradeCard: {
        width: '100%',
        backgroundColor: colors.gray,
        borderRadius: 12 * scale,
        padding: 10 * scale,
    },
    
    strongDivider: {
        width: '100%',
        height: 2 * scale,
        backgroundColor: '#555',
        marginVertical: 6 * scale,
        borderRadius: 1 * scale,
    },

    weakDivider: {
        width: '100%',
        height: 1 * scale,
        backgroundColor: '#ccc',
        marginVertical: 8 * scale,
        borderRadius: 1 * scale,
    },
    
    tradeTitle: {
        fontSize: 17 * scale,
        fontWeight: 'bold',
        color: colors.darkGray,
        marginBottom: 10 * scale,
    },
    
    itemWrapper: {
        marginBottom: 15 * scale,
    },
    
    itemTitle: {
        fontSize: 16 * scale,
        fontWeight: 'bold',
        marginBottom: 6 * scale,
        color: colors.darkGray,
    },
    
    itemContent: {
        flexDirection: 'row',
    },
    
    imageWrapper: {
        width: width * 0.25,
        height: width * 0.25,
        overflow: 'hidden',
        marginRight: 10 * scale,
        backgroundColor: colors.white,
        borderRadius: 8 * scale,
    },
    
    itemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    itemDetails: {
        flex: 1,
        justifyContent: 'space-between',
    },
    
    description: {
        fontSize: 15 * scale,
        color: colors.darkGray,
        marginBottom: 8 * scale,
        lineHeight: 18 * scale,
    },
    
    receiptButton: {
        backgroundColor: colors.red,
        marginTop: 10 * scale,
        borderRadius: 8 * scale,
        paddingVertical: 10 * scale,
        alignItems: 'center',
    },
    
    receiptButtonText: {
        color: colors.white,
        fontSize: 16 * scale,
        fontWeight: 'bold'
    },
});