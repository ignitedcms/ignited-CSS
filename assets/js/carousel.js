/*                                                                          
|---------------------------------------------------------------            
| Carousel component
|---------------------------------------------------------------            
|
| 
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/       
Vue.component('carousel', {
  template: `
    <div>
       <div class="splide" aria-labelledby="carousel-heading">

          <div class="splide__track">
             <ul class="splide__list">
                <slot></slot> 
                
             </ul>
          </div>
       </div>
    </div>
  `,
  data() {
    return {
      // Nothing here
    }
  },
  mounted() {
    new Splide('.splide', {
       arrows: true,
       pagination:false
    }).mount();
  }
});

Vue.component('carousel-item', {
  props: ['title'],
  template: `
  <li class="splide__slide">
     <div class="panel m-5 br drop-shadow v-a h-a"
          style="min-height:380px;">
        <h4>
           <slot></slot>
        </h4>
     </div>
  </li>
  `,
  data() {
    return {
      isActive: false,
      uniqueId: Math.random().toString(36).substring(2) // Generate a unique ID
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
});


