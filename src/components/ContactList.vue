<script>
export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
}
</script>

<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ contact.name }}
        </li>
    </ul>

</template>

<style>
.list-group-item {
    font-size: var(--font-size-md);
    padding: 8px 16px;
}

.list-group-item:hover {
    background-color: #eeeeeea4;
    cursor: pointer;
    color: var(--text-black);
}

.list-group-item:active {
    transform: scale(0.99);
}
</style>