import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../database/firebase";

const LoginScreen = ({ navigation }) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const loginUser = async () => {
        if (state.email === '' || state.password === '') {
            alert('Ingresa todos los datos');
        } else {
            try {
                const userCredential = await auth.signInWithEmailAndPassword(state.email, state.password);
                const user = userCredential.user;
                console.log("Usuario autenticado:", auth.currentUser);
                alert('Usuario autenticado');
                navigation.navigate('UserDetailsScreen', { userId: user.uid });
            } catch (error) {
                alert('Error al iniciar sesión: ' + error.message);
            }
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email" onChangeText={(value) => handleChangeText('email', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Contraseña" secureTextEntry={true} onChangeText={(value) => handleChangeText('password', value)} />
            </View>
            <Button title="Iniciar Sesión" onPress={loginUser} />
            <View style={styles.registerContainer}>
                <Text>¿No tienes cuenta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateUserScreens')}>
                    <Text style={styles.registerText}>Regístrate.</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    registerContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    registerText: {
        color: '#007BFF',
    }
});

export default LoginScreen;
