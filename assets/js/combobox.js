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
       <button @click="lod"  ref="button" class="form-control hand  
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
                    @keydown.tab.prevent
                    v-model="message"
                    autocomplete="off" 
                    ref="searchInput"
                    @keydown="onKeys"
                    placeholder="Search Framework" />

             <div class="b-t"></div>
             <div v-for="(item, index) in matches" :key="index" :id="name+'_'+index" 
                 class="combobox-container-item"  @click="my_select(item.val)">
                        {{ item.val }}
             </div>

               <div v-if="matches.length === 0" class="combobox-container-item">
                 No searches found. . .
               </div>

          </div>

          <slot></slot>
       </div>
       {{focusedIndex}}

       {{len}}
   </div>

  
  `,
  data:function(){

      return{
          message: '',
          message2: 'Select item',
          show: false,
          matches: [],
          items: [],
          focusedIndex:0,
          len:0
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

        //needed after show/hide
      this.$nextTick(() => {
             this.$refs.searchInput.focus();
      });

     },
     findMatches(text) {
          this.matches = this.items.filter(item =>
            item.val.toLowerCase().includes(text.toLowerCase())
          );
        },
      away: function () {
          this.show = false;
      },
     focusNext(){
         this.len = this.matches.length;

        if(this.focusedIndex < this.len)
        {
         this.focusedIndex = this.focusedIndex + 1;
        }

     },
     focusPrevious(){

         this.len = this.matches.length;

        if(this.focusedIndex > 0)
        {
         this.focusedIndex = this.focusedIndex - 1;
        }
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
            //array[0] is necessary!!
            //this.$refs['idx_2'][0].focus();

          this.focusNext();
           //var t = this.name + '_1';
           //document.getElementById(t).classList.remove('combobox-container-item');
           //document.getElementById(t).classList.add('combobox-container-item-highlighted');

        }
        else if (event.key == 'ArrowUp') {
           
          this.focusPrevious();
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
        this.$refs.button.focus();
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

