<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="/images/sdmia-white-square.png" alt="Logo" class="logo" />
      <div class="contact-info">
        <p class="address">224 E St. Joseph St.</p>
        <p class="address">Rapid City, SD 57701</p>
        <p class="email"><strong>info@sdmineralindustries.org</strong></p>
      </div>
        <p class="copyright"> &copy; {{ new Date().getFullYear() }} SDMIA </p>
    </div>
    <!-- <nav class="footer-nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav> -->
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #123C62;
  padding: 20px;
  color: #fff;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 6em;
}

.logo {
  height: auto;
  width: 120px;
}

.contact-info {
  margin-right: 20px;
}

.address {
  margin: 0 0 5px 0;
}

.email {
  margin: 0;
}

.footer-nav {
  display: flex;
}

.footer-nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

@media screen and (max-width: 960px) {
  .footer-left {
    margin-left: 2em;
  }
}
</style>
