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
.input-group {
    display: flex;
    gap: 12px;
    background: var(--bg-card);
    padding: 20px;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
}

.form-control {
    padding: 14px 20px;
    font-size: var(--font-size-md);
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    flex: 1;
    transition: var(--transition);
    background: var(--bg-white);
    color: var(--text-primary);
}

.form-control:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-control::placeholder {
    color: var(--text-muted);
    font-style: italic;
}

.input-group-append {
    display: flex;
}

.btn-search {
    font-size: var(--font-size-md);
    font-weight: 600;
    padding: 14px 28px;
    border-radius: var(--border-radius);
    background: linear-gradient(140deg, #6791ec 0%, #1723cf 100%);
    color: var(--text-white);
    border: none;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: var(--shadow-sm);
}

.btn-search:hover {
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    background: linear-gradient(140deg, #6791ec 0%, #00098d 100%);
}

.btn-search:active {
    transform: translateY(0px);
}

.btn-search i {
    font-size: var(--font-size-l);
}

@media (max-width: 768px) {
    .input-group {
        flex-direction: column;
        padding: 16px;
    }

    .btn-search {
        width: 100%;
        justify-content: center;
    }
}
</style>