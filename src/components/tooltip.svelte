<script lang="ts">
    import { flip } from "@floating-ui/dom";
    import { shift } from "@floating-ui/dom";
    import { autoUpdate } from "@floating-ui/dom";
    import { autoPlacement } from "@floating-ui/dom";
    import { offset } from "@floating-ui/dom";
    import { computePosition } from "@floating-ui/dom";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    const x = writable(0);
    const y = writable(0);
    const initialized = writable(false);

    let content: HTMLSpanElement;
    let tooltip: HTMLSpanElement;

    function compute() {
        autoUpdate(content, tooltip, () => {
            computePosition(content, tooltip, {
                placement: "top",
                middleware: [
                    flip(),
                    shift({ padding: 6 }),
                    offset(6),
                    autoPlacement(),
                ],
            }).then(({ x, y, placement }) => {
                console.log("done computing");
                $x = x;
                $y = y;
                $initialized = true;
            });
        });
    }

    onMount(() => {
        compute();
    });

    export let tip: string;
</script>

<span class="content" bind:this={content}>
    <slot />
</span>

<span class="tooltip" bind:this={tooltip} style="--x: {$x}px; --y: {$y}px;">
    {tip}
</span>

<style>
    .content {
        display: inline-block;
        text-underline-offset: 6px;
        text-decoration: dashed underline;
        cursor: help;
    }

    .tooltip {
        width: max-content;
        position: fixed;
        top: var(--y, 0);
        left: var(--x, 0);
        background: #222;
        color: white;
        font-weight: bold;
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        font-size: 90%;
        opacity: 0;
        transform: translateY(10%);
        transition: 325ms;
    }

    .content:hover + .tooltip {
        opacity: 1;
        transform: translateY(0);
    }
</style>
