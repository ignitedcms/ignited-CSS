/*
|---------------------------------------------------------------
| Modals 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
| 
| https://www.youtube.com/watch?v=Et6pHpKOHys&list=PL3VM-unCzF8iRyPotjFsgy7EfuCITvr_3&index=10 
| https://stackoverflow.com/questions/42156059/vuejs-2-send-event-from-component-to-parent 
|---------------------------------------------------------------
|
|
*/
Vue.component('modal',{
    props:['button-title'],
    template: 
    `
    <div>
        <modal-content v-on:send="sendMsg" v-if="show">
          <slot></slot>
        </modal-content>
        <button @click="show = true">{{buttonTitle}}</button>
    </div>
    `,
    data:function(){

        return{
            message: 'Hello',
            show: false,
        }
    },
    methods: {
      sendMsg(msg) {
        this.show = msg
      }
    }
});

Vue.component('modal-content',{
    template: 
    `
    <div>
    <slot></slot>
    <p @click="closing">close</p>
    </div>
    `,
    data:function(){

        return{
          //nothing
        }
    },
    methods: {
      closing() {
        this.$emit('send', false)
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