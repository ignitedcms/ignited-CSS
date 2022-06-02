/*
|---------------------------------------------------------------
| Tabs
|
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
| https://learnvue.co/2019/12/building-reusable-components-in-vuejs-tabs/#final-reusable-component-files
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
  {{tabs}} {{selectedTab}}
  <div v-on:click="hey(id)">xxx</div>
  <slot></slot>
    </div>
    `,
    data:function(){

        return{
            selectedTab:0,
            tabs:[]
        }
    },
    /*must use created*/
    created(){
        this.tabs = this.$children 
    },
    methods:{
        hey: function (x) {
            this.selectedTab = x
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