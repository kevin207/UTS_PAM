import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, KeyboardAvoidingView, Alert } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Desc from '../components/Desc';

const Konfirmasi = ({navigation, route}) => {

    const [Nama, setNama] = useState('');
    const [Gender, setGender] = useState('');
    const [Umur, setUmur] = useState('');
    
    const Button = () => {

        if ( Nama=== "" || Gender === "" || Umur === "" )
        {
            Alert.alert("Input Error!")
        }
        
        else
        {
            Alert.alert("TRANSFER KE NOMOR REKENING: 67384xxxxxxxx")
            navigation.navigate('Pesanan',{ nama: Nama , gender: Gender, umur: Umur, awal: route.params.awal, tujuan: route.params.tujuan, layanan: route.params.layanan, waktu: route.params.waktu, tanggal: route.params.tanggal})
        }
    
    }

    return(

        <View style={styles.container}>
            
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.form}>

                <Text style={styles.form_title}>Kapalzy</Text>
                <Text style={styles.top_desc}>Informasi Pesanan :</Text>

                <Desc 
                    awal={route.params.awal} 
                    tujuan={route.params.tujuan} 
                    layanan={route.params.layanan} 
                    tanggal={route.params.tanggal} 
                    waktu={route.params.waktu}
                />
                
                <Text style={styles.top_desc}>Data Pemesan :</Text>

                <Text style={styles.input_title}>Nama Lengkap</Text>
                <TextInput 
                    style={styles.input_box} 
                    placeholder='Masukkan Nama Lengkap'
                    onChangeText={(text) => setNama(text)}
                    value={Nama}
                />

                <Text style={styles.input_title}>Jenis Kelamin</Text>
                <View style={styles.input_box_picker}>
                    <Picker
                        onValueChange={(itemValue) => setGender(itemValue)}
                        style={{height:25}}
                        selectedValue={Gender}
                    >
                        <Picker.Item color='#9c9a9a' label="Pilih" value=""/>
                        <Picker.Item label="Laki-Laki" value="Laki-Laki" />
                        <Picker.Item label="Perempuan" value="Perempuan" />
                    </Picker>
                </View>

                <Text style={styles.input_title}>Umur</Text>
                <TextInput 
                    style={styles.input_box} 
                    placeholder='Masukkan Umur'
                    onChangeText={(text) => setUmur(text)}
                    value={Umur}
                />

                <TouchableOpacity style={styles.button} onPress={() => Button()}>
                    <Text style={styles.button_text}>Submit</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>

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
        height:'100%',
        backgroundColor: '#f2f2f2',
    },

    form:{
        width: '92%',
        backgroundColor: 'white',
        height: '80%',
        alignSelf: 'center',
        marginTop: '15%',
        borderRadius: 5,
        elevation: 5,
        marginBottom: '8%',
    },

    form_title:{
        marginTop: '6%',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0d5794',
        alignSelf: 'center',
        marginBottom: '2%'
    },
    
    top_desc:{
        fontSize:20,
        fontWeight: 'bold',
        marginHorizontal:'6%',
        marginVertical:'3%',
    },

    input_title:{
        marginHorizontal:'6%',
        marginBottom:'1%',
    },

    input_box:{
        marginHorizontal:'6%',
        backgroundColor:'#f2f2f2',
        paddingVertical:'1%',
        borderRadius:5,
        marginBottom:'2%',
        paddingLeft:'2.5%',
    },

    input_box_picker:{
        marginHorizontal:'6%',
        backgroundColor:'#f2f2f2',
        paddingVertical:'1%',
        borderRadius:5,
        marginBottom:'2%',
    },

    button:{
        alignSelf:'center',
        backgroundColor:'#eb873b',
        borderRadius:5,
        marginTop:'4.5%',
    },


    button_text:{
        fontSize:25,
        color:'white',
        padding:5,
        paddingHorizontal:'25%',
        fontWeight: 'bold',
    },

    bottom_navigation:{
        flexDirection:'row',
        backgroundColor: '#f2f2f2',
        width: '100%',
        height: '10%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        borderColor: '#cfcfcf',
        position:'absolute',
        bottom:0,
    },

    nav_menu:{
        alignItems: 'center',
    },

    nav_text:{
        color: '#0d5794',
        marginTop:'5%'
    },

})

export default Konfirmasi;