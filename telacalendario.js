import { Calendar, CalendarList , Agenda, CalendarTheme} from 'react-native-calendars';
import { View } from 'react-native';
import React from 'react';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abril','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
  dayNamesShort: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
  today: 'Aujourd\'hui'

  
};

LocaleConfig.defaultLocale = 'fr';

export default class Example extends React.Component {
  render() {
    return (
      <View style={{  flex: 1 }}>
       <Calendar
 
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={() =>
      alert('Aniversário da empresa!')}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MMMM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
 
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  minDate={'1990-11-05'}
  // Do not show days of other months in month page. Default = false

  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
 
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideExtraDays={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  
  markedDates={{
    '2019-11-16': {selected: true, marked: true, selectedColor: 'green'},//fica circulado
    '2019-08-17': {marked: true},
    '2019-06-10': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2019-12-24': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2019-12-25': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2019-12-31': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2019-08-10': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2019-10-24': {marked: true, dotColor: 'yellow', activeOpacity: 0},
    '2019-11-25': {marked: true, dotColor: 'black', activeOpacity: 0},
    '2019-09-31': {marked: true, dotColor: 'blue', activeOpacity: 0},
    '2019-07-10': {marked: true, dotColor: 'red', activeOpacity: 0},//fica com bolinha embaixo
    '2019-06-12': {disabled: true, disableTouchEvent: true},
    '2019-10-15': {selected: true, marked: true, selectedColor: 'green'},
    '2018-12-17': {selected: true, marked: true, selectedColor: 'green'},
    '2019-06-10': {selected: true, marked: true, selectedColor: 'green'},
    '2019-07-13': {selected: true, marked: true, selectedColor: 'green'},
    '2019-10-01': {selected: true, marked: true, selectedColor: 'green'},
    '2019-11-20': {selected: true, marked: true, selectedColor: 'orange'},
    '2019-02-30': {selected: true, marked: true, selectedColor: 'green'},
    '2019-01-21': {selected: true, marked: true, selectedColor: 'green'},
    '2019-10-19': {selected: true, marked: true, selectedColor: 'green'},
    '2015-08-18': {selected: true, marked: true, selectedColor: 'orange'},
    '2019-07-11': {selected: true, marked: true, selectedColor: 'green'},
    '2017-04-08': {selected: true, marked: true, selectedColor: 'green'},
    '2017-03-03': {selected: true, marked: true, selectedColor: 'green'},
    '2020-11-04': {selected: true, marked: true, selectedColor: 'green'},
    '2018-04-02': {selected: true, marked: true, selectedColor: 'green'},
    '2017-11-25': {selected: true, marked: true, selectedColor: 'orange'},
    '2019-05-05': {selected: true, marked: true, selectedColor: 'orange'},
    '2018-07-01': {selected: true, marked: true, selectedColor: 'green'},
    '2000-08-02': {selected: true, marked: true, selectedColor: 'orange'},
    '1999-06-10': {selected: true, marked: true, selectedColor: 'green'},
    '1998-12-13': {selected: true, marked: true, selectedColor: 'green'},
    '1997-10-17': {selected: true, marked: true, selectedColor: 'orange'},
    '1996-09-18': {selected: true, marked: true, selectedColor: 'green'},
    '1995-01-22': {selected: true, marked: true, selectedColor: 'green'},
    '1994-08-24': {selected: true, marked: true, selectedColor: 'orange'},
    '1993-07-26': {selected: true, marked: true, selectedColor: 'green'},
    '1992-04-27': {selected: true, marked: true, selectedColor: 'orange'},
    '1991-03-21': {selected: true, marked: true, selectedColor: 'orange'},
    '1990-07-30': {selected: true, marked: true, selectedColor: 'green'},

    '2005-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2006-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2007-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2008-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2009-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2010-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2011-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2012-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2013-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2014-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2015-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2016-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2017-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2018-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2004-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2003-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2002-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2001-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2000-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1999-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1998-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1997-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1996-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1995-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1994-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1993-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1992-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1991-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '1990-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2018-11-05': {selected: true, marked: true, selectedColor: 'darkorange'},
    '2019-11-12': {disabled: true, disableTouchEvent: true} ,
    
    '2019-11-05': {selected: true, marked: true, selectedColor: 'darkorange'} }}
    theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        monthTextColor: 'darkorange',
        indicatorColor: 'darkorange',
        textDayFontFamily: 'monospace',
        textMonthFontFamily: 'monospace',
        textDayHeaderFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16}}
/>



      </View>
      
      


    );
    
  }
}


