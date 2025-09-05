<script lang="ts">
  import {page} from "../stores/page.svelte";
  import type {Snippet} from "svelte";
  import {type AppRoute, routes} from "../routes";
  import type {OnClick} from "../types";

  interface Props {
    children: Snippet;
    target?: AppRoute;
    onclick?: OnClick;
  }

  let {
    children,
    target,
    onclick = undefined
  }: Props = $props();

  let click: OnClick = onclick ?? (() => !!target && page.goto(target!))
</script>

<button onclick={click}>
  {@render children?.()}
</button>
