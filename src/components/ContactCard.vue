<script>
import AvatarUser from './AvatarUser.vue';
export default {
    components: {
        AvatarUser
    },

    props: {
        contact: { type: Object, required: true }
    },

    data() {
        return {
            edit: false
        }
    }
}
</script>

<template>
    <div class="contactCard-detail">
        <div class="contactCard_avatar" v-if="contact.file">
            <AvatarUser :edit="edit" :contact="contact" />
        </div>
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

.contactCard_avatar {
    margin: 0px 0px 32px 24px;
}

.p-1 {
    font-size: var(--font-size-md);
}

.favorite-icon {
    padding: 0px 8px;
    color: red;
}
</style>