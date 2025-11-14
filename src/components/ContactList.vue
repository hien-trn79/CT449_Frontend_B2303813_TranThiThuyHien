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
.list-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.list-group-item {
    font-size: var(--font-size-md);
    font-weight: 500;
    padding: 16px 20px;
    background: var(--bg-light);
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    color: var(--text-primary);
}

.list-group-item:hover {
    background-color: var(--bg-white);
    border-color: var(--primary-light);
    transform: translateX(8px);
    box-shadow: var(--shadow-md);
}

.list-group-item.active {
    background: linear-gradient(140deg, #6791ec 0%, #00098d 100%);
    color: var(--text-white);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-lg);
    transform: translateX(8px);
    font-weight: 600;
}

.list-group-item:active {
    transform: translateX(6px) scale(0.98);
}
</style>