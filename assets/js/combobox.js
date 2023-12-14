/*
|---------------------------------------------------------------
| Search dropdowns 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
|---------------------------------------------------------------
|
|
*/
Vue.component('combobox',{
  props:['name'],
  template: 
  `
  <div @keyup.escape="escapePressed">
       <button @click="show =!show; message=''" class="form-control hand 
       left pos-rel" style="width:280px; height:40px;" v-click-outside="away">
          <span>
             <i data-feather='chevron-down'  class='icon-inside hand'></i>
          </span>
          {{message2}}
       </button>
    
       <div v-if="show" class="combobox-container fade-in" @click.stop>
          <div class="pos-rel " style="width:280px; height:40px;">
             <span>
                <i data-feather='search'  class='icon-inside hand' style="right:25px"></i>
             </span>
             <input class="rm-input-styles" 
                    :name="name" 
                    v-model="message"
                    autocomplete="off" 
                    @keyup.enter="onEnter"
                    @keyup="listn"
                    placeholder="Search Framework" />

             <div class="b-t"></div>
             <div v-for='(search, index) in searches' @click="my_select(search.val)">

                <div v-show="searchFunc(search.val)" class="combobox-container-item">
                   {{search.val}}
                </div>

             </div>
          </div>

          <slot></slot>

          {{matches}}
       </div>
   </div>

  
  `,
  data:function(){

      return{
          message: '',
          message2: 'Select item',
          show: false,
          matches: [],
          searches: []
      }
  },
  mounted() {
    this.searches = this.$children;

  },
  methods:{
      away: function () {
          this.show = false;
      },
     listn(e){
        console.log(this.searches[1].val);
        for (let i = 0; i < this.searches.length; i++) {
           if(e.key.include(this.searches[i]))
            console.log(e.key);
           //console.log( this.searches[i]);
         }
     },
     onEnter()
     {
       alert('enter pressed');
     },
     escapePressed(){
        this.show = false;

     },
      my_select(str)
      {
        this.message = str;
        this.message2 = str;
        this.show = false;
      },
      searchFunc(param) {
        if (param.toLowerCase().includes(this.message.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      },
  } 
});

Vue.component('combo-item', {
  props:['val'],
  template: 
    `
    `,
  data: function () {

    return {
    //nothing
    }
  },
   mounted()
   {
      feather.replace();
   }
});

