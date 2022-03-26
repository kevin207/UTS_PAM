import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Desc from '../components/Desc';

const Rincian = ({navigation, route}) => {

    const Lanjutkan =  () => {

        navigation.navigate('Konfirmasi',{ awal: route.params.awal , tujuan : route.params.tujuan, layanan : route.params.layanan, tanggal : route.params.tanggal, waktu : route.params.waktu })

    }

    return(

        <View style={styles.container}>

            <View style={styles.form}>

                <Text style={styles.form_title}>Kapalzy</Text>
                
                <Text style={styles.top_desc}>Kuota Tersedia (10000)</Text>
                <Text style={styles.top_desc}>Rincian Tiket :</Text>

                <Desc 
                    awal={route.params.awal} 
                    tujuan={route.params.tujuan} 
                    layanan={route.params.layanan} 
                    tanggal={route.params.tanggal} 
                    waktu={route.params.waktu}
                />
                
                <View style={styles.tagihan}>
                    <Text style={styles.tagihan_text}>Total</Text>
                    <Text style={styles.tagihan_text}>Rp. 65.000</Text>
                </View>

                <View style={styles.button}>

                    <TouchableOpacity style={styles.button_left} onPress={() => navigation.goBack()}>
                        <Text style={styles.text_left}>Kembali</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_right} onPress={() => Lanjutkan()}>
                        <Text style={styles.text_right}>Lanjutkan</Text>
                    </TouchableOpacity>

                </View>

            </View>

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
        height: '75%',
        alignSelf: 'center',
        marginTop: '20%',
        borderRadius: 5,
        elevation: 5,
        marginBottom: '13%',
    },

    form_title:{
        marginTop: '8%',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0d5794',
        alignSelf: 'center',
        marginBottom: '6%'
    },
    
    top_desc:{
        fontSize:20,
        fontWeight: 'bold',
        marginHorizontal:'6%',
        marginVertical:'4%',
    },

    tagihan:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'6%',
        marginBottom:'13%',
        marginTop:'3%',
    },

    tagihan_text:{
        fontSize:24,
        fontWeight: 'bold',
    },

    button:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },

    button_left:{
        borderColor:'#0d5794',
        borderWidth:2,
        borderRadius:5,
    },

    button_right:{
        backgroundColor:'#0d5794',
        borderRadius:5,
    },

    text_left:{
        fontSize:25,
        color:'#0d5794',
        padding:5,
        paddingVertical: '2%',
        paddingHorizontal:'10%',
        fontWeight: 'bold',
    },

    text_right:{
        fontSize:25,
        color:'white',
        paddingVertical: '2%',
        paddingHorizontal:'10%',
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

export default Rincian;