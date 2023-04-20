<template>
    <div>
    <PageHeader 
    imageSrc="/images/annualmeeting2022.jpg"
    title="Contact SDMIA" 
    />
    <div class="dividerBar"></div>
    <div class="contactSection">
        <div class="getInTouch">
            <h1>Get In Touch.</h1>
            <p>We would love to hear from you! If you have questions or would like to become a member of SDMIA, please contact us. If you would like to receive email updates or learn about upcoming events, please enter your contact information below.</p>
        </div>
        <div class="contactInfo">
            <h2>Mail</h2>
            <p>224 E St. Joseph St.</p>
            <p>Rapid City, SD 57701</p>
            <br/>
            <h2>Email</h2>
            <p>Kwinn Neff</p>
            <p><strong>President</strong></p>
            <p>president@sdmineralindustries.org</p>
            <br/>
            <p>Vacant</p>
            <p><strong>Managing Director</strong></p>
            <p>director@sdmineralindustries.org</p>
        </div>
    </div>
    </div>
</template>

<style scoped>
  .dividerBar {
    background-color: #3FB65D; 
    height: 140px;
  }
  .contactSection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
    padding: 0 6em;
    padding-bottom: 2em;
  }
  .contactInfo {
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    background-color: #123C62;
    color: #fff;
    width: 370px;
    height: auto;
  }

  .getInTouch {
    padding: 2em;
    padding-top: 8em;
    display: flex;
    flex-direction: column;
    color: #123C62;
    width: 370px;
    height: auto;
  }

  @media screen and (max-width: 960px) {
    .contactSection {
      flex-direction: column;
    }
    .dividerBar {
      height: 60px;
    }
  }
</style>