import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Desc = (props) => {

    return(

        <View style={styles.desc_box}>
                    
            <View style={styles.location}>
                <Text style={styles.location_text}>{props.awal}</Text>
                <AntDesign name="arrowright" size={45} color="black" />
                <Text style={styles.location_text}>{props.tujuan}</Text>
            </View>
            
            <Text style={{fontSize:20, fontWeight:'bold'}}>Jadwal Masuk Pelabuhan</Text>
            <Text style={{fontSize:18, marginVertical:'2%'}}>{props.tanggal}</Text>
            <Text style={styles.personil_text}>{props.waktu}</Text>

            <Text style={{fontSize:20, fontWeight:'bold', marginTop:'12%'}}>Layanan</Text>
            <Text style={{fontSize:20, marginVertical:'2%'}}>{props.layanan}</Text>

            <Text>--------------------------------------------------------------</Text>
            <View style={styles.personil}>
                <Text style={styles.personil_text}>Dewasa 1x</Text>
                <Text style={styles.personil_text}>Rp. 65.000</Text>
            </View>
                

        </View>

    )

}

const styles = StyleSheet.create({

    desc_box:{
        borderWidth:2,
        marginHorizontal:'6%',
        borderRadius:5,
        height:285,
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
        fontSize:25, 
        fontWeight:'bold', 
    },

    personil:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginVertical:'4%',
    },

    personil_text:{
        fontSize:18,
    },
})

export default Desc;