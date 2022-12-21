import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View, Button } from 'react-native'
import CalendarView from '../component/CalendarView'
import LogContext from '../contexts/LogContext'

function CalendarScreen() {
  const { logs } = useContext(LogContext)
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd')
    acc[formattedDate] = { marked: true }
    return acc
  }, {})
  return <CalendarView />
}

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
})

export default CalendarScreen
