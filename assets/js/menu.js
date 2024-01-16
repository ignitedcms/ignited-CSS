/*
|---------------------------------------------------------------
| menu component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('mega-menu', {
  props: [
    'title',
    'logo',
    'url'
  ],
  template: `
    <div style="top:0; position:sticky; z-index:2;" class="hide-tablet">
      <div class="h-e v-a bg-white p-2 b-b" :aria-labelledby="title">
        <div class="">
          <a
            class="rm-link-styles"
            :href="url"
          >
            <img
              :src="logo"
              style="width:150px;"
              alt="Ignitedcms logo"
            ></img>
          </a>
        </div>
        <nav  style="min-width:300px;">
          <ul class="rm-list-styles h-e">
          <slot></slot>
          </ul>
        </nav>
        <button type="button" class="btn btn-white" :id="title">{{title}}</button>
      </div>
    </div>
  `,
  data() {
    return {
      message: ''
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
    <li @keyup.escape="escapePressed()" class="pos-rel">
      <div
        v-if="children !== 'yes'"
      >
        <a
          :href="url"
          class="rm-link-styles"
        >
          {{title}}
        </a>
      </div>
      <div
        v-if="children === 'yes'"
        class="hand v-a pos-rel"
        @click="toggle"
        v-click-outside="away"
      >
        <button
          class="rm-btn-styles"
          :id="title"
          aria-haspopup="true"
          :aria-expanded="show.toString()"
        >
         {{title}}
        </button>
        <span class="m-l v-a">
          <i data-feather="chevron-down"></i>
        </span>
      </div>
      <ul
        v-if="show"
        @click.stop
        class="pos-abs fade-in-bottom bg-white b p br drop-shadow"
        style="top:40px; left:-10px; min-height:100px;  min-width:250px;"
      >
        <slot></slot>
      </ul>
    </li>
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
    <li class="row m-t hand">
      <a
        :href="url"
        class="rm-list-styles rm-link-styles col v-a no-margin grey-hover br"
      >
        <img
          :src="icon"
          :alt="title"
          style="width:40px; height:auto;"
        ></img>
        <div class="m-l-2">{{title}}</div>
      </a>
    </li>
  `,
  data() {
    return {};
  },
  methods: {}
});
