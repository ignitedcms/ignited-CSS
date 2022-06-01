Vue.component('drop-down',{
    template: 
    `
    <button class="btn btn-white drop-shadow" v-on:click="show =!show" v-on-clickaway="away">Click me
                        <div v-if="show" class="dropdown br drop-shadow fade-in-bottom">
                            
                           <slot></slot> 
                            
                            
                        </div>

                    </button>
    `,
    data:function(){

        return{
            mixins: [VueClickaway.mixin],
            message: 'Hello',
            show: false,
            // methods: {
            //     away: function () {
            //         this.show = false;
            //     },
            // }
        }
    },
    methods:{
        away: function () {
            this.show = false;
        },

    } 
});

Vue.component('item',{
    props: ['title','url'],
    template: 
    `
    <div class="row">
        <div class="col no-margin">
            <div class="dropdown-item">
                <a href="{{url}}" class="left">{{title}}</a>
            </div>
        </div>
    </div>
    `,
    data:function(){

        return{

        }
    }
});




var app = new Vue({
    el: '#app',
    // mixins: [VueClickaway.mixin],
    // data: {
    //     message: 'Hello',
    //     show: false,
    // },
    // methods: {
    //     away: function () {
    //         this.show = false;
    //     }
    // }
})