import { React } from "react";
import { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const CreateUserScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre" />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email" />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Telefono" />
            </View>
            <View>
                <Button title="Registrar" />
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