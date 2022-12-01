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
    props:['button-title'],
    template: 
    `
    <div style="top:0; position:sticky; z-index:2; ">
    <div class="menu">
         <div class="menu-logo">
            <img src="assets/images/flatfile.svg"></img>
         </div>
         <div class="menu-item-container">
            <div class="m-l-2 hand v-a" v-on:click="show =!show" v-click-outside="away">
               Products
               <span class="m-l v-a">
                  <i data-feather="chevron-down" class=""></i>
               </span>

               <div v-if="show" class="menu-dropdown fade-in-bottom" @click.stop>
                  <div class="row">
                     <div class="col-6 v-a no-margin">
                        <img src="assets/images/portal.svg"></img>
                        <div class="m-l-2">testing</div>
                     </div>
                     <div class="col-6 v-a no-margin">
                        <img src="assets/images/portal.svg"></img>
                        <div class="m-l-2">testing</div>
                     </div>
                  </div>
                  <div class="row m-t">
                     <div class="col-6 v-a no-margin">
                        <img src="assets/images/workspaces.svg"></img>
                        <div class="m-l-2">testing</div>
                     </div>
                     <div class="col-6 v-a no-margin">
                        <img src="assets/images/workspaces.svg"></img>
                        <div class="m-l-2">testing</div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="m-l-2 hand v-a">
               Developers
               <span class="m-l v-a">
                  <i data-feather="chevron-down" class=""></i>
               </span>
            </div>
            <div class="m-l-2 hand v-a">
               Company
               <span class="m-l v-a">
                  <i data-feather="chevron-down" class=""></i>
               </span>
            </div>
         </div>
          <button type="button" class="btn btn-white">{{buttonTitle}}</button>

      </div>

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
         <div class="menu-item">
            <a href="" class="">Documentation</a>
         </div>
         <div class="menu-item">
            <a href="" class="">CSS</a>
         </div>
         <div class="menu-item">
            <a href="" class="">Blog</a>
         </div>
         <div class="menu-item">
            <a href="" class="">Contact</a>
         </div>
      </div>

      </div>
    
    `,
    data:function(){
        return {
            message: 'Hello',
            show: false,
            foo: false, /*for mobile menu*/
        }
    },
    methods: {
      away: function () {
        this.show = false;
      },
    }
});


Vue.component('menu-item',{
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

