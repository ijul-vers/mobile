import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Href, Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Google from '@/assets/images/google-logo.svg';
import { Colors } from '@/constants/Colors';

type Props = {
    emailHref: Href<string |object>;
}

const SocialMedia=(props: Props)=> {
    const {emailHref}=props;
        return (
            <View style={styles.lgnWrapper}>
                        <Link href={emailHref} asChild>
                            <TouchableOpacity style={styles.btn}>
                            <Ionicons name="mail-outline" size={20} color="black" />
                            <Text style={styles.btnText}>Lanjut dengan Email?</Text>
                            </TouchableOpacity>
                        </Link>

                        <TouchableOpacity style={styles.btn}>
                            <Google width={20} height={20} />
                            <Text style={styles.btnText}>Lanjut dengan Google?</Text>
                        </TouchableOpacity>

                        </View>
        )
}
export default SocialMedia

const styles = StyleSheet.create({
    lgnWrapper:{
        alignSelf:'stretch',
      },
      btn:{
        flexDirection:'row',
        padding:10,
        borderColor:Colors.gray,
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:15,
        gap:5,
      },
      btnText:{
        fontSize:14,
        fontWeight:'600',
        color:Colors.black
      },
})