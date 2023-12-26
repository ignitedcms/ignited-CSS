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
        aria-haspopup="dialog"
        :aria-expanded="arr"
        :aria-controls="'drawer-' + uniqueId"
        class="btn btn-white m-b-2"
        @click="toggle"
        v-click-outside="away"
        @keyup.escape="escapePressed()"
      >
        {{title}}
      </button>
      <div 
        v-if="show" 
        :id="'drawer-' + uniqueId"
        class="drawer fade-in b-l"
        role="dialog"
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
      uniqueId: Math.random().toString(36).substring(2) // Generate a unique ID
    };
  },
  methods: {
    toggle(){
      this.show = !this.show;
      if(this.show == true) {
         this.arr = 'true';
      }
      else {
         this.arr = 'false';
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

