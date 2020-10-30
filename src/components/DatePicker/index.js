import { format } from 'date-fns';
import React from 'react';
import { Platform, useColorScheme } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { Label, DatePickerContainer, DatePickerValue } from './styles';

const DatePickerComponent = ({ title, date, showDatePicker, onPress, onDateChange, showValue }) => {
  const theme = useColorScheme()

  return (
    <>
      <Label>{title}</Label>
      <DatePickerContainer
        onPress={onPress}
      >
        {showDatePicker && (
          <DatePicker
            date={date}
            mode="date"
            onDateChange={onDateChange}
            is24Hour={true}
            maximumDate={new Date()}
            textColor={theme === "dark" ? "#FFFFFF" : "#212121"}
          />
        )}
        {showValue && <DatePickerValue> {date && format(date, 'dd/MM/yyyy')} </DatePickerValue>}
      </DatePickerContainer>
    </>
  );
}

export default DatePickerComponent;
