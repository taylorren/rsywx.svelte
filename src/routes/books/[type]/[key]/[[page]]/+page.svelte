<script lang="ts">
  import {
    Table,
    TableHead,
    TableHeadCell,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    ButtonGroup,
    Button,
    Sidebar,
    SidebarWrapper,
    SidebarGroup,
    SidebarItem,
  } from "flowbite-svelte";
  import { page } from "$app/stores";
  import Sidenav from "../../../../../widget/Sidenav.svelte";

  const splitUri = $page.url.pathname.split("/");

  let type: string;
  let key: string;
  let cpage: number;
  if (splitUri.length == 5) {
    cpage = parseInt(splitUri[4]);
  } else {
    cpage = 1;
  }

  type = splitUri[2];
  key = splitUri[3];

  const booklist = $page.data.books;
  const books = booklist["books"];
  const totalPages = booklist["pages"];
</script>

<title>任氏有无轩 | 藏书总目，第{cpage}页</title>
<div class="container mx-auto p-4">
  <div class="grid grid-cols-5 gap-3">
    <div class="col-span-4">
      <Table striped={true} hoverable={true}>
        <TableHead>
          <TableHeadCell><span class="text-lg">书名</span></TableHeadCell>
          <TableHeadCell><span class="text-lg">作者</span></TableHeadCell>
          <TableHeadCell
            ><span class="text-lg">购书/整理日期</span></TableHeadCell
          >
          <TableHeadCell><span class="text-lg">位置</span></TableHeadCell>
        </TableHead>
        <TableBody>
          {#each books as b}
            <TableBodyRow>
              <TableBodyCell
                ><a href="/books/{b.bookid}.html">{b.title}</a></TableBodyCell
              >
              <TableBodyCell
                ><a href="/books/author/{b.author}/1" target="_self"
                  >{b.author}</a
                ></TableBodyCell
              >
              <TableBodyCell>{b.purchdate}</TableBodyCell>
              <TableBodyCell
                >{#if b.location === null}（没有地方放）{:else}{b.location}{/if}</TableBodyCell
              >
            </TableBodyRow>
          {/each}
          <TableBodyRow>
            <TableBodyCell colspan="4">
              <div class="flex flex-col items-start justify-start">
                <div class="text-sm text-gray-700 dark:text-gray-400">
                  第<Button rounded size="xs">{cpage}</Button>页，总<Button
                    rounded
                    size="xs">{totalPages}</Button
                  >页
                </div>
              </div>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell colspan="4">
              <div class="flex flex-col items-start justify-start">
                <div class="text-sm text-gray-700 dark:text-gray-400">
                  <ButtonGroup>
                    <Button href="/books/{type}/{key}/1" target="_self"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-rewind-btn-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2Zm7.729 1.055A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814l3.5-2.5a.5.5 0 0 1 .519-.038Z"
                        />
                      </svg>&nbsp;首页</Button
                    >
                    <Button
                      disabled={cpage === 1}
                      href="/books/{type}/{key}/{cpage - 1}"
                      target="_self"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"
                        />
                      </svg>&nbsp;上一页</Button
                    >
                    <Button
                      disabled={cpage === totalPages}
                      href="/books/{type}/{key}/{cpage + 1}"
                      target="_self"
                      >下一页&nbsp;<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"
                        />
                      </svg></Button
                    >
                    <Button
                      href="/books/{type}/{key}/{totalPages}"
                      target="_self"
                      >末页&nbsp;<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-fast-forward-btn-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2Zm4.271 1.055a.5.5 0 0 1 .52.038L8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445Z"
                        />
                      </svg></Button
                    >
                  </ButtonGroup>
                </div>
              </div>
            </TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </div>
    <Sidenav />
  </div>
</div>
