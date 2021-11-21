<script lang="ts">
  import cross from '$lib/houdini/cross';
  import injectCustomProperties from '$lib/util/custom-properties';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/header/Header.svelte';

  import '../scss/global.scss';

  cross();
  injectCustomProperties();
</script>

<Header/>

<main>
  <slot />
</main>

<Footer/>
