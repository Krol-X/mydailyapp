<script lang="ts">
  import Layout from "../lib/Layout.svelte";
  import Time from "../lib/Time.svelte";
  import ThemeButton from "../components/ThemeButton.svelte";
  import RefreshButton from "../components/RefreshButton.svelte";
  import InputText from "../components/InputText.svelte";
  import Message from "../components/Message.svelte";
  import {stories} from "../stores/stories.svelte";
  import {elems} from "../stores/elems.svelte";
</script>

<Layout>
  {#snippet header()}
    <div class="header">
      <ThemeButton/>
      <div class="time">
        <Time/>
      </div>
      <RefreshButton/>
    </div>
  {/snippet}

  {#snippet content()}
    <div class="stories" bind:this={elems.storiesContainer}>
      {#each stories.collection as story(story.id)}
        <Message data={story}/>
      {/each}
    </div>
  {/snippet}

  {#snippet footer()}
    <div class="input-area">
      <InputText />
    </div>
  {/snippet}
</Layout>

<style>
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .stories {
    width: 100%;
    flex-grow: 1;
    max-height: calc(100vh - 14rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    gap: 0.5rem;
  }

  .input-area {
    width: 100%;
  }

  .time {
    display: flex;
    align-items: center;
    font-size: 1.5em;
  }
</style>
