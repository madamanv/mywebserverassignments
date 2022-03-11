<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
const message = ref("Hello vue!");
const currentTab = ref("All");
const prompt = ref("Waiting for input ...");
const notifications = reactive([
  { type: "primary", message: "primary notification" },
  { type: "link", message: "link notification" },
  { type: "success", message: "success notification" },
  { type: "warning", message: "warning notification" },
  { type: "danger", message: "danger notification" },
]);
    function cardClick() {
        message.value = 'You clicked the card!';
    }
    function close(index: number) {
        notifications.splice(index, 1);
    }
                
    onMounted(() => {
        setInterval(() => {
            prompt.value += '.';
        }, 500);
    });
</script>

<template>
                <div class="section">
                <div class="columns">

                    

                    
                       
                   
                </div>
            </div>
  
</template>


<style scoped></style>