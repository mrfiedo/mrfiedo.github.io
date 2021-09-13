import * as PlanService from './services/PlanService.js'

const app = Vue.createApp({
    data() {
      return {
          entries: []
      }
    },
    mounted() {
        this.loadPlan();
    },
    methods: {
        loadPlan() {
            this.entries = [];

            PlanService.getPlan().then(entries => {
                this.entries = entries;
            })
        }
    },
    template: `
<div class="container-lg">
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
