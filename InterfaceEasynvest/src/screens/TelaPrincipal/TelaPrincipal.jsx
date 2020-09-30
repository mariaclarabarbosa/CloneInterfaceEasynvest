import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, Image, View, FlatList} from 'react-native';
import styles from './Styles.jsx'
import Button from '../../components/Button.jsx'
import ButtonMenus from '../../components/ButtonMenus.jsx'

const TelaPrincipal = () => {
  const [visible, setVisible] = useState(true)
  const [total, setTotal] = useState(0.0)
  const [investido, setInvestido] = useState(0.0)
  const [conta, setConta] = useState(0.0)

  return (
    <>
      <SafeAreaView style={styles.tela}>
        <View style={styles.viewImage}>
          <Image 
            source={require('../../assets/images/logo-easynvest.png')} 
            style={styles.imagem1}
          />
          <Image 
            source={require('../../assets/images/eye-visible.png')} 
            style={styles.imagem2}
          />
        </View>
        <View style={styles.viewPrincipal}>
          <Text style={styles.texto1}>Meu patrimônio</Text>
          <Text style={styles.texto2}>R$ {total}</Text>
          <Text style={styles.textTitulos}>Meus Investimentos + Conta Easynvest</Text>
        </View>
        <View style={styles.viewSecundaria}>
          <Text style={styles.textTitulos}>Meus Investimentos</Text>
          <Text style={styles.textDinheiro}>R$ {investido}</Text>
          <Text style={styles.textTitulos}>Conta Easynvest</Text>
          <Text style={styles.textDinheiro}>R$ {conta}</Text>
        </View>
        <View style={styles.viewMenus}>
          <ButtonMenus 
            buttonStyle={styles.menuIndiqueGanhe}
            textStyle={styles.textIndiqueGanhe}
            texto='Indique e ganhe'
            imageStyle={{marginBottom: 10}}
            icon={require('../../assets/images/gift.png')}
          />
          <ButtonMenus 
            buttonStyle={styles.menus}
            textStyle={styles.textMenus}
            tStyle={styles.textMenus}
            text='Meus'
            texto='Investimentos'
            imageStyle={{marginBottom: 10}}
            icon={require('../../assets/images/wallet.png')}
          />
        </View>
        <View style={styles.viewButtons}>
          <Button
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            texto='Acompanhar'
          />
          <Button
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            texto='Investir'
          />
          <Button
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            texto='Mais'
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default TelaPrincipal;