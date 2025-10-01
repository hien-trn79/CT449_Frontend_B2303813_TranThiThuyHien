<script>
export default {
    props: {
        contact: { type: Object, required: true }
    }
}
</script>

<template>
    <div class="contactCard-detail">
        <div class="p-1">
            <label>Tên:</label>
            {{ contact.name }}
        </div>

        <div class="p-1">
            <label>Email:</label>
            {{ contact.email }}
        </div>

        <div class="p-1">
            <label>Số điện thoại:</label>
            {{ contact.numberPhone }}
        </div>

        <div class="p-1">
            <strong>Liên hệ yêu thích:</strong>
            <i v-if="contact.favorite" class="fa-solid fa-heart favorite-icon"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>

</template>

<style>
label {
    font-size: var(--font-size-md);
    font-weight: bold;
    padding-right: 8px;
}

.p-1 {
    font-size: var(--font-size-md);
}

.favorite-icon {
    padding: 0px 8px;
    color: red;
}
</style>