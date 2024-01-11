/*
|---------------------------------------------------------------
| Combobox component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('combobox', {
  props: ['value', 'name'],
  template: `
    <div @keyup.escape="escapePressed" class="pos-rel">
     <label  :for="name">{{name}}</label>
      <div class="m-b"></div>

      <input class="form-control"
        type="text"
        :name="name"
        :value="selectedItem"
        style="display:none;"
      >

      <button
        @click="load"
        role="combobox"
        aria-haspopup="dialog"
        :aria-expanded="arr"
        :aria-controls="name"
        ref="button"
        class="form-control hand p h-e v-a"
        style="width:240px;"
        :name="name"
        :value="value"
        v-click-outside="away"
        @input="updateInput($event.target.value)"
      >
        {{ selectedItem }}
        <span class="v-a">
          <i data-feather='chevron-down'></i>
        </span>

      </button>

        <div 
           v-if="show" 
           :id="name"
           class="pos-abs fade-in-bottom bg-white br scroll-y b drop-shadow" 
           style="width:240px; height:300px; top:78px; left:0; z-index:2;"
           @click.stop
         >
           <div class="pos-rel ">
             <span>
               <i data-feather='search' class='icon-inside hand' style="right:25px"></i>
             </span>
             <input
               class="rm-input-styles br"
               :name="name"
               aria-autocomplete="list"
               role="dialog"
               :aria-expanded="arr"
               aria-activedescendant
               autocomplete="off"
               ref="start"
               @keydown.tab.prevent
               @keydown.enter="onEnter"
               @keydown.down="highlightNext"
               @keydown.up="highlightPrev"
               v-model="searchQuery"
               placeholder="Search list"
             />

             <div class="b-t"></div>
             <div
               v-for="(item, index) in filteredItems"
               :key="index"
               class="p m grey-hover br"
               @mouseover="setHighlighted(index)"
               @click="onClick(item.val)"
               :class="{ 'bg-grey': index === highlightedIndex }"
               v-bind="getAriaSelected(index === highlightedIndex)"
             >
               {{ item.val }}
             </div>

             <div
               v-if="filteredItems.length === 0 && searchQuery.trim() !== ''"
               class="p m grey-hover br"
             >
               No searches found. . .
             </div>
           </div>
                 <slot></slot>
         </div>
      
    </div>
  `,
  data() {
    return {
      searchQuery: '',
      items: [],
      highlightedIndex: 0,
      selectedItem: this.value,
      show: false,
      arr: 'false'
    };
  },
  mounted() {
    this.items = this.$children;

    //this.$nextTick(() => {
      //this.$refs.start.focus();
    //});
  },
  computed: {
    filteredItems() {
      if (this.searchQuery.trim().length === 0) {
        return this.items;
      } else {
        return this.items.filter(item =>
          item.val.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
  },
  methods: {
     getAriaSelected(index) {
        if (index ) {
           return { 'aria-selected': 'true' };
        } else {
           return {}; // Empty object means no aria-selected attribute will be applied
        }
     },
    updateInput(newValue)
     {
      this.$emit('input', newValue);
     },
    load() {
      this.show = true;
      this.arr = 'true';
      this.$nextTick(() => {
        this.$refs.start.focus();
      });
    },
    setHighlighted(index) {
      this.highlightedIndex = index;
    },
    onClick(item) {
      this.selectedItem = item;
      this.updateInput(this.selectedItem);
      this.show = false;
      this.arr = 'false';
      this.highlightedIndex = 0;
      this.searchQuery = '';
    },
    highlightNext() {
      if (this.highlightedIndex < this.filteredItems.length - 1) {
        this.highlightedIndex++;
      }
    },
    highlightPrev() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex--;
      }
    },
    onEnter() {
      if (this.filteredItems.length > 0 && this.highlightedIndex !== -1) {
        const selectedItem = this.filteredItems[this.highlightedIndex].val;
        this.selectedItem = selectedItem;
        this.updateInput(this.selectedItem);
        this.show = false;
        this.arr = 'false';
        this.highlightedIndex = 0;
        this.searchQuery = '';
      } else {
        this.show = false;
        this.arr = 'false';
        this.highlightedIndex = 0;
        this.searchQuery = '';
      }
    },
    away() {
      this.show = false;
      this.arr = 'false';
    },
    escapePressed() {
      this.show = false;
      this.arr = 'false';
    },
  },
});

Vue.component('combo-item', {
  props: ['val'],
  template: ``,
  data() {
    return {
      //nothing
    };
  },
  mounted() {
    feather.replace();
  },
});

