<template>
    <h1>Featured News &amp; Resources</h1>
    <div class="articles">
    <div>
    </div>
        <NewsCard
        photo="/images/annualmeeting2022.jpg"
        title="SDMIA May 2025 Annual Meeting"
        description="Register Today for the 3rd Annual Banquet at The Park in Rapid City, SD."
        link="https://sdmia.wildapricot.org/event-6061669"
        :index=1
        />
        <NewsCard
        photo="/images/cat.jpg"
        title="SDMIA Membership Form"
        description="Use this form to become a member of the SDMIA."
        link="https://sdmia.wildapricot.org/join-us?pe=5%2bbmdWjcEHaZdXeK%2fqe2dpH2njPHE62qCEC0iUGnGYwWXBymnEm%2f6Wg%2bKuaOA0ukc93H2OC1xqvk3YNTs8puL3YI9ZE%3d"
        :index=2
        />
        <!-- <NewsCard
        photo="/images/warf.jpg"
        title="SDMIA 2022 Annual Meeting"
        description="View our presentation from our annual meeting held in December 2022."
        link="/docs/SME_Meeting_092923.pdf"
        :index=3
        /> -->
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
