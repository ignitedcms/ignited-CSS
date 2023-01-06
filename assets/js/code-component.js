/*
|---------------------------------------------------------------
| Code component
|
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
| 
*/
Vue.component('code-component', {
   template: `
      <div v-on:click="test" class="no-select p-4 hand bg-dark"> {{foo}} </div>
    `,
   data: function () {

      return {
         foo:'bar'
      }
   },
   created() {

   },
   mounted() {

   },
   methods: {
      selectTab(i) {
      },
      test()
      {
         if (this.foo === 'bar')
         {
            this.foo = 'foo'
         }
         else
         {
            this.foo = 'bar'
         }
      }


   }
});

Vue.component('code-item', {
   props: ['title'],
   template: `
    <div>
    </div>
    `,
   data: function () {

      return {
         is_active: true
      }
   }
});

