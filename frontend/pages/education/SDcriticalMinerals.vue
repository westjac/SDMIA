<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="SD Critical Minerals" 
    />
    <div class="dividerBar"></div>
    <div class="weAreMiners">
      <h1>Summary of Critical Minerals in South Dakota</h1>
      <h5>By: Christopher J. Pellowski, Ph.D. </h5>
      <br>
      <p>Presidential Executive Order 13953 calls for the United States (US) to become less reliant on imported critical minerals. The <u>35 critical minerals</u> identified are essential to US economic and national security, and key components in essential manufactured products.</p>
      <br>
      <h4>Critical Minerals Sorted by Major Uses</h4>
    </div>
    <div class="image">
      <v-img
        src="\images\edu\critMinerals.png"
        alt="Critical Minerals"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <div style="text-align: center; margin-bottom: 1em;">
        <p style="color: #666666; font-size: 12px;">Image attribution: Visual Capitalist</p>
      </div>
    </div>
    <div class="weAreMiners">
      <br>
      <h4>Locations of Known Critical Minerals in the United States (modified after U.S. Geological Survey)</h4>
      <br>
    </div>

    <div class="image">
      <v-img
        src="\images\edu\critMinerals-locations.png"
        alt="Critical Minerals"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <div style="text-align: center; margin-bottom: 1em;">
        <p style="color: #666666; font-size: 12px;">Modified after U.S. Geological Survey</p>
      </div>
    </div>

    <div class="weAreMiners">
      <br>
      <p>This summary identifies critical minerals in South Dakota (SD) and summarizes their potential for further geologic characterization and recovery that could have future impacts on the economy of South Dakota.</p>
      <ul>
        <li>South Dakota hosts 17 critical minerals within eight (8) counties (Table 1). </li>
        <li>These resources complement those in the region, such as deposits near Sundance, WY.</li>
        <li>Fourteen (14) minerals are primary commodities and 12 are secondary (occurring in mine tailings) that may be economically recoverable at current market prices. </li>
        <li>Critical minerals with the most occurrences are uranium, tin, and tungsten. </li>
        <li>Uranium has potential for further development near Edgemont, based on market price and demand. </li>
        <li>Beryllium, tin, tungsten, lithium, tantalum, niobium, and cesium are primarily associated with past production near Keystone and Hill City. Reprocessing tailings at some mines may be economic using modern methods. </li>
        <li>Beryllium, lithium, and antimony occurrences need updated geologic characterization to estimate current economic potential. </li>
        <li>Manganese occurrences in Custer and Lyman Counties need further geologic characterization to estimate current economic potential. </li>
        <li>Prospects for economic Rare Earth Element deposits are being explored but occurrences are not well documented. </li>
      </ul>
      <br>
      <p>The <a target="blank_" href="https://mrdata.usgs.gov/mrds/">United States Geological Survey’s Mineral Resources Data System (MRDS)</a> (McFaul, et. al, 2000) was used to search for the occurrences of critical minerals in South Dakota. South Dakota is host to 17 critical minerals (Table 1) of varying quantities within two central counties (Buffalo and Lyman) and six western counties (Perkins, Harding, Lawrence, Pennington, Custer, and Fall River).  Based on the number of MRDS records listed in parentheses, the following 17 critical minerals are listed in descending order. </p>
      <br>
    </div>

    <div class="image">
      <v-img
        src="\images\edu\critMinerals-table.png"
        alt="Critical Minerals"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <div style="text-align: center; margin-bottom: 1em;">
        <p style="color: #666666; font-size: 12px;">U.S. Geological Survey</p>
      </div>
    </div>

    <div class="weAreMiners">
      <br>
      <ul>
        <li><u><b>Uranium</b></u> (228) is noted mainly as a past producer with some current production and numerous occurrences and prospects.  The two counties of Fall River and Harding are host to a majority of these deposits associated with the mining of the main ore mineral carnotite and minor coal/lignite in the rock types of sandstone, clay, mud, silt and siltstone. </li>
        <li><u><b>Beryllium</b></u> (182) is noted as mainly a past producer with limited current production and some occurrences and prospects.  The two counties of Custer and Pennington are the host to these deposits associated with the mining of the main ore minerals beryl, feldspar, and mica in the rock types of granite, pegmatite, and schist. </li>
        <li><u><b>Tin</b></u> (148) is noted as mainly a past producer with limited current production and numerous occurrences and prospects.  The three counties of Custer, Lawrence and Pennington are the host to these deposits associated with the mining of the main ore mineral cassiterite in the rock types of pegmatite and schist.</li>
        <li><u><b>Tungsten</b></u> (96) is noted as mainly a past producer with  limited current production and numerous occurrences and prospects.  The three counties of Custer, Lawrence and Pennington are the host to these deposits associated with the mining of the main ore minerals cassiterite, scheelite and wolframite in the rock types of schist and pegmatite.</li>
        <li><u><b>Lithium</b></u> (73) is noted as mainly a past producer with limited current production and some occurrences and prospects.  The three counties of Custer, Lawrence and Pennington are the host to these deposits associated with the mining of the main ore minerals amblygonite, beryl, albite and spodumene in the rock types of pegmatite, schist, and some granite.</li>
        <li><u><b>Tantalum</b></u> (60) is noted as mainly a past producer with some current production and limited occurrences and prospects.  The three counties of Custer, Lawrence and Pennington are the host to these deposits associated with the mining of the main ore minerals amblygonite, beryl, albite and cassiterite in the rock types of pegmatite and schist.</li>
        <li><u><b>Niobium</b></u> (37) is noted as mainly a past producer with some current production and very limited occurrences and prospects.  The three counties of Custer, Lawrence and Pennington are the host to these deposits associated with the mining of the main ore minerals amblygonite, beryl, cassiterite and spodumene in the main rock type of pegmatite and limited schist.</li>
        <li><u><b>Manganese</b></u> (16) is noted as mainly a past producer with limited occurrences.  The two counties of Buffalo and Lyman in addition to Custer and Lawrence are host to these deposits.  The counties of Buffalo and Lyman are associated with the limited mining of manganese nodules in the gravels proximal to the Missouri River.  Custer county is associated with occurrences of the main ore mineral identified as pyrolusite and Lawrence county is associated with the mining of the ore minerals gold and vanadinite in the rock type limestone.</li>
        <li><u><b>Antimony</b></u> (13) is noted as mainly a past producer with some prospects.  Pennington county is the main host to these deposits with a single deposit in Lawrence county.  Deposits in Pennington county are associated with the mining of the main ore minerals gold, jamesonite and pyrite in the rock type schist.  The deposit in Lawrence county is associated with dikes and sills of Tertiary rhyolite porphyry.</li>
        <li><u><b>Fluorspar (fluorite)</b></u> (10) is noted as mainly a past producer with a single producer and very limited occurrences and prospects.  Lawrence county is the main host to these deposits with a single deposit in Custer county.  The deposits in Lawrence county are associated with the mining of the main ore minerals fluorite, gold and silver in the rock types limestone and schist.</li>
        <li><u><b>Graphite</b></u> (5) is noted equally as both a past producer and occurrence with a single prospect.  Pennington county is the host to these deposits associated with the mining of the main ore mineral graphite in addition to cassiterite in the rock types of schist, slate, and pegmatite.</li>
        <li><u><b>Barite</b></u> (2) is noted as a producer with two deposits in Lawrence county associated with the mining of the ore minerals gold and tungsten.</li>
        <li><u><b>Tellurium</b></u> (2) is noted as a past producer in Custer and Lawrence counties and are associated with the mining of the ore minerals gold, silver and sylvanite in the rock type schist.</li>
        <li><u><b>Arsenic</b></u> (1) is noted as a past producer in Pennington county and associated with the mining of the ore minerals chalcopyrite, gold and pyrrhotite.</li>
        <li><u><b>Cesium</b></u> (1) is noted as a past producer in Custer county and associated with the mining of the ore minerals albite, amblygonite, beryl and spodumene in the rock types schist and pegmatite.</li>
        <li><u><b>Rhenium</b></u> (1) is noted as an occurrence in Fall River county that is associated with the mining of uranium in the rock type sandstone.</li>
        <li><u><b>Vanadium</b></u> (1) is noted as a past producer in Lawrence county associated with the mining of ore minerals galena, lead, and silver.</li>
      </ul>
      <br>
      <p>The critical minerals beryllium, tin, tungsten, lithium, tantalum, niobium, and cesium are mainly associated with the past production of the pegmatite bodies located in the vicinity of the towns of Keystone and Hill City. In one example, these pegmatite bodies were mined to supply lithium during World War II for high-pressure grease used in airplane engines as well as lithium hydride to fill aerial balloons and life jackets/lifeboats.  The reprocessing of mine dumps at the Bob Ingersoll (Hanley, 1953) and Tin Mountain (Stoll, 1953) mines associated with the mining of pegmatites (Roberts and Cope, 1968) may allow for the realization of recoverable minerals based on modern processing methods as well as market price and demand. </p>
      <p>The occurrences in Custer county associated with pyrolusite may benefit from additional geologic characterization if further exploration is warranted. </p>
      <p>The critical minerals noted with numerous occurrences and prospects include uranium, tin, and tungsten with some occurrences and prospects include beryllium, lithium, and antimony may benefit from additional geologic characterization/exploration that could possibly lead to future development.  </p>
      <br>
      <h6>Hanley, J.B., 1953, Bob Ingersoll mine (Custer district), in Page, L.R., Norton, J.J., Stoll, W.C., Hanley, J.B., Adams, J.W., Pray, L.C., Steven, T.A., Erickson, M.P., Joralemon, Peter, Stopper, R.F., and Hall, W.E., Pegmatite investigations 19421945, Black Hills, South, Dakota, U.S. Geological Survey Professional Paper 247, p. 75-83. 

McFaul, E.J., Mason, G.T, Ferguson, W.B., and Lipin, B.R., 2000, U.S. Geological Survey mineral databases: MRDS and MAS/MILS: USGS Data Series 52, https://doi.org/10.3133/ds52  

Roberts, W.L., and Cope, J.H., 1968, Utilization of mine dumps in the Black Hills, South Dakota, Ingersoll and Tin Mountain Mines, South Dakota Academy of Science Proceedings, v. 47, p. 7585. 

Stoll, W.C.., 1953, Tin Mountain mine (Custer district), in Page, L.R., Norton, J.J., Stoll, W.C., Hanley, J.B., Adams, J.W., Pray, L.C., Steven, T.A., Erickson, M.P., Joralemon, Peter, Stopper, R.F., and Hall, W.E., Pegmatite investigations 19421945, Black Hills, South, Dakota, U.S. Geological Survey Professional Paper 247, p. 197-201. </h6>
    </div>
    <br>


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
    }

    .image {
      padding: 0em 12em;
    }


    img {
      max-width: 960px;
      height: 100%;
    }
    p {
      padding: 5px 0em;
    }

    @media screen and (max-width: 960px) {
      .weAreMiners {
      padding: 0 2em;
    }
    .image {
      padding: 0 2em;
    }
    }
</style>