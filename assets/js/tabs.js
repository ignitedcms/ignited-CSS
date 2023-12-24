/*
|---------------------------------------------------------------
| Tabs component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('tabs', {
  template: `
    <div class="tab-container">
      <button
        type="button"
        v-for='(tab, index) in tabs'
        @click='selectTab(index)'
        :class='{"tab__selected": (index == selectedIndex)}'
        class="rm-btn-styles tab-header"
      >
        {{ tab.title }}
      </button>
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
        tab.isActive = (index === i)
      })
    }
  }
});

Vue.component('tab-item', {
  props: ['title'],
  template: `
    <div class='tab-content' v-show='isActive'>
      <slot></slot>
    </div>
  `,
  data: function () {
    return {
      isActive: true
    }
  }
});

