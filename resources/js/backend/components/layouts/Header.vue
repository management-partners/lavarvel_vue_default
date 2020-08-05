<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="/admin" role="button">
          <i class="fas fa-bars"></i>
        </a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <ol class="breadcrumb float-sm-left">
            <li class="breadcrumb-item">
              <a href="/admin">Home</a>
            </li>
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ">
        <a class="nav-link" href="#">
          Register
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Login
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <div class="user-panel d-flex">
            <img src="/backend/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
          </div>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">Information</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-user mr-2"></i> Profile
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-unlock mr-2"></i> Password
          </a>
          <div class="dropdown-divider"></div>
          <span class="dropdown-item dropdown-header">Management</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fab fa-google mr-2"></i> Google Key
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fab fa-trello mr-2"></i> Trello Key
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">Logout</a>
        </div>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>

<script>
export default {};
</script>