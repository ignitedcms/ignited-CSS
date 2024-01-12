/*
|---------------------------------------------------------------
| Dropdown component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/
Vue.component('drop-down', {
  props: ['buttonTitle'],
  template: `
    <div class="pos-rel" style="display:inline-block;" v-click-outside="away">
      <button
        :id="'dropdown-' + uniqueId"
        type="button"
        aria-haspopup="menu"
        :aria-expanded="arr"
        class="btn btn-white pos-rel"
        @keyup.esc="escapePressed"
        @click="toggle"
        v-click-outside="away"
      >
        {{ buttonTitle }}
      </button>
      <div
        v-show="show"
        tabindex="-1"
        role="menu"
        :aria-labelledby="'dropdown-' + uniqueId"
        class="pos-abs b bg-white br  drop-shadow fade-in-bottom"
        style="min-width:200px;top:45px; right:0; padding:5px;"
        @keydown.down.prevent="navigate('down')"
        @keydown.up.prevent="navigate('up')"
        @keydown.enter.prevent="selectItem"
        @keyup.esc="escapePressed"
        ref="drop"
      >
        <slot></slot>
      </div>
    </div>
  `,
  data() {
    return {
      show: false,
      arr: 'false',
      uniqueId: Math.random().toString(36).substring(2), // Generate a unique ID
      selectedIndex: -1, // Track the selected index for keyboard navigation
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
      this.arr = this.show ? 'true' : 'false';

      this.$nextTick(() => {
        this.$refs.drop.focus();
      });
    },
    away() {
      this.show = false;
      this.arr = 'false';
      this.selectedIndex = -1; // Reset selected index when closing dropdown
    },
    escapePressed() {
      this.show = false;
      this.arr = 'false';
      this.selectedIndex = -1; // Reset selected index on escape
    },
   navigate(direction) {
     if (this.show) {
       const items = this.$refs.drop.children;
       if (direction === 'down') {
         this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
       } else if (direction === 'up') {
         this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
       }
       if (items.length > 0) {
         items[this.selectedIndex].focus();
       }
     }
   },
   selectItem() {
     if (this.show && this.selectedIndex !== -1) {
       const items = this.$refs.drop.children;
       const selectedItem = items[this.selectedIndex];
       // Perform action based on the selected item (e.g., emit an event)
       this.$emit('item-selected', selectedItem.textContent);
       this.toggle(); // Close dropdown after selection
     } else {
       this.toggle();
     }
   },

  },
});

Vue.component('item', {
  props: ['title', 'url'],
  template: `
    <div
      class="row "
      tabindex="-1"
      role="menuitem"
      class="col grey-hover no-margin br"
      style="padding:7px;"
      @click="$emit('item-selected', title)"
    >
      <div :href="url" class="left">{{ title }}</div>
    </div>
  `,
});

