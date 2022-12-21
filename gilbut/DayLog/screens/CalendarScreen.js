import { format } from 'date-fns'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View, Button } from 'react-native'
import CalendarView from '../component/CalendarView'
import FeedList from '../component/FeedList'
import LogContext from '../contexts/LogContext'

function CalendarScreen() {
  const { logs } = useContext(LogContext)
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  )

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd')
        acc[formattedDate] = { marked: true }
        return acc
      }, {}),
    [logs]
  )

  const filteredLogs = logs.filter(
    (log) => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate
  )
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  )
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
