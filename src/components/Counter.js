import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useMemo, useCallback } from 'react'
import Header from './Header'
import User from './User'

// const user = {
//     id: 1,
//     name: "Mehmet"
// }

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Mehmet")

    console.log("Counter component re-render")

    //count her attığında bu sayfa tam yenileniyor headerı memo kullandığımızda eğer header da değişen bir şey yoksa
    //header renderlanmıyor 

    // const user = useMemo(() => {
    //     return {
    //         id: 1,
    //         name: "Mehmet"
    //     }
    // }, [])

    const user = useMemo(() => {
        return {
            id: 1,
            name
        }
    }, [name])
    //bu sadece mount durumunda oluştu tekrar render etmek gerekirse [] arrayli olan kısmı ne olduğunda render etmemiz gerekiyor onu yazmalıyız
    //name degistirdiğimizde değişikliği görebilmemiz için bu usememo useffect gibi çalışıyorbu yüzden name



    // const user = {
    //     id: 1,
    //     name: "Mehmet"
    // }
    //{} === {} obje false döndüğünden ve []===[] array false döndüğünden dolayı referansları her defasında farklı olacaktır const user = 5 deseydik tekrardan user render olmayacaktı ve user component re-render görmeyecektik
    //bunu çözmek ya bunu export default olanın componentin dışında, yukarıda kullanacağız böylelikle bu obje 1 kere oluşturulacak 1 kere bellekte referans gösterilecek bir dahada değişmeyecektir ya da içerde kullanmamız
    //gerekecek ise usememo kullanacağız
    //tabi userda memo sarmaladığımız halde bu şekilde

    //js de primitive (ilkel) ve reference veri tipleri vardır, objeler referance tiplidir , primitive; number , string gibi ifadelerdir


    //  const increment = () => setCount(count + 1)
    //headerdan countı arttırmak istediğimizde header random sayısı da renderlanıyor, referans yenilendiğinden tekrar tekrar yeniliyor bunu çözmek için useCallback kullanmalıyız 
    //usecallbacki fonksiyonlar için kullanıyor, usememoyu array ve objeler için de kullanılabilir

    // const increment = useCallback(() => {
    //     setCount(count + 1)
    // }, [])
    //bu şekilde olursa burda 1 kez çalıştğından count degeri 0 dan 1 oluyor sadece ve öyle kalıyor 

    // const increment = useCallback(() => {
    //     setCount(count + 1)
    // }, [count])
    //ama eğer bu şekilde kullanırsak bu seferde header componenti tekrar render olur

    const increment = useCallback((amount) => {
        setCount(prev => prev + amount)
    }, [])
    //bunu için en uygunu prev previ kullanmak olacaktır


    return (
        <View style={styles.container}>
            {/* <Header count={count < 5 ? count : 5} /> */}
            <Header increment={increment} />
            <Text style={styles.text}>{count}</Text>
            <Button title="Arttır" onPress={() => increment(1)} />
            <Button title="İsim Degistir" onPress={() => setName("ahmet")} />
            <User user={user} />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        fontSize: 24
    },
})