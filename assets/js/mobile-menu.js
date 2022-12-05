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
             <span v-on:click="isShown =!isShown">
                <i data-feather="menu" class="icon hand" ></i>
             </span>
          </div>
       </div>

       <div class="menu-overlay fade-in-bottom" v-if="isShown">
         <slot>
         </slot>
       </div>

    </div>
    
    `,
    data:function(){
        return {
            message: 'Hello',
            isShown: false, /*for mobile menu*/
        }
    },
    methods: {

    }
});


Vue.component('mobile-menu-items',{
    props:['title','url'],
    template: 
    `
    <a v-bind:href="url" class="menu-item rm-link-styles">
         <div  class="rm-link-styles">{{title}}</div>
    </a>
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


