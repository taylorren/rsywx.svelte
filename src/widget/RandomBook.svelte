<script lang="ts">
  import { Card, Button, Badge, ButtonGroup, Tooltip } from "flowbite-svelte";
  import { page } from "$app/stores";
  import { BookManager } from "../lib/BookManager";

  let book = $page.data.randomBook;

  async function refresh() {
    const bm = new BookManager();
    let rb = await bm.getRandomBook();

    book = rb[0];
  }
</script>

<div>
  <Card img={book.img}>
    <Badge color="red" rounded>手气不错</Badge>
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {book.title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      【{book.region}】<a
        href="/book/author/{book.author}"
        class="hover:bg-sky-700">{book.author}</a
      >
      著{#if book.translated}&nbsp;| {book.copyrighter} 译{/if}<br />
      收录于：{book.purchdate}，访问量：<Badge color="red"
        >{book.vc.toLocaleString("en-US")}</Badge
      >
    </p>
    <ButtonGroup>
    <Button color="blue">详细信息&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
      <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
    </svg></Button>
    <Button on:click={refresh}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
      </svg></Button>
      <Tooltip placement="right">随机换一本</Tooltip>
    </ButtonGroup>
  </Card>
</div>
