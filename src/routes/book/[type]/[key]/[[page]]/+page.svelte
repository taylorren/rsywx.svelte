<script lang="ts">
    import { page } from "$app/stores";
    const type=$page.params.type;
    const key=$page.params.key;
    let cpage=$page.params.page;
    if(cpage===undefined){
        cpage='1';
    }
</script>

<h1>{type}+{key}+{cpage}</h1>