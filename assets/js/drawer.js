/*
|---------------------------------------------------------------
| Drawer component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('drawer', {
  props: ['title'],
  template: `
    <div>
      <button  
        type="submit"
        class="btn btn-white m-b-2"
        @click="toggle"
        v-click-outside="away"
        @keyup.escape="escapePressed()"
      >
        {{title}}
      </button>
      <div v-if="show" @click.stop class="drawer fade-in b-l">
        <focus-trap :active="show">
          <slot></slot>
        </focus-trap>
      </div>
    </div>
  `,
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle(){
      this.show = !this.show;
    },
    away() {
      this.show = false;
    },
    escapePressed() {
      this.show = false;
    },
  },
});

