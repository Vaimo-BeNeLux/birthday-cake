<template>
    <div class="employees">
        <div class="employee" v-for="person in items" :key="person.id">
            <div class="number">#{{ person.id }}</div>
            <div class="dob">{{ person.bd }} {{ monthName(person.bm) }}</div>
            <div class="photo">
              <img v-if="person.face" :src="person.photo_link" :alt="person.name">
              <img v-else src="../../assets/images/cake.svg" :alt="person.name" class="cake">
            </div>
            <div class="name">{{ person.name }}</div>
            <div class="controls"><a href="#edit" class="accent dashed" @click.prevent="edit(person)">Edit</a></div>
        </div>
    </div>
</template>
<script>
import { monthName } from '~/composables/useDates';
export default {
    name: 'Employees',
    props: {
        items: []
    },
    methods: {
      monthName(m) {
        return monthName(m)
      },
      edit(person) {
        console.log('TODO: Edit person', person);
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

.dob {
  min-width: 80px;
  opacity: 0.7;
}
</style>
