
<template>

 <div class="topbar">
        <div class="menu">
            <div class="menuicon">
                <img src="../assets/menuicon.png">
            </div>
        </div>
        <div class="search">
            <input
                type="text"
                placeholder=" 搜尋標題 / NFT......"
            >
        </div>
        <div class="profile">
            <img src="../assets/profile.png">
        </div>
    </div>

</template>

<script setup>


const topbar = {
    
}

</script>


<style scoped>
    .menuicon{
        position:absolute;


    }
.topbar {
    display: flex;
    height: 51px;
    justify-content: space-around;
}

.topbar input {
    width: 296px;
    height: 24px;
    border-radius: 10px;
    background-color: #292929;
    border-color: rgb(255, 255, 255);
    text-indent: 30px;
    line-height: 51px;
    box-sizing: border-box;
}

.menu {
    display: flex;
    margin: auto;
    margin-left: 3%;
    box-sizing: border-box;

}
</style>
