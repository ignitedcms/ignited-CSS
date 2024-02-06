/*
|---------------------------------------------------------------
| Forms and typography components
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('paragraph', {
  props: [''],
  template: `
  <div
     class="
      relative
      text-dark
      "
   >
   <slot></slot>
  <div>
  `,
  data() {
     return {
     }
  },
});

Vue.component('header1', {
  props: [''],
  template: `
  <div
     class="
      relative
      text-black
      mb-3
      md:text-5xl
      text-4xl
      text-dark
      "
   >
   <slot></slot>
  <div>
  `,
  data() {
     return {
     }
  },
});

Vue.component('header2', {
  props: [''],
  template: `
  <div
     class="
      relative
      text-black
      mb-3
      md:text-4xl
      text-3xl
      text-dark
      "
   >
   <slot></slot>
  <div>
  `,
  data() {
     return {
     }
  },
});

Vue.component('header3', {
  props: [''],
  template: `
  <div
     class="
      relative
      text-black
      mb-3
      md:text-3xl
      text-2xl
      text-dark
      "
   >
   <slot></slot>
  <div>
  `,
  data() {
     return {
     }
  },
});

Vue.component('header4', {
  props: [''],
  template: `
  <div
     class="
      relative
      text-black
      mb-3
      md:text-2xl
      text-xl
      text-dark
      "
   >
   <slot></slot>
  <div>
  `,
  data() {
     return {
     }
  },
});

Vue.component('header5', {
  props: [''],
  template: `
  <div
     class="
      relative
      text-black
      mb-3
      md:text-xl
      text-lg
      text-dark
      "
   >
   <slot></slot>
  <div>
  `,
  data() {
     return {
     }
  },
});


Vue.component('input-component', {
  props: [''],
  template: `
  <input 
   class="form-control form-dark" 
   type="text"
   name="a" 
   value="foo" 
   placeholder="test" />
  `,
  data() {
     return {
     }
  },
});



