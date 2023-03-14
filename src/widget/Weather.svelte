<script lang="ts">
    import { Card } from 'flowbite-svelte';
    import { page } from '$app/stores';

    const weather=$page.data.weather.weather;
    const style=$page.data.weather.lifestyle;


    console.log(weather);
    console.log(style);


</script>
<div>
    <Card img="/images/szc.jpg">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        苏州今日天气
      </h5>
      <p>{weather.cond_txt}，{weather.tmp}摄氏度。{weather.wind_dir}{weather.wind_spd}级，相对湿度{weather.hum}。</p><p>&nbsp;</p>
      <p>{style[0].txt}</p>
      <p>&nbsp;</p>
      <p>{style[1].txt}</p>
      <p>&nbsp;</p>
      <p>{style[6].txt}</p>
      
    </Card>
  </div>