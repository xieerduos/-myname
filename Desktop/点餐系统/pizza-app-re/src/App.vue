<template>
  <div id="app">
  	<div class="container">
		<app-header></app-header>
	</div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    'app-header':Header
  }
}
</script>

<style>

</style>
