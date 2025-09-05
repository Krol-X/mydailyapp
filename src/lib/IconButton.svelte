<script lang="ts">
  import {routes, type AppRoute} from "../routes";
  import {page} from "../stores/page.svelte";
  import type {OnClick} from "../types";

  interface Props {
    target?: AppRoute;
    icon?: string,
    onclick?: OnClick;
  }

  let {target, icon, onclick = undefined}: Props = $props();

  let targetRoute = target ? routes[target] : null;

  let Icon = $derived(icon ?? targetRoute?.icon ?? '');
  let click: OnClick = onclick ?? (() => !!target && page.goto(target!))
</script>

<button onclick={click}>
  {@html Icon}
</button>

<style>
</style>
