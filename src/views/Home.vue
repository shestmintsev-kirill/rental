<template>
  <section class="section-outer">
    <div class="rental-title">
      <h1>Our Latest Developments</h1>
    </div>
    <div class="section-inner rental-filter">
      <label for="filter">Filter</label>
      <input v-model="filter" id="filter" type="text" />
    </div>
    <RentalCard :filteredRentals="filteredRentals" />
    <div class="rental-more">
      <button class="rental-more-btn">
        See more <img src="@/assets/Chevron.png" alt="arrow" />
      </button>
    </div>
  </section>
</template>

<script>
import RentalCard from "../components/RentalCard.vue";

export default {
  components: { RentalCard },

  name: "Home",

  data: () => ({
    rentals: [],
    filter: "",
  }),

  async created() {
    await this.getData();
  },

  computed: {
    filteredRentals() {
      if (this.filter.length > 3) {
        return this.rentals.filter((r) => {
          return (
            r.title.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1
          );
        });
      }
      return this.rentals;
    },
  },

  methods: {
    async getData() {
      const res = await fetch(
        "https://603e38c548171b0017b2ecf7.mockapi.io/homes"
      );
      const data = await res.json();
      this.rentals = [...data];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

* {
  @include font-sans;
}

.section-outer {
  padding: 36px 50px;
}

.section-rental {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 22px;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.rental-title {
  text-align: center;
  color: #45852d;
  margin-bottom: 43px;
  font-weight: bold;
  font-size: 36px;
}

.rental-filter {
  margin-bottom: 45px;
  font-weight: bold;
  font-size: 16px;

  #filter {
    border: 1px solid #d8d8d8;
    width: 420px;
    height: 50px;
    border-radius: 25px;
    margin-left: 10px;
    outline: none;
    padding: 10px;
    transition: 0.3s;

    &:hover {
      background: #f0f0f0;
    }

    @media (max-width: $screen-md) {
      width: 70%;
      height: 40px;
    }
  }
}

.rental-more {
  display: flex;
  justify-content: center;

  &-btn {
    padding: 12px 33px;
    border: 1px solid #d8d8d8;
    border-radius: 25px;
    background: #ffffff;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    color: #363636;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #e6e6e6;
    }

    img[alt="arrow"] {
      margin-left: 10px;
    }
  }
}
</style>
