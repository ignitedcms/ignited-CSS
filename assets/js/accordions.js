/*
|---------------------------------------------------------------
| Accordion components 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('accordion',{
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

Vue.component('accordion-item',{
    props: ['title'],
    template: 
    `
    <div class="row">
        <div class="col no-margin">
            <div class="dropdown-item" @click="toggle">
                {{title}}
            </div>
            <div class="content" v-if="is_active">
                <slot></slot>
            </div>
        </div>
    </div>
    `,
    data:function(){

        return{
            is_active:false
        }
    },
    methods:
    {
        toggle()
        {
            this.is_active = !this.is_active
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
|
*/

var app = new Vue({
    el: '#app',
})