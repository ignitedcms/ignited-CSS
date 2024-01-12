/*
|---------------------------------------------------------------
| Code component
|---------------------------------------------------------------
|
|
| @author: IgnitedCMS
| @license: MIT
| @version: 1.0
| @since: 1.0
|
*/

Vue.component('code-component', {
  props: ['title'],
  template: `
    <div>
      <tabs>
        <tab-item title="Preview">
          <div class="v-a h-a bg-light-grey" style="min-height:300px;">
            <!-- actual code unescaped here -->
          </div>
        </tab-item>
        <tab-item title="Code">
          <div class="pos-rel">
            <pre class="code" style="height:300px;">
test
            </pre>
            <span @click="copyCode" class="text-white icon pos-abs hand" style="top:10px; right:15px;">
              <i data-feather="clipboard"></i>
            </span>
          </div>
          <textarea rows="4" :id="uniqueId" style="display:none;">
test
          </textarea>
        </tab-item>
      </tabs>
    </div>
  `,
  data() {
    return {
      uniqueId: Math.random().toString(36).substring(2), // Generate a unique ID
    };
  },
  methods: {
    copyCode() {
      // Get the text field
      var copyText = document.getElementById(this.uniqueId);

      // Select the text field
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
    },
  },
});

