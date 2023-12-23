Vue.component('range-slider', {
  props: ['name','value','min', 'max'],
  template: `
    <div class="slidecontainer">
      <input
        class="slider2"
        :name="name"
        :value="value"
        type="range"
        v-model="sliderValue"
        @input="updateSlider($event.target.value)"
        :min="min"
        :max="max"
      />
      <p class="m-t-2">Value:
        <span id="demo">
          {{sliderValue}}
        </span>
      </p>
    </div>
  `,
  data() {
    return {
      sliderValue: this.value
    };
  },
  methods:{
     updateSlider(newValue) {
        this.$emit('input', newValue);
     }
  }
});

