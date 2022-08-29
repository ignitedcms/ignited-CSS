/*
|---------------------------------------------------------------
| Side panel 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
*/
Vue.component('sidePanel',{
    props:['title'],
    template: 
    `
     <div class="side-panel" v-bind:style="{width: menu_width}">
         {{title}}

         <div v-on:click="test"> click </div>
     </div>
    `,
    data:function(){
       
        return{
            message: 'Hello',
            menu_width: '200px',
            show: false,
        }
    },
    methods:
    {
        /*                                                                          
        |---------------------------------------------------------------            
        | Here we want to shrink menu width 
        |---------------------------------------------------------------            
        |                                                                           
        */       
        test()
        {
            this.menu_width = '0';
            alert('testing123');
        }
    }
});


