<script setup></script>

<template>
  <div class="post">
    <div class="header">GFi 遊戲賦能平台</div>
    <div class="footer">
      20年來遊戲新幹線陪伴玩家探索遊戲無窮的樂趣，而『GFi賦能平台』以「Game」為底、「Flier」傳遞服務，「
      infinity」象徵無窮的想像，從此我們都有了全新的身分，一起「賦」予元宇宙的世界裡充滿無限的可「能」。
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_RWD.scss";

body {
  background-image: url("../img/backgrond-page1.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.post {
  width: 734px;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 19px;
  .header {
    margin-left: 3%;
    font-family: "Hind Mysuru";
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    line-height: 111px;
  }
  .footer {
    margin-left: 3%;
    font-family: "CantoraOne";
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 34px;
  }
}
@include padpro {
}
@include pad {
}
@include mobile {
}
</style>
