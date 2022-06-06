/*
|---------------------------------------------------------------
| Modals 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('modal',{
    template: 
    `
    <div>
        <modal-content v-on:send="sendText" v-if="show"></modal-content>
        <button @click="show = true">show</button>
    </div>
    `,
    data:function(){

        return{
            message: 'Hello',
            show: false,
        }
    },
    methods: {
      sendText(text) {
        this.show = text
      }
    }
});

Vue.component('modal-content',{
    template: 
    `
    <div>
    modal content
    <p @click="click">close</p>
    </div>
    `,
    data:function(){

        return{
            message: 'Hello',
            show: false,
        }
    },
    methods: {
      click() {
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