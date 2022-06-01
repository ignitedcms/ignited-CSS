/*
|---------------------------------------------------------------
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data 
|---------------------------------------------------------------
|
|
*/
Vue.component('drop-down',{
    template: 
    `
    <button class="btn btn-white drop-shadow" v-on:click="show =!show" v-click-outside="away">Click me
        <div v-if="show" class="dropdown br drop-shadow fade-in-bottom">
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

Vue.component('item',{
    props: ['title','url'],
    template: 
    `
    <div class="row">
        <div class="col no-margin">
            <div class="dropdown-item">
                <a href="{{url}}" class="left">{{title}}</a>
            </div>
        </div>
    </div>
    `,
    // data:function(){

    //     return{

    //     }
    // }
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