/*
|---------------------------------------------------------------
| Sidebar component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('sidebar', {
  props: ['theme'],
  template: `
    <div>
      <div 
       class="sidebar p-3 bg-dark scroll-y full-screen hide-tablet"
       style="width:270px; float:left;"
      >
        <a href="https://www.ignitedcms.com/"></a>
        <h5 class="text-white">Dashboard</h5>
        <slot name="header"></slot>
      </div>
      <div 
        class="sidebar-fixed  fade-in" 
        :style="{ display: styles }" 
        id="sidebar-fixed" 
        @click.stop
      >
        <a href="https://www.ignitedcms.com/"></a>
        <h5 class="m-l m-t-2">Dashboard</h5>
        <slot name="header"></slot>
      </div>
      <div 
        class="main-content p-t-4  pos-rel m-b-2" 
        style="float:left; width:1000px;"
      >
        <div>
          <button 
           class="bg-white v-a h-a icon hand b br show-tablet"
           @click="toggle" 
           v-click-outside="away" 
          >
            <i data-feather="menu"></i>
          </button>
          <div style="width:60%;" class="m-l-2">
            <input class="form-control" placeholder="Search then hit enter" />
          </div>
        </div>
        <div class="p-3">
          <slot></slot>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      show: false,
      dark: false,
      styles: 'none'
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
      if (this.show) {
        this.styles = 'block';
      } else {
        this.styles = 'none';
      }
    },
    away() {
      this.show = false;
      this.styles = 'none';
    }
  },
  mounted() {
    // ...
  }
});

