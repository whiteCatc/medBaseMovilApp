import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { auth } from "../database/firebase";

const LoginScreen = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const loginUser = async () => {
        if (state.email === '' || state.password === '') {
            alert('Ingresa todos los datos')
        } else {
            try {
                //console.log(auth)
                await auth.signInWithEmailAndPassword(state.email, state.password);
                console.log("Usuario autenticado:", auth.currentUser);
                alert('Usuario autenticado');
            } catch (error) {
                alert('Usuario y/o contraseña invalido(s)')
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email" onChangeText={(value) => handleChangeText('email', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Contraseña" secureTextEntry={true} onChangeText={(value) => handleChangeText('password', value)} />
            </View>
            <View>
                <Button title="Iniciar Sesión" onPress={() => loginUser()} />
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

export default LoginScreen;
