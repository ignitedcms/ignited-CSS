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
    <div class="pos-rel">
     {{selectedIndex}}
      <button
        :id="'dropdown-' + uniqueId"
        type="button"
        aria-haspopup="menu"
        :aria-expanded="arr"
        class="btn btn-white"
        @keyup.esc="escapePressed"
        @click="toggle"
        v-click-outside="away"
        @keydown.enter.prevent="selectItem"
        @keydown.arrow-down.prevent="handleArrowNavigation"
        @keydown.arrow-up.prevent="handleArrowNavigation"
      >
        {{ buttonTitle }}
      </button>
      <div
        v-if="show"
        role="menu"
        :aria-labelledby="'dropdown-' + uniqueId"
        class="pos-abs dropdown br drop-shadow fade-in"
        @click.stop
      >
        <focus-trap :active="show">
          <slot></slot>
        </focus-trap>
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
    selectItem() {
      if (this.show && this.selectedIndex !== -1) {
        const items = this.$el.querySelectorAll('.dropdown-item');
        const selectedItem = items[this.selectedIndex];
        // Perform action based on the selected item (e.g., emit an event)
        this.$emit('item-selected', selectedItem.textContent);
        this.toggle(); // Close dropdown after selection
      } else {
        this.toggle();
      }
    },
    handleArrowNavigation(event) {
      const items = this.$el.querySelectorAll('.dropdown-item');
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.selectedIndex = (this.selectedIndex + 1) % items.length;
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.selectedIndex = (this.selectedIndex - 1 + items.length) % items.length;
      }
    },
  },
});


Vue.component('item', {
  props: ['title', 'url','index', 'selectedIndex'],
  template: `
    <div
      class="rows"
       :class="{ 'selected': index === selectedIndex }"
      tabindex="-1"
      role="menuitem"
      class="dropdown-item"
      @click="$emit('item-selected', title)"
    >
      <div :href="url" class="left">{{ title }}</div>
    </div>
  `,
});

