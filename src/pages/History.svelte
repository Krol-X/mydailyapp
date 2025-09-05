<script>
  import {AppRoute} from "../routes";
  import IconButton from "../lib/IconButton.svelte";
  import Layout from "../lib/Layout.svelte";
  import CrossIcon from '../assets/icons/cross.svg?raw'
</script>

<Layout>
  {#snippet header()}
    <IconButton target={AppRoute.Main} icon={CrossIcon}/>
  {/snippet}

  {#snippet content()}
    История
  {/snippet}
</Layout>
