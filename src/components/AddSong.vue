<template>
  <form action="">
    <input v-model.trim="newTitle" placeholder="Title" />
    <input v-model.trim="newArtist" placeholder="Artist" />
    <button
      class="add-song__button"
      v-on:click.prevent="
        $emit('add-new-song', { title: newTitle, artist: newArtist })
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
};
</script>

<style></style>
