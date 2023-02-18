<script lang="ts">
  import {
    Table,
    TableHead,
    TableHeadCell,
    TableBody,
    TableBodyCell,
    TableBodyRow,
  } from "flowbite-svelte";
  import { page } from "$app/stores";

  const booklist = $page.data.books;
  const books = booklist[0];
  const totalPages = booklist[1];
</script>

<div class="container mx-auto p-4">
  <script>
    import {
      Table,
      TableBody,
      TableBodyCell,
      TableBodyRow,
      TableHead,
      TableHeadCell,
    } from "flowbite-svelte";
  </script>

  <Table striped={true} hoverable={true}>
    <TableHead>
      <TableHeadCell><span class="text-lg">书名</span></TableHeadCell>
      <TableHeadCell><span class="text-lg">作者</span></TableHeadCell>
      <TableHeadCell><span class="text-lg">购书/整理日期</span></TableHeadCell>
      <TableHeadCell><span class="text-lg">位置</span></TableHeadCell>
    </TableHead>
    <TableBody>
      {#each books as b}
        <TableBodyRow>
          <TableBodyCell><a href="/books/{b.bookid}.html">{b.title}</a></TableBodyCell>
          <TableBodyCell><a href="/books/author/{b.author}/1" target="_self">{b.author}</a></TableBodyCell>
          <TableBodyCell>{b.purchdate}</TableBodyCell>
          <TableBodyCell>{#if b.location===null}（没有地方放）{:else}{b.location}{/if}</TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</div>
