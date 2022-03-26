import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, KeyboardAvoidingView, Picker } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather, Fontisto, MaterialIcons, FontAwesome5, EvilIcons } from '@expo/vector-icons';

const Beranda = ({navigation}) => {

    const [Awal, setAwal] = useState("");
    const [Tujuan, setTujuan] = useState("");
    const [Layanan, setLayanan] = useState("");
    const [Tanggal, setTanggal] = useState("");
    const [Waktu, setWaktu] = useState("");

    const Button = () => {
       
        if (Awal=== "" || Tujuan === "" || Layanan === "" || Tanggal === "" || Waktu === "")
        {
            Alert.alert("Input Error!")
        }

        else
        {
            navigation.navigate('Rincian',{ awal: Awal , tujuan : Tujuan, layanan : Layanan, tanggal : Tanggal, waktu : Waktu })
        }

    }

    return(

        <View style={styles.container}>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.form}>

                <Text style={styles.form_title}>Kapalzy</Text>

                <View style={styles.input}>
                    <Text style={styles.input_title}>Pelabuhan Awal</Text>
                    <View style={styles.input_label}>

                        <Fontisto name="ship" size={40} color="black" />

                        <View style={styles.input_box}>
                            <Picker

                                onValueChange={(itemValue) => setAwal(itemValue)}
                                style={{height:40}}
                            >
                                <Picker.Item color='#9c9a9a' label="Pilih Pelabuhan Awal" value="" />
                                <Picker.Item label="Bakauheni, Lampung" value="Bakauheni" />
                                <Picker.Item label="Belawan, Medan" value="Belawan" />
                                <Picker.Item label="Kote, Kepulauan Riau" value="Kote" />
                                <Picker.Item label="Merak, Jakarta" value="Merak" />
                                <Picker.Item label="Muara, Padang" value="Muara" />
                            </Picker>
                        </View>

                    </View>
                </View>

                <View style={styles.input}>
                    <Text style={styles.input_title}>Pelabuhan Tujuan</Text>
                    <View style={styles.input_label}>

                        <Fontisto name="ship" size={40} color="black" />
                        <View style={styles.input_box}>
                            <Picker
                                onValueChange={(itemValue) => setTujuan(itemValue)}
                                style={{height:40}}
                            >
                                <Picker.Item color='#9c9a9a' label="Pilih Pelabuhan Tujuan" value="" />
                                <Picker.Item label="Bakauheni, Lampung" value="Bakauheni" />
                                <Picker.Item label="Belawan, Medan" value="Belawan" />
                                <Picker.Item label="Kote, Kepulauan Riau" value="Kote" />
                                <Picker.Item label="Merak, Jakarta" value="Merak" />
                                <Picker.Item label="Muara, Padang" value="Muara" />
                            
                            </Picker>
                        </View>

                    </View>
                </View>

                <View style={styles.input}>
                    <Text style={styles.input_title}>Kelas Layanan</Text>
                    <View style={styles.input_label}>

                        <MaterialCommunityIcons name="chair-school" size={40} color="black" />
                        <View style={styles.input_box}>
                            <Picker
                                onValueChange={(itemValue) => setLayanan(itemValue)}
                                style={{height:40}}
                            >
                                <Picker.Item color='#9c9a9a' label="Pilih Layanan" value="" />
                                <Picker.Item label="Eksekutif" value="Eksekutif" />
                                <Picker.Item label="Bisnis" value="Bisnis" />
                                <Picker.Item label="Lesehan" value="Lesehan" />
                                <Picker.Item label="VIP" value="VIP" />
                            </Picker>
                        </View>

                    </View>
                </View>

                <View style={styles.input}>
                    <Text style={styles.input_title}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.input_label}>

                        <MaterialIcons name="date-range" size={40} color="black" />
                        <View style={styles.input_box}>
                            <Picker
                                onValueChange={(itemValue) => setTanggal(itemValue)}
                                style={{height:40}}
                            >
                                <Picker.Item color='#9c9a9a' label="Pilih Tanggal Masuk" value="" />
                                <Picker.Item label="Kamis, 19 Mei 2022" value="Kamis, 19 Mei 2022" />
                                <Picker.Item label="Jumat, 20 Mei 2022" value="Jumat, 20 Mei 2022" />
                                <Picker.Item label="Sabtu, 21 Mei 2022" value="Sabtu, 21 Mei 2022" />
                                <Picker.Item label="Minggu, 22 Mei 2022" value="Minggu, 22 Mei 2022" />
                                <Picker.Item label="Senin, 23 Mei 2022" value="Senin, 23 Mei 2022" />
                                <Picker.Item label="Selasa, 24 Mei 2022" value="Selasa, 24 Mei 2022" />
                                <Picker.Item label="Rabu, 25 Mei 2022" value="Rabu, 25 Mei 2022" />
                            </Picker>
                        </View>

                    </View>
                </View>

                <View style={styles.input}>
                    <Text style={styles.input_title}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.input_label}>

                        <View style={styles.icon}>
                            <FontAwesome5 name="clock" size={40} color="black" />
                        </View>
                        
                        <View style={styles.input_box}>
                            <Picker
                                onValueChange={(itemValue) => setWaktu(itemValue)}
                                style={{height:40}}
                            >
                                <Picker.Item color='#9c9a9a' label="Pilih Jam Masuk" value="" />
                                <Picker.Item label="07.00 WIB" value="07.00 WIB" />
                                <Picker.Item label="10.00 WIB" value="10.00 WIB" />
                                <Picker.Item label="13.00 WIB" value="13.00 WIB" />
                                <Picker.Item label="16.00 WIB" value="16.00 WIB" />
                                <Picker.Item label="19.00 WIB" value="19.00 WIB" />
                            </Picker>
                        </View>

                    </View>
                </View>

                <View style={styles.keterangan}>
                    <Text>Dewasa</Text>
                    <Text>1 Orang</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={()=> Button()}>
                    <EvilIcons name="search" size={24} color="white" />
                    <Text style={styles.button_text}>Buat Tiket</Text>
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
        backgroundColor: '#f2f2f2',
        height: '100%',
    },

    form:{
        width: '92%',
        backgroundColor: 'white',
        height: '75%',
        alignSelf: 'center',
        marginTop: '20%',
        borderRadius: 5,
        elevation: 5,
        marginBottom: '13%',
    },

    form_title:{
        marginTop: '7%',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0d5794',
        alignSelf: 'center',
        marginBottom: '5%'
    },

    input:{
        width:'100%',
        marginVertical: '2%',
        paddingHorizontal:'5%',
    },

    input_title:{
        fontSize: 20,
        color: '#919090',
        marginBottom: '2%'
    },

    input_label:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    input_box:{
        width:'86%',
        borderRadius:5,
        backgroundColor:'#f2f2f2',
        paddingLeft: '2%',
    },

    keterangan:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'4%',
        marginHorizontal:'5%',
        borderRadius: 5,
        backgroundColor:'#f2f2f2',
        paddingHorizontal: '5%',
        height:'6.5%',
        alignItems:'center',
    },  

    button:{
        alignSelf:'center',
        width:'70%',
        marginVertical:'7.5%',
        backgroundColor:'#eb873b',
        marginHorizontal:'5%',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:'3%',
        paddingLeft:'5%',
        paddingRight:'25%',
        justifyContent:'space-between',
        borderRadius: 5,
    },

    button_text:{
        color:'white',
        fontSize: 20,
        fontWeight:'bold',
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
        marginTop:'5%'
    },

})

export default Beranda;