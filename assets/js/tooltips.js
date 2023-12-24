/*
|---------------------------------------------------------------
| Tooltips (popover) component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('tooltip', {
  props: ['link', 'width'],
  template: `
    <button
      type="button"
      class="btn rm-btn-styles tooltip-rel"
      aria-haspopup="dialog"
      :aria-expanded="arr"
      @keyup.escape="escapePressed()"
      @click="tmp"
      v-click-outside="away"
    >
      <span class="tooltip-highlight"> {{link}} </span>
      <div
        class="tooltip fade-in"
        v-if="show"
        :style="{ width: width }"
        @click.stop
      >
        <focus-trap :active="show">
          <slot></slot>
        </focus-trap>
      </div>
    </button>
  `,
  data() {
    return {
      message: 'Hello',
      show: false,
      arr: 'false',
    };
  },
  methods: {
    away() {
      this.show = false;
      this.arr = 'false';
    },
    tmp() {
      this.show = !this.show;
      if (this.arr == 'false') {
        this.arr = 'true';
      } else {
        this.arr = 'false';
      }
    },
    escapePressed() {
      this.show = false;
      this.arr = 'false';
    }
  }
});

