<script>
import ContactForm from "@/components/ContactForm.vue";
import AvatarUser from "./AvatarUser.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactForm,
        AvatarUser
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            contact: null,
            message: "",
            edit: true,
            file: {},
        };
    },
    methods: {
        async getContact(id) {
            try {
                this.contact = await ContactService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },

        getFileFromChild(file) {
            this.file = file;

        },

        async updateContact(data) {
            try {
                // update data
                let formData = new FormData();
                formData = await data;
                // Them file anh vao form data
                formData.file = this.file;
                const result = await ContactService.update(this.contact._id, formData)
                console.log(result);

                alert('Liên hệ được cập nhật thành công.');
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
    },
    created() {
        this.getContact(this.id);
        this.message = "";
    },

};
</script>

<template>
    <div v-if="contact" class="page">
        <h4 class="title">Hiệu chỉnh Liên hệ</h4>
        <div class="edit-img">
            <AvatarUser :edit="edit" @file="getFileFromChild" :contact="contact" />
        </div>
        <ContactForm :contact="contact" @update-contact="updateContact" @delete:contact="deleteContact" />
        <p>{{ message }}</p>
    </div>
</template>


<style>
.page {
    max-width: 800px;
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

.edit-img {
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