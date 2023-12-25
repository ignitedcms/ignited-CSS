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
  <div>
    <div class="tab-container" role="tablist">
      <button
        type="button"
        v-for='(tab, index) in tabs'
        :id="'tab-' + index"
        @click='selectTab(index)'
        role="tab"
        :class='{"tab__selected": (index == selectedIndex)}'
        :aria-selected='index === selectedIndex ? "true" : "false"'
        :aria-controls="'tabpanel-' + index"
        :tabindex="selectedIndex === index ? 0 : -1"
        class="rm-btn-styles tab-header"
      >
        {{ tab.title }}
      </button>
   </div>
   <div>
      <slot></slot>
    </div>
  </div>
  `,
  data: function () {
    return {
      selectedIndex: 0,
      tabs: [],
      tabIds: []
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
      this.selectedIndex = i;
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i);
      });
    }
  }
});

Vue.component('tab-item', {
  props: ['title'],
  template: `
    <div
     class='tab-content'
     :id="'tabpanel-'+ tabIndex"
     role="tabpanel"
     v-show='isActive'
     :aria-labelledby="'tab-' + tabIndex"
     :aria-hidden="isActive === true ? 'false' : 'true'"
     :tabindex="isActive === true ? 0 : -1"
   >
      <slot></slot>
    </div>
  `,
  data: function () {
    return {
      isActive: true,
    }
  },
  computed: {
    tabIndex() {
      // Find the index of the parent tab to associate with aria-labelledby
      return this.$parent.tabs.indexOf(this);
    }
  }
});


