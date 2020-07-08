<template>
  <div id="app">
    <scrollactive
      class="my-nav"
      style="position: fixed"
      v-on:itemchanged="handleEvent"
    >
      <a href="#Home" class="scrollactive-item">Home</a>
      <a href="#About-us" class="scrollactive-item">About Us</a>
      <a href="#portfolio" class="scrollactive-item">Portfolio</a>
      <a href="#contact" class="scrollactive-item">Contact</a>
    </scrollactive>
    <div id="Home">
      <br /><br />
      <HelloWorld />
      <HelloWorld />
    </div>
    <div id="About-us">
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
      About<br />
    </div>
    <div id="portfolio">
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
      Porto<br />
    </div>
    <div id="contact">
      Contact
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  methods: {
    /*
    handleEvent(event, currentItem, lastActiveItem) {
      currentItem

      console.log(currentItem);
      console.log(lastActiveItem);
    },
    */
  },
  components: { HelloWorld },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.scrollactive-item {
  background-color: none;
}

.is-active {
  background-color: red;
}
</style>
