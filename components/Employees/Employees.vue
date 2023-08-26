<template>
    <div class="employees">
        <div class="add">
          <a class="accent dashed" href="/add-information">Add a person</a>
        </div>
        <div class="employee" v-for="(person, index) in sortedPeople" :key="person.id">
            <div class="number">#{{ index + 1 }}</div>
            <div class="dob">{{ person.bd }} {{ getMonthName(person.bm) }}</div>
           <div class="photo">
             <img v-if="person.face" :src="person.photo_link" :alt="person.first_name + ' ' + person.last_name">
             <img v-else src="../../assets/images/cake.svg" :alt="person.first_name + ' ' + person.last_name" class="cake">
           </div>
            <div class="name">{{ person.first_name + ' ' + person.last_name }}</div>
            <div class="controls"><a href="#edit" class="accent dashed" @click.prevent="editPerson(person.id)">Edit</a></div>
            <button class="del" @click="deletePerson(person.id)">X</button>
          </div>
          <EditDataForm class="edit-form" v-if="isEditing && formValues" :formValues="formValues" />
    </div>
</template>
<script>
import { monthName } from '~/composables/useDates';
import { sortPeople } from '~/composables/useSort';
import { removeItem } from '../../composables/useDatabase';
import { computed, ref } from '@nuxtjs/composition-api';
import { getItem } from '../../composables/useDatabase';
import EditDataForm from '../Forms/EditDataForm.vue';

export default {
    name: 'Employees',
    components: {
      EditDataForm
    },
    props: {
        items: [],
    },
    setup(props) {
      const isEditing = ref(false);
      const formValues = ref(null);

      const sortedPeople = computed(() => sortPeople(props.items));

      const getMonthName = (m) => {
        return monthName(m);
      }

      const editPerson = async (p) => {
        isEditing.value = true;
        const person = await getItem('people', p);
        return formValues.value = person;
      }

      const deletePerson = async (p) => {
        const delRef = await removeItem('people', p);
        location.reload();
        return delRef;
      }

      return {
        isEditing,
        editPerson,
        formValues,
        sortedPeople,
        getMonthName,
        deletePerson
      }
    }
}
</script>
<style lang="css" scoped>
.employees {
    margin: 0 auto;
    margin-top: 2rem;
    width: 100%;
    max-width: 1024px;
    position: relative;
}
.employee {
    margin-bottom: 15px;
    display: flex;
}
.number {
  min-width: 50px;
  opacity: 0.7;
}
.name {
  min-width: 270px;
}
.photo {
  width: 20px;
  margin-right: 15px;
}
.photo img {
  border-radius: 3px;
}
.controls {
  font-size:12px;
}
.photo img.cake {
  margin: -4px 0 0 -1px;
}
.del {
  border-radius: 25px;
  padding: 0 8px;
  margin-left: 1rem;
}
.add {
  margin-bottom: 5rem;
  text-align: center;
}
.dob {
  min-width: 80px;
  opacity: 0.7;
}
.edit-form{
  position: fixed;
  right: 200px;
  top: 200px;
  margin-left: 2rem;
  /* width: 500px; */
}
</style>
