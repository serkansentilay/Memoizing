import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const User = ({ user }) => {
    console.log("User component re-render")

    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(user, null, 2)}</Text>
        </View>
    )
}

export default memo(User)

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        borderTopWidth: 2,
        paddingTop: 10,
        alignItems: 'center'

    }
})