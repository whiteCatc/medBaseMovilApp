import React, { useState } from "react";
import { View, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { db, auth } from "../database/firebase";

const CreateUserScreen = ({ navigation }) => {  // Recibe navigation como prop
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const saveNewUser = async () => {
        if (state.name === '' || state.email === '' || state.phone === '' || state.password === '') {
            alert('Por favor, completa todos los campos.');
        } else {
            try {
                const userCredential = await auth.createUserWithEmailAndPassword(state.email, state.password);
                const user = userCredential.user;

                await db.collection('users').doc(user.uid).set({
                    name: state.name,
                    email: state.email,
                    phone: state.phone
                });

                alert('Usuario registrado correctamente.');
                navigation.navigate('LoginScreen');  //Regresar al LoginScreen
            } catch (error) {
                console.error("Error al registrar el usuario:", error);
                alert('Error al registrar usuario: ' + error.message);
            }
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre" onChangeText={(value) => handleChangeText('name', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email" onChangeText={(value) => handleChangeText('email', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Teléfono" onChangeText={(value) => handleChangeText('phone', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Contraseña" secureTextEntry={true} onChangeText={(value) => handleChangeText('password', value)} />
            </View>
            <View>
                <Button title="Registrar" onPress={saveNewUser} />
            </View>
        </ScrollView>
    );
};

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
});

export default CreateUserScreen;
