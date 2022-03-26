import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Desc from '../components/Desc';

const Pesanan = ({navigation, route}) => {

    const Detail = () => {
      
        navigation.navigate('Detail',{ nama: route.params.nama , gender: route.params.gender, umur: route.params.umur, awal: route.params.awal, tujuan: route.params.tujuan, layanan: route.params.layanan, waktu: route.params.waktu, tanggal: route.params.tanggal})
    
    }

    return(

        <View style={styles.container}>

            <Text style={styles.title}>Daftar Pemesanan</Text>

            <TouchableOpacity  style={styles.pesanan_list} onPress={ () => Detail()} >
               
               <Desc
                    awal={route.params.awal} 
                    tujuan={route.params.tujuan} 
                    layanan={route.params.layanan} 
                    tanggal={route.params.tanggal} 
                    waktu={route.params.waktu}
                />

            </TouchableOpacity>

            <View style={styles.bottom_navigation}>

                <TouchableOpacity style={styles.nav_menu} onPress={ () => navigation.navigate('Beranda')}>
                    <FontAwesome name="home" size={30} color="#0d5794" /> 
                    <Text style={styles.nav_text}>Beranda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nav_menu} onPress={ () => navigation.navigate('Pesanan')}>
                    <FontAwesome name="book" size={30} color="#0d5794" />
                    <Text style={styles.nav_text}>Pesanan Saya</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nav_menu} onPress={ () => navigation.navigate('Pembatalan')}>
                    <MaterialCommunityIcons name="file-cancel" size={30} color="#0d5794" />
                    <Text style={styles.nav_text}>Pembatalan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nav_menu}>
                    <Feather name="menu" size={30} color="#0d5794" /> 
                    <Text style={styles.nav_text}>Lainnya</Text>
                </TouchableOpacity>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#f2f2f2',
        height:'100%',
    },

    title:{
        width:'100%',
        fontSize:30,
        textAlign:'center',
        backgroundColor:'#0d5794',
        color:'white',
        paddingVertical:'6%',
        paddingTop:'15%',
    },

    bottom_navigation:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        backgroundColor: '#f2f2f2',
        width: '100%',
        height: '10%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        borderColor: '#cfcfcf',
    },

    nav_menu:{
        alignItems: 'center',
    },

    nav_text:{
        color: '#0d5794',
        marginTop:'5%',
    },

    pesanan_list:{
        marginVertical:'5%'
    },

})

export default Pesanan;