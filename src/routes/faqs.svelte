<script>
    import FaqItem from '$lib/components/faq-item.svelte'
</script>
<section>
    <div class="row grey20 px pt6 pb7 mt4 mo-pt7 mo-pb7">
        <div class="col-5 off-1"><h5 class="book uc mb2 mo-font-0_77vw mo-normal">Faqs</h5>
            <h3 class="normal mb2 mo-mt2 mo-mb3 font-3_3vw mo-font-3_12vw">
                NestLove’s most
                <strong>frequently loved questions.</strong>
            </h3></div>
        <div class="off-1 col-4">
            <div>
                {#each [
                    {
                        q: 'Can we only buy one share in a property?',
                        a: 'No at NestLove our co-owners can buy one share or all the shares in the property'
                    },
                    {
                        q: 'So we are buying a Trust that owns a property and we get to use it?',
                        a: 'That is correct. So a property with 5 co-owners would be entitled to use their property 73 days in a calendar year. The minimum stay is two weeks and days are rounded as at the 31st of December. Co-owners pay $100 per night to stay to ensure their properties are income producing and gain the tax benefits allowable for investment properties.'
                    },
                    {
                        q: 'How do we ensure we get access to our property at key holiday times?',
                        a: 'Our world class booking app has an algorithm that weights peak demand periods. If for instance you didn’t secure your preferred 2 week period over the Christmas holidays this year you would be allocated preferential booking for the same period in the following year.'
                    },
                    {
                        q: 'How does NestLove determine where it buys properties?',
                        a: 'We target premium regions in Australia that have exhibited strong 10-year capital growth. We also align those areas with where Australians love to holiday. NestLove wants you to enjoy your future nest egg.'
                    },
                    {
                        q: 'What about liquidity if I need to get out? ',
                        a: 'We realise that sometimes life changes for investors. NestLove will always buy back a shareholding from an investor if another co-owner has not bought out the share on the platform. We also write into the Trust deeds that the property will be liquidated after 5 years unless a majority of shareholders decide to continue the investment.'
                    },
                    {
                        q: 'Will NestLove lend money for the purchase of a shareholding?',
                        a: 'Yes and our scenario page allows you to change your deposit amount and loan amount to forecast your tax adjusted position into the future. Of course you are welcome to purchase a share with your own funding arrangement in place.'
                    },
                    {
                        q: 'Can I rent out my allocation to my property?',
                        a: 'No as a general rule the properties are for co-owners and kept to a certain standard. Co-owners can bring friends to enjoy their property during their allocated time. After the 5-year holding period co-owners can change the Trust Deeds and elect to have the property available for rent. '
                    },
                    {q: 'I’m buying a Trust that owns a property?', a: 'Lorem'},
                ] as faq }
                    <div>
                        <FaqItem {...faq}/>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
