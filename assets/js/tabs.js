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
 <div >
    <div role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :id="tabIds[index].tabId"
        :role="'tab'"
        :aria-selected="currentIndex === index"
        :aria-controls="tabIds[index].panelId"
        :tabindex="currentIndex === index ? 0 : -1"
        @click="changeTab(index)"
        @keydown="onTabKeyDown($event, index)"
        ref="tabButtons"
      >
        {{ tab.title }}
      </button>
    </div>
    <div>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :id="tabIds[index].panelId"
        :role="'tabpanel'"
        :aria-labelledby="tabIds[index].tabId"
        :aria-hidden="currentIndex !== index"
        :tabindex="currentIndex === index ? 0 : -1"
        ref="tabPanels"
      >
        <div v-if="currentIndex === index">
          {{ tab.content }}
          <slot></slot>
        </div>
      </div>

    </div>
  </div>
  `,
  data: function () {
    return {
      currentIndex: 0,      
      tabs: [
        { title: 'Tab 1', content: 'Content for Tab 1' },
        { title: 'Tab 2', content: 'Content for Tab 2' },
        { title: 'Tab 3', content: 'Content for Tab 3' }
      ],
      tabIds:[],
    }
  },
  created() {
    //this.tabs = this.$children;
    this.generateTabIds();
  },
   methods: {
      changeTab(index) {
         this.currentIndex = index;
         this.$nextTick(() => {
            this.$refs.tabPanels[index].focus();
         });
      },
      onTabKeyDown(event, index) {

         const tabsCount = this.tabs.length;

         switch (event.key) {
            case 'ArrowRight':
               event.preventDefault();
               this.currentIndex = (index + 1) % tabsCount;
               this.$refs.tabButtons[this.currentIndex].focus();
               break;
            case 'ArrowLeft':
               event.preventDefault();
               this.currentIndex = (index - 1 + tabsCount) % tabsCount;
               this.$refs.tabButtons[this.currentIndex].focus();
               break;
            case 'Home':
               event.preventDefault();
               this.currentIndex = 0;
               this.$refs.tabButtons[this.currentIndex].focus();
               break;
            case 'End':
               event.preventDefault();
               this.currentIndex = tabsCount - 1;
               this.$refs.tabButtons[this.currentIndex].focus();
               break;
            case 'Enter':
            case 'Space':
               event.preventDefault();
               this.changeTab(index);
               break;
            default:
               break;
         }
      },
      generateTabIds() {
          this.tabIds = this.tabs.map((_, index) => ({
            tabId: `tab-${Math.random().toString(36).substr(2, 9)}`,
            panelId: `panel-${Math.random().toString(36).substr(2, 9)}`
          }));
      }

   }
});

Vue.component('tab-item', {
  props: ['title'],
  template: `
    <div>
      <slot></slot>
    </div>
  `,
  data: function () {
    return {

    }
  },
});

