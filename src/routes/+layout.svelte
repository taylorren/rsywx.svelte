<script>
  import "../app.postcss";
  import Footer from "../layout/Footer.svelte";
  import Header from "../layout/Header.svelte";
</script>

<div class="flex flex-col">

<Header/>
<slot />
<Footer/>
</div>