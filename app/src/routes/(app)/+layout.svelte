<script lang="ts">
  import { onMount } from "svelte";
  import "../../app.postcss";
  import { initFlowbite } from "flowbite";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import { page } from "$app/stores";
  import Analytics from "$lib/components/Analytics.svelte";
  import { browser } from "$app/environment";
  import Progressbar from "$lib/components/Progressbar.svelte";

  onMount(() => {
    initFlowbite();
  });
</script>

<Analytics />
<!-- <Progressbar /> -->
{#if !browser}
  <div class="dark" />
{:else}
  <div>
    <Header />
    <PageTransition pathname={$page.url.pathname}>
      <main>
        <slot />
        <!-- <PageTransition url={$page.url}></PageTransition> -->
      </main>
    </PageTransition>
    <Footer />
  </div>
{/if}
