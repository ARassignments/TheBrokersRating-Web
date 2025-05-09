if (document.querySelector("header")) {
    document.querySelector("header").classList.add('nk-header');
    document.querySelector("header").innerHTML = `
            <div class="nk-header-main nk-navbar-main has-separate shadow-xl">
                <div class="container">
                    <div class="nk-header-wrap">
                        <div class="nk-header-logo">
                            <a href="index.html" class="logo-link">
                                <div class="logo-wrap"><img class="logo-img" src="img/logo.png" alt="brand-logo" /></div>
                            </a>
                        </div>
                        <nav class="nk-header-menu nk-navbar">
                            <div>
                                <ul class="nk-nav">
                                    <li class="nk-nav-item">
                                        <a href="index.html" class="nk-nav-link"><span class="nk-nav-text">Home</span></a>
                                    </li>
                                    <li class="nk-nav-item">
                                        <a href="" class="nk-nav-link"><span class="nk-nav-text">News</span></a>
                                    </li>
                                    <li class="nk-nav-item has-sub">
                                        <a href="#" class="nk-nav-link nk-nav-toggle"><span class="nk-nav-text">Brokers</span></a>
                                        <ul class="nk-nav-sub nk-nav-mega row">
                                            <li class="nk-nav-item col-lg-7">
                                                <ul class="row px-3 px-lg-0 mx-auto">
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Best Brokers </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Multi Assest Brokers </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Best CFD </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Best CFD For Futures </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Low Spread Brokers </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Best Crypto Changes </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Best Crypto Trading Platforms </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Ultra Low Spread Brokers </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Best Stock Offering Brokers </a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nk-nav-item">
                                        <a href="#" class="nk-nav-link nk-nav-toggle"><span class="nk-nav-text">Countries</span></a>
                                        <ul class="nk-nav-sub nk-nav-mega nk-nav-mega-lg-home">
                                            <li class="nk-nav-item">
                                                <ul class="row mx-auto">
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="" class="nk-nav-link">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/flags/india.svg" width="50px" alt=""></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">India</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="" class="nk-nav-link">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/flags/uae.svg" width="50px" alt=""></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">UAE</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="" class="nk-nav-link">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/flags/bangladesh.svg" width="50px" alt=""></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">Bangladesh</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="" class="nk-nav-link">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/flags/pakistan.svg" width="50px" alt=""></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">Pakistan</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="" class="nk-nav-link">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/flags/vietnam.svg" width="50px" alt=""></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">Vietnam</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nk-nav-item">
                                        <a href="#" class="nk-nav-link nk-nav-toggle"><span class="nk-nav-text">Ultra Rated</span></a>
                                        <ul class="nk-nav-sub nk-nav-mega nk-nav-mega-lg-home">
                                            <li class="nk-nav-item">
                                                <ul class="row mx-auto">
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="https://www.exness.global/" class="nk-nav-link" target="_blank">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/ultra rated/Exness.svg" width="50px" height="40px" alt="" style="object-fit: contain;"></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">Exness</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="https://www.grouphf.com/my/" class="nk-nav-link" target="_blank">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/ultra rated/hfm.svg" width="50px" height="40px" alt="" style="object-fit: contain;"></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">HFM</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="https://www.xmbroker-fx.com/" class="nk-nav-link" target="_blank">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/ultra rated/xm.png" width="50px" height="40px" alt="" style="object-fit: contain;"></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">XM</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="https://ictrading.com/en/" class="nk-nav-link" target="_blank">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/ultra rated/ic.svg" width="50px" height="40px" alt="" style="object-fit: contain;"></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">IC</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="col-lg-6 col-xl-6 p-0">
                                                        <a href="https://my.octafx.com/" class="nk-nav-link" target="_blank">
                                                            <div class="media-group">
                                                                <div class="text-primary me-3"><img src="img/ultra rated/octa.svg" width="50px" height="40px" alt="" style="object-fit: contain;"></div>
                                                                <div class="media-text d-flex align-items-center sm">
                                                                    <div>
                                                                        <h2 class="lead-text fs-14 text-capitalize m-0">Octa</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nk-nav-item has-sub">
                                        <a href="#" class="nk-nav-link nk-nav-toggle"><span class="nk-nav-text">Platforms</span></a>
                                        <ul class="nk-nav-sub nk-nav-mega row row">
                                            <li class="nk-nav-item col-lg-12">
                                                <ul class="row px-3 px-lg-0 mx-auto">
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Low Rated Brokers Why? </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Forex Trading </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> CFD Futures Trading </a></li>
                                                    <li class="col-lg-6 p-0"><a href="" class="nk-nav-link"> Long Terms Trade </a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nk-nav-item">
                                        <a href="" class="nk-nav-link"><span class="nk-nav-text">About</span></a>
                                    </li>
                                    <li class="nk-nav-item">
                                        <a href="" class="nk-nav-link"><span class="nk-nav-text">Reviews</span></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="nk-header-action">
                            <ul class="nk-btn-group sm justify-content-center">
                                <li class="d-none d-md-block">
                                    <a href="contact.html" class="btn btn-primary"><span>Contact Now</span></a>
                                </li>
                                <li class="nk-navbar-toggle">
                                    <button class="btn btn-outline-dark navbar-toggle rounded-0 h-100 p-2"><em class="icon ni ni-menu"></em></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }
  

if (document.querySelector("footer")) {
    document.querySelector("footer").classList.add('nk-footer');
    document.querySelector("footer").innerHTML = `
          <div class="nk-footer-top">
                <div class="container">
                    <div class="nk-footer-content row justify-content-xl-between">
                        <div class="col-md-8 col-lg-4 col-xxl-4">
                            <div class="nk-footer-brand pb-5 pb-lg-0">
                                <div class="nk-footer-brand-info mb-4">
                                    <div class="nk-footer-logo">
                                        <a href="index.html" class="logo-link">
                                            <div class="logo-wrap"><img class="logo-img" src="img/logo.png" width="200px" alt="brand-logo"></div>
                                        </a>
                                    </div>
                                    <p>We consider the clarity and knowledge as our core values. The company brings you the knowledge without any cost.</p>
                                </div>
                                <ul class="nk-footer-social">
                                    <li><a href="#"><em class="icon ni ni-facebook-f"></em></a></li>
                                    <li><a href="#"><em class="icon ni ni-twitter"></em></a></li>
                                    <li><a href="#"><em class="icon ni ni-linkedin"></em></a></li>
                                    <li><a href="#"><em class="icon ni ni-telegram"></em></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8 col-xxl-6">
                            <div class="row justify-content-between">
                                <div class="col-sm-8 col-md-7">
                                    <div class="nk-footer-info">
                                        <h5 class="title">Pages</h5>
                                        <ul class="row gy-1 gy-sm-4">
                                            <li class="col-6"><a href="features.html">Features</a></li>
                                            <li class="col-6"><a href="about.html">About</a></li>
                                            <li class="col-6"><a href="pricing.html">Pricing</a></li>
                                            <li class="col-6"><a href="blogs.html">Blog</a></li>
                                            <li class="col-6"><a href="blog-single.html">Blog Post</a></li>
                                            <li class="col-6"><a href="customer-testimonials.html">Customer Reviews</a></li>
                                            <li class="col-6"><a href="help-center.html">Help Center</a></li>
                                            <li class="col-6"><a href="contact-us.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="nk-footer-info">
                                        <h5 class="title">Utility Pages</h5>
                                        <ul class="row gy-1 gy-sm-4">
                                            <li class="col-12"><a href="login.html">Login</a></li>
                                            <li class="col-12"><a href="signup.html">Sign up</a></li>
                                            <li class="col-12"><a href="reset-password.html">Reset Password</a></li>
                                            <li class="col-12"><a href="page-404.html">404 Not Found</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nk-footer-bottom">
                <div class="container">
                    <div class="nk-footer-content row justify-content-between">
                        <div class="col-lg-6 px-0">
                            <p class="nk-footer-copyright-text text-center text-lg-start">© 2025 <a class="fs-16" href="index.html" target="_blank"> The Brokers Rating</a>. All Rights Reserved.</p>
                        </div>
                        <div class="col-lg-6 px-0">
                            <ul class="nk-footer-copyright justify-content-center justify-content-lg-end">
                                <li><a class="nk-footer-text" href="#">Terms &amp; conditions</a></li>
                                <li><a class="nk-footer-text" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      `;
  }
  