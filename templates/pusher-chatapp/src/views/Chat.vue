<template>
<div class="w-screen h-screen bg-black flex flex-col text-white">
    <div class="title h-32 border-b border-b-black2 flex flex-col items-center justify-center">
        <div class="text-xl font-bold">Welcome to {{room}}, {{username}}</div>
        <div class="mt-2 text-gray-600">{{online}} online members</div>
    </div>
    <div class="messages h-full w-full p-10 overflow-scroll no-scrollbar">
        <div class="message my-3" v-for="message in messages" :key="message.message">
            <div class="username font-bold">{{message.sender}}</div>
            <div class="message text-gray-400 mt-0.5">{{message.message}}</div>
        </div>
    </div>
    <div class="w-full flex px-4 pb-4 mt-4">
        <input
            class="p-4 rounded-lg placeholder-gray-500 mr-4 w-full bg-black2/40 focus:outline-none px-8"
            placeholder="Enter the name of the room to join..."
            v-model="message"
        />
        <button class="bg-blue w-64 text-black p-4 p-4 rounded-lg" @click="send()">Send Message</button>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRoute} from 'vue-router';

interface Message {
    sender: string,
    message: string
}

const route = useRoute()
const room = route.params.id;
const username = route.query.username;
const online = ref<number>(1);

const messages = ref<Array<Message>>([

]);

const message = ref<String>();

const send = () => {

}
</script>
