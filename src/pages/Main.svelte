<script>
  import {AppRoute} from "../routes";
  import IconButton from "../lib/IconButton.svelte";
  import Layout from "../lib/Layout.svelte";
  import PenIcon from '../assets/icons/pen.svg?raw';
  import Time from "../lib/Time.svelte";
</script>

<Layout>
  {#snippet header()}
    <IconButton target={AppRoute.Statistic}/>
    <IconButton target={AppRoute.History}/>
  {/snippet}

  {#snippet content()}
    <div class="time"><Time /></div>
    <div class="title">Что продвинет тебя к цели?</div>
    <IconButton icon={PenIcon}/>
  {/snippet}

  {#snippet footer()}
    <IconButton target={AppRoute.Checklists}/>
    <IconButton target={AppRoute.Settings}/>
  {/snippet}
</Layout>

<style>
  .time {
    font-size: 3em;
  }
  .title {
    font-size: 1.1em;
  }
</style>
