<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-ligh fixed-top navbar-color">
      <a class="navbar-brand" href="#">
        <img src="images/logo.png" alt class="logo-img" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About US</a>
          </li>
          <li class="nav-item">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown sub-menu">
                <a
                  class="nav-link"
                  id="sv"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Services</a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                  <a class="dropdown-item" href="#">Advisory</a>
                  <a class="dropdown-item" href="#">Website</a>
                  <a class="dropdown-item" href="#">Software</a>
                  <a class="dropdown-item" href="#">Mobile</a>
                  <a class="dropdown-item" href="#">Marketing</a>
                  <a class="dropdown-item" href="#">Recruitment</a>
                </div>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">News</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact Us</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto user-info">
          <li class="nav-item register">
            <a href="#" class="nav-link">Registration</a>
          </li>
          <li class="nav-item login">
            <a class="nav-link" href="#">Login</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="images/AdminLTELogo.png"
                alt="AdminLTE Logo"
                class="img-circle"
              />
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" class="dropdown-item">Update Profile</a>
              <a href="#" class="dropdown-item">Update Password</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Update Key Google</a>
              <a href="#" class="dropdown-item">Update Key Trello</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>