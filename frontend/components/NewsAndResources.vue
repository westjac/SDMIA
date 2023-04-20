<template>
    <h1>Featured News &amp; Resources</h1>
    <div class="articles">
    <div>
    </div>
        <NewsCard
        photo="/images/annualmeeting2022.jpg"
        title="SAVE THE DATE: SDMIA Annual Dinner"
        description="RSVP to join us for our annual meeting on May 19, 2023"
        link="#"
        />
        <NewsCard
        photo="/images/warf.jpg"
        title="SDMIA 2022 Annual Meeting"
        description="View our presentation from our annual meeting held in December 2022."
        link="/docs/SME_Meeting_092923.pdf"
        />
    </div>
</template>

<style scoped>
    h1 {
        text-align: center;
        color: #123C62;
        padding-top: 1em;
        padding-bottom: 1em;
    }
    .articles {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2em;
    }
</style>