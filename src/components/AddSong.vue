<template>
  <form action="">
    <input v-model.trim="newTitle" placeholder="Title" />
    <input v-model.trim="newArtist" placeholder="Artist" />
    <button
      class="add-song__button"
      v-on:click.prevent="
        addSong({ id: -1, title: newTitle, artist: newArtist })
      "
    >
      Add New Song
    </button>
  </form>
</template>

<script>
export default {
  name: "add-song",
  data: function() {
    return {
      newTitle: "",

      newArtist: "",
    };
  },
  methods: {
    addSong(aSong) {
      this.$store.dispatch("addSong", aSong);
      this.newTitle = "";
      this.newArtist = "";
    },
  },
};
</script>

<style></style>
