<script lang="ts">
  import type {Snippet} from "svelte";

  interface Props {
    header?: Snippet;
    content?: Snippet;
    footer?: Snippet;
  };

  let {header, content, footer}: Props = $props()
</script>

<div class="container">
  <header>{@render header?.()}</header>
  <main>{@render content?.()}</main>
  <footer>{@render footer?.()}</footer>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
  }

  header, footer {
    display: flex;
    justify-content: space-between;
  }

  main {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
  }
</style>
