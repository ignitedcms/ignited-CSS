/*
|---------------------------------------------------------------
| Trees
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


Vue.component('tree',{
    props:['title','logo','url'],
    template: 
    `
    <div>
       <ul id="" class="trees">
          <li><span class="caret">Beverages</span>
             <ul class="nested">
                <li>Water</li>
                <li>Coffee</li>
                <li><span class="caret">Tea</span>
                   <ul class="nested">
                      <li>Black Tea</li>
                      <li>White Tea</li>
                   </ul>
                </li>
             </ul>
          </li>
       </ul>
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



