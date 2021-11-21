<script lang="ts">
  import { page } from '$app/stores';

  export let items: {
    name: string,
    path: string,
  }[];
</script>

<nav>
  <ul class="flex">
    {#each items as item}
      <li>
        <a
          sveltekit:prefetch href="{item.path}"
          class:active="{$page.path === item.path}"
          class="relative block p-4 before:bg-dark dark:before:bg-light"
        >
          {item.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  a {
    &::before {
      @apply
        absolute
        bottom-0
        left-0
        w-full
        h-1
        origin-left
        scale-x-0
        transition-transform
        duration-300
      ;
    }

    &:hover,
    &.active {
      &::before {
        @apply scale-x-100;
      }
    }
  }
</style>
