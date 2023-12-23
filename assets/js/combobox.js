Vue.component('combobox', {
  props: ['value' , 'name'],
  template: `
    <div @keyup.escape="escapePressed">
      <button
        @click="load"
        ref="button"
        class="form-control hand left combo-btn-container"
        :name="name"
        :value="value"
        v-click-outside="away"
        @input="updateInput($event.target.value)"
      >
        <span>
          <i data-feather='chevron-down' class='icon-inside hand'></i>
        </span>
        {{ selectedItem }}
      </button>

      <div v-if="show" class="combobox-container fade-in" @click.stop>
        <div class="pos-rel">
          <span>
            <i data-feather='search' class='icon-inside hand' style="right:25px"></i>
          </span>
          <input
            class="rm-input-styles"
            :name="name"
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
            class="combobox-container-item"
            @mouseover="setHighlighted(index)"
            @click="onClick(item.val)"
            :class="{ 'combobox-container-item-highlighted': index === highlightedIndex }"
          >
            {{ item.val }}
          </div>

          <div
            v-if="filteredItems.length === 0 && searchQuery.trim() !== ''"
            class="combobox-container-item"
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
    };
  },
  mounted() {
    this.items = this.$children;

    this.$nextTick(() => {
      this.$refs.start.focus();
    });
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

    updateInput(newValue)
     {
      this.$emit('input', newValue);
     },
    load() {
      this.show = true;
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
        this.highlightedIndex = 0;
        this.searchQuery = '';
      } else {
        this.show = false;
        this.highlightedIndex = 0;
        this.searchQuery = '';
      }
    },
    away() {
      this.show = false;
    },
    escapePressed() {
      this.show = false;
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

