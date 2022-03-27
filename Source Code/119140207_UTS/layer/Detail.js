import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Detail_Card from '../components/Detail_Card';

const Detail = ({navigation, route}) => {

    const Transfer = () =>{

        Alert.alert("TRANSFER KE NOMOR REKENING: 67384xxxxxxxx")

    }

    const Batal = () => {
        Alert.alert("Pesanan Dibatalkan")
        navigation.navigate('Dummy', { awal: route.params.awal, tujuan: route.params.tujuan, layanan: route.params.layanan, tanggal: route.params.tanggal, waktu: route.params.waktu })
    }

    return(

        <View style={styles.container}>

            <Text style={styles.title}>Detail Pemesanan</Text>

            <View  style={styles.pesanan_list} onPress={ () => Back()} >
               
               <Detail_Card
                    awal={route.params.awal} 
                    tujuan={route.params.tujuan} 
                    layanan={route.params.layanan} 
                    tanggal={route.params.tanggal} 
                    waktu={route.params.waktu}
                    nama={route.params.nama}
                    gender={route.params.gender}
                    umur={route.params.umur}
                />

            </View>

            <View style={styles.button}>

                    <TouchableOpacity style={styles.button_left} onPress={() => navigation.goBack()}>
                        <Text style={styles.text_left}>Kembali</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_right} onPress={() => Batal()}>
                        <Text style={styles.text_right}>Batalkan</Text>
                    </TouchableOpacity>

            </View>

            <TouchableOpacity onPress={ () => Transfer()} style={styles.cara}>
                <Text style={styles.cara_text}>Cara Bayar</Text>
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
        marginVertical:'5%',
        marginTop:'20%'
    },

    button:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },

    button_left:{
        borderColor:'red',
        borderWidth:2,
        borderRadius:5,
    },

    button_right:{
        backgroundColor:'red',
        borderRadius:5,
    },

    text_left:{
        fontSize:25,
        color:'red',
        padding:5,
        paddingVertical: '2%',
        paddingHorizontal:'11%',
        fontWeight: 'bold',
    },

    text_right:{
        fontSize:25,
        color:'white',
        paddingVertical: '2%',
        paddingHorizontal:'11%',
        fontWeight: 'bold',
    },

    cara:{
        alignSelf:'center',
        marginTop:'10%',
    },
    
    cara_text:{
        fontSize:25,
        paddingVertical: '2%',
        paddingHorizontal:'11%',
        borderWidth:2,
    },

})

export default Detail;