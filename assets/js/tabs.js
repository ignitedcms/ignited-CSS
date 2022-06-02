/*
|---------------------------------------------------------------
| Tabs
|
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('tabs',{
    template: 
    `
        <div>
            <slot></slot> 
        </div>
    `,
    data:function(){

        return{
            message: 'tabs',
        }
    }
});

Vue.component('tabItem',{
    props: ['id','title'],
    template: 
    `
    <div>
        <div class="bg-primary"> {{tabid}} </div>
        <button class="rm-btn-styles tab-header" v-on:click="tabid = id">{{title}}</button>
        <div v-if="tabid ==id">{{title}}</div>
    </div>
    `,
    data:function(){

        return{
            tabid : 1
        }
    },
    methods:{
        testing: function () {
            this.tabid = 3;
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