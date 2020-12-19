<template>
  <div id="music-player">
    <available-songs
      id="available-songs"
      class="song-list"
      :songs="availableSongs"
      v-on:add-to-playlist="addToPlaylist($event)"
    >
    </available-songs>

    <play-list id="play-list" class="song-list" :songs="playlistSongs">
    </play-list>
  </div>
</template>

<script>
import PlayList from "./PlayList";
import AvailableSongs from "./AvailableSongs.vue";

export default {
  name: "music-player",

  components: {
    PlayList,
    AvailableSongs,
  },

  computed: {
    availableSongs() {
      return this.$store.getters.getSongs;
    },

    playlistSongs() {
      return this.$store.getters.getPlaylist;
    },
  },
};
</script>

<style lang="scss">
// Layout
#music-player {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  .song-list {
    border-style: solid;
    border-width: 2px;
    border-color: white;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    gap: 1rem;
  }

  #available-songs {
    grid-column: 1;
  }

  #play-list {
    grid-column: 2;
  }
}

.song-list {
  text-align: left;
}
</style>
