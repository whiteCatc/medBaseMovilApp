import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { db } from "../database/firebase";

const UserDetailsScreen = ({ route }) => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const getUserDetails = async () => {
            const userId = route.params.userId;
            const userRef = db.collection('users').doc(userId);
            const doc = await userRef.get();
            if (doc.exists) {
                setUserDetails(doc.data());
            } else {
                console.log('No such document!');
            }
        };

        getUserDetails();
    }, [route.params.userId]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bienvenido</Text>
            <Text>Nombre: {userDetails.name}</Text>
            <Text>Email: {userDetails.email}</Text>
            <Text>Teléfono: {userDetails.phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    }
});

export default UserDetailsScreen;
