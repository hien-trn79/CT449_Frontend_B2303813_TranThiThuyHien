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
            <img :src="contact.file" alt="" class="avatar-img contactCard-img">
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
.contactCard-detail {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 24px;
}

label {
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding-right: 8px;
    display: inline-block;
    min-width: 140px;
}

.contactCard_avatar {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
}

.p-1 {
    font-size: var(--font-size-md);
    color: var(--text-primary);
    padding: 16px;
    background: var(--bg-light);
    border-radius: var(--border-radius-sm);
    border-left: 4px solid var(--primary-color);
    transition: var(--transition);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-1:hover {
    background: var(--bg-white);
    transform: translateX(4px);
    box-shadow: var(--shadow-sm);
}

.favorite-icon {
    padding: 0px 8px;
    color: #e53e3e;
    animation: heartbeat 1.5s ease-in-out infinite;
    font-size: var(--font-size-l);
}

.fa-times {
    color: var(--text-muted);
    font-size: var(--font-size-l);
}

@keyframes heartbeat {

    0%,
    100% {
        transform: scale(1);
    }

    10%,
    30% {
        transform: scale(1.1);
    }

    20%,
    40% {
        transform: scale(1);
    }
}

.contactCard-img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}
</style>