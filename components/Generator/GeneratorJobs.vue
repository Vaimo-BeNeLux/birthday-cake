<template>
    <div class="generator-jobs">
        <div v-if="!computedJobs.length" class="generator-jobs__noresults">No results for this person</div>
        <div v-else class="generator-jobs__item grid-container">
            <div v-for="job in computedJobs" :key="job.id" class="generator-jobs__item">
              <div class="generator-jobs__item-image">
                <a v-if="job && job.result && job.result.imageURL" :href="job.result.imageURL" target="_blank"><img :src="job.result.imageURL" class="image" alt="" /></a>
                <div v-else class="generator-jobs__noimage">
                  <div v-if="job && !job.failed" class="spinner"></div>
                  <div>
                    <span v-if="job && job.result && job && job.result.status">{{ job.result.status }}</span>
                    <span v-else-if="job && job.failed">Failed</span>
                    <span v-else>Inited</span>
                    <span v-if="job && job.result && job && job.result.percentage">({{job.result.percentage}}%)</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import {computed} from "vue";

export default {
  name: 'GeneratorJobs',
  props: {
      jobs: {
        type: Array,
        required: true,
        default: () => []
      }
  },
  computed: {
    computedJobs() {
      return this.jobs;
    }
  }
}
</script>
<style lang="css">
.generator-jobs {
  margin: 50px 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
}

.generator-jobs__noresults {
  text-align: center;
  opacity: 0.5;
}

.generator-jobs__item-image {
  border-radius: 5px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  border: 3px solid rgba(255, 255, 255, 0.3);
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 126px;
  min-width: 126px;
}
.generator-jobs__item-image:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.generator-jobs__noimage {
  text-align: center;
  font-size:12px;
}
.generator-jobs__noimage .spinner {
  width: 1em;
  height: 1em;
  margin-bottom: 0.5em;
}
.generator-jobs__item-image img {
  display: block;
}
</style>
