<template>
  <q-page class="q-px-md q-pt-lg">
    <div class="page-heading text-white q-pa-md">
      <div class="heading-caption">
        <h6>Dashboard</h6>
        <br />
        <p>Here are some of the recent activities in your shop.</p>
      </div>
      <div class="heading-stat-1 text-caption">
        Accounts
        <br />
        <p class="text-subtitle2">
          %% Customers
          <br />%% Resellers
        </p>
      </div>
      <div class="heading-stat-2 text-caption">
        Products
        <br />
        <p class="text-subtitle2">%% / %%</p>
      </div>
      <div class="heading-stat-3 text-caption">
        Orders this Month
        <p class="text-subtitle2">
          %% Accepted
          <br />%% Placed
        </p>
      </div>
    </div>
    <div class="page-contents text-white q-pa-md">
      <div class="content-1">
        <div class="text-subtitle2 flex flex-center">
          <q-icon name="account_circle" class="caption-icon q-mx-md" />Resellers for Approval
        </div>
        <div></div>
        <div class="flex flex-center">
          <a class="text-white" href="#">see all</a>
        </div>
      </div>
      <div class="content-2">
        <div class="text-subtitle2 flex flex-center">
          <q-icon name="cake" class="caption-icon q-mx-md" />Products Statistics
        </div>
        <div></div>
        <div class="flex flex-center">
          <a class="text-white" href="#">see all</a>
        </div>
      </div>
      <div class="content-3">
        <div class="text-subtitle2 flex flex-center">
          <q-icon name="fireplace" class="caption-icon q-mx-md" />Orders Statistics
        </div>
        <div></div>
        <div class="flex flex-center">
          <a class="text-white" href="#">see all</a>
        </div>
      </div>
      <div class="content-4">
        <div class="text-subtitle2 flex flex-center">
          <q-icon name="comment" class="caption-icon q-mx-md" />Recent Comments
        </div>
        <div></div>
        <div class="flex flex-center">
          <a class="text-white" href="#">see all</a>
        </div>
      </div>
      <div class="content-5">
        <div class="text-subtitle2 flex flex-center">
          <q-icon name="calendar_today" class="caption-icon q-mx-md" />Business Holidays
        </div>
        <div></div>
        <div class="flex flex-center">
          <a class="text-white" href="#">see all</a>
        </div>
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
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "heading-caption heading-stat-1 heading-stat-2 heading-stat-3";
  grid-column-gap: 1rem;
}
.page-contents {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "content-1 content-2 content-3"
    "content-4 content-4 content-5";
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
}
.heading-caption {
  grid-area: heading-caption;
}
.heading-stat-1 {
  grid-area: heading-stat-1;
}
.heading-stat-2 {
  grid-area: heading-stat-2;
}
.heading-stat-3 {
  grid-area: heading-stat-3;
}
div[class*="content-"] {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  display: flex;
  flex-direction: column;
}
div[class*="content-"] div {
  min-height: 4em;
  justify-content: left;
  margin: 1px 0;
  background: rgba(128, 128, 128, 0.85);
  width: 100%;
}

div[class*="content-"] div:nth-child(3) {
  min-height: 2em;
}
div[class*="content-"] div:nth-child(3) a {
  width: 100%;
  text-align: center;
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
.content-5 {
  grid-area: content-5;
}
.caption-icon {
  font-size: 2.5rem;
  display: inline-flex;
}
@media (max-width: 1140px) {
  .page-contents {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "content-1 content-2"
      "content-3 content-3"
      "content-4 content-4"
      "content-5 content-5";
  }
  .page-heading {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}
@media (max-width: 850px) {
  .page-contents {
    grid-template-columns: 1fr;
    grid-template-areas:
      "content-1"
      "content-2"
      "content-3"
      "content-4"
      "content-5";
  }
  .page-heading {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 580px) {
  .page-heading {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "heading-caption heading-caption heading-caption"
      "heading-stat-1 heading-stat-2 heading-stat-3";
  }
}
</style>
<script>
export default {
  name: "DashboardIndex"
};
</script>
