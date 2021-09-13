import * as PlanService from './services/PlanService.js'

const app = Vue.createApp({
    data() {
      return {
          entries: [],
          error: false,
          loaded: false
      }
    },
    mounted() {
        this.loadPlan();
        this.loaded = true
    },
    methods: {
        loadPlan() {
            this.entries = [];

            PlanService.getPlan().then(entries => {
                this.entries = entries;
            }).catch(err => { console.log(err); this.error = true });
        }
    },
    template: `
<div class="container-lg" v-if="loaded && !error">
    <table class="table">
        <thead>
            <tr>
                <th>Fordertyp</th>
                <th>Info</th>
                <th>Beginn</th>
                <th>Ende</th>
                <th>Geforderte Qualifikationen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry of entries">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
        </tbody>
    </table>
</div>`
});

app.mount('#app');
