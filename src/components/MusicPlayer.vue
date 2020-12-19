<template>
  <div id="music-player">
    <available-songs
      id="available-songs"
      class="song-list"
      :songs="songsAvailable"
      v-on:add-to-playlist="addToPlaylist($event)"
      v-on:add-new-song="addNewSong($event)"
    >
    </available-songs>

    <play-list
      id="play-list"
      class="song-list"
      :songs="playList"
      v-on:remove-from-playlist="removeFromPlaylist($event)"
    >
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

  methods: {
    addToPlaylist(aId) {
      this.playList.push(this.songsAvailable[aId]);
      this.songsAvailable.splice(aId, 1);
    },

    removeFromPlaylist(aId) {
      this.songsAvailable.push(this.playList[aId]);
      this.playList.splice(aId, 1);
    },

    addNewSong(aSong) {
      console.log(aSong);
      this.songsAvailable.push(aSong);
    },
  },

  data: function() {
    return {
      songsAvailable: [
        { title: "Rock Me Amadeus", artist: "Falco" },
        {
          title: "Ashes of Love (feat. Caroline Polachek)",
          artist: "Danny L Harle",
        },
        { title: "Mirrors", artist: "Justin Timberlake" },
        { title: "Tell It to My Heart", artist: "Taylor Dayne" },
        { title: "Radioactive", artist: "MARINA" },
        { title: "There's a Thug In My Life", artist: "Rihanna" },
        { title: "Be With You", artist: "Enrique Iglesias" },
        { title: "You Spin Me Round (Like a Record)", artist: "Dead or Alive" },
      ],

      playList: [],
    };
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
