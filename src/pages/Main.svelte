<script lang="ts">
  import Layout from "../lib/Layout.svelte";
  import Time from "../lib/Time.svelte";
  import ThemeButton from "../components/ThemeButton.svelte";
  import RefreshButton from "../components/RefreshButton.svelte";
  import InputText from "../components/InputText.svelte";
  import Message from "../components/Message.svelte";

  const textMessage: Message = {
    text: "Test message 12312312312312320324903249032490 23904329049803249 032490324903249032490",
    created_at: new Date()
  }
</script>

<Layout>
  {#snippet header()}
    <ThemeButton/>
    <div class="time">
      <Time/>
    </div>
    <RefreshButton/>
  {/snippet}

  {#snippet content()}
    <Message data={textMessage}/>
  {/snippet}

  {#snippet footer()}
    <InputText/>
  {/snippet}
</Layout>

<style>
  .time {
    display: flex;
    align-items: center;
    font-size: 1.5em;
  }
</style>
