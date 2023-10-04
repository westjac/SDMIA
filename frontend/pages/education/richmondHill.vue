<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="Richmond Hill Mine History" 
    />
    <div class="dividerBar"></div>
    <div class="weAreMiners">
      <h1>Richmond Hill History</h1>
      <h5>Written By: Crystal M. Hocking, RESPEC, Rapid City, SD Prepared for: Jeff Burich, Barrick, Central City, SD</h5>
    </div>
    <div class="MEC">

      <p>The Richmond Hill property is the site of historical mining operations within the Carbonate Mining District of the northern Black Hills of South Dakota. The Carbonate Mining District included underground lead, gold, and silver mines from the 1880s to 1903. The mine shafts or adits associated with the old Carbonate District mines have mostly been fenced off for public protection. The Eagle Bird Mine is a historical mine adit and associated waste dump located next to Cleopatra Creek. Water discharge from the adit is significant. The quality of the discharge is neutral in pH but with elevated levels of iron and zinc.</p>
      <p>The Richmond Hill Mine is a reclaimed open-pit, heap-leach gold mine that was operated from 1988 to 1993. The Richmond Hill gold mine was developed by St. Joe Gold Corporation in 1987, and in 1988 Bond Gold Corporation (Bond Gold) acquired the St. Joe Gold Corporation gold division. The mine was permitted, and construction of the mine facilities began in April 1988 under the ownership of Bond Gold. In fall 1988, production began from the Richmond Hill pit and the first dore bar of gold and silver was poured in December 1988. In November 1989, LAC Minerals acquired Bond Gold. Production was from a single open pit at the south end of the property with a valley-fill waste dump and three heap-leach pads to the north. Total ore production was 5.24 million tons, and waste production was 3.75 million tons. The final ore was hauled from the Richmond Hill pit in October 1993. A total of 172,294 ounces of gold were produced, along with 212,610 ounces of silver [LAC Minerals, 2005].</p>
      <p>LAC Minerals was required to submit an amendment to its mine permit outlining a new reclamation plan as the result of acid rock drainage (ARD), which was detected at the toe of the waste dump in July 1992. The permit amendment was approved in February 1994, and the reclamation work commenced in April 1994. The approved plan consisted of hauling all of the potentially ARD waste rock back to the pit and placing the rock under a multilayered capping system. Barrick Gold acquired LAC Minerals in November 1994. Reclamation of the engineered pit backfill facility and former waste dump was completed in September 1995. In conjunction with the permit amendment, a leach-pad closure plan was submitted to the SD DENR and approved in June 1996. The leach-pad closure consisted of recontouring the pads and placing a simple, multilayered capping system similar to the pit impoundment. The leach-pad closure was completed in July 1997. The capping system was successful in significantly reducing the amount of effluent from the leach pads that required treatment.</p>
      <p>The current water treatment system began operating in September 1997. The primary system consisted of a 200‑gallon-per-minute (gpm) RO unit operating at 50 percent concentrate/permeate split; the concentrate is then treated in the biological treatment system. Current activity at the project site consists of environmental monitoring and water treatment.</p>

      <BlogImg
        imageSrc="\images\edu\richmondHill.png"
      />

      <h5>Sources<br></h5>
      <h6>
        LAC Minerals, 2005. Closure Site Reclamation Document, Richmond Hill Mine, Lawrence County, South Dakota, prepared by LAC Minerals, Central City, SD.
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