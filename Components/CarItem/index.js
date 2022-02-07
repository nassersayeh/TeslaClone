import React from 'react'
import {View,Text,ImageBackground} from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'
const CarItem = (props)=>{
    const {name , tagline , taglineCTA,image} = props.car
    return(
        <View style={styles.carContinar}>

        <ImageBackground source={image} style={styles.image} />
        <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}&nbsp;
        <Text style={styles.CTA}>
            {taglineCTA}
        </Text>
        </Text>
        </View>
        <View style={styles.buttonContainer}>
        <StyledButton type="Primary" content={"Custom Order"} onPress={()=>{
            console.warn("Custom Order was Pressed")
        }}/>

        <StyledButton type="Secondry" content={"Existing Inventory"} onPress={()=>{
            console.warn("Existing Inventory was Pressed")
        }}/>

        </View>


    </View>
    )
    
}

export default CarItem;