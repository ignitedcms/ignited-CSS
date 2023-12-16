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
       <button @click="load"  ref="button" class="form-control hand  
       left pos-rel" style="width:280px; height:40px;" v-click-outside="away">
          <span>
             <i data-feather='chevron-down'  class='icon-inside hand'></i>
          </span>
          {{selectedItem}}
       </button>

       <div v-show="show" class="combobox-container fade-in" @click.stop>
          <div class="pos-rel " style="width:280px; height:40px;">
             <span>
                <i data-feather='search'  class='icon-inside hand' style="right:25px"></i>
             </span>
             <input class="rm-input-styles" 

                    :name="name" 
                    @keydown.tab.prevent
                    v-model="searchQuery"
                    autocomplete="off" 
                    ref="start"
                    @keyup.down="highlightNext"
                    @keyup.up="highlightPrev"
                    placeholder="Search list" />

             <div class="b-t"></div>
             <div v-for="(item, index) in filteredItems"
                  :key="index" 
                 class="combobox-container-item"  
                 @mouseover="setHighlighted(index)"
                 @click="onClick(item)"
                 :class="{ 'combobox-container-item-highlighted': index === highlightedIndex }"

               >
                  {{ item }}
             </div>

               <div v-if="filteredItems.length === 0
                 && searchQuery.trim() !== ''"
               class="combobox-container-item">
                 No searches found. . .
               </div>

          </div>

          <slot></slot>
       </div>
   </div>


  `,
   data:function(){

      return{
         searchQuery: '',
         items: ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'],
         highlightedIndex:0,
         selectedItem:'',
         show: false

      }
   },
   mounted() {
      //this.items = this.$children;

         this.$nextTick(() => {
            this.$refs.start.focus();
         });

   },
   computed: {

       filteredItems() {
        if (this.searchQuery.trim().length === 0) {
          return this.items;
        } else {
          return this.items.filter(item =>
            item.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
      },
   },
   methods:{
      load(){

         this.show = true;
         this.$nextTick(() => {
            this.$refs.start.focus();
         });
      },
      setHighlighted(index) {
        this.highlightedIndex = index;
      },
      onClick(item) {
        console.log('Clicked:', item); // Replace this with your desired action
           this.selectedItem = item;
      },
      highlightNext() {
        if (this.highlightedIndex < this.filteredItems.length - 1) {
          this.highlightedIndex++;
        }
      },
      highlightPrev() {
        if (this.highlightedIndex > 0) {
          this.highlightedIndex--;
        }
      },
      onEnter() {
        if (this.filteredItems.length > 0 && this.highlightedIndex !== -1) {
          const selectedItem = this.filteredItems[this.highlightedIndex];
          console.log('Enter pressed on:', selectedItem); // Replace this with your desired action
           this.selectedItem = selectedItem;
        } else {
          console.log('Enter pressed without selection');
        }
      },
      away: function () {
         this.show = false;
      },
      escapePressed(){
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

