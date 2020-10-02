import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, Image, View, VirtualizedList,TouchableHighlight, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles.jsx'
import ButtonMenus from '../../components/ButtonMenus.jsx'
import Ionicons from 'react-native-vector-icons/Ionicons';

const TelaPrincipal = () => {
  const [visible, setVisible] = useState(true)
  const [total, setTotal] = useState(0.0)
  const [investido, setInvestido] = useState(0.0)
  const [conta, setConta] = useState(0.0)
  const [icon, setIcon] = useState('eye-outline')

  const visibilidade = () =>{
    if(icon === 'eye-outline'){
      setIcon('eye-off-outline')
      setTotal('')
      setInvestido('')
      setConta('')
    } else if(icon === 'eye-off-outline'){
      setIcon('eye-outline')
      setTotal(0.0)
      setInvestido(0.0)
      setConta(0.0)
    }
  }

  const DATA = [
    {
      id: '1',
      text: '',
      texto:'Indique e ganhe', 
      icons: 'gift-outline',
      iconColor: 'purple'
    },
    {
      text: 'Meus',
      texto:'Investimentos', 
      id: '2',
      icons: 'wallet-outline',
      iconColor: 'purple'
    },
    {
      text: '',
      texto:'Rendimento', 
      id: '3',
      icons: 'bar-chart-outline',
      iconColor: 'purple'
    },
    {
      text: 'Conta',
      texto:'EasyInvest', 
      id: '4',
      icons: 'cash-outline',
      iconColor: 'purple'
    }
  ];

  return (
    <>
      <SafeAreaView style={styles.tela}>
        <View style={styles.viewImage}>
          <Image 
            source={require('../../assets/images/logo-easynvest.png')} 
            style={styles.imagem1}
          />
          <TouchableOpacity onPress={visibilidade}>
            <Ionicons name={icon} size={25} color='purple' style={styles.visible}/>
          </TouchableOpacity>
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
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ButtonMenus
                icon={item.icons}
                iconColor={item.iconColor}
                texto={item.texto}
                text={item.text}
              />
            )}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default TelaPrincipal;