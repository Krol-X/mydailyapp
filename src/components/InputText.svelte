<script>
  import WriteButton from "./WriteButton.svelte";
</script>

<div class="input-field">
  <textarea rows="5" name="text"></textarea>
  <WriteButton />
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
