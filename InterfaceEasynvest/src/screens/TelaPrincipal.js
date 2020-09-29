import React from 'react';
import {Text, SafeAreaView, Image, StyleSheet, View, TouchableOpacity} from 'react-native';

const TelaPrincipal = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor:'#fffcf5'}}>
      <View style={styles.viewImage}>
        <Image source={require('../assets/images/logo-easynvest.png')} style={styles.imagem}/>
        <Image source={require('../assets/images/eye-visible.png')} style={{marginTop: 45}}/>
      </View>
        <View style={styles.viewPrincipal}>
          <Text style={{fontSize: 20, color: '#858585'}}>Meu patrimônio</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>R$ 00,00</Text>
          <Text style={styles.titulos}>Meus Investimentos + Conta Easynvest</Text>
        </View>
        <View style={styles.viewSecundaria}>
          <Text style={styles.titulos}>Meus Investimentos</Text>
          <Text style={styles.dinheiro}>R$ 00,00</Text>
          <Text style={styles.titulos}>Conta Easynvest</Text>
          <Text style={styles.dinheiro}>R$ 00,00</Text>
        </View>
        <View style={styles.viewMenus}>
          <TouchableOpacity style={styles.buttonsMenus1}>
            <Image source={require('../assets/images/gift.png')} style={{marginBottom: 10}}/>
            <Text style={styles.buttonText1}>Indique e ganhe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsMenus}>
            <Image source={require('../assets/images/wallet.png')} style={{marginBottom: 10}}/>
            <Text style={styles.buttonText2}>Meus</Text>
            <Text style={styles.buttonText2}>Investimentos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acompanhar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Investir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Mais</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  imagem:{
    width: 50, 
    height: 40,
    marginTop: 50,
    marginLeft: 20
  },
  viewImage:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20
  },
  viewPrincipal:{
    marginTop: 40,
    marginBottom:20,
    alignItems: 'center',

  },
  viewSecundaria: {
    alignItems: 'center',
    marginTop: 20,
  },
  titulos: {
    color: '#858585',
    fontSize: 15
  },
  dinheiro:{
    fontWeight: 'bold',
  },
  viewButtons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#dbdbdb',
    borderStyle: 'solid',
    borderTopWidth: 2,
    marginTop: 30
  },
  button:{
    padding: 20,
  },
  buttonText:{
    color: '#858585',
  },
  buttonText2:{
    color: '#858585',
    paddingHorizontal: 7
  },
  buttonText1:{
    color: '#660178',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 0
  },
  viewMenus:{
    marginTop: 120,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  buttonsMenus1:{
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dbdbdb',
    backgroundColor: '#6ce5f0'
  },
  buttonsMenus:{
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#dbdbdb'
  },
})

export default TelaPrincipal;