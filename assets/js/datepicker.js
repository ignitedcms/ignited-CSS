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
    template: `
    <div class="temp">
    <div>
        <button id="previous" class="button button-primary" @click="previous()">Previous</button>
        <button id="next" class="button button-white" @click="next()">Next</button>
      </div>
      <form>
        <label for="year">year</label>
        <select class="form-control" name="year" id="year" >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </form>
      <h3 id="monthAndYear"></h3>
      <table id="calendar">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody id="calendar-body"></tbody>
      </table>

      <table>
      <td v-for="i in this.arr" @click="getIndex(i)">
        {{i}} 
      </td>
        </table>
</div>
    `,
    data: function () {

        /*
        let today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        let selectYear = document.getElementById("year");
        // let selectMonth = document.getElementById("month");

        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let monthAndYear = document.getElementById("monthAndYear");
        showCalendar(currentMonth, currentYear);

        */

        return {
            today: new Date(),
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            arr:[],
            show: false,
        }
    },
    methods: {
        getIndex(str)
        {
            alert(str)
        },
        next() {
            this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
            this.currentMonth = (this.currentMonth + 1) % 12;
            this.showCalendar(this.currentMonth, this.currentYear);
        },

        previous() {
            this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
            this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
            this.showCalendar(this.currentMonth, this.currentYear);
        },

        jump() {
            // this.currentYear = parseInt(selectYear.value);
            // // currentMonth = parseInt(selectMonth.value);
            // showCalendar(currentMonth, currentYear);
        },

        showCalendar(month, year) {

            //testing reset array
            this.arr = [];

            let firstDay = (new Date(year, month)).getDay();
            let daysInMonth = 32 - new Date(year, month, 32).getDate();

            let tbl = document.getElementById("calendar-body"); // body of the calendar

            // clearing all previous cells
            tbl.innerHTML = "";

            // filing data about month and in the page via DOM.
            monthAndYear.innerHTML = this.months[month] + " " + year;
            // selectYear.value = year;
            // selectMonth.value = month;

            // creating all cells
            let date = 1;
            for (let i = 0; i < 6; i++) 
            {
                // creates a table row
                let row = document.createElement("tr");

                //creating individual cells, filing them up with data.
                for (let j = 0; j < 7; j++) 
                {
                    if (i === 0 && j < firstDay) 
                    {
                        let cell = document.createElement("td");
                        let cellText = document.createTextNode("");
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                    
                        //testing
                        this.arr.push('-');
                        
                    } 
                    else if (date > daysInMonth) 
                    {
                        break;
                    }
                    else 
                    {
                        let cell = document.createElement("td");
                        let cellText = document.createTextNode(date);
                        if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) 
                        {
                            cell.classList.add("bg-today");
                        } // color today's date
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                        

                        //testing
                        this.arr.push(date.toString());


                        date++;
                    }
                }

                tbl.appendChild(row); // appending each row into calendar body.
            }
        }
    }
});


/*
|---------------------------------------------------------------
| Special directive for click outside
|---------------------------------------------------------------
|
| https://stackoverflow.com/questions/36170425/detect-click-outside-element
*/

Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        this.event = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', this.event)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', this.event)
    },
});

/*
|---------------------------------------------------------------
| Base entry for vue app
|---------------------------------------------------------------
|
|
*/

var app = new Vue({
    el: '#app',
})