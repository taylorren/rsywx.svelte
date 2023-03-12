<script lang="ts">
    import { page } from '$app/stores';

    const books=$page.data.booksToday;
</script>

{#each books as book}
    <p>{book.y} {book.bc}</p>
    {#each book.books as b}
        {b.title}
    {/each}
{/each}

