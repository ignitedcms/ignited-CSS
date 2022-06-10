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
Vue.component('datepicker',{
    template: 
    `
    <button class="btn rm-btn-styles tooltip-rel" v-on:click="show =!show" v-click-outside="away">
     <span class="tooltip-highlight"> Click me </span>
        <div v-if="show" class="tooltip   br drop-shadow fade-in">
            <slot></slot> 
        </div>
    </button>
    `,
    data:function(){

        return{
            message: 'Hello',
            show: false,
        }
    },
    methods:{
        away: function () {
            this.show = false;
        },
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