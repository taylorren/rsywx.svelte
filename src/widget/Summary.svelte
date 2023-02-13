<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { page } from "$app/stores";
  
  import type { Summary } from "../lib/Summary";

  const summary:Summary= $page.data.summary;
</script>

<div>
  <Card img="/images/default.jpg">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      藏书信息摘要
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      据不完全统计，截止，任氏有无轩藏书<span class="text-red-600 font-bold">{summary.bc.toLocaleString(
        "en-US")}</span>本，约<span class="text-red-600 font-bold">{parseInt(summary.wc).toLocaleString("en-US")}</span>千字，<span class="text-red-600 font-bold">{parseInt(summary.pc).toLocaleString(
        "en-US")}</span>页。总访问量<span class="text-red-600 font-bold">{summary.vc.toLocaleString("en-US")}</span>次。
    </p>
    <Button>
      浏览藏书总目&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
      </svg>
    </Button>
  </Card>
</div>
