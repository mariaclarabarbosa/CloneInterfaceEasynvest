import React, {useState, useEffect} from 'react'
import {Text, SafeAreaView, View, Image, ScrollView} from 'react-native'
import styles from './Styles.jsx'
import Button from '../../components/Button.jsx'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Mais = () => {
    const [user, setUser] = useState('Maria Clara')

    return(
        <>
           <SafeAreaView  style={styles.tela}>
            <ScrollView>
                <View style={styles.viewImage}>
                <Image 
                        source={require('../../assets/images/logo-easynvest.png')} 
                        style={styles.imagem1}
                    />
                </View>
                <View>
                    <Button texto='Perfil' textStyle={styles.buttons}/>
                    <Button texto='Depósitos e retiradas' textStyle={styles.buttons}/>
                    <Button texto='Meus Pedidos' textStyle={styles.buttons}/>
                    <Button texto='Extrato e relatórios' textStyle={styles.buttons}/>
                    <Button texto='EasyToken' textStyle={styles.buttons}/>
                    <Button texto='Configurações' textStyle={styles.buttons}/>
                    <Button texto='Aprenda a Investir' textStyle={styles.buttons}/>
                    <Button texto='Ajuda' textStyle={styles.buttons}/>
                </View>
                <View style={styles.viewLogin}>
                    <Ionicons name='person-circle-sharp' color='#d6d6d6' size={80} style={styles.icon}/>
                    <View style={styles.viewDados}>
                        <Text style={styles.text}>{user}</Text>
                        <Button 
                            buttonStyle={styles.buttonEsqueceuSenha} 
                            textStyle={styles.textButtonEsqueceuSenha} 
                            texto='Sair'
                        />
                    </View>
                </View>
               </ScrollView>
           </SafeAreaView> 
        </>
    )
}

export default Mais;