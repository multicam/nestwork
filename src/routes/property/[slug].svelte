<script>
    import { getStores, navigating, page, session } from '$app/stores';
    import ListingGallery from '../../components/listing-gallery.svelte'
    const {stringify} = JSON
</script>

<ListingGallery />

<section class="px pb">
    <pre>{stringify(page)}</pre>
    <pre>{stringify(session)}</pre>
</section>

