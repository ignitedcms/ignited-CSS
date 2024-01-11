/*
|---------------------------------------------------------------
| Mobile menu component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('mobile-menu', {
  props: [
    'title',
    'logo',
    'url'
  ],
  template: `
    <div style="top:0; position:sticky; z-index:2;">
      <div class="p-2 h-e bg-white b-b">
        <div  style="width:150px;">
          <a 
            :href="url"
          >
            <img 
              :src="logo"
            ></img>
          </a>
        </div> 
        <div>
          <span 
            @click="toggle"
          >
            <i 
              data-feather="menu" 
              class="icon hand"
            ></i>
          </span>
        </div>
      </div>

      <div 
        v-if="show"
        class="fade-in-bottom" 
      >
        <slot></slot>

        <a 
          href="#" 
          style="width:100%;" 
          class="rm-link-styles"
        >
          <div 
            class="p-2 bg-white"
          >
            {{title}}
          </div>
        </a>
      </div>
    </div>
  `,
  data() {
    return {
      show: false
    };
  },
   methods: {
      toggle() {
        this.show = !this.show;
      }
   }
});

Vue.component('mobile-menu-items', {
  props: [
    'title',
    'url',
    'children'
  ],
  template: `
    <div style="width:100%;"> 
      <a 
        v-if="children !== 'yes'" 
        :href="url" 
        class="rm-link-styles"
      >
        <div 
          class="row p-2 bg-white b-b"
        >
          {{title}}
        </div>
      </a>

      <div 
        v-if="children === 'yes'" 
        class="p-2 bg-white b-b h-e no-select"
        @click="toggle" 
      >
        <div>
          {{title}}
        </div>
        <div>
          +
          <i 
            data-feather="menu" 
            class="hand"
          ></i>
        </div>
      </div>
      <div 
        v-if="show" 
        class="no-select"
      >
        <slot></slot>
      </div>
    </div>
  `,
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    away() {
      this.show = false;
    }
  }
});

