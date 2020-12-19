<template>
  <main id="app">
    <music-player></music-player>
  </main>
</template>

<script>
import MusicPlayer from "./components/MusicPlayer.vue";

export default {
  name: "App",
  components: {
    MusicPlayer,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

// Style
$bg: #071b22;
$secondary-text: #a3d3fa;
$dark-shadow: #000000;
$light-shadow: #0b2b36;

@mixin n-button {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: large;
  border: none;
  outline: none;
  background-color: $bg;
  color: $secondary-text;
  box-shadow: 7px 7px 14px $dark-shadow, -7px -7px 14px $light-shadow;
}

@mixin n-button-pressed {
  box-shadow: inset 5px 5px 3px $dark-shadow, inset -5px -5px 3px $light-shadow;
}

body {
  background-color: $bg;
  color: white;
  padding: 1rem;

  #music-player {
    padding: 1rem;
  }
}

.song {
  .song__button {
    display: none;
  }

  &:hover {
    .song__button {
      display: block;
    }
  }
  .song__button {
    cursor: pointer;
    @include n-button;

    &:hover {
      color: white;
    }

    &:active {
      @include n-button-pressed;
    }
  }
}

// fonts
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400&display=swap");

body {
  font-family: "Space Grotesk", sans-serif;

  header {
    font-weight: bold;
  }

  .song__title {
    font-size: 1.5rem;
  }

  .song__artist {
    font-size: 1rem;
    font-weight: 400;
    color: $secondary-text;
  }
}
</style>
