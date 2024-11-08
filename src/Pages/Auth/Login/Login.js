import React, { useState } from "react";
import { Text , View } from "react-native";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";

import auth from '@react-native-firebase/auth';




function Login({navigation}){

        const [loading , setLoading] = useState(false)

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

            <Button 
            title="Giriş Yap" 
            />
            <Button 
            title="Kayıt Ol"
            theme="Secondary" />
        </View>
    )
}

export default Login;