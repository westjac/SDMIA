<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="Maitland Mine History" 
    />
    <div class="dividerBar"></div>
    <div class="weAreMiners">
      <h1>Maitland History</h1>
      <h5>Written By: Crystal M. Hocking, RESPEC, Rapid City, SD Prepared for: Jeff Burich, Barrick, Central City, SD</h5>
    </div>
    <div class="MEC">

      <p>The Maitland property is the site of historical mining operations within the Lead Gold District of the northern Black Hills of South Dakota. The mine included underground workings in the lower Deadwood Formation, with gold and silver ore within thin dolomite beds [Shapiro and Gries, 1970; US Bureau of Mines, 1954]. The mill had a capacity of 110 tons of ore per day and included roasting and cyanidation with on-site tailings disposal [McBride, 1905].</p>
      <p>The area has hosted several mines and owners that have changed names and hands over the years, including Garden City, Realization, Penobscot, Canyon Corporation, and Maitland. Production first began in 1902. The Maitland Company operated the Penobscot and Realization Mines from 1904 to 1906, and ownership was transferred to the North Homestake Company, who operated the area mines from 1907 to 1911 [US Bureau of Mines, 1954]. From 1912 to 1915, an exploratory shaft was sunk 600 feet (ft) down into the Precambrian schists [US Bureau of Mines, 1954]. The mine was permanently closed in 1942 during</p>
      <p>World War II [US Bureau of Mines, 1954]. Tailings were disposed of in the False Bottom Creek drainage.
        Homestake Mining Company (Homestake) purchased the Maitland Mine in 1950, but only conducted exploration. Portions of the site were reclaimed beginning in the early 1980s, including the hauling of 54,000 tons of tailings to the Homestake Mine mill for processing. The remaining on-site tailings were separated by Maitland Road, with the lower Maitland tailings repository and Minnesota tailings area to the west and the upper Maitland tailings repository to the east. Tailings are 4–12 ft thick and consist of uniform, fine-grained, well-sorted, sandy material that is reddish-orange in color [Hayhurst, 1998]. In 1998, the lower Maitland tailings repository contained an estimated 13,000 cubic yards (yd3) and the Minnesota tailings repository contained an estimated 20,000 yd3 [Hayhurst, 1998].</p>
      
      
      <BlogImg
        imageSrc="\images\edu\maitland.png"
      />
      
      <p>In the late 1990s, Homestake conducted additional reclamation, including the installation of erosion-control structures on False Bottom Creek and a surface-water diversion ditch and drop structure along the edge of the upper Maitland tailings area. The mill was razed on an unknown date and foundations remain on site.</p>
      <p>A site investigation by the US Environmental Protection Agency (EPA) in 1998 determined that the site (Comprehensive Environmental Response, Compensation, and Liability Information System [CERCLIS] No. SDT470010067) does not qualify for further remedial site assessment and does not rise to the level of a Superfund site [Hayhurst, 1998]. The 1998 investigation indicated that water quality downstream of the site is not significantly impacted. Homestake has been conducting yearly water quality monitoring on False Bottom Creek upstream and downstream of the site. No detections of elevated total metals have been observed.</p>

      <BlogImg
        imageSrc="\images\edu\maitland2.png"
      />

      <h5>Sources<br></h5>
      <h6>
        Hayhurst, B., 1998. Analytical Results Report for Expanded Site Inspection: Maitland and Minnesota Tailings Impoundments, Lead, South Dakota, TDD No. 9706-0003, prepared by URS Operating Services, Inc., Denver, CO, for the United States Environmental Protection Agency, Denver, CO.<br>
        McBride, C. C., 1905. “Penobscot Stamp Mill, Maitland SD, Lawrence County,” sddigitalarchives.‌contentdm.oclc.org, accessed October 13, 2020, from https://sddigitalarchives.contentdm.oclc.org/‌digital/collection/photos/id/9186/<br>
        Shapiro, L. H. and J. P. Gries, 1970. Ore Deposits in Rocks of Paleozoic and Tertiary Age of the Northern Black Hills, South Dakota, prepared by the South Dakota School of Mines and Technology, Department of Geology and Geological Engineering, Rapid City, SD, available online at https://pubs.usgs.gov/of/‌1970/0300/report.pdf<br>
        US Bureau of Mines, 1954. Black Hills Mineral Atlas, South Dakota: Part 1, Information Circular 7688, prepared by the United States Bureau of Mines, Washington, DC, available online at https://books.google.com/books?id=EWw6wCq8Gy4C&pg=PP3&lpg=PP3&dq=US+BUREAU+OF+MINES,+1954+,+BLACK+HILLS+MINERAL+ATLAS,+SOUTH+DAKOTA:+PART+I,+BUREAU+OF+MINES+INFORMATION+CIRCULAR+7688&source=bl&ots=iIBpfW82xx&sig=ACfU3U2xKeCa4Eehz5NsR2QTTf72wddSOA&hl=en&sa=X&ved=2ahUKEwiLxcHh6a_sAhVD7J4KHQjBDosQ6AEwBHoECAgQAg#v=onepage&q=Maitland&f=false
      </h6>
      <br>

    </div>


    </div>
</template>

<script setup>

</script>

<style scoped>
  .dividerBar {
    background-color: #123C62; 
    height: 60px;
  }
  h1 {
        text-align: center;
        color: #123C62;
        padding-top: 1em;
    }
    .weAreMiners {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 6em;
      padding-bottom: 1em;
    }

    .weAreMiners .video {
      margin: 1em;
      aspect-ratio: 16 / 9;
      width: 100%;
    }
    .MEC {
      display: flex;
      flex-direction: column;
      padding: 0 6em;
      align-items: center;
    }

    img {
      max-width: 960px;
      height: 100%;
    }

    p {
      padding-bottom: 1.5em;
      align-self: flex-start;
    }

    @media screen and (max-width: 960px) {
      .weAreMiners {
      padding: 0 2em;
    }
    .MEC {
      padding: 0 2em;
    }
    }
</style>