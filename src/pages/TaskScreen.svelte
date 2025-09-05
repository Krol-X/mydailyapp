<script>
  import {AppRoute} from "../routes";
  import IconButton from "../lib/IconButton.svelte";
  import Layout from "../lib/Layout.svelte";
  import CrossIcon from "../assets/icons/cross.svg";
  import PlayIcon from "../assets/icons/play.svg";
</script>

<Layout>
  {#snippet header()}
    <IconButton target={AppRoute.Main} icon={CrossIcon}/>
    <IconButton icon={PlayIcon}/>
  {/snippet}

  {#snippet content()}
    Задача
  {/snippet}
</Layout>

<style>
</style>