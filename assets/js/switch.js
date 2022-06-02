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
*/

var app = new Vue({
    el: '#app',
})