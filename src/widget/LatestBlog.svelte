<script lang="ts">
  import { Card, Button, Badge } from "flowbite-svelte";
  import { IMG_URI } from "$lib/Interfaces";
  import { page } from "$app/stores";

  const data = $page.data.lbp;
  const lbp = data[0];
</script>

<div>
  <Card img={IMG_URI+lbp.media}>
    <Badge color="red" rounded>最新博客</Badge>
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {lbp.title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {@html lbp.excerpt}
    </p>
    <Button href={lbp.link}>
      浏览全文&nbsp;<svg
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
      </svg>
    </Button>
  </Card>
</div>
