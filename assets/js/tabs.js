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
Vue.component('tabs', {
  template: `
        <div>
        <li v-for='(tab, index) in tabs'
        @click='selectTab(index)'
        v-bind:class='{"tab__selected": (index == selectedIndex)}'
        >
         {{ tab.title }}
        </li>
             <slot></slot> 
        </div>
    `,
  data: function () {

    return {
      selectedIndex: 0,
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
     this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.is_active = (index === i)
      })
    }
  }
});

Vue.component('tab-item', {
  props: ['title'],
  template: `
    <div class='tab' v-show='is_active'>
      <slot></slot>
    </div>
    `,
  data: function () {

    return {
      is_active: true
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