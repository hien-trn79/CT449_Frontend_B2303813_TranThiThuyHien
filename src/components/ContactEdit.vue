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
            file: {}
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
                // Điều chỉnh trở về dạng form data
                let formData = new FormData();
                formData = await data;
                // cập nhật thêm 1 trường mới key = file
                formData.file = this.file;
                // gọi service update
                await ContactService.update(this.contact._id, formData);
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
        <ContactForm :contact="contact" @submit:contact="updateContact" @delete:contact="deleteContact" />
        <p>{{ message }}</p>
    </div>
</template>


<style>
.form-group {
    padding: 8px;
}

.edit-img {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
}
</style>