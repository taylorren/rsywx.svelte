<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { page } from "$app/stores";

  const lakers = $page.data.lakers;
</script>

<div>
  <Card img="/images/lakers.png">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      湖人{lakers.year}-{parseInt(lakers.year) + 1}赛季成绩
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      湖人本赛季战绩：胜<span
      class="dark:text-red-600 text-gray-600 font-bold"
      >{lakers.win}</span>场，负<span
      class="dark:text-red-600 text-gray-600 font-bold"
      >{lakers.lose}</span>场，胜率<span
      class="dark:text-red-600 text-gray-600 font-bold"
      >{lakers.per}%</span>。
    </p>
    <Button>
      详细记录&nbsp; <svg
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
