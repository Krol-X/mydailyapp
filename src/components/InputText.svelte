<script lang="ts">
  import WriteButton from "./WriteButton.svelte";
  import {stories} from "../stores/stories.svelte.js";
  import {RandomID} from "../utils.js";
  import {tick} from "svelte";
  import {elems} from "../stores/elems.svelte.js";

  let value = $state('')

  function saveStory() {
    stories.add({
      id: RandomID(),
      text: value,
      created_at: new Date()
    });
    tick() // todo: Svelte bug
    value = ''
    elems.inputTextArea.focus()
    elems.storiesContainer.scrollTop = elems.storiesContainer.scrollHeight
  }

  function keyPress(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      saveStory()
    }
  }
</script>

<div class="input-field">
  <textarea rows="5" name="text"
            bind:value={value}
            bind:this={elems.inputTextArea}
            onkeypress={keyPress}
  ></textarea>
  <WriteButton onclick={saveStory}/>
</div>

<style>
  .input-field {
    width: 100%;
    border: thin solid var(--bg-border);
    border-radius: 6px;
    padding: 0.5em;
    background: var(--bg-active);

    display: flex;
    gap: 0.5em;
    align-items: end;
  }

  .input-field textarea {
    width: 100%;
    border: none;
    outline: none;
    background: none;
    resize: none;
  }
</style>
