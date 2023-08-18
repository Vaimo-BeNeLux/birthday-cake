<template>
    <div class="generator">
        <form onsubmit="handleSubmit">
            <select class="dropdown">
                <option v-for="option in dropdownOptions" :value="option.photo_link" :key="option.id">{{ option.name }}</option>
            </select>
            <button type="submit">Generate</button>
        </form>
    </div>
  </template>
  
  <script>
  import Dropdown from "./Dropdown.vue";
  
  export default {
    components: {
      Dropdown,
    },
    data() {
      return {
        dropdownOptions: [
          {
            id: 1,
            name: "Martine Boulanger",
            dob: "1982-08-12 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U022X6CCHCG-30a86c6b26f8-512",
          },
          {
            id: 2,
            name: "Kostiantyn Smokvina",
            dob: "1995-11-10 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U03KE69T28L-cb6f298547e3-192",
          },
          {
            id: 3,
            name: "Nickolas Matiychenko",
            dob: "1980-18-10 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-UCF4LUFCH-352497bed10e-512",
          },
          {
            id: 4,
            name: "Dmytro Makukh",
            dob: "1990-18-02 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U02C3U6P946-11911193cf95-512",
          },
          {
            id: 5,
            name: "Olha Bobkova",
            dob: "1985-05-31 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U02P2FLBRPX-eef25eeaa45e-512",
          },
          {
            id: 6,
            name: "Tomas Gudmundsson",
            dob: "1985-05-10 23:59:599",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U032HTJTQSD-f332ba6232b9-192",
          },
          {
            id: 7,
            name: "Raf Maesen",
            dob: "1975-05-17 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-URWSME3CH-5a77b883d6b8-512",
          },
          {
            id: 8,
            name: "Sofie Daniëls",
            dob: "1980-11-10 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-UCE3342BZ-8af214230f7b-512",
          },
          {
            id: 9,
            name: "Georgia Hobbs",
            dob: "2000-12-12 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U05ND2XAGF2-734d866c55b5-512",
          },
          {
            id: 10,
            name: "Oleksandra Romashova",
            dob: "1999-05-22 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U058M72DHKQ-e99793c2a189-512",
          },
          {
            id: 11,
            name: "Rekha Periasamy",
            dob: "1996-02-11 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U0496V421NG-5e9d06569c5c-512",
          },
          {
            id: 12,
            name: "David Holender",
            dob: "1997-09-03 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-UCDFNNYQP-6464b982e140-512",
          },
          {
            id: 13,
            name: "Sergey Morin",
            dob: "1998-09-03 23:59:59 ",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-UFX4MULTC-e7ce7aee1813-512",
          },
          {
            id: 14,
            name: "Mart Mäe",
            dob: "1979-05-13 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U02LECC2E4Q-c106dd5e6d49-512",
          },
          {
            id: 15,
            name: "Stanli Volmerson",
            dob: "1989-06-25 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U01V6V6BS0N-b9808fbe6f06-512",
          },
          {
            id: 16,
            name: "Brendan Peo",
            dob: "1980-10-23 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-UCDN6TN5V-bf457760b9df-512",
          },
          {
            id: 17,
            name: "Chantelle Herbst",
            dob: "1987-03-23 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-UDVH07HGT-4a9f0a672c5b-512",
          },
          {
            id: 18,
            name: "Robin Carlsson",
            dob: "1970-07-29 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-UCDQN6CAE-f6a1b6bd484f-512",
          },
          {
            id: 19,
            name: "Marko Rytkönen",
            dob: "1987-04-26 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-UCDV0ARL3-fd3092833886-512",
          },
          {
            id: 20,
            name: "Adarsh Manickam",
            dob: "1987-07-15 23:59:59",
            photo_link:
              "https://ca.slack-edge.com/TC4562M3J-U02BZQ1FVAT-49cad37c1950-512",
          },
        ],
        selectedValue: "",
      };
    },
    methods: {
        handleSubmit() {}
    },
  };
  </script>
<style>
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