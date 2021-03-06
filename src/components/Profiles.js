import React, { Component } from 'react'

export default class Profiles extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <a class="navbar-brand" href="landing.html">DevConnector</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="profiles.html"> Developers
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="register.html">Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.html">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 
  <div class="profiles">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4 text-center">Developer Profiles</h1>
          <p class="lead text-center">Browse and connect with developers</p>

          
          <div class="card card-body bg-light mb-3">
            <div class="row">
              <div class="col-2">
                <img class="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
              </div>
              <div class="col-lg-6 col-md-4 col-8">
                <h3>John Doe</h3>
                <p>Developer at Microsoft</p>
                <p>Seattle, WA</p>
                <a href="profile.html" class="btn btn-info">View Profile</a>
              </div>
              <div class="col-md-4 d-none d-lg-block">
                <h4>Skill Set</h4>
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>HTML</li>
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>CSS</li>
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>JavaScript</li>
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>Python</li>
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>C#</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card card-body bg-light mb-3">
            <div class="row">
              <div class="col-2">
                <img class="rounded-circle" src="https://www.gravatar.com/avatar/anything?s=200&d=mm" alt="" />
              </div>
              <div class="col-lg-6 col-md-4 col-8">
                <h3>John Doe</h3>
                <p>Developer at Microsoft</p>
                <p>Seattle, WA</p>
                <a href="profile.html" class="btn btn-info">View Profile</a>
              </div>
              <div class="col-md-4 d-none d-lg-block">
                <h4>Skill Set</h4>
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>HTML</li>
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>CSS</li>
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>PHP</li>
                  <li class="list-group-item">
                    <i class="fa fa-check pr-1"></i>MySQL</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
            </div>
        )
    }
}
