<script>
    import { page,session } from '$app/stores';
    import ListingGallery from '../../components/listing-gallery.svelte'
    import LinkArrow from "../../components/bits/LinkArrow.svelte";

    const {stringify} = JSON, {log} = console
    import properties from "../../data/properties.json";
    import {formatMoney} from "$lib/utils";
    let property = properties.find(i => i.slug === $page.params.slug)
</script>

<ListingGallery property={property} />

<section>
    <div class="row pt px mo-flex-col">
        <div class="col-4 off-1 pt9 pb9 mo-pt7 mo-pb7">
            <h5 class="book uc mo-font-0_77vw mo-normal">
                {property.location}
            </h5>
            <h3 class="mo-mt2 mo-mb2 mt2 mb2">
                We are loving this view over both <br><strong>Bungan & Newport</strong>
            </h3>
            <LinkArrow
                    class="font-0_77vw hover-blue decoration-none semibold text-black"
                    url="/#/co-ownership-is-for-me"
                    label="Request More Info"
            />
        </div>
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <div class="font-1_25vw mo-mb2">
                <p>
                    <strong>Location</strong><br>
                    {property.address}<br>
                    <strong>Details</strong><br>
                    {property.summary}<br>
                    <strong>Shares</strong><br>
                    {property.shares.left} Left, {property.shares.total - property.shares.left} Sold<br>
                    <strong>Price</strong><br>
                    {formatMoney(property.calc.share)} <br>
                    <strong>Agent</strong><br>
                    {property.agent.name} {property.agent.contact.phone} <br>
                </p>
            </div>
        </div>
    </div>
</section>

<!--<section class="px">-->

<!--    <pre>{stringify(property)}</pre>-->
<!--    <pre>{stringify($page)}</pre>-->
<!--    <pre>{stringify($session)}</pre>-->
<!--</section>-->

