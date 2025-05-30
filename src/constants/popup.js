import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const { width } = Dimensions.get('window');
const baseWidth = 375;
const scale = width / baseWidth;

export const popupStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20 * scale,
        padding: 25 * scale,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 200 * scale,
        width: 300 * scale,
    },
    modalText: {
        fontFamily: 'Baloo2_700Bold',
        marginBottom: 30 * scale,
        textAlign: 'center',
        fontSize: 22 * scale,
    },
    modalButtons: {
        flexDirection: 'row',
        width: 110 * scale,
        justifyContent: 'center',
    },
    modalButton: {
        borderRadius: 15 * scale,
        padding: 7,
        elevation: 2,
        minWidth: 120,
        alignItems: 'center',
    },
    noButton: {
        backgroundColor: colors.orange,
        marginRight: 10,
    },
    yesButton: {
        backgroundColor: colors.red,
    },
    noButtonText: {
        color: colors.white,
        fontFamily: 'Baloo2_700Bold',
        fontSize: 20 * scale,
    },
    yesButtonText: {
        fontFamily: 'Baloo2_700Bold',
        color: colors.white,
        fontSize: 20 * scale,
    },

    okButton: {
        backgroundColor: colors.orange,
    },
    okButtonText: {
        fontFamily: 'Baloo2_700Bold',
        color: colors.white,
        fontSize: 20 * scale
    },
});

