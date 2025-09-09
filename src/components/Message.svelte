<script lang="ts">
  import {formatDate} from "../utils";
  import type {Story} from "../stores/stories.svelte";

  interface Props {
    data: Story;
  }

  let {data} = $props();
</script>

<div class="message">
  <div class="timestamp">{formatDate(data.created_at)}</div>
  <div class="text">{data.text}</div>
</div>

<style>
  .message {
    width: 100%;
    border: thin solid var(--bg-border);
    border-radius: 6px;
    padding: 0.5em;
    background: var(--bg-inactive);
  }

  .timestamp {
    text-align: right;
    margin-bottom: 4px;
  }

  .text {
    width: 100%;
    font-weight: 300;
    overflow-wrap: break-word;
  }
</style>
