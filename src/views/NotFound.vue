<script>
export default {

}
</script>

<template>
    <div class="not-found-container">
        <div class="not-found-content">
            <div class="error-code">404</div>
            <div class="error-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h2 class="error-title">Trang không tìm thấy</h2>
            <p class="error-message">Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <router-link to="/" class="back-home-btn">
                <i class="fas fa-home"></i>
                Về trang chủ
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    padding: 40px 20px;
}

.not-found-content {
    text-align: center;
    max-width: 600px;
    background: var(--bg-card);
    padding: 60px 40px;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-xl);
    border: 1px solid var(--border-color);
}

.error-code {
    font-size: 10rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 20px;
    animation: pulse 2s ease-in-out infinite;
}

.error-icon {
    font-size: 6rem;
    color: var(--warning-color);
    margin-bottom: 24px;
    animation: bounce 2s ease-in-out infinite;
}

.error-title {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 16px;
}

.error-message {
    font-size: var(--font-size-md);
    color: var(--text-secondary);
    margin-bottom: 32px;
    line-height: 1.6;
}

.back-home-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    font-size: var(--font-size-md);
    font-weight: 600;
    color: var(--text-white);
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
    box-shadow: var(--shadow-md);
}

.back-home-btn:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-xl);
    color: var(--text-white);
}

.back-home-btn i {
    font-size: var(--font-size-l);
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@media (max-width: 768px) {
    .not-found-content {
        padding: 40px 24px;
    }

    .error-code {
        font-size: 8rem;
    }

    .error-icon {
        font-size: 4rem;
    }
}
</style>