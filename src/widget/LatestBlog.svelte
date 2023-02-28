<script lang="ts">
    import { Card, Button, Badge } from 'flowbite-svelte';
    import { page } from '$app/stores';

    const data=$page.data.lbp;
    const lbp=data[0];
</script>
<div>
  <Card img="{lbp.media}">
    <Badge color="red" rounded>最新博客</Badge>
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {lbp.title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {@html lbp.excerpt}
    </p>
    <Button href="{lbp.link}">
      浏览全文 <svg
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
