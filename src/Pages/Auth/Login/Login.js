import React, { useState } from "react";
import { Text , View } from "react-native";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";

import { Formik } from "formik";
import { showMessage, } from "react-native-flash-message";
import auth from '@react-native-firebase/auth';

import authErrorMessageParser from "../../../Utils/authErrorMessageParser";
import styles from "./Login.styles"


const initialFormValues = {
    userMail : "" , 
    Password : ""
}


function Login({navigation}){

    const [loading , setloading] = useState(false);
    function handleSignUp(){
        return(
            navigation.navigate("SignInPage")
        )
    }


    async function handleFormSubmit(formValues){
        try {
            setloading(true);
            await auth().signInWithEmailAndPassword(formValues.userMail , formValues.Password)

            setloading(false);  
        } catch (error) {
            console.log(error);
            showMessage({
                message: authErrorMessageParser(error.code),    //switch case yapısı ile düzgün hata mesajı gosterdik
                type: "danger",
              });
            setloading(false);
        }
  
      console.log(formValues)
    }


    return(
        <View >
           <Text style={styles.header} >BookShelf ' e Hoşgeldiniz</Text>
           <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values , handleChange , handleSubmit}) => (
                <>
                <Input 
                onChangeText = {handleChange("userMail")} 
                value={values.userMail} 
                placeholder="E-postanızı Giriniz"/>
                <Input 
                onChangeText = {handleChange("Password")}
                value={values.Password} 
                placeholder="Şifrenizi giriniz"
                secureTextEntry/>

                <Button  title="Giriş Yap" onPress={handleSubmit} loading={loading}/>
            </>
            )}
         
         </Formik>
            <Button 
            title="Kayıt Ol"
            theme="Secondary"
            onPress={handleSignUp} />
        </View>
    )
}

export default Login;