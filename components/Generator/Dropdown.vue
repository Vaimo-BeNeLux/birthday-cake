<template>
    <div class="dropdown">
      <select v-model="selectedOption">
        <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        selectedOption: this.value
      };
    },
    watch: {
      selectedOption(newValue) {
        this.$emit('input', newValue);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>