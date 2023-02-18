<script lang="ts">
  import type { Book } from "../lib/Interfaces";

  interface booksToday {
    y: number;
    bc: number;
    books: Book[];
  }
  import {
    Card,
    Button,
    Listgroup,
    ListgroupItem,
    ButtonGroup,
  } from "flowbite-svelte";
  import { page } from "$app/stores";

  const books: booksToday[] = $page.data.booksToday;
</script>

<div>
  <Card img="/images/calendar.webp">
    <div class="flex justify-between items-center mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        历史今日藏书
      </h5>
      <a
        href="/books/today"
        class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        浏览全部
      </a>
    </div>
    <Listgroup class="border-0 dark:!bg-transparent">
      {#each books as bookRecord}
        <ListgroupItem class="text-base font-semibold gap-2"
          >
            {bookRecord.y}年收藏了<Button pill={true} size="xs">{bookRecord.bc}</Button>本</ListgroupItem
        >
      {/each}
    </Listgroup>
  </Card>
</div>
