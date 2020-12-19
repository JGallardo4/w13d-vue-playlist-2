<template>
  <section id="song-list">
    <header id="song-list__header">
      <h1>Available Songs</h1>
    </header>
    <add-song></add-song>
    <ol id="song-list__container">
      <song-component
        v-for="(song, index) in songs"
        :key="index"
        :songInfo="song"
        class="song"
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
      </song-component>
    </ol>
  </section>
</template>

<script>
import AddSong from "./AddSong.vue";
import SongComponent from "./SongComponent.vue";

export default {
  name: "available-songs",

  props: {
    songs: {
      type: Array,
    },
  },

  components: {
    SongComponent,
    AddSong,
  },
  methods: {
    addNewSong(aSong) {
      this.$store.dispatch("addSong", aSong);
    },
  },
};
</script>

<style lang="scss" scoped></style>
