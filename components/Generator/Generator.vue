<template>
  <div class="generator-component">
    <div class="generator container-mini">
      <div class="generator__content">
        <form @submit="handleSubmit">
          <select
            v-model="selectedPerson"
            class="dropdown"
          >
            <option value="" selected="selected" disabled="disabled">— Select a person —</option>
            <option
              v-for="option in dropdownOptions"
              :value="option"
              :key="option.id"
            >
              {{ option.face ? '👤' : '🎂'  }} {{ option.name }} ({{ option.bd }} {{ monthName(option.bm) }})
            </option>
          </select>
          <button type="submit" :disabled="submitDisabled">
            <span v-if="submitDisabled" class="spinner"></span> Generate</button>
        </form>
      </div>
    </div>

    <GeneratorJobs v-if="selectedPerson" :jobs="selectedPersonJobs" />
  </div>
</template>

<script>
import { users } from '../../lib/users';
import { getItem, setItem } from '~/composables/useDatabase';
import { imaginePerson, getResult } from '~/composables/useMidjourney';
import { monthName, sortPeopleByBirthday } from '~/composables/useDates';
import GeneratorJobs from "./GeneratorJobs.vue";

export default {
  name: "Generator",
  components: {
    GeneratorJobs,
  },
  data() {
    return {
      loading: false,
      dropdownOptions: [],
      selectedPerson: "",
      selectedPersonJobs: []
    };
  },
  computed: {
    submitDisabled() {
      return !!(this.loading || this.selectedPersonActiveJobs?.length);
    },
    selectedPersonActiveJobs() {
      return this.selectedPersonJobs.filter(job => !job.completed && !job.failed);
    }
  },
  watch: {
    selectedPerson(person) {
      this.getSelectedPersonJobs()
    },
    selectedPersonJobs(jobs) {
      this.saveSelectedPersonJobs();
    }
  },
  methods: {
    getSelectedPersonJobs() {
      if (!this.selectedPerson) return [];
      this.loading = true;
      getItem('jobs_' + this.selectedPerson.id).then((jobs) => {
        this.selectedPersonJobs = jobs || [];
      }).finally(() => {
        this.loading = false;
      });
    },
    saveSelectedPersonJobs() {
      this.loading = true;
      setItem('jobs_' + this.selectedPerson.id, this.selectedPersonJobs).finally(() => {
        this.loading = false;
      });
    },
    generateImage() {
      this.loading = true;
      imaginePerson(this.selectedPerson).then((result) => {
        if(result.taskId) {
          this.selectedPersonJobs.unshift({
            id: result.taskId,
            type: 'imagine'
          });
        } else {
          console.error('MJ Imagine request failed.', result);
        }
      }).finally(() => {
        this.loading = false;
      });
    },
    getJobResult(job) {
      getResult(job.id).then((result) => {
        console.log(result, !Object.keys(result).length);
        if(result && Object.keys(result).length) {
          if (result?.imageURL) job.completed = true;
          job.result = result;
          this.selectedPersonJobs = [...this.selectedPersonJobs];
        }
        // } else if(result) {
        //   job.failed = true;
        //   this.selectedPersonJobs = [...this.selectedPersonJobs];
        // }
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      if(this.submitDisabled) return;

      this.generateImage();
    },
    checkJobs() {
      console.log('Check Jobs:')
      if(this.selectedPersonActiveJobs.length ) {
        this.getJobResult(this.selectedPersonActiveJobs[0]);
      }
    },
    monthName(m) {
      return monthName(m);
    }
  },
  mounted() {
    this.dropdownOptions = sortPeopleByBirthday(users);
    setInterval(this.checkJobs, 3000);
  }
};
</script>
<style lang="css" scoped>
.generator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.generator form {
  display: flex;
  flex-direction: column;
}
.generator form .spinner {
  margin-left: -5px;
}
.dropdown {
  margin-bottom: 15px;
}
button[disabled] {
  background: #cca952;
  color: #fff;
}
</style>
