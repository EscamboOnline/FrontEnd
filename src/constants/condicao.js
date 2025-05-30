import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const { width } = Dimensions.get('window');
const baseWidth = 375;
const scale = width / baseWidth;

export const conditionStyles = StyleSheet.create({
    ratingContainer: {
        backgroundColor: colors.green,
        paddingHorizontal: 10,
        paddingVertical: 4,
        alignSelf: 'flex-start',
    },
    ratingText: {
        color: colors.white,
        fontSize: 12 * scale,
        fontWeight: '600',
    },
});