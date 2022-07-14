/*
|---------------------------------------------------------------
| Switches 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('rangeSlider',{
    props:['min','max'],
    template: 
    `
    <div class="slidecontainer">
        <input type="range" v-model="message" v-bind:min="min" v-bind:max="max" class="slider2" />
        <p>Value: <span id="demo">
            {{message}}
        </span></p>
    </div>
    `,
    data:function(){

        return{
            message: this.min
        }
    }
});


