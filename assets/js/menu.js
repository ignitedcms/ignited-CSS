Vue.component('mega-menu', {
  props: [
    'title',
    'logo',
    'url'
  ],
  template: `
    <div style="top:0; position:sticky; z-index:2;">
      <div class="menu">
        <div class="menu-logo">
          <a
            class="rm-link-styles"
            :href="url"
          >
            <img
              :src="logo"
            ></img>
          </a>
        </div>
        <div class="menu-item-container">
          <slot></slot>
        </div>
        <button type="button" class="btn btn-white">{{title}}</button>
      </div>
    </div>
  `,
  data() {
    return {
      message: 'Hello'
    };
  },
  methods: {}
});

Vue.component('menu-items', {
  props: [
    'title',
    'children',
    'url'
  ],
  template: `
    <div @keyup.escape="escapePressed()">
      <div
        v-if="children !== 'yes'"
      >
        <a
          :href="url"
          class="menu-main rm-link-styles m-l-2"
        >
          {{title}}
        </a>
      </div>
      <div
        v-if="children === 'yes'"
        class="menu-main m-l-2 hand v-a pos-rel"
        @click="toggle"
        v-click-outside="away"
      >
        <button class="rm-btn-styles">{{title}}</button>
        <span class="m-l v-a">
          <i data-feather="chevron-down" class=""></i>
        </span>
        <div
          v-if="show"
          @click.stop
          class="menu-dropdown fade-in"
        >
          <slot></slot>
        </div>
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
    },
    escapePressed() {
      this.show = false;
    }
  }
});

Vue.component('menu-item', {
  props: [
    'title',
    'icon',
    'url'
  ],
  template: `
    <div class="row m-t">
      <a
        :href="url"
        class="rm-link-styles col v-a no-margin menu-large-items"
      >
        <img
          :src="icon"
          style="width:40px; height:auto;"
        ></img>
        <div class="m-l-2">{{title}}</div>
      </a>
    </div>
  `,
  data() {
    return {};
  },
  methods: {}
});

