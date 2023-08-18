<template>
    <div class="employees">
        <div class="employee" v-for="employee in items" :key="employee.id">
            <div class="number">#{{ employee.id }}</div>
            <div class="dob">{{ employee.dob }}</div>
            <div class="name">{{ employee.name }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Employees',
    props: {
        items: []
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
    min-width: 75px;
}
.dob {
    min-width: 100px;
}
</style>