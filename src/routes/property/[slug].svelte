<script>
    import { page } from '$app/stores';
    import ListingGallery from '$lib/components/listing-gallery.svelte'
    import PropertyCalculator from '$lib/components/property-calculator.svelte'
    import LinkArrow from "$lib/components/bits/LinkArrow.svelte";

    import properties from "../../data/properties.json";
    import {formatMoney} from "$lib/utils";

    const {stringify} = JSON, {log} = console

    let property = properties.find(i => i.slug === $page.params.slug)
</script>

<ListingGallery property={property} />

<section>
    <div class="row pt px mo-flex-col">
        <div class="col-4 off-1 pt9 mo-pt7">
            <h5 class="book uc mo-font-0_77vw mo-normal">
                {property.location}
            </h5>
            <h3 class="mo-mt2 mo-mb2 mt2 mb2">
                We are loving this view over <br><strong>Newport Beach</strong>
            </h3>
            <LinkArrow
                    class="font-1_11vw red decoration-none semibold text-black"
                    url="#/request-more-info"
                    label="Request More Info"
            />
        </div>
        <div class="col-4 off-1 pt9 mo-pt7">
            <div class="font-1_25vw mo-mb2">
                <p class="my0">
                    <strong>Location</strong><br>
                    {property.address}<br>
                </p>
                <p class="my0">
                    <strong>Details</strong><br>
                    {property.summary}<br>
                </p>
                <p class="my0">
                    <strong>Shares</strong><br>
                    {property.shares.left} Left, {property.shares.total - property.shares.left} Sold<br>
                </p>
                <p class="my0">
                    <strong>Share Price</strong><br>
                    {formatMoney(property.data.share)} <br>
                </p>
                <p class="my0">
                    <strong>Contact</strong><br>
                    {property.contact.name} {property.contact.phone} <br>
                </p>
            </div>
        </div>
    </div>
</section>

<PropertyCalculator property={property} />
