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
    Sidebar, SidebarWrapper, SidebarGroup, SidebarItem,
  } from "flowbite-svelte";
  import { page } from "$app/stores";
  
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  
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
  const books = booklist[0];
  const totalPages = booklist[1];


</script>

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
    <div>
      <Sidebar>
        <SidebarWrapper>
          <SidebarGroup>
            <SidebarItem label="Dashboard">
            <svelte:fragment slot="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Kanban" {spanClass}>
              <svelte:fragment slot="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
              </svelte:fragment>
              <svelte:fragment slot="subtext">
                <span
                  class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >Pro</span
                >
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Inbox" {spanClass}>
            <svelte:fragment slot="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" /></svg>
              </svelte:fragment>
              <svelte:fragment slot="subtext">
                <span
                  class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
                  >3</span
                >
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sidebar" href='/component/sidebar'}>
              <svelte:fragment slot="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sign In">
              <svelte:fragment slot="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sign Up">
              <svelte:fragment slot="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>
              </svelte:fragment>
            </SidebarItem>
          </SidebarGroup>
        </SidebarWrapper>
      </Sidebar>
    </div>
  </div>
</div>
