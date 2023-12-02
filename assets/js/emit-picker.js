/*
|---------------------------------------------------------------
| Emit component, demo how components can use v-model binding
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('emitpicker',{
    props:['value'],
    template: 
    `
    <div class="date-picker">
     <input type="text" :value="value" @input="updateDate($event.target.value)" />
    </div>
    `,
    data:function(){

        return {
            content: this.value
        }
    },
    methods: {
        updateDate(newValue) {
            this.$emit('input', 'bar'); // Emit the updated value using v-model
        }
    }
});
