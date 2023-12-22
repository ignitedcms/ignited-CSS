Vue.component('accordion', {
  template: `
    <div>
      <slot></slot>
    </div>
  `,
  data() {
    return {
      // Nothing here
    };
  },
});

Vue.component('accordion-item', {
  props: ['title'],
  template: `
    <div class="row">
      <div class="col no-margin">
        <button
          type="button"
          :aria-expanded="arr"
          class="accordion-title rm-btn-styles"
          @click="toggle"
        >
          <div class="text-black">
            {{ title }}
          </div>
          <span>
            <i data-feather="chevron-down"></i>
          </span>
        </button>
        <div
          v-if="isActive"
          class="accordion-content fade-in"
         >
          <slot></slot>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      isActive: false,
      arr: 'false',
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      if (this.arr === 'false') {
        this.arr = 'true';
      } else {
        this.arr = 'false';
      }
    },
  },
});

