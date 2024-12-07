<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="/" class="footer-logo">
          <img class="logo" src="../assets/icon/logo.png" alt="logo" />
        </router-link>
        <div class="footer-nav">
          <ul>
            <li><a href="#">Ресторанам</a></li>
            <li><a href="#">Курьерам</a></li>
            <li><a href="#">Прес-центр</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div class="footer-sochial">
          <img src="../assets/icon/Group 1.png" alt="inst" />
          <img src="../assets/icon/Group 2.png" alt="fk" />
          <img src="../assets/icon/Group 3.png" alt="vk" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  height: 156px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.footer-box {
  border: 1px solid #000;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
}
.footer-nav {
  flex-grow: 1;
}

.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 15px;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.footer-nav ul li {
  font-size: 18px;
  text-align: left;
  color: #595959;
}

a {
  text-decoration: none;
  color: #000;
}

.footer-sochial {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
</style>
