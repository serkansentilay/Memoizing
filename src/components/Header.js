import { StyleSheet, Text, View, Button } from 'react-native'
import React, { memo } from 'react'

const Header = ({ count, increment }) => {
    console.log("Header component re-render")

    const arr = new Array(5).fill().map(() => Math.floor(Math.random() * 10));


    return (
        <View style={styles.container}>
            <Text>Header</Text>
            <Text>{JSON.stringify(arr)}</Text>
            <Button onPress={() => increment(5)} title="arttır" />
        </View>
    )
}
//memo, ilgili componentin aldığı önceki componentleri ve yeni componentleri karşılaştırır aynı ise render etmez
//farklı ise render eder

export default memo(Header)
//memo yu sarmalarsak headera headerde değişen bir prop gönderilmedikçe header tekrar renderlanmayacak
//eğer header farklı değer aldığında tekrar çalışacak
//memo header gelip bakıyor 0 0 mı evet ise duruyor eğer farklı ise 0 1 mi farklı yeniliyor

const styles = StyleSheet.create({
    container: {
        marginBottom: 60,
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})