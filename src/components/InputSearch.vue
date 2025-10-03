<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },

        submit() {
            this.$emit("submit");
        }
    }
}

</script>

<template>
    <div class="input-group">
        <input type="text" name="input-text" id="input-text" class="form-control" placeholder="Nhập thông tin tìm kiếm"
            :value="modelValue" @click="submit" @keyup.enter="submit" @input="updateModelValue" />

        <div class="input-group-append">
            <button class="btn btn-outline-secondary btn-search" type="button" @click="submit">
                <i class="fas fa-search"></i>
                Search
            </button>
        </div>
    </div>
</template>

<style>
.form-control {
    padding: 6px 0px 6px 16px;
    font-size: var(--font-size-md);
    border: 1px solid #ccc;
    border-radius: 5px;
}

.btn-search {
    font-size: var(--font-size-md);
    padding: 6px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>