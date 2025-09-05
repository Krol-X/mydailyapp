<script lang="ts">
  import {routes, type AppRoute} from "../routes";
  import {page} from "../stores/page.svelte";
  import type {OnClick} from "../types";

  interface Props {
    target?: AppRoute;
    icon?: string;
    style?: string;
    onclick?: OnClick;
  }

  let {target, icon, onclick = undefined, style}: Props = $props();

  let targetRoute = target ? routes[target] : null;

  let Icon = $derived(icon ?? targetRoute?.icon ?? '');
  let click: OnClick = onclick ?? (() => !!target && page.goto(target!))
</script>

<button onclick={click} {style}>
  {@html Icon}
</button>
