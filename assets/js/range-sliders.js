Vue.component('range-slider', {
  props: ['name', 'min', 'max'],
  template: `
    <div class="slidecontainer">
      <input
        class="slider2"
        :name="name"
        type="range"
        v-model="message"
        :min="min"
        :max="max"
      />
      <p class="m-t-2">Value:
        <span id="demo">
          {{message}}
        </span>
      </p>
    </div>
  `,
  data() {
    return {
      message: this.min
    };
  }
});

