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
       <button @click="lod" @keydown.enter.prevent class="form-control hand  
       left pos-rel" style="width:280px; height:40px;" v-click-outside="away">
          <span>
             <i data-feather='chevron-down'  class='icon-inside hand'></i>
          </span>
          {{message2}}
       </button>
    
       <div v-show="show" class="combobox-container fade-in" @click.stop>
          <div class="pos-rel " style="width:280px; height:40px;">
             <span>
                <i data-feather='search'  class='icon-inside hand' style="right:25px"></i>
             </span>
             <input class="rm-input-styles" 
                    :name="name" 
                    v-model="message"
                    autocomplete="off" 
                    ref="searchInput"
                    @keydown="onKeys"
                    placeholder="Search Framework" />

             <div class="b-t"></div>
             <div v-for="(item, index) in matches" :key="index" 
                 class="combobox-container-item" @click="my_select(item.val)">
              {{ item.val }}
             </div>
          </div>

          <slot></slot>
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
    this.matches = this.$children;


  },
   watch: {
        message: function(newText) {
          this.findMatches(newText);
        }
      },
  methods:{
     lod(){
        this.show =!this.show; 
        this.matches = this.items;
        this.message = '';

      this.$nextTick(() => {
             this.$refs.searchInput.focus();
      });
        //needed after show/hide
     },
     findMatches(text) {
          this.matches = this.items.filter(item =>
            item.val.toLowerCase().includes(text.toLowerCase())
          );
        },
      away: function () {
          this.show = false;
      },
     onKeys(event)
     {
        if (event.key === 'Enter')
        {
            if (this.matches === undefined || this.matches.length == 0) {
               this.show  = false;
            }
           else{
               this.message =(this.matches[0].val);
               this.message2 =(this.matches[0].val);
              this.show = false;
           }
        }
        else if (event.key == 'ArrowDown') {
           alert('down');

        }
        else if (event.key == 'ArrowUp') {
           alert('up');
        }
           
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

