/*
|---------------------------------------------------------------
| Toast components 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('toast',{
    template: 
    `
        <div>
            <slot></slot> 
        </div>
    `,
    data:function(){
        return{
            /*nothing to see*/
        }
    }
});