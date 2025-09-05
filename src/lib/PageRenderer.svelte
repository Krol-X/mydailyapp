<script lang="ts">
  import {page} from "../stores/page.svelte.js";
  import {AppRoute, routes} from "../routes.js";
  import type {Component} from "svelte";

  let currentPage: AppRoute = $derived(page.current);
  let Page: Component = $derived(routes[currentPage].component);
</script>

<Page/>
