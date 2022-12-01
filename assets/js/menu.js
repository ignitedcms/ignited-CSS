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
    <div>
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

               <div v-if="show" class="menu-dropdown fade-in-bottom">
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

      <div class="small-menu">foo</div>      

      </div>
    
    `,
    data:function(){
        return {
            message: 'Hello',
            show: false,
        }
    },
    methods: {
      away: function () {
        this.show = false;
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

