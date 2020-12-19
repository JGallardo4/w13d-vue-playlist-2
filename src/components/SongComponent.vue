<template>
  <li class="song">
    <h1 class="song__title">{{ songInfo.title }}</h1>
    <h1 class="song__artist">{{ songInfo.artist }}</h1>
    <button class="song__button" v-on:click="togglePlaylist(songInfo.id)">
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  name: "song-component",

  props: {
    songInfo: {
      type: Object,
    },
  },

  methods: {
    togglePlaylist(aSong) {
      this.$store.dispatch("togglePlaylist", aSong);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  .song__title {
    grid-column: 1;
    grid-row: 1;
  }
  .song__artist {
    grid-column: 1;
    grid-row: 2;
  }
  .song__button {
    grid-column: 2;
    grid-row: 1 / 3;
    place-self: center;
  }
}
</style>
