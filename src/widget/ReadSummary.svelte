<script lang="ts">
    import { Card, Button } from 'flowbite-svelte';
    import { page } from '$app/stores';
    import type { ReadSummary } from '../lib/Interfaces';

    const rm:ReadSummary=$page.data.readSummary;
    const today=new Date().toLocaleString();
</script>
<div>
  <Card img="/images/reading.jpg">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      读书记录摘要
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      截止{today}，任氏有无轩主人读了<span
      class="dark:text-red-600 text-gray-600 font-bold"
      >{rm.hc}</span>本书，写了<span
      class="dark:text-red-600 text-gray-600 font-bold"
      >{rm.rc}</span>篇书评。
    </p>
    <Button>
      所有书评 <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 ml-2"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        /></svg
      >
    </Button>
  </Card>
</div>
