/*
|---------------------------------------------------------------
| Code component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('code-component', {
  props: ['title'],
  template: `
    <div>
    code
    </div>
  `,
  data() {
    return {
      uniqueId: Math.random().toString(36).substring(2) // Generate a unique ID
    };
  },
  methods: {
    test() {
      alert('foo');
    },
    
  },
});


