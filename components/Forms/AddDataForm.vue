<template>
  <form class="add-form" @submit="handleSubmit">
    <label class="input--label">
      First Name
      <input
        class="input"
        v-model="formValues.first_name"
        type="text"
        name="first_name"
        required
      />
    </label>
    <label class="input--label">
      Last Name
      <input
        class="input"
        v-model="formValues.last_name"
        type="text"
        name="last_name"
        required
      />
    </label>
    <label class="input--label">
      Birth Day
      <select v-model="formValues.bd" class="input" required>
        <option v-for="(day, idx) in 31" :key="idx" :value="day">
          {{ day }}
        </option>
      </select>
    </label>
    <label class="input--label">
      Birth Month
      <select v-model="formValues.bm" class="input" required>
        <option v-for="(month, idx) in 12" :key="idx" :value="month">
          {{ month }}
        </option>
      </select>
    </label>
    <label class="input--label">
      Photo Link from Slack or HiBob
      <input
        class="input"
        v-model="formValues.photo_link"
        type="text"
        name="photo_link"
      />
    </label>
    <div class="checkbox-input">
      <input v-model="formValues.face" type="checkbox" id="face" name="face" />
      <label>
        Hereby I give my consent for using my photo to generate birthday cakes (don't check it if you don't consent)
      </label>
    </div>
    <input class="btn" type="submit" />
  </form>
</template>
<script>
import { ref, useRouter } from "@nuxtjs/composition-api";
import { addItem } from "~/composables/useDatabase";

export default {
  name: "AddDataForm",
  setup() {
    const router = useRouter();

    const formValues = ref({
      first_name: "",
      last_name: "",
      bd: 1,
      bm: 1,
      photo_link: "",
      active: true,
      face: false,
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      await addItem("people", formValues.value);
      router.push('/people');
    };

    return {
      formValues,
      handleSubmit,
    };
  },
};
</script>
<style lang="css" scoped>
.add-form {
}
form {
  margin: auto;
  width: 500px;
}
input,
button,
select {
  margin: 0 auto;
  width: 100%;
}
.input {
  margin-bottom: 2rem;
}
.input--label {
  display: flex;
  text-align: center;
  flex-direction: column;
}
.checkbox-input {
  margin: auto;
  margin-bottom: 2rem;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
}
.checkbox-input label {
  margin: 0;
  padding: 0;
}
</style>
