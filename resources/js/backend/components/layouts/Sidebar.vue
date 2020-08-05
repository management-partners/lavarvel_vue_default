<template>
<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/admin" class="brand-link">
        <img src="/backend/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8" />
        <span class="brand-text font-weight-light">Administrator</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <router-link to="/admin/category" class="nav-link">
                        <i class="nav-icon fas fa-th"></i>
                        <p>Categories</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/news" class="nav-link">
                        <i class="nav-icon fas fa-copy"></i>
                        <p>News</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/users" class="nav-link">
                        <i class="nav-icon fas fa-user-friends"></i>
                        <p>Users</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/contacts" class="nav-link">
                        <i class="nav-icon fas fa-theater-masks"></i>
                        <p>Contacts</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/location" class="nav-link">
                        <i class="nav-icon fas fa-map-marker-alt"></i>
                        <p>Location</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/about" class="nav-link">
                        <i class="nav-icon fas fa-shield-alt"></i>
                        <p>About</p>
                    </router-link>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
</template>

<script>
export default {
    name: "Sidebar",
    data: function () {
        return {};
    },
    components: {}
};
</script>
