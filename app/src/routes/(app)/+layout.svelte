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

<svelte:head>
  <!-- Cal element-click embed code begins -->
  <script type="text/javascript">
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "rehearsal", { origin: "https://app.cal.com" });

    // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
    // `data-cal-link="donald-kanti-uylbk2/rehearsal"`
    // data-cal-namespace="rehearsal"
    // `data-cal-config='{"layout":"month_view","theme":"light"}'`

    Cal.ns.rehearsal("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  </script>
  <!-- Cal element-click embed code ends -->
</svelte:head>

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
