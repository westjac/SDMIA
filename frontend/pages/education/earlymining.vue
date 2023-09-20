<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="Early Mining History" 
    />
    <div class="dividerBar"></div>
    <div class="weAreMiners">
      <h1>Early Mining in the Black Hills of Dakota Territory</h1>
    </div>
    <div class="MEC">
    <br>
      <p>
        Rising from an inland sea of prairie halfway between the mighty Missouri River and the Rockies, the Black Hills stand as an ancient island of history, mystery and bountiful promise. The Lakota Sioux labeled them the Paha Sapa, literally “Hills Black,” while Lewis & Clark, who passed east and north of them with the Corps of Discovery in 1804, referred to the whole region from the North Platte to the Yellowstone rivers and westward from the White River Badlands to the Big Horn Mountains, as the “Black Mountains.” 
      </p>
      <br>
      <p>
        On the first day of July 1874, Lt. Col. George Armstrong Custer assembled 1,000 soldiers, 110 wagons, three Gatling machine guns, and a 16-piece mounted band at Fort Abraham Lincoln near present-day Bismarck, N.D. and set out to ostensibly survey the Black Hills, the last uncharted terrain in America. Accompanying the expedition were cartographers, geologists, two newspaper correspondents, one photographer, and Col. Fred Grant, son of the President, who reportedly spent much of his time on the expedition inebriated.
      </p>
      <br>
      <p>
        While camped along the banks of French Creek in the southern Hills, Custer’s troops found “color” in their pans, small flakes of gold that, initially, were so little noticed that the date of the discovery went unrecorded. On Aug. 2, two would-be miners attached to the expedition acquired 30 to 50 flakes of gold, which they gave to Custer. Then, on Aug. 5, a half-dozen soldiers reported finding small amounts of gold. The modest discoveries were mentioned in passing by the men, but no great significance was attached to the finds. That changed when Custer sent a scout with dispatches summarizing the expedition to Fort Laramie. By Aug. 11, the New York Daily Tribune wrote of “New Gold Country,” and the next day, the Bismarck Tribune devoted two columns to Black Hills gold. The Chicago Daily Tribune, the Inter Ocean, and Harper’s Weekly soon followed with their own accounts of America’s new gold rush, which was still in its infancy.
      </p>
      <br>
      <p>
        For two years after Custer’s gold discovery in 1874, the federal government and its far-flung troops did their best to keep white prospectors from filling the Black Hills with glory holes, sluice operations and underground mines, even escorting mining parties to nearby forts in present-day Nebraska and Wyoming. But still they came, on foot and horseback, in wagons, freighters and stages. In Sidney, Neb., two stage lines were unable to accommodate up to eighty miners who sought passage to the Black Hills every day in July 1876. Fifty to 75 freight wagons left Sidney for the Hills daily, weather permitting. Other prospectors, all seeking their private Eldorado, poured into the Hills from Fort Pierre, Bismarck and Cheyenne.
      </p>
      <br>
      <p>
        The thousands of individuals who attempted to hit their big pay day in the Black Hills following the first gold “strike” in 1874 were not all experienced miners. Far from it. Most were greenhorns attracted by the prospect of a profitable change in their mostly mundane lives. They were still reeling from the depression of 1873, when jobs were scarce and drought and grasshoppers inches deep devoured three successive seasons of crops across the Midwest. They were, in fact, desperate for change. Despite the Army’s mission to keep whites out of the Black Hills and adhere to its obligations under the 1868 Fort Laramie Treaty, most Black Hills-bound travelers were willing to take the risk of an attack by Native American warriors or an escort out of the Hills by armed cavalry soldiers.
      </p>
      <br>
      <p>
        From the initial discovery of gold in 1874, until the Black Hills of Dakota Territory were officially opened to settlers in 1876, literally thousands of mines were dug. The first began in the area of the Custer expedition’s discoveries around current-day Custer City and Custer State Park, but they gradually extended north to present-day Hill City, and finally to the major strikes at Lead and Deadwood.
      </p>
      <br>
      <p>
        The big boy on the block would become the Homestake Gold Mine at Lead. Founded in 1876, the Homestake Gold Mine would become the deepest, longest running, most productive gold mine in the western hemisphere of the world. Its shafts extended 8,000 feet underground and it would operate for 125 years, yielding some 40 million ounces of gold in its lifetime. Mining operations at Homestake Gold Mine ceased in 2001 due to high production costs and low commodity prices.
      </p>
      <br>
      <h5>Sources<br></h5>
      <h6>
        Deadwood: The Golden Years, Watson Parker, (University of Nebraska Press, 1981)<br>
        Deadwood: Saints & Sinners, Jerry Bryant & Barbara Fifer, (Farcountry Press, 2016)<br>
        Gold in the Black Hills, Watson Parker, (University of Oklahoma Press, 1966)<br>
        Gold, Gals, Guns, Guts A History of Deadwood, Lead & Spearfish, Bob Lee (South Dakota State Historical Society Press, 1976)<br>
        South Dakota, T.D. Griffith, (Fodor’s/Random House Inc., 2004)<br>
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
    }

    img {
      max-width: 960px;
      height: 100%;
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