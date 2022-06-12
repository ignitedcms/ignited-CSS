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
<div class="date-container" @click.stop v-click-outside="away">

      <input class="form-control" v-model="message" v-on:click="show =!show"  readonly>
      <div class="date-flyout drop-shadow fade-in" v-show="show" >
        <div class="date-buttons-container">
            <button class="date-button rm-btn-styles" @click="previous()">
                <i data-feather="chevron-left"></i>
            </button>
            {{months[currentMonth]}} {{currentYear}}
            <button  class="date-button rm-btn-styles" @click="next()">
                <i data-feather="chevron-right"></i>
            </button>
            
        </div>
        <div class="date-days">
            <div class="cal-no-hover cal-day">Sun</div>
            <div class="cal-no-hover cal-day">Mon</div>
            <div class="cal-no-hover cal-day">Tue</div>
            <div class="cal-no-hover cal-day">Wed</div>
            <div class="cal-no-hover cal-day">Thu</div>
            <div class="cal-no-hover cal-day">Fri</div>
            <div class="cal-no-hover cal-day">Sat</div>
        </div>
        <div v-for="i in this.arr" @click="getIndex(i)" >
            <div v-if="i.type == 'tr'" class="clearfix">
            </div>
            <div v-else-if="i.value == ''" class="cal-no-hover cal-day">
            </div>
            <button v-else class="rm-btn-styles pull-left cal cal-day"> 
                {{i.value}} 
            </button>
        </div>
    </div>
</div>
    `,
    data: function () {

        return {
            message:'',
            today: new Date(),
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            arr:[],
            show: false,
        }
    },
    created(){
            this.showCalendar(this.currentMonth, this.currentYear)
    },
    methods: {
        away: function () {
            this.show = false;
        },
        getIndex(str)
        {
            //This is where the full datestamp
            //comes from
            this.message = str.stamp
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

            // creating all cells
            let date = 1;
            for (let i = 0; i < 6; i++) 
            {

                //creating individual cells, filing them up with data.
                for (let j = 0; j < 7; j++) 
                {
                    if (i === 0 && j < firstDay) 
                    {
                        //testing
                        let obj = { type: "td", value: "", stamp: "" };
                        this.arr.push(obj);
                    } 
                    else if (date > daysInMonth) 
                    {
                        break;
                    }
                    else 
                    {
                        if (date === this.today.getDate() 
                            && year === this.today.getFullYear() 
                            && month === this.today.getMonth()
                            ) 
                        {
                            // cell.classList.add("bg-today");
                        } // color today's date
                        
                        //don't forget to add one to the month!
                        let newMonth = month + 1;

                        //Simple date conversion to make it valid eg 2022-04-04
                        if (newMonth.toString().length < 2) 
                        {
                            aa = '0' + newMonth;
                        }
                        else
                        {
                            aa = newMonth.toString();
                        }
                        if (date.toString().length < 2) 
                        {
                            bb = '0' + date.toString();
                        }
                        else
                        {
                            bb = date.toString();
                        }

                        // Basic usage of dateFormat refer to documentation
                        let tmpStamp = year + "-" + aa + "-" + bb;

                        //bind to v-model

                        let obj = { type: "td", value: date, stamp: tmpStamp };
                        this.arr.push(obj);

                        date++;
                    }
                }

                let obj = { type: "tr", value: "", stamp: "" };
                this.arr.push(obj);
            }
        }
    }
});
