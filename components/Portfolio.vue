<template>
  <div :key="componentKey">
    <div v-if="loading" class="portfolio">
      <div
        v-for="n in 6"
        :key="n"
        class="skeleton__item d-flex rounded embed-responsive embed-responsive-4by3"
      ></div>
    </div>
    <div v-else class="portfolio">
      <div
        v-for="(item, index) in projects"
        :key="index"
        v-lazy:background-image="item.covers.max_808"
        class="portfolio__item d-flex rounded embed-responsive embed-responsive-4by3"
      >
        <!-- :style="{ backgroundImage: `url('${item.covers.max_808}')` }" -->
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
  </div>
</template>
<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      loading: true,
      componentKey: 0,
      projects: []
    }
  },
  computed: {
    bgImg: function() {
      return ''
    }
  },
  mounted() {},
  created() {
    this.fetchData()
  },

  methods: {
    empty(e) {
      switch (e) {
        case '':
        case 0:
        case '0':
        case null:
        case false:
        case typeof this == 'undefined':
          return true
        default:
          return false
      }
    },
    iDBHandler() {
      this.iDBCreateNew()
      var this_ = this
      var request = self.indexedDB.open('portfolio')
      request.onsuccess = function() {
        var db = request.result
        var tx = db.transaction('projects', 'readonly')
        var store = tx.objectStore('projects')
        //var index = store.index('by_id')
        //var request2 = index.get('123456789')

        store.getAll().onsuccess = function(event) {
          var matching = event.target.result

          console.log('LOG', !this_.empty(matching))
          //this_.fetchData()

          if (!this_.empty(matching)) {
            this.projects = matching
            //this_.$forceUpdate()
            console.log('BBB', this.projects)
          } else {
            //console.log('Fetchdata')
            //this_.fetchData()
          }
        }
      }
    },
    iDBCreateNew() {
      var request = self.indexedDB.open('portfolio')
      request.onupgradeneeded = function() {
        var db = request.result
        var store = db.createObjectStore('projects', { keyPath: 'id' })
        store.createIndex('by_id', 'id', { unique: true })
      }
    },
    iDBAdd() {
      var this_ = this
      var request = self.indexedDB.open('portfolio')
      request.onsuccess = function() {
        var db = request.result
        var tx = db.transaction('projects', 'readwrite')
        var store = tx.objectStore('projects')

        this_.projects.forEach(project => {
          store.add(project)
        })
      }
    },

    async fetchData() {
      await this.$axios
        .get('https://vannguyen-uxui.firebaseapp.com/', { progress: false })
        .then(response => {
          if (response && response.data && response.data.projects) {
            this.projects = response.data.projects
          }
        })

      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.portfolio {
  &__item {
    background: $gray-300;
    background: radial-gradient($gray-100, $gray-400);
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

.skeleton {
  &__item {
    background: $gray-300;
    background: radial-gradient($gray-100, $gray-400);
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}

@supports (display: grid) {
  .portfolio {
    --portfolio-col: 1;
    margin: auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(var(--portfolio-col), 1fr);

    @include media-breakpoint-up(sm) {
      --portfolio-col: 2;
    }

    @include media-breakpoint-up(lg) {
      --portfolio-col: 3;
    }
  }
}
</style>
