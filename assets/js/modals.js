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
    props:['title'],
    template: 
    `
    <div>
        {{message}}
        <modal-button v-on:send="sendText"></modal-button>
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
        this.message = text
      }
    }
});

Vue.component('modal-button',{
    template: 
    `
    <button @click="click">
        iambutton
        <modal-popup v-if="show"></modal-popup>
    </button>
    `,
    data:function(){

        return{
            message: 'Hello',
            show: false,
        }
    },
    methods: {
      click() {
        this.$emit('send', 'bye')
      }
    }
});

Vue.component('modal-popup',{
    template: 
    `
    <div style="background-color:red;">
      popup
    </div>
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