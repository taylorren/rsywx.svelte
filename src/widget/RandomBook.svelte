<script lang="ts">
    import { Card, Button, Badge } from 'flowbite-svelte';
    import { page } from '$app/stores';
    import type { Book } from "../lib/Book";
    const book:Book=$page.data.randomBook;
</script>
<div>
    <Card img="{book.img}">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            【{book.region}】<a href="/book/author/{book.author}" class="hover:bg-sky-700">{book.author}</a> 著{#if book.translated} | {book.copyrighter} 译{/if}<br/>
            收录于：{book.purchdate}，访问量：<Badge color="red">{book.vc.toLocaleString("en-US")}</Badge>
        </p>
        <Button>详细信息</Button>
            
    </Card>
    
</div>