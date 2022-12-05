/*
|---------------------------------------------------------------
| Mobile Menu 
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
Vue.component('mobile-menu',{
    props:['title'],
    template: 
    `
    <div style="top:0; position:sticky; z-index:2; ">
       
       <div class="menu-bar ">
          <div class="menu-logo">
             <img src="assets/images/flatfile.svg"></img>
          </div> 
          <div >
             <span v-on:click="foo = !foo">
                <i data-feather="menu" class="icon hand" ></i>
             </span>
          </div>
       </div>

       <div class="menu-overlay fade-in-bottom" v-if="foo">
         <slot>
         </slot>
       </div>

    </div>
    
    `,
    data:function(){
        return {
            message: 'Hello',
            foo: false, /*for mobile menu*/
        }
    },
    methods: {

    }
});


Vue.component('mobile-menu-items',{
    props:['title'],
    template: 
    `
    <div class="menu-item">
         <a href="" class="rm-link-styles">{{title}}</a>
    </div>
    `,
     data:function(){

         return{
           show:false
         }
     },
     methods: {
      away: function () {
        this.show = false;
      },
    }
  
});

