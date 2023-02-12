<script lang="ts">
    import { Card, Button, Badge } from "flowbite-svelte";
    import { page } from '$app/stores';
    import type { Book } from "../lib/Book";
    const book:Book=$page.data.latestBook;
</script>
<div>
    <Card img="{ book.img }">
        <Badge color="red" rounded>新书！</Badge><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            【{book.region}】{book.author}{#if book.translated} | {book.copyrighter} {/if}<br/>
            收录于：{book.purchdate}
        </p>
        <Button href="/books/{book.bookid}.html">
            详细信息
        </Button>
    </Card>
    
</div>