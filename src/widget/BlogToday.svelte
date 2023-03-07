<script lang="ts">
  import { Card, Badge } from "flowbite-svelte";
  import { page } from "$app/stores";
  const BASE="https://blog.rsywx.net/?p=";
  const bt = $page.data.bt;
</script>

<div>
  <Card img="/images/writing.jpg">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      历史今日写作
    </h5>
    <ul>
      {#each bt as b}
      <li class="text-base font-semibold gap-2">
        <a href="{BASE+b.link}">{b.title}</a>
      </li>  
      <li class="text-sm gap-2">
          <Badge>{b.year}</Badge>年，<Badge>{b.pv}</Badge>次浏览
        </li>
        <p>&nbsp;</p>
      {/each}
    </ul>
  </Card>
</div>
