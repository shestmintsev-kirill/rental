<template>
  <main class="section-inner section-rental">
    <div v-for="rental in filteredRentals" :key="rental.id" class="rental-item">
      <div class="rental-item-promo">
        <router-link :to="`/details/${rental.id}`">
          <img
            class="rental-item-promo-image"
            src="@/assets/Bitmap.png"
            alt="rental-promo"
          />
        </router-link>
        <div
          class="rental-item-promo-type"
          :class="[confirmType(rental.type) ? 'independent' : 'available']"
        >
          <p>
            {{
              confirmType(rental.type)
                ? "Independent living"
                : "Restaurant & Support available"
            }}
          </p>
        </div>
      </div>
      <div class="margin-card">
        <div class="rental-item-subtitle margin-text">
          <p class="card-text subtitle">{{ rental.title }}</p>
          <p class="card-text address">{{ rental.address }}</p>
        </div>
        <div class="rental-item-price margin-text">
          <p class="card-text">
            New Properties for Sale from
            <span class="price">£{{ rental.price }}</span>
          </p>
          <p class="card-text shared">Shared Ownership Available</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "RentalCard",

  props: {
    filteredRentals: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    confirmType(type) {
      if (type === "IndependentLiving") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

* {
  @include font-sans;
}

.rental-item {
  border: 1px solid #d8d8d8;
  background: #f8f8f8;
  min-width: 377px;
  max-width: 378px;
  flex: 1 1 calc(100% / 3);
  margin-bottom: 40px;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: $screen-sm) {
    min-width: 340px;
  }

  &:hover {
    box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.3);
  }

  &-promo {
    position: relative;
    height: 225px;

    &-image {
      width: 100%;
      height: 100%;
    }

    &-type {
      color: #ffffff;
      position: absolute;
      bottom: 0;
      right: 0;
      width: auto;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      font-weight: bold;
      font-size: 12px;
    }

    .available {
      background: #ec6608;
    }

    .independent {
      background: #006f79;
    }
  }

  &-subtitle {
    .subtitle {
      font-weight: bold;
      font-size: 20px;
      color: #363636;
    }

    .card-text + .card-text {
      margin-top: 5px;
    }

    .address {
      font-size: 16px;
      color: #363636;
    }
  }

  &-price {
    .card-text + .card-text {
      margin-top: 10px;
    }

    .price {
      font-weight: bold;
    }

    .shared {
      font-size: 14px;
    }
  }
}

.margin-card {
  margin-left: 20px;
}

.margin-text {
  margin: 15px 0;
  color: #363636;
}
</style>
