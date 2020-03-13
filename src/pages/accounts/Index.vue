<template>
  <q-page class="q-px-md q-pt-lg">
    <div class="page-heading text-white q-pa-md">
      <div class="heading-caption">
        <h6>Customer Accounts</h6>
        <br />
        <p>Here are the registered members of your store.</p>
      </div>
    </div>
    <div class="page-contents text-white q-pa-md">
      <div class="content-1">
        <q-select
          outlined
          class="filter-select"
          color="black"
          v-model="customerFilter"
          :options="filter"
          @input="filterChanged"
          dense
          options-dense
        >
          <template v-slot:prepend>
            <q-icon name="person_outline" />
          </template>
        </q-select>
      </div>
      <div class="content-2">
        <q-input
          v-model="search"
          type="search"
          debounce="500"
          color="black"
          @input="searchInput"
          dense
          outlined
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:append>
            <transition name="fade">
              <q-icon
                v-show="search != ''"
                name="close"
                class="cursor-pointer"
                @click="search = ''"
              />
            </transition>
          </template>
        </q-input>
      </div>
      <div class="content-3">
        <q-table
          square
          class="customer-table bg-gray-alpha"
          row-key="id"
          :data="data"
          :columns="columns"
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
          :loading="loading"
          :filter="nameFilter"
          @request="onRequest"
          binary-state-sort
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">{{ props.row.name }}</q-td>
              <q-td key="type" :props="props">{{ props.row.type }}</q-td>
              <q-td key="joined" :props="props">{{ props.row.joined }}</q-td>
              <q-td key="login" :props="props">{{ props.row.login }}</q-td>
              <q-td key="active" :props="props">
                <q-btn-toggle
                  size="sm"
                  readonly
                  v-model="props.row.active"
                  :toggle-color="
                                        statusColor(props.row.active)
                                    "
                  :options="[
                                        { label: 'Active', value: true },
                                        { label: 'Inactive', value: false }
                                    ]"
                />
              </q-td>
              <q-td>
                <q-btn
                  dense
                  flat
                  round
                  icon="build"
                  class="q-mr-sm"
                  :to="'/accounts/edit/' + props.row.id"
                >
                  <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">Configure</q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>
<style lang="scss" scoped>
.page-heading,
.page-contents {
  display: grid;
}
.page-heading {
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: "heading-caption";
  grid-column-gap: 1rem;
}
.heading-caption {
  grid-area: heading-caption;
}
.page-contents {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "content-1 . . content-2"
    "content-3 content-3 content-3 content-3";
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
}
.content-1 {
  grid-area: content-1;
}
.content-2 {
  grid-area: content-2;
}
.content-3 {
  grid-area: content-3;
}
.content-4 {
  grid-area: content-4;
}
</style>
<style lang="scss">
.customer-table th:last-child,
.customer-table td:last-child {
  background: gray;
  position: sticky;
  right: 0;
  z-index: 1;
}
</style>
<script>
export default {
  preFetch({ store, currentRoute }) {},

  name: "AccountsIndex",
  meta() {
    return {
      title: "Customer Accounts"
    };
  },
  created() {
    if (this.$route.query.type) {
      this.filter.forEach(el => {
        if (el.match(new RegExp(this.$route.query.type, "i"))) {
          this.customerFilter = el;
        }
      });
    }
  },
  mounted() {
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    });
  },
  data() {
    return {
      customerList: [],
      search: "",
      searchReq: null,
      customerFilter: "All",
      filter: ["All", "Regular", "Reseller"],
      nameFilter: "",
      loading: false,
      pagination: {
        sortBy: "joined",
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          sortable: true
        },
        {
          name: "type",
          align: "left",
          label: "Type",
          sortable: true
        },
        {
          name: "joined",
          align: "left",
          label: "Joined",
          sortable: true
        },
        {
          name: "login",
          align: "left",
          label: "Last Login",
          sortable: true
        },
        {
          name: "active",
          align: "center",
          label: "Status",
          sortable: true
        },
        {
          name: "action",
          align: "left",
          label: "Action"
        }
      ],
      data: [],
      original: [
        {
          id: 444,
          name: "Frozen Yogurt",
          type: "Reseller",
          joined: "Feb 20, 2020",
          login: "March 1, 2020",
          active: false
        },
        {
          id: 2,
          name: "Eclair",
          type: "Reseller",
          joined: "Feb 20, 2020",
          login: "Feb 28, 2020",
          active: true
        },
        {
          id: 3,
          name: "Oreo",
          type: "Regular",
          joined: "Jan 18, 2020",
          login: "March 12, 2020",
          active: true
        },
        {
          id: 4,
          name: "Jr",
          type: "Regular",
          joined: "Jan 18, 2020",
          login: "March 12, 2020",
          active: true
        },
        {
          id: 5,
          name: "Jr 444",
          type: "Reseller",
          joined: "Jan 18, 2020",
          login: "March 12, 2020",
          active: true
        },
        {
          id: 6,
          name: "Jr 123",
          type: "Regular",
          joined: "Jan 18, 2020",
          login: "March 12, 2020",
          active: true
        },
        {
          id: 7,
          name: "Jr 55555555",
          type: "Regular",
          joined: "Jan 18, 2020",
          login: "March 12, 2020",
          active: false
        }
      ]
    };
  },
  methods: {
    filterChanged(val) {
      if (this.filter.includes(val)) {
        this.$router.push({ query: { type: val } });
      }
    },
    searchInput(val) {
      /** TODO */
      this.$axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => {
          console.log(response);
          this.customerList = response;
        })
        .catch(thrown => {
          console.log(thrown);
        });
    },
    /**TODO */
    onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      console.log(page, rowsPerPage, sortBy, descending);
      const filter = props.filter;

      this.loading = true;

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        this.pagination.rowsNumber = this.getRowsNumberCount(filter);

        // get all rows if "All" (0) is selected
        const fetchCount =
          rowsPerPage === 0 ? this.pagination.rowsNumber : rowsPerPage;

        // calculate starting row of data
        const startRow = (page - 1) * rowsPerPage;

        // fetch data from "server"
        const returnedData = this.fetchFromServer(
          startRow,
          fetchCount,
          filter,
          sortBy,
          descending
        );

        // clear out existing data and add new
        this.data.splice(0, this.data.length, ...returnedData);

        // don't forget to update local pagination object
        this.pagination.page = page;
        this.pagination.rowsPerPage = rowsPerPage;
        this.pagination.sortBy = sortBy;
        this.pagination.descending = descending;

        // ...and turn of loading indicator
        this.loading = false;
      }, 500);
    },

    // emulate ajax call
    fetchFromServer(startRow, count, filter, sortBy, descending) {
      const data = filter
        ? this.original.filter(row => row.name.includes(filter))
        : this.original.slice();

      // handle sortBy
      if (sortBy) {
        const sortFn = () => {
          if (sortBy === "name") {
            if (descending) {
              (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0);
            } else {
              (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
            }
          }
        };
        data.sort(sortFn);
      }

      return data.slice(startRow, startRow + count);
    },

    getRowsNumberCount(filter) {
      if (!filter) {
        return this.original.length;
      }
      let count = 0;
      this.original.forEach(item => {
        if (item.name.includes(filter)) {
          ++count;
        }
      });
      return count;
    },

    statusColor(state) {
      return state ? "primary" : "red-4";
    }
  }
};
</script>
