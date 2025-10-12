<script>
export default {
    props: ['edit', 'contact'],
    data() {
        return {
            userAvatar: '',
        }
    },
    methods: {
        upload() {
            this.$refs.uploadInput.click();
        },

        handlerFileUpload() {
            const file = event.target.files[0];
            if (file) {
                this.$emit('file', file);
            }
        }
    },

    mounted() {
        if (this.contact) {
            this.userAvatar = this.contact.file;
        }
    }
}
</script>

<template>
    <form class="upload-img user_avatar" id="form_avatar" method="post" enctype="multipart/form-data">
        <input type="file" name="uploadAvatar" id="" class="input-file upload_img-input" hidden="true" ref="uploadInput"
            v-if="edit" @change="handlerFileUpload">
        <div class="img_area" @click="upload">
            <i class="fa-solid fa-cloud-arrow-up upload--icon" v-if="edit"></i>
            <img :src="userAvatar" alt="" class="avatar-img">
        </div>
    </form>
</template>

<style>
.upload-img {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.08);
    height: 120px;
    width: 120px;
    border-radius: 50%;
    overflow: hidden;
}

.avatar-img {
    height: 120px;
    object-fit: cover;
}

.upload--icon {
    font-size: 3rem;
    color: #959595;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.upload--icon:hover {
    color: #ccc;
}

.img_area {
    position: relative;
}

.img_area:hover {
    cursor: pointer;
}
</style>