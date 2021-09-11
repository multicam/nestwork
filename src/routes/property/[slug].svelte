<script>
    import { page,session } from '$app/stores';
    import ListingGallery from '../../components/listing-gallery.svelte'
    const {stringify} = JSON, {log} = console
    import properties from "../../data/properties.json";
    let property = properties.find(i => i.slug === $page.params.slug)
</script>

<ListingGallery property={property} />

<section class="px pb">
    <pre>{stringify($page)}</pre>
    <pre>{stringify($session)}</pre>
    <pre>{stringify(property)}</pre>
</section>

