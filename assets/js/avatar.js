/*
|---------------------------------------------------------------
| Avatar  component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('avatar', {
  props: ['alt','path'],
  template: `
   <img 
    :src="path"
    :alt="alt"
    style="width:60px; height:60px; border:2px solid #fff;"
    class="br-full drop-shadow"
   >
   </img>
  `,
  data() {
    return {}
  },
});



