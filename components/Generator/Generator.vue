<template>
  <div class="generator">
    <form onsubmit="handleSubmit">
      <select class="dropdown">
        <option
          v-for="option in dropdownOptions"
          :value="option.photo_link"
          :key="option.id"
          :onchange="getPhotoLink(option.photo_link)"
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
    getPhotoLink(link) {
        return this.selectedValue = link;
    },
    handleSubmit() {
        const token = 'a55caa45-c0e9-41c6-8d33-61e709754753'
        const url = 'https://api.midjourneyapi.io/v2/imagine/';
        const data = {
            "prompt": this.selectedValue
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    },
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
}
.dropdown {
  margin-bottom: 15px;
}
</style>
