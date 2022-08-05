/*
|---------------------------------------------------------------
| Modals 
| 
| Components only data must be passed as a function
| Use slots to repeat child components
| Use props to pass in data MUST use kebab case eg postTitle => post-title 
| 
| https://www.youtube.com/watch?v=Et6pHpKOHys&list=PL3VM-unCzF8iRyPotjFsgy7EfuCITvr_3&index=10 
| https://stackoverflow.com/questions/42156059/vuejs-2-send-event-from-component-to-parent 
|---------------------------------------------------------------
|
|
*/
Vue.component('modal',{
    props:['button-title','modal-header'],
    template: 
    `
    <div>
    <button type="button" class="btn btn-white " v-on:click="open=true" v-click-outside="away">
      {{buttonTitle}} 
    </button>
    <div class="modal" v-show="open">
      <div class="modal-content" @click.stop>

        <div class="modal-header">
          <button type="button" class="rm-btn-styles close" v-on:click="open = false">&times;</button>
          <h4>{{modalHeader}}</h4>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col-12 right">
              <button type="button" class="btn btn-primary pull-right" v-on:click="open = false">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `,
    data:function(){

        return{
            message: 'Hello',
            open: false,
        }
    },
    methods: {
      away: function () {
        this.open = false;
      },
    }
});