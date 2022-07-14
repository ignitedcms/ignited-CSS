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
Vue.component('switchIos',{
    props:['title'],
    template: 
    `
    <label class="form-switch">
    {{show}}
    <input type="checkbox" v-model="show" />
    <i ></i> <div class="switch-text">{{title}}</div>
    </label>
    `,
    data:function(){

        return{
            message: 'Hello',
            show: false,
        }
    }
});


