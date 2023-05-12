import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AddFeedScreen = ({ navigation }) => {
    return (
        // adicionando os feeds via componente
        // chamando o formfeed
        <FormFeed nave = {navigation}/>
)};

const styles = StyleSheet.create({});

export default AddFeedScreen;
