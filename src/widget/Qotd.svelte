<script lang="ts">
  import { Card, Button, Tooltip } from "flowbite-svelte";
  import { page } from "$app/stores";
  import type { Qotd } from "../lib/Interfaces";
  import { MiscManager } from "$lib/MiscManager";

  let qotd: Qotd = $page.data.qotd;

  async function refresh() {
    const mm = new MiscManager()
    qotd=await mm.getQotd();
    
  }
</script>

<div>
  <Card img="/images/qotd.jpg">
    <h5
      class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
    >
    {qotd.quote}
    </h5>
    <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 leading-tight">
      -- by {qotd.source}
    </p>
    <Button on:click={refresh}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-clockwise"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path
          d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
        />
      </svg></Button
    >
    <Tooltip placement="right">随机换一句</Tooltip>
  </Card>
</div>
