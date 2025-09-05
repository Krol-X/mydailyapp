<script lang="ts">

  import type {Message} from "../types";
  import {formatDate} from "../utils";

  interface Props {
    data: Message;
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
