<script setup>

</script>


<template>

<div class="topbar">
  <div class="logo"><img src="../assets/img/GFi_960x250.png" alt="logo"></div>
<nav>
  <ul>
  <li><a href="http://">Games</a></li>
  <li><a href="http://">活動專區</a></li>
  <li><a href="http://">賦能兌換</a></li>
  <li><a href="http://">帳戶專區</a></li>
  <li><a href="http://">GFiWiki</a></li>
</ul>
<input type="search" name="search-bar" id="side-search">
</nav>

</div>

</template>

<style lang="scss">
@import "../assets/sass/media.scss";

.topbar{
  margin: auto;
  padding: 1%;
  display: flex;
  .logo{
    img{
      width: 100%;
    }
  }
}
nav{
  width: 100%;
  margin: auto;  
  display: grid;
  justify-content: space-between;
  
  ul{
    width: 100%;
    grid-column: 1/3;
    grid-row: 1/2;
    
    li{
      width: calc($width / 5); //100%除以按鈕數
      display: inline-block; //連結方框化
      color: #FFF;
      font-size: 1.3em; //視窗高度變字體大小bar用的
      @include padpro{
        display: none;
      }
        a{
        padding: 10px; 
        display: block; 
        color: inherit; // 移除超連結顏色 
        text-decoration: none;  // 移除超連結底線
        }
    }
  }

  input{
    grid-column: 3/10;
    grid-row: 1/2;
    width: 90%;
    height: 30px;
    margin: auto;
    border-radius: 3.5vmin;
    @include padpro{
      grid-column: 1/3;
      }
      @include mobile{
        height: 20px;
      }
  }

}




</style>
