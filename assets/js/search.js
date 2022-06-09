/*
|---------------------------------------------------------------
| Search dropdowns 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('search',{
  template: 
  `
  <div>
    <input type="text" v-model="message" class="form-control" placeholder="type here" v-on:click="show =!show" v-click-outside="away">
    <div v-if="show" class="search br drop-shadow fade-in">
      <div v-for='(search, index) in searches' @click="my_select(search.val)" class="search-item">
        {{search.val}}
      </div>
    </div>
    <slot/>
  </div>
  `,
  data:function(){

      return{
          message: 'Hello',
          show: false,
          searches: []
      }
  },
  mounted() {
    this.searches = this.$children
  },
  methods:{
      away: function () {
          this.show = false;
      },
      my_select(str)
      {
        this.message = str;
      }
  } 
});

Vue.component('search-item', {
  props:['val'],
  template: 
    `
    `,
  data: function () {

    return {
    //nothing
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