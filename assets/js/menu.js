/*
|---------------------------------------------------------------
| Mega Menus 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
| 
|---------------------------------------------------------------
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
*/
Vue.component('mega-menu',{
    //props:['button-title','menu-header'],
    template: 
    `
    <div>
       <div>
         <button v-on:click="open=true" v-click-outside="away"  type="button" class="btn btn-white">title</button>
       </div>
       <div v-show="open" @click.stop>
         <slot>
         </slot>
       </div>
    </div>
    `,
    data:function(){
        return {
            message: 'Hello',
            open: false,
        }
    },
    methods: {
      away: function () {
        this.open = false;
      },
    }
});


Vue.component('itemb',{
    template: 
    `
     <div class="bg-dark hand p-4 br">
         <div class="">
            hi there
         </div> 
     </div>
    `,
    // data:function(){

    //     return{

    //     }
    // }
});

