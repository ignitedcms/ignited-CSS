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
                    placeholder="Search Framework" />

             <div class="b-t"></div>
             <div v-for="(search, index) in matches" :key="index" 
                 class="combobox-container-item" @click="my_select(search)">
              {{ item }}
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
          items: []
      }
  },
  mounted() {
    this.items = this.$children;

  },
   watch: {
        message: function(newText) {
          this.findMatches(newText);
        }
      },
  methods:{
     findMatches(text) {
          this.matches = this.items.val.filter(item =>
            item.toLowerCase().includes(text.toLowerCase())
          );
        },
      away: function () {
          this.show = false;
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

