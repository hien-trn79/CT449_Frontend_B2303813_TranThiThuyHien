<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
import AvatarUser from "./AvatarUser.vue";
export default {
    components: {
        ContactForm,
        AvatarUser,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            contact: {},
            message: "",
            file: {},
            edit: true
        };
    },
    methods: {
        async createContact(data) {
            try {
                let formData = new FormData();
                formData = await data;
                formData.file = this.file;
                const result = await ContactService.create(formData);
                alert('Liên hệ được thêm mới thành công.');
                this.$router.push({ name: "contactbook" });
            } catch (error) {
                console.log(error);
            }
        },
        async deleteContact() {
            if (confirm("Bạn muốn xóa Liên hệ này?")) {
                try {
                    await ContactService.delete(this.contact._id);
                    this.$router.push({ name: "contactbook" });
                } catch (error) {
                    console.log(error);
                }
            }
        },

        getFileFromChild(file) {
            this.file = file;
            console.log(this.file)
        }
    },
};
</script>
<template>
    <div v-if="contact" class="page">
        <h4 class="title">Thêm Mới Liên hệ</h4>
        <div class="avatar_area">
            <AvatarUser :edit="edit" @file="getFileFromChild" />
        </div>
        <ContactForm :contact="contact" @update-contact="createContact" @delete:contact="deleteContact" />
        <p>{{ message }}</p>
    </div>
</template>

<style>
.page {
    max-width: 90vw;
    margin: 0 auto;
    background: var(--bg-card);
    padding: 40px;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-xl);
    border: 1px solid var(--border-color);
}

.title {
    text-align: center;
    margin-bottom: 32px;
    color: var(--primary-color);
    justify-content: center;
}

.avatar_area {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
}

@media (max-width: 768px) {
    .page {
        padding: 24px;
    }
}
</style>
