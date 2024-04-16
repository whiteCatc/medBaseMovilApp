import { React } from "react";
import { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const CreateUserScreen = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre" onChangeText={(value) => handleChangeText('name', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email" onChangeText={(value) => handleChangeText('email', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Telefono" onChangeText={(value) => handleChangeText('phone', value)} />
            </View>
            <View>
                <Button title="Registrar" onPress={() => console.log(state)} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})
export default CreateUserScreen