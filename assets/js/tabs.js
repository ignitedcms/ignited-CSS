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

Vue.component('tab-item',{
    props: ['title'],
    template: 
    `
    <div>
      <div class="header" v-on:click="set_active">
        {{title}}
      </div>
      <div v-if="is_active" class="content">
        <slot></slot>
      </div>
    </div>
    `,
    data:function(){

        return{
          is_active:false
        }
    },
    /*must use created*/
    mounted(){
        this.tabs = this.$children
    },
    methods:{
        set_active: function () {
            this.is_active = ! this.is_active
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