import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Detail_Card= (props) => {

    return(

        <View style={styles.desc_box}>
                    
            <View style={styles.location}>
                <Text style={styles.location_text}>{props.awal}</Text>
                <AntDesign name="arrowright" size={40} color="black" />
                <Text style={styles.location_text}>{props.tujuan}</Text>
            </View>
            
            <Text style={{fontSize:18, fontWeight:'bold'}}>Jadwal Masuk Pelabuhan</Text>
            <Text style={{fontSize:16, marginVertical:'1%'}}>{props.tanggal}</Text>
            <Text style={styles.personil_text}>{props.waktu}</Text>

            <Text style={{fontSize:18, fontWeight:'bold', marginTop:'6%'}}>Layanan</Text>
            <Text style={{fontSize:18, marginVertical:'1%'}}>{props.layanan}</Text>

            <Text>-------------------------------------------------------------------</Text>
            <View style={styles.personil}>
                <Text style={styles.personil_text}>Dewasa 1x</Text>
                <Text style={styles.personil_text}>Rp. 65.000</Text>
            </View>

            <View style={styles.personal_container}>

                <View style={styles.personal_box}>
                    <Text>Nama :</Text>
                    <Text style={styles.personal_text}>{props.nama}</Text>
                </View>

                <View style={styles.personal_box}>
                    <Text>Jenis Kelamin :</Text>
                    <Text style={styles.personal_text}>{props.gender}</Text>
                </View>

                <View style={styles.personal_box}>
                    <Text>Umur :</Text>
                    <Text style={styles.personal_text}>{props.umur}</Text>
                </View>
            
            </View>
                
        </View>

    )

}

const styles = StyleSheet.create({

    desc_box:{
        marginTop:'5%',
        borderWidth:2,
        marginHorizontal:'6%',
        borderRadius:5,
        height:370,
        paddingHorizontal:'6%',
        backgroundColor: '#f2f2f2',
        borderColor:'#bab3b3',
        borderWidth: 1,
    },

    location:{
        flexDirection:'row',
        alignItems:'center', 
        marginVertical:'2%',
        justifyContent:'space-between'
    },

    location_text:{
        fontSize:20, 
        fontWeight:'bold', 
    },

    personil:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginVertical:'2%',
    },

    personil_text:{
        fontSize:15,
    },

    personal_container:{
        marginTop:'7%',
    },

    personal_box:{
        marginVertical:'2%',
    },

    personal_text:{
        fontWeight:'bold',
        marginTop:'1%'
    },
})

export default Detail_Card;