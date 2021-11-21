<script lang="ts">
  import logo from './logo.svg';
  import Navigation from './Navigation.svelte';
</script>

<header class="sticky top-0 bg-light dark:bg-dark border-b border-dark dark:border-light">
  <div class="flex justify-between items-center large-wrapper">
    <a href="/">
      <img src="{logo}" alt="Organizr" class="h-12">
    </a>

    <Navigation items="{[{
      path: '/',
      name: 'Home',
    }, {
      path: '/about',
      name: 'About',
    }, {
      path: '/todos',
      name: 'Todos',
    }]}"/>
  </div>
</header>
