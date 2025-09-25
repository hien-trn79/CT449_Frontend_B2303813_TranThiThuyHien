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
            <strong>Tên:</strong>
            {{ contact.name }}
        </div>

        <div class="p-1">
            <strong>Email:</strong>
            {{ contact.email }}
        </div>

        <div class="p-1">
            <strong>Số điện thoại:</strong>
            {{ contact.numberPhone }}
        </div>

        <div class="p-1">
            <strong>Liên hệ yêu thích:</strong>
            <i v-if="contact.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>

</template>

<style></style>