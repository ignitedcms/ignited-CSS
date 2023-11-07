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
    props:['title','value'],
    template: 
    `
    <label class="form-switch">
    <input :name="title" type="checkbox" value:="value" :checked="value" />
    <i ></i> <div class="switch-text">{{message}}</div>
    </label>
    `,
    data:function(){

        return{
            message: 'Hello',
            show: this.value,
        }
    }
});


