const {create,ref} = Vue;
const vm = createApp({
    setup(){
        const message = ref('hello Vue 3.0');
        return{message}
    }
});
vm.mount('#app')