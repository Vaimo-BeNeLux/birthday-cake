<template>
    <div class="employees">
        <div class="employee" v-for="(person, index) in sortedPeople" :key="person.id">
            <div class="number">#{{ index + 1 }}</div>
            <div class="dob">{{ person.bd }} {{ monthName(person.bm) }}</div>
<!--            <div class="photo">-->
<!--              <img v-if="person.face" :src="person.photo_link" :alt="person.first_name + ' ' + person.last_name">-->
<!--              <img v-else src="../../assets/images/cake.svg" :alt="person.first_name + ' ' + person.last_name" class="cake">-->
<!--            </div>-->
            <div class="name">{{ person.face ? "👤" : "🎂" }} {{ person.first_name + ' ' + person.last_name }}</div>
            <div class="controls"><a href="#edit" class="accent dashed" @click.prevent="edit(person)">Edit</a></div>
        </div>
    </div>
</template>
<script>
import { monthName } from '~/composables/useDates';
import { sortPeople } from '~/composables/useSort';

export default {
    name: 'Employees',
    props: {
        items: [],
    },
    computed: {
        sortedPeople() {
            return sortPeople(this.items);
        },
    },
    methods: {
      sortPeople(p) {
        return sortPeople(p)
      },
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
