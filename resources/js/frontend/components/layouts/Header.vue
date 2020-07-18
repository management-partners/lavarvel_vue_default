<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-ligh fixed-top navbar-color">
      <router-link class="navbar-brand"  to="/"><img src="images/logo.png" alt class="logo-img" /></router-link>
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
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about-us">About US</router-link>
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
                  <router-link class="dropdown-item" to="/advisory">Advisory</router-link>
                  <router-link class="dropdown-item" to="/website">Website</router-link>
                  <router-link class="dropdown-item" to="/software">Software</router-link>
                  <router-link class="dropdown-item" to="/mobile">Mobile</router-link>
                  <router-link class="dropdown-item" to="/marketing">Marketing</router-link>
                  <router-link class="dropdown-item" to="/recruitment">Recruitment</router-link>
                </div>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/news">News</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-us">Contact Us</router-link>          
          </li>
        </ul>
        <ul class="navbar-nav ml-auto user-info">
          <li class="nav-item register">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item login">
            <router-link class="nav-link" to="/login">Login</router-link>
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
              <router-link class="dropdown-item" to="/update-profile">Update Profile</router-link>
              <router-link class="dropdown-item" to="/update-password">Update Password</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/update-google">Update Key Google</router-link>
              <router-link class="dropdown-item" to="/update-trello">Update Key Trello</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/logout">Logout</router-link>
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