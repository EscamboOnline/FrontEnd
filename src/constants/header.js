import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const { width } = Dimensions.get('window');
const baseWidth = 375;
const scale = width / baseWidth;

export const headerStyles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8*scale,
        paddingBottom: 8*scale,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 19 * scale,
        fontWeight: 'bold',
        color: colors.black,
    },
    downloadButton: {
        padding: 5,
    }
});

