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
    padding: 20px;
}

.navbar-brand {
    font-size: var(--font-size-xl);
    font-weight: bold;
    padding: 0px 12px;
}

.nav-item {
    padding: 4px 20px;
    border-radius: 5px;
}

.nav-item:hover {
    background-color: rgba(151, 206, 253, 0.212);
    box-shadow: 2px 2px 2px rgba(105, 159, 220, 0.212);
}

.nav-item:hover .nav-link {
    color: rgb(16, 110, 250);
}

.nav-link {
    font-size: var(--font-size-l);
    padding: 4px 16px;
    color: var(--text-black);
    font-weight: 500;
}

.navbar_icon {
    width: 20px;

}
</style>