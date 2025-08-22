<script lang="ts">
    import { fade } from "svelte/transition";

    // export let url: URL;

    export let pathname: string
</script>

{#key pathname}
    <div class="transition" in:fade>
        <slot />
    </div> 
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
