<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
            contactLocal: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
        Cancel() {
            const reply = window.confirm('Bạn sẽ không lưu những thay đổi ? Bạn chắc chắc rời khỏi trang web?');
            if (!reply) return false;
            return this.$router.push({ name: 'contactbook' })
        },
        UpdateContact() {
            this.$emit("update-contact", this.contactLocal);
        }
    }

}
</script>

<template>
    <Form @submit="submitContact" :validation-schema="contactFormSchema">
        <div class="form-group">
            <label class="form-label" for="name">Tên</label>
            <Field name="name" type="text" class="form-control" v-model="contactLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label class="form-label" for="email">E-mail</label>
            <Field name="email" type="email" class="form-control" v-model="contactLocal.email" />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label class="form-label" for="address">Địa chỉ</label>
            <Field name="address" type="text" class="form-control" v-model="contactLocal.address" />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
            <label class="form-label" for="phone">Điện thoại</label>
            <Field name="phone" type="tel" class="form-control" v-model="contactLocal.numberPhone" />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input name="favorite" type="checkbox" class="form-check-input" v-model="contactLocal.favorite" />
            <label for="favorite" class="form-check-label form-label">
                <strong>Liên hệ yêu thích</strong>
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary" @click.prevent="UpdateContact">Lưu</button>
            <button v-if="contactLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteContact">
                Xóa
            </button>
            <button type="button" class="ml-2 btn btn-danger" @click="Cancel">
                Thoát
            </button>
        </div>
    </Form>
</template>

<style>
.form-group {
    margin-bottom: 24px;
}

.form-label {
    display: block;
    padding: 8px 0px;
    font-size: var(--font-size-md);
    font-weight: 600;
    color: var(--text-primary);
}

.form-control {
    width: 100%;
    padding: 14px 18px;
    font-size: var(--font-size-md);
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    transition: var(--transition);
    background: var(--bg-white);
    color: var(--text-primary);
}

.form-control:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-check {
    display: flex;
    align-items: center;
    padding: 16px;
    background: var(--bg-light);
    border-radius: var(--border-radius);
    margin-bottom: 24px;
}

.form-check-input {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    cursor: pointer;
    accent-color: var(--primary-color);
}

.form-check-label {
    font-size: var(--font-size-md);
    cursor: pointer;
    margin: 0;
    padding: 0;
}

.error-feedback {
    color: var(--danger-color);
    font-size: var(--font-size-sm);
    font-weight: 500;
    margin-top: 6px;
    display: block;
    padding-left: 4px;
}

.form-group>.btn {
    margin-right: 12px;
}

.btn.ml-2 {
    margin-left: 12px;
    margin-right: 0;
}
</style>