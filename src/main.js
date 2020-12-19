import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    songList: [
      { id: 0, title: "Rock Me Amadeus", artist: "Falco", isInPlayList: false },
      {
        id: 1,
        title: "Ashes of Love (feat. Caroline Polachek)",
        artist: "Danny L Harle",
        isInPlayList: false,
      },
      {
        id: 2,
        title: "Mirrors",
        artist: "Justin Timberlake",
        isInPlayList: false,
      },
      {
        id: 3,
        title: "Tell It to My Heart",
        artist: "Taylor Dayne",
        isInPlayList: false,
      },
      { id: 4, title: "Radioactive", artist: "MARINA", isInPlayList: false },
      {
        id: 5,
        title: "There's a Thug In My Life",
        artist: "Rihanna",
        isInPlayList: false,
      },
      {
        id: 6,
        title: "Be With You",
        artist: "Enrique Iglesias",
        isInPlayList: false,
      },
      {
        id: 7,
        title: "You Spin Me Round (Like a Record)",
        artist: "Dead or Alive",
        isInPlayList: false,
      },
    ],

    newSong: {},
  },

  getters: {
    getSongs(state) {
      return state.songList.filter((song) => song.isInPlayList == false);
    },

    getPlaylist(state) {
      return state.songList.filter((song) => song.isInPlayList == true);
    },
  },

  mutations: {
    ADD_SONG(state, payload) {
      var newSong = {
        id: state.songList.length,
        title: payload.title,
        artist: payload.artist,
        isInPlayList: false,
      };

      state.songList.unshift(newSong);
    },

    TOGGLE_PLAYLIST(state, aSongId) {
      var song = state.songList.find((song) => song.id == aSongId);
      song.isInPlayList = !song.isInPlayList;
    },
  },

  actions: {
    addSong(context, payload) {
      context.commit("ADD_SONG", payload);
    },

    togglePlaylist(context, payload) {
      context.commit("TOGGLE_PLAYLIST", payload);
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
