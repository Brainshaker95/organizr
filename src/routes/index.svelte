<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h1 class="text-primary">
    Test h1 - Lorem ipsum dolor, sit amet consectetur.
  </h1>

  <h2 class="text-primary">
    Test h2 - Lorem ipsum dolor, sit amet consectetur.
  </h2>

  <h3 class="text-primary">
    Test h3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit inventore.
  </h3>

  <h4 class="text-primary">
    Test h4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit inventore consequuntur in corrupti.
  </h4>

  <h5 class="text-primary">
    Test h5 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore consequuntur in corrupti.
  </h5>

  <h6 class="text-primary">
    Test h6 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore consequuntur in corrupti impedit.
  </h6>

  <div class="py-8"></div>

  <h1 class="text-secondary font-body">
    Test h1 - Lorem ipsum dolor, sit amet consectetur.
  </h1>

  <h2 class="text-secondary font-body">
    Test h2 - Lorem ipsum dolor, sit amet consectetur.
  </h2>

  <h3 class="text-secondary font-body">
    Test h3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit inventore.
  </h3>

  <h4 class="text-secondary font-body">
    Test h4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit inventore consequuntur in corrupti.
  </h4>

  <h5 class="text-secondary font-body">
    Test h5 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore consequuntur in corrupti.
  </h5>

  <h6 class="text-secondary font-body">
    Test h6 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore consequuntur in corrupti impedit.
  </h6>

  <div class="py-8"></div>

  <div class="font-extralight">Lorem ipsum dolor sit amet.</div>
  <div class="font-light">Lorem ipsum dolor sit amet.</div>
  <div class="font-regular">Lorem ipsum dolor sit amet.</div>
  <div class="font-medium">Lorem ipsum dolor sit amet.</div>
  <div class="font-semibold">Lorem ipsum dolor sit amet.</div>
  <div class="font-bold">Lorem ipsum dolor sit amet.</div>
  <div class="font-extrabold">Lorem ipsum dolor sit amet.</div>

  <div class="py-8"></div>

  <div class="font-head font-extralight">Lorem ipsum dolor sit amet.</div>
  <div class="font-head font-light">Lorem ipsum dolor sit amet.</div>
  <div class="font-head font-regular">Lorem ipsum dolor sit amet.</div>
  <div class="font-head font-semibold">Lorem ipsum dolor sit amet.</div>
  <div class="font-head font-bold">Lorem ipsum dolor sit amet.</div>
  <div class="font-head font-black">Lorem ipsum dolor sit amet.</div>

  <div class="py-8"></div>

  <button class="houdini"></button>
</section>

<style lang="scss">
  @supports (background: paint(x)) {
    .houdini {
      --cross-color: rebeccapurple;
      --cross-width: 3;

      width: 2rem;
      height: 2rem;
      background: paint(cross);
      transition: --cross-color 400ms ease;

      &:hover {
        --cross-color: red;
      }
    }
  }
</style>
