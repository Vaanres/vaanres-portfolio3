<template>
  <div class="portfolio">
    <div
      v-for="(item, index) in projects"
      :key="index"
      class="portfolio__item d-flex rounded embed-responsive embed-responsive-4by3"
      :style="{ backgroundImage: `url('${item.covers.max_808}')` }"
    >
      <!-- v-lazy:background-image="item.covers.max_808" -->
      <!-- :style="{ backgroundImage: `url('${item.img}')` }" -->
      <a
        target="_blank"
        :href="item.url"
        class="portfolio__item__card d-flex flex-column justify-content-between p-3"
      >
        <div class="d-flex justify-content-center">
          <div class="d-inline-flex rounded-pill py-1 px-3 text-dark bg-dark">
            <small class="text-uppercase text-white"
              >View details on Behance</small
            >
          </div>
        </div>
        <div class="d-flex"></div>

        <div class="d-flex flex-column">
          <h4 class="item__name mb-1 text-white">
            {{ item.name }}
          </h4>
          <small v-if="item.fields"
            ><span class="item__description text-white-50">{{
              item.fields.join(' • ')
            }}</span></small
          >
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [],
      items: [
        {
          name: 'Test1',
          description:
            'Description 123 Description 123 Description 123 Description 123',
          img: 'https://via.placeholder.com/500',
          link: 'https://www.google.com'
        }
      ]
    }
  },
  computed: {
    bgImg: function() {
      return ''
    }
  },
  created() {
    //console.log('store', this.$store.state.portfolio.list)
    if (!this.$store.state.portfolio.list) {
      this.fetchData()
    }
  },
  methods: {
    async fetchData() {
      await this.$axios.get('/api/', { progress: false }).then(response => {
        if (response && response.data && response.data.projects) {
          console.log('Get data successfull')
          this.projects = response.data.projects
          this.$store.commit('portfolio/add', this.projects)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.portfolio {
  &__item {
    background: $gray-300;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &__card {
      cursor: pointer;
      text-decoration: none;
      height: 100%;
      width: 100%;
      background: radial-gradient(
        transparentize($dark, 0.8),
        transparentize($dark, 0)
      );
      transition: all 0.25s ease-in-out;
      --item-content-opacity: 0;
      opacity: var(--item-content-opacity);

      .item {
        &__name,
        &__description {
          transition: all 0.5s ease-in-out;
        }
      }

      &:hover {
        //background: transparentize($color: $dark, $amount: 0.5);
        --item-content-opacity: 1;
      }
    }
  }
}

@supports (display: grid) {
  .portfolio {
    margin: auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(1, 1fr);

    @include media-breakpoint-up(sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
