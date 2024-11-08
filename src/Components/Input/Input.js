import React from "react";
import { TextInput , View , Text } from "react-native";

import styles from "./Input.styles"


function Input({label ,placeholder , value , onChangeText , secureTextEntry , keyboardType = "default"}){
    return(
        <View style={styles.container}>
            {/* Label varsa göster */}
      {label && <Text style={styles.label}>{label}</Text>} 
      {/* Giriş alanı */}
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        keyboardType={keyboardType}
        />
        </View>
    )
}

export default Input;