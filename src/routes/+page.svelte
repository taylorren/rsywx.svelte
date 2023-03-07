<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import BookToday from "../widget/BookToday.svelte";
  import LatestBook from "../widget/LatestBook.svelte";
  import RandomBook from "../widget/RandomBook.svelte";
  import Summary from "../widget/Summary.svelte";
  import Qotd from "../widget/Qotd.svelte";
  import ReadSummary from "../widget/ReadSummary.svelte";
  import LatestBlog from "../widget/LatestBlog.svelte";
  import BlogToday from "../widget/BlogToday.svelte";
  import Lakers from "../widget/Lakers.svelte";
  //export let data;
</script>
<title>任氏有无轩 | 藏书、读书、博客、维客、资源</title>
<div class="grow">
  <div class="flex flex-row flex-wrap m-8 gap-4 justify-center items-baseline">
    <LatestBook />
    <Summary />
    <RandomBook />
    <BookToday />
    <Qotd/>
    <ReadSummary/>
    <BlogToday/>
    <LatestBlog/>
    <Lakers/>
  </div>
</div>
