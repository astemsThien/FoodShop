<script>
    import Footer from "$lib/components/layout/footer.svelte";
    import Header from "$lib/components/layout/header.svelte";
    // css 
    import '../css/style.css';
    import '../css/easy-responsive-tabs.css';
    import '../css/flexslider.css';
</script>

<Header />

<main>
    <slot />
</main>

<Footer />

