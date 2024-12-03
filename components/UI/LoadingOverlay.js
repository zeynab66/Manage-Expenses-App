import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function LoadingOverlay({ visible }) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={GlobalStyles.colors.primary500} />
        </View>
    );
}

export default LoadingOverlay;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary800
    },
});