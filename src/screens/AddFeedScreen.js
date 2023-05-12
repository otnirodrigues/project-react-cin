import React from 'react';
import { Text, StyleSheet } from 'react-native';
import FormFeed from '../components/FormFeed';

const AddFeedScreen = ({ navigation }) => {
    return (
        // adicionando os feeds via componente
        // chamando o formfeed
        <FormFeed navegacao = {navigation}/>
)};

const styles = StyleSheet.create({});

export default AddFeedScreen;
