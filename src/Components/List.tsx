import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListData } from './ListData'
import CardLayout from './CardLayout'

const List = () => {

  return (
    <FlatList
    showsVerticalScrollIndicator={false}
    style={{
      marginTop:20
    }}
    data={ListData}
    renderItem={({item})=><CardLayout Car={item}/>
  }
    >

    </FlatList>
  )
}

export default List

const styles = StyleSheet.create({})