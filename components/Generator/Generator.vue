<template>
  <div class="generator-component">
    <div class="generator container-mini">
      <div class="generator__content">
        <form @submit="handleSubmit">
          <select v-model="selectedPerson" class="dropdown">
            <option value="" selected="selected" disabled="disabled">— Select a person —</option>
            <option v-for="option in dropdownOptions" :value="option" :key="option.id">
              {{ option.face ? '👤' : '🎂' }} {{ option.first_name + ' ' + option.last_name }} ({{ option.bd }} {{ getMonthName(option.bm) }})
            </option>
          </select>
          <button type="submit" :disabled="submitDisabled">
            <span v-if="submitDisabled" class="spinner"></span> Generate
          </button>
          <div class="comment">
            If you wish to see your name here, please fill in <a href="/add-information" class="accent">this form</a>.
          </div>
        </form>
      </div>
    </div>

    <GeneratorJobs v-if="selectedPerson" :jobs="selectedPersonJobs" />
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from '@nuxtjs/composition-api';
import { getItems, getItem, addItem } from '~/composables/useDatabase';
import { imaginePerson, getResult } from '~/composables/useMidjourney';
import { monthName, sortPeopleByBirthday } from '~/composables/useDates';
import GeneratorJobs from "./GeneratorJobs.vue";

// TODO: @Kos: do not press the button on the page to get an image, it will get stuck in an infinite loop! I tried to change things to make it work, but something is wrong, the data in the dropdown does come from the database now, it's just to make an api request to the ai for generating images, I've tried with using the database for this (collection for this is called results), but I guess I did something wrong, maybe you can see where the problem is and fix it?
// I've put the original code from the component in Gerenrator-original.vue
// The testingdb.vue page is to check if the data that normally goes into the localStorage gets into the database -> you can use the button there to delete all the data if you want to start fresh again, the page is only there for testing, it can be deleted when everything works normal again. It doesn't delete the data from the people, so don't worry
// getItems, getItem, addItem, editItem, and removeItem all work as intended. Please do not change anything in them, see the useDatabase composable to check them out.
// I made the edit form as well, and the functionality, it all works the way it should, you can change the design if you please, but the functionality works as intended, there you don't have to change anything
// I made a form as well to add data from a pseron to the people collection in the database, so now we don't have to do this manually, people can fill in the form, and by checking the checbox they will consent to the use of the picture. The form is on a different page, so no popup or so, you can change it if you feel like it would be better.
// I also added a remove button to the people list on the people page, if someone wants to have his/her data removed, or if a HR manager needs to remove data from an employee that doesn't work at Vaimo anymore, they can click it (I know people can troll and start deleting other people's data, so we have to figure out how we can do this), you can change the design of the button if you want. Functionality works as intended here. I just wanted to add the functionality.
// Sorry for this huge long comment!!

export default {
  name: "Generator",
  components: {
    GeneratorJobs
  },
  setup() {
    const loading = ref(false);
    const dropdownOptions = ref([]);
    const people = ref([]);
    const selectedPerson = ref("");
    const selectedPersonJobs = ref([]);

    const submitDisabled = computed(() => !!(loading.value || selectedPersonActiveJobs.length));

    const selectedPersonActiveJobs = computed(() =>
      selectedPersonJobs.value.filter(job => !job.completed && !job.failed)
    );

    watch(selectedPerson, () => {
      getSelectedPersonJobs();
    });

    watch(selectedPersonJobs, () => {
      saveSelectedPersonJobs();
    });

    const getSelectedPersonJobs = async () => {
      if (!selectedPerson.value) return;
      loading.value = true;
      const personData = await getItem('people', selectedPerson.value.id);
      selectedPerson.value = personData;
      selectedPersonJobs.value = personData.imageResults || [];
      loading.value = false;
    };

    const saveSelectedPersonJobs = async () => {
      loading.value = true;
      for (const job of selectedPersonJobs.value) {
        await addItem('results', job);
      }
      loading.value = false;
    };

    const generateImage = async () => {
      loading.value = true;

      const result = await imaginePerson(selectedPerson.value);
      console.log(result);
      if (result.taskId) {
        const newJob = {
          task_id: result.taskId,
          type: 'imagine',
          completed: false,
          result: null
        };
        selectedPersonJobs.value.unshift(newJob);
        saveSelectedPersonJobs();
      } else {
        console.error('MJ Imagine request failed.', result);
      }
      loading.value = false;
    }

    const getJobResult = async (job) => {
      const result = await getResult(job.task_id);
      if (result && Object.keys(result).length) {
        if (result.imageURL) job.completed = true;
        job.result = result;
        saveSelectedPersonJobs();
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (submitDisabled.value) return;
      generateImage();
    };

    const checkJobs = () => {
      if (selectedPersonActiveJobs.length) {
        for (const job of selectedPersonActiveJobs) {
          getJobResult(job);
        }
      }
    };

    const getMonthName = (m) => {
      return monthName(m);
    };

    onMounted(async () => {
      people.value = await getItems('people');
      dropdownOptions.value = sortPeopleByBirthday(people.value);
      setInterval(checkJobs, 3000);
    });

    return {
      loading,
      dropdownOptions,
      selectedPerson,
      selectedPersonJobs,
      getSelectedPersonJobs,
      getJobResult,
      handleSubmit,
      submitDisabled,
      getMonthName
    }
  }
}
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
.comment {
  text-align: center;
  font-size: 0.8em;
  margin-top: 15px;
}
</style>
