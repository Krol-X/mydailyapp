<script lang="ts">
  import IconButton from "../lib/IconButton.svelte";
  import PenIcon from "../assets/icons/pen.svg?raw";
  import type {OnClick} from "../types";

  interface Props {
    onclick?: OnClick;
  }

  let { onclick } : Props = $props()
</script>

<IconButton icon={PenIcon} {onclick} />
