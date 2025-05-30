import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import colors from '../../constants/colors';
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { conditionStyles} from '../../constants/condicao';
import { headerStyles} from '../../constants/header';


const { width } = Dimensions.get('window');

const baseWidth = 375;
const scale = width / baseWidth;

export default function ComprovanteTroca() {

    const navigation = useNavigation();

    const receiptData = {
        user: {
            name: 'Usuario1',
            handle: '@user_000',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        trade: {
            id: 'tx1212442',
            date: new Date('2025-09-22T12:00:00'),
            confirmationDate: new Date('2025-09-20T14:30:00'),
            status: 'Confirmada'
        },
        items: [
            {
                id: 1,
                owner: 'Usuario1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                condition: 'ótimo',
                image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop'
            },
            {
                id: 2,
                owner: 'you',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                condition: 'ótimo',
                image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=200&fit=crop'
            }
        ],
        address: {
            street: 'R. Gen. de Divisão Pedro Rodrigues da Silva',
            number: '400',
            neighborhood: 'Aldeia',
            city: 'Barueri',
            state: 'SP',
            zipCode: '06440-180'
        },
        meetingDate: new Date('2025-09-22T12:00:00')
    };

   
    const formatDate = (date) => {
        return date.toLocaleDateString('pt-BR');
    };

   
    const formatTime = (date) => {
        return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    };

    
    const formatAddress = () => {
        const { street, number, neighborhood, city, state, zipCode } = receiptData.address;
        return `${street}, ${number} - ${neighborhood}, ${city} - ${state}, ${zipCode}`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={headerStyles.header}>
                <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate('EscambosFeitos')}>
                    <MaterialIcons name="play-arrow" size={30 * scale} color="#000" style={{ transform: [{ scaleX: -1 }] }}/>
                </TouchableOpacity>
                <Text style={headerStyles.headerTitle}>Comprovante do Pedido</Text>
                <TouchableOpacity style={headerStyles.downloadButton}>
                    <MaterialCommunityIcons name="download-box" size={33 * scale} color="#000" />
                </TouchableOpacity>
            </View>

            
            <FlatList style={styles.flatList}
                data={receiptData.items}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={
                    <>
                        
                        <View style={styles.userInfoContainer}>
                            <Image source={{ uri: receiptData.user.avatar }} style={styles.userAvatar} />
                            <View style={styles.userTextContainer}>
                                <Text style={styles.userName}>{receiptData.user.name}</Text>
                                <Text style={styles.userHandle}>{receiptData.user.handle}</Text>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Troca:</Text>
                                <Text style={styles.infoValue}>#{receiptData.trade.id}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Data:</Text>
                                <Text style={styles.infoValue}>{formatDate(receiptData.trade.date)}</Text>
                            </View>
                        </View>

                        <View style={styles.statusContainer}>
                            <Text style={styles.infoLabel}>Status:</Text>
                            <Text style={styles.statusValue}>
                                {receiptData.trade.status} - {formatDate(receiptData.trade.confirmationDate)} às {formatTime(receiptData.trade.confirmationDate)}
                            </Text>
                        </View>

                        <View style={styles.divider} />
                    </>
                }
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemOwner}>
                            {index === 0 ? `Item de ${item.owner}` : 'Trocado pelo seu item:'}
                        </Text>
                        <View style={styles.itemContent}>
                            <Image source={{ uri: item.image }} style={styles.itemImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <View style={conditionStyles.ratingContainer}>
                                    <Text style={conditionStyles.ratingText}>{item.condition}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    <>
                        <View style={styles.addressContainer}>
                            <Text style={styles.sectionTitle}>Endereço</Text>
                            <Text style={styles.addressText}>{formatAddress()}</Text>
                            <Text style={styles.meetingInfoText}>Data da troca: {formatDate(receiptData.meetingDate)}</Text>
                            <Text style={styles.meetingInfoText}>Horário: {formatTime(receiptData.meetingDate)}</Text>
                        </View>

                        <View style={styles.bottomButtonContainer}>
                            <TouchableOpacity style={styles.chatButton} onPress={() => navigation.goBack()}>
                                <Text style={styles.chatButtonText}>VOLTAR PARA O CHAT</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        fontFamily: 'Montserrat',
        paddingHorizontal: 5 * scale,
    },

    flatList: {
        flex: 1,
        padding: 10 * scale,
        paddingBottom: 30 * scale, 
    },
    
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20 * scale,
    },
    
    userAvatar: {
        width: 60 * scale,
        height: 60 * scale,
        borderRadius: 35 * scale,
        marginRight: 15 * scale,
    },
    
    userTextContainer: {
        justifyContent: 'center',
    },
    
    userName: {
        fontSize: 20 * scale,
        fontWeight: 'bold',
        color: colors.black,
    },
    
    userHandle: {
        fontSize: 14 * scale,
        color: '#666',
    },
    
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10 * scale,
    },
    
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    infoLabel: {
        fontSize: 17 * scale,
        fontWeight: 'bold',
        color: colors.black,
        marginRight: 5 * scale,
    },
    
    infoValue: {
        fontSize: 16 * scale,
        color: colors.black,
        opacity: 0.7
    },
    
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15 * scale,
    },
    
    statusValue: {
        fontSize: 15 * scale,
        color: '#666',
    },
    
    divider: {
        height: 1 * scale,
        backgroundColor: '#e0e0e0',
        marginVertical: 15 * scale,
    },
    
    itemOwner: {
        fontSize: 17 * scale,
        fontWeight: 'bold',
        marginBottom: 10 * scale,
    },
    
    itemContent: {
        flexDirection: 'row',
    },
    
    itemImage: {
        width: 100 * scale,
        height: 100 * scale,
        marginRight: 15 * scale,
        borderRadius: 8 * scale,
    },
    
    itemDetails: {
        flex: 1,
        justifyContent: 'space-between',
    },
    
    itemDescription: {
        fontSize: 15 * scale,
        color: colors.black,
        marginBottom: 10 * scale,
        opacity: 0.8,
        flexShrink: 1,
        lineHeight: 18 * scale,
    },
    
    addressContainer: {
        marginTop: 40 * scale,
        marginBottom: 10 * scale,
        backgroundColor: colors.secondGray,
        width: '100%',
        padding: 10 * scale,
        borderRadius: 15 * scale
    },
    
    sectionTitle: {
        fontSize: 17 * scale,
        fontWeight: 'bold',
        marginBottom: 8 * scale,
    },
    
    addressText: {
        fontSize: 15 * scale,
        color: colors.black,
        lineHeight: 20 * scale,
        opacity: 0.8,
        paddingBottom: 8 * scale
    },

    meetingInfoText: {
        fontSize: 15 * scale,
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: 5 * scale,
        opacity: 0.8,
    },

    bottomButtonContainer: {
        marginTop: 0,
        marginBottom: 50 * scale,
    },

    chatButton: {
        backgroundColor: colors.red,
        borderRadius: 15 * scale,
        paddingVertical: 12 * scale,
        alignItems: 'center',
    },
    
    chatButtonText: {
        color: colors.white,
        fontSize: 18 * scale,
        fontWeight: 'bold',
    },
});
