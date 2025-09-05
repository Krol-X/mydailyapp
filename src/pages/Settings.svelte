<script>
  import {AppRoute} from "../routes";
  import IconButton from "../lib/IconButton.svelte";
  import Layout from "../lib/Layout.svelte";
  import CrossIcon from '../assets/icons/cross.svg?raw'
  import TextButton from "../lib/TextButton.svelte";
  import {theme} from "../stores/theme.svelte.js";

  function switchTheme() {
    theme.switch()
  }
</script>

<Layout>
  {#snippet header()}
    <IconButton target={AppRoute.Main} icon={CrossIcon}/>
  {/snippet}

  {#snippet content()}
    <TextButton onclick={switchTheme}>Сменить тему</TextButton>
  {/snippet}
</Layout>
