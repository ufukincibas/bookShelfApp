import React from "react";
import { Text , View } from "react-native";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";

function Login(){
    return(
        <View>
           
            <Input
            label="Kullanıcı Adı :"
            placeholder = "Kullanıcı Adınızı Giriniz..."
         />
            <Input
            label="Şifre :"
            placeholder= "Şifrenizi Giriniz"
            />

            <Button title="Giriş Yap" />
            <Button 
            title="Kayıt Ol"
            theme="Secondary" />
        </View>
    )
}

export default Login;