<script>
export default {

}
</script>

<template>
    <nav class="header-navbar">
        <a href="/" class="navbar-brand">Ứng dụng quản lý danh bạ</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Danh bạ
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
        </div>
    </nav>

</template>

<style>
.header-navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    max-width: 1400px;
    margin: 0 auto;
}

.navbar-brand {
    font-size: var(--font-size-xl);
    font-weight: 700;
    padding: 0px 12px;
    color: var(--text-white);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: var(--transition);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand:hover {
    transform: translateY(-2px);
    color: var(--text-white);
}

.mr-auto {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-item {
    padding: 10px 24px;
    border-radius: var(--border-radius-sm);
    transition: var(--transition);
    list-style: none;
}

.nav-item:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
}

.nav-link {
    font-size: var(--font-size-md);
    padding: 4px 8px;
    color: var(--text-white);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
}

.nav-link:hover {
    color: var(--text-white);
}

.nav-link i {
    font-size: var(--font-size-l);
}

@media (max-width: 768px) {
    .header-navbar {
        padding: 16px 20px;
        flex-direction: column;
        gap: 16px;
    }
    
    .navbar-brand {
        font-size: var(--font-size-l);
    }
}
</style>