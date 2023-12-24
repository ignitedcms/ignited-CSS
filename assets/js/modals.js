/*
|---------------------------------------------------------------
| Modals component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('modal', {
  props: [
    'button-title',
    'modal-header'
  ],
  template: `
    <div @keyup.escape="escapePressed()">
      <button
        type="button"
        class="btn btn-white "
        @click="show=true; arr='false'"
        v-click-outside="away"
      >
        {{buttonTitle}}
      </button>

      <div
        class="modal"
        role="dialog"
        aria-modal="true"
        :aria-hidden="arr"
        v-show="show"
        @keyup.escape="escapePressed"
      >
        <div class="modal-content fade-in" @click.stop>

          <focus-trap :active="show">
            <div class="modal-header">
              <button
                type="button"
                aria-label="Close"
                class="rm-btn-styles close m-t"
                @click="show = false; arr='true'"
              >
                &times;
              </button>
              <h5 class="m-t">{{modalHeader}}</h5>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
          </focus-trap>

        </div>
      </div>
    </div>
  `,
  data() {
    return {
      message: 'Hello',
      show: false,
      arr: 'true'
    };
  },
  methods: {
    away() {
      this.show = false;
      this.arr = 'true';
    },
    escapePressed() {
      this.show = false;
      this.arr = 'true';
    }
  }
});

