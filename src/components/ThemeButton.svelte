<script>
  import IconButton from "../lib/IconButton.svelte";
  import {theme} from "../stores/theme.svelte.js";
  import SunIcon from "../assets/icons/sun.svg?raw";
  import MoonIcon from "../assets/icons/moon.svg?raw";

  let icon = $derived(theme.current === 'light' ? SunIcon : MoonIcon);
</script>

<IconButton {icon} onclick={() => theme.switch()}/>
