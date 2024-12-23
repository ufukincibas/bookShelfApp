import React, { useState } from "react";
import {View , Text} from "react-native"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { showMessage, } from "react-native-flash-message";

import styles from "./Login.styles"
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import authErrorMessageParser from "../../../Utils/AuthErrorMessageParser";


const initialFormValues  = {
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
                navigation.navigate("HomePage") 
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
        <View>
            <Text style={styles.header}>BookShelf'e Giriş Yap</Text>
           
          <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}> 
          { ({values , handleChange , handleSubmit}) => (
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
            <Button title="Kayıt ol" theme="Secondary" onPress={handleSignUp}/>
        </View>
    )
}

export default Login;