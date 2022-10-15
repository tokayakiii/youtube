<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref<string>("");
const room = ref<string>("");
const router = useRouter();

const join = () => {
    router.push({
        path: `/chat/${room.value}`,
        query: {
            username: username.value,
        },
    });
};
</script>

<template>
    <div class="w-screen h-screen bg-black flex items-center flex-col justify-center text-white">
        <div class="text-4xl font-bold">Welcome to ChatRoom!</div>
        <input
            class="p-4 rounded-lg placeholder-gray-500 w-1/2 mt-10 bg-black2/40 focus:outline-none px-8"
            placeholder="Choose a great username..."
            v-model="username"
        />
        <input
            class="p-4 rounded-lg placeholder-gray-500 w-1/2 mt-4 bg-black2/40 focus:outline-none px-8"
            placeholder="Enter the name of the room to join..."
            v-model="room"
        />
        <button class="w-1/2 bg-blue text-black p-4 mt-4 p-4 rounded-lg" @click="join()">Join</button>
    </div>
</template>
