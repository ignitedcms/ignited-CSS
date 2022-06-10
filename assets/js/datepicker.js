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
<div class="date-container">

      <input class="form-control" v-model="message" v-on:click="show =!show"  readonly>
      <div class="date-flyout drop-shadow fade-in" v-show="show" >
      <div class="date-buttons-container">
        <button id="previous" class="btn btn-white" @click="previous()">Prev</button>
        {{months[currentMonth]}} {{currentYear}}
        <button id="next" class="btn btn-white" @click="next()">Next</button>
      </div>

      <div v-for="i in this.arr" @click="getIndex(i)" >
        <div v-if="i.type == 'tr'" class="clearfix">
        </div>
        <div v-else class="pull-left cal cal-day"> 
            {{i.value}} 
        </div>
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


            // filing data about month and in the page via DOM.
            // monthAndYear.innerHTML = this.months[month] + " " + year;
            // selectYear.value = year;
            // selectMonth.value = month;

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
                        let obj = { type: "td", value: "-", stamp: "-", offset: j };
                        this.arr.push(obj);
                    } 
                    else if (date > daysInMonth) 
                    {
                        break;
                    }
                    else 
                    {
                        if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) 
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

                        let obj = { type: "td", value: date, stamp: tmpStamp, offset: j };
                        this.arr.push(obj);

                        date++;
                    }
                }

                let obj = { type: "tr", value: "null", stamp: "null" };
                this.arr.push(obj);
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