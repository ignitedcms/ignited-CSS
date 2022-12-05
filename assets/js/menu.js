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
    props:['title'],
    template: 
    `
    <div style="top:0; position:sticky; z-index:2; ">
       <div class="menu">
          <div class="menu-logo">
             <img src="assets/images/flatfile.svg"></img>
          </div>
          <div class="menu-item-container">
             <slot>
             </slot>
          </div>
          <button type="button" class="btn btn-white">{{title}}</button>
       </div>
    </div>
    
    `,
    data:function(){
        return {
            message: 'Hello',
        }
    },
    methods: {

    }
});


Vue.component('menu-items',{
    props:['title','children','url'],
    template: 
    `
      <div>
         <div v-if="children !== 'yes'">
            <a v-bind:href="url" class="rm-link-styles m-l-2">
               {{title}}
            </a>
         </div>
         <div v-if="children === 'yes'" class="m-l-2 hand v-a pos-rel" v-on:click="show = !show" v-click-outside="away">
               <button class="rm-btn-styles">
                  {{title}}
               </button>
               <span class="m-l v-a">
                  <i data-feather="chevron-down" class=""></i>
               </span>

               <div v-if="show" @click.stop class="menu-dropdown fade-in-bottom" >
                  <slot>
                  </slot>
               </div>
         </div> 
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

Vue.component('menu-item',{
    props:['title','icon','url'],
    template: 
    `
       <div class="row m-t">
         <a v-bind:href="url" class="rm-link-styles col v-a no-margin menu-large-items">
            <img v-bind:src="icon"></img>
            <div class="m-l-2">{{title}}</div>
         </a>
      </div>
     
    `,
     data:function(){

         return{
           //nothing
         }
     },
     methods: {
    }
  
});