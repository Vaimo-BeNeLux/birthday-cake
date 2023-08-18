<template>
  <div class="generator">
    <form onsubmit="handleSubmit">
      <select class="dropdown">
        <option
          v-for="option in dropdownOptions"
          :value="option.photo_link"
          :key="option.id"
        >
          {{ option.name }} ({{ option.dob }})
        </option>
      </select>
      <button type="submit">Generate</button>
    </form>
  </div>
</template>

<script>
import { users } from '../../lib/users';

export default {
  name: "Generator",
  data() {
    return {
      dropdownOptions: users,
      selectedValue: "",
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>
<style lang="css" scoped>
.generator {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.generator form {
  display: flex;
  flex-direction: column;
  margin-top: 25vh;
}
.dropdown {
  margin-bottom: 15px;
}
</style>
