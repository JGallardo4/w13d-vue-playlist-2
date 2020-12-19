<template>
  <section id="play-list">
    <header id="play-list__header">
      <h1>My Playlist</h1>
    </header>
    <ol id="play-list__container">
      <song-component
        v-for="(song, index) in songs"
        :key="index"
        :songInfo="song"
        :buttonAction="() => $emit('remove-from-playlist', index)"
        class="song"
      >
        <i class="fa fa-minus" aria-hidden="true"></i>
      </song-component>
    </ol>
  </section>
</template>

<script>
import SongComponent from "./SongComponent.vue";

export default {
  name: "play-list",

  props: {
    songs: {
      type: Array,
    },
  },

  components: {
    SongComponent,
  },
};
</script>

<style></style>
