/*
|---------------------------------------------------------------
| Datepicker component 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('datepicker', {
props:['value','name'],
template: 
`
<div @keyup.escape="escapePressed" @click.stop v-click-outside="away">
   <input type="text" v-model="foo" @click="show =!show">
  <input type="text" v-model="selectedDate" readonly style="display:none;">
  <div v-show="show" class="datepicker" tabindex="-1" @keydown="handleKeyDown" ref="datepicker">
    <table>
      <tr>
        <td @click="showPreviousMonth" tabindex="0" @keydown.enter.prevent> &lt; </td>
        <td colspan="5">{{ getMonthName(currentMonth) }} {{ currentYear }}</td>
        <td @click="showNextMonth" tabindex="0" @keydown.enter.prevent> &gt; </td>
      </tr>
      <tr>
        <th v-for="day in weekdays" :key="day">{{ day }}</th>
      </tr>
      <tr v-for="(row, rowIndex) in calendar" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cell.date"
            @click="selectDate(cell)"
            :class="{ 'current-date': isCurrentDate(cell), focused: isFocused(rowIndex, cellIndex) }"
            tabindex="-1"
            @focus="setFocus(rowIndex, cellIndex)"
        >{{ cell.date }}</td>
      </tr>
    </table>
  </div>
</div>

`,
    data: function () {

        return {
           show:false,
            today: new Date(),
            currentMonth: 0,
            currentYear: 0,
            selectedDate: '',
            foo: '',
            focusedRow: -1,
            focusedCell: -1,
        }
    },
   computed: {
      weekdays() {
        return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      },
      calendar() {
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const startingDay = firstDay.getDay();
        const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

        let date = 1;
        const calendar = [];
        for (let i = 0; i < 6; i++) {
          const row = [];
          for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
              row.push({ date: '' });
            } else if (date > totalDays) {
              break;
            } else {
              row.push({
                date: date,
                month: this.currentMonth,
                year: this.currentYear
              });
              date++;
            }
          }
          calendar.push(row);
        }
        return calendar;
      }
    },
    mounted() {
      this.currentMonth = this.today.getMonth();
      this.currentYear = this.today.getFullYear();
      this.selectedDate = this.today;
    },

    methods: {
       away(){
          this.show = false;
       },
       escapePressed() {
          this.show = false;
       },

        formatDate(date) {
             var d = new Date(date),
                 month = '' + (d.getMonth() + 1),
                 day = '' + d.getDate(),
                 year = d.getFullYear();

             if (month.length < 2)
                 month = '0' + month;
             if (day.length < 2)
                 day = '0' + day;

           return (year.toString()+"-"+month.toString()+"-"+day.toString());
      },
      showPreviousMonth() {
        this.currentMonth--;
        if (this.currentMonth < 0) {
          this.currentMonth = 11;
          this.currentYear--;
        }
      },
      showNextMonth() {
        this.currentMonth++;
        if (this.currentMonth > 11) {
          this.currentMonth = 0;
          this.currentYear++;
        }
      },
      getMonthName(monthIndex) {
        const months = ['January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[monthIndex];
      },
      selectDate(cell) {
        const selectedDate = new Date(cell.year, cell.month, cell.date);
        this.selectedDate = selectedDate;

         this.moveFocus(0,0);

         this.$refs.datepicker.focus();

         this.foo = this.formatDate(selectedDate);
        console.log('Selected Date:', this.foo);
      },
      isCurrentDate(cell) {
        return cell.date === this.today.getDate() &&
               cell.month === this.today.getMonth() &&
               cell.year === this.today.getFullYear();
      },
      handleKeyDown(event) {
        if (event.key === 'ArrowLeft') {
          this.moveFocus(0, -1);
        } else if (event.key === 'ArrowRight') {
          this.moveFocus(0, 1);
        } else if (event.key === 'ArrowUp') {
          this.moveFocus(-1, 0);
        } else if (event.key === 'ArrowDown') {
          this.moveFocus(1, 0);
        } else if(event.key === 'Enter'){

         this.foo = this.formatDate(this.selectedDate);
        }

      },
      moveFocus(rowChange, colChange) {
        let date = new Date(this.selectedDate);
        date.setDate(date.getDate() + (rowChange * 7) + colChange);

        if (date.getMonth() !== this.currentMonth) {
          this.currentMonth = date.getMonth();
          this.currentYear = date.getFullYear();
        }

        this.selectedDate = date;
        this.focusOnSelectedDate();
      },
      isFocused(rowIndex, cellIndex) {
        return rowIndex === this.focusedRow && cellIndex === this.focusedCell;
      },
      setFocus(rowIndex, cellIndex) {
        this.focusedRow = rowIndex;
        this.focusedCell = cellIndex;
        this.focusOnSelectedDate();
      },
      focusOnSelectedDate() {
        const date = new Date(this.selectedDate);
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const startingDay = firstDay.getDay();
        const selectedCell = date.getDate() + startingDay - 1;
        this.focusedRow = Math.floor(selectedCell / 7);
        this.focusedCell = selectedCell % 7;
      },
    }
});
