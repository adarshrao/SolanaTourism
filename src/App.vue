<script>
import {marked} from 'marked'
import Introduction from './components/Introduction.vue'

export default {
  name: 'App',
 data() {
  return {
    count: 0
  }
 },
  components : { 
    Introduction
  },
  methods : {
    increment() {
      this.count += 1;
    }
  }

}

</script>

<template>

<div class="">

  <Introduction />


</div>

</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
