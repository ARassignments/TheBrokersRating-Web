if (document.querySelector("header")) {
  document.querySelector("header").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0 text-dark">
            <a href="index.html" class="navbar-brand p-0 hvr-wobble-horizontal">
                <img src="img/logo.png" alt="Logo">
            </a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0 text-dark">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="" class="nav-item nav-link">News</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link" data-bs-toggle="dropdown">
                            <span class="dropdown-toggle">Brokers</span>
                        </a>
                        <div class="dropdown-menu m-0">
                            <a href="" class="dropdown-item">Best Brokers</a>
                            <a href="" class="dropdown-item">Multi Assest Brokers</a>
                            <a href="" class="dropdown-item">Best CFD</a>
                            <a href="" class="dropdown-item">Best CFD For Futures</a>
                            <a href="" class="dropdown-item">Low Spread Brokers</a>
                            <a href="" class="dropdown-item">Best Crypto Changes</a>
                            <a href="" class="dropdown-item">Best Crypto Trading Platforms</a>
                            <a href="" class="dropdown-item">Ultra Low Spread Brokers</a>
                            <a href="" class="dropdown-item">Best Stock Offering Brokers</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown countries">
                        <a href="#" class="nav-link" data-bs-toggle="dropdown">
                            <span class="dropdown-toggle">Countries</span>
                        </a>
                        <div class="dropdown-menu m-0">
                            <a href="" class="dropdown-item"> <img src="img/flags/india.svg" alt="">India</a>
                            <a href="" class="dropdown-item"> <img src="img/flags/uae.svg" alt="">UAE</a>
                            <a href="" class="dropdown-item"> <img src="img/flags/bangladesh.svg" alt=""> Bangladesh</a>
                            <a href="" class="dropdown-item"> <img src="img/flags/pakistan.svg" alt=""> Pakistan</a>
                            <a href="" class="dropdown-item"> <img src="img/flags/vietnam.svg" alt=""> Vietnam</a>
                            <a href="" class="dropdown-item"> <img src="img/flags/thailand.svg" alt="">Thailand</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown ultraRated">
                        <a href="#" class="nav-link" data-bs-toggle="dropdown">
                            <span class="dropdown-toggle">Ultra Rated</span>
                        </a>
                        <div class="dropdown-menu m-0">
                            <a href="https://www.exness.global/" class="dropdown-item" target="_blank"> <img src="img/ultra rated/Exness.svg" alt=""> Exness</a>
                            <a href="https://www.grouphf.com/my/" class="dropdown-item" target="_blank"> <img src="img/ultra rated/hfm.svg" alt=""> HFM</a>
                            <a href="https://www.xmbroker-fx.com/" class="dropdown-item" target="_blank"> <img src="img/ultra rated/xm.png" alt=""> XM</a>
                            <a href="https://ictrading.com/en/" class="dropdown-item" target="_blank"> <img src="img/ultra rated/ic.svg" alt=""> IC</a>
                            <a href="https://my.octafx.com/" class="dropdown-item" target="_blank"> <img src="img/ultra rated/octa.svg" alt=""> Octa</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link" data-bs-toggle="dropdown">
                            <span class="dropdown-toggle">Platforms</span>
                        </a>
                        <div class="dropdown-menu m-0">
                            <a href="" class="dropdown-item">Low rated brokers why?</a>
                            <a href="" class="dropdown-item">Forex Trading</a>
                            <a href="" class="dropdown-item">CFD Futures Trading</a>
                            <a href="" class="dropdown-item">Long Terms Trade</a>
                        </div>
                    </div>
                    <a href="about.html" class="nav-item nav-link">About</a>
                    <a href="" class="nav-item nav-link">Reviews</a>
                </div>
                <a href="contact.html" class="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Contact Us</a>
            </div>
        </nav>
    `;
}

if (document.querySelector("footer")) {
  document.querySelector("footer").innerHTML = `
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div class="container py-5 border-start-0 border-end-0" style="border: 1px solid; border-color: rgb(255, 255, 255, 0.08);">
            <div class="row g-5">
                <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="footer-item">
                        <a href="index.html" class="p-0">
                            <img src="img/logo.png" alt="Logo" width="200px">
                        </a>
                        <p class="mb-4">We consider the clarity and knowledge as our core values. The company brings you the knowledge without any cost. </p>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-2">
                    <div class="footer-item">
                        <h4 class="text-white mb-4">Quick Links</h4>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> About Us</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Feature</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Attractions</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Tickets</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Blog</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Contact us</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item">
                        <h4 class="text-white mb-4">Support</h4>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Privacy Policy</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Disclaimer</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Support</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> FAQ</a>
                        <a href="#"><i class="fas fa-angle-right me-2"></i> Help</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item">
                        <h4 class="text-white mb-4">Contact Info</h4>
                        <div class="d-flex align-items-center">
                            <i class="fas fa-map-marker-alt text-primary me-3"></i>
                            <p class="text-white mb-0">123 Street New York.USA</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="fas fa-envelope text-primary me-3"></i>
                            <p class="text-white mb-0">contact@thebrokersrating.com</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="fa fa-phone-alt text-primary me-3"></i>
                            <p class="text-white mb-0">(+012) 3456 7890</p>
                        </div>
                        <div class="d-flex">
                            <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i class="fab fa-facebook-f text-white"></i></a>
                            <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i class="fab fa-twitter text-white"></i></a>
                            <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i class="fab fa-instagram text-white"></i></a>
                            <a class="btn btn-primary btn-sm-square rounded-circle me-0" href="#"><i class="fab fa-linkedin-in text-white"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright Start -->
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-md-6 text-center text-md-start mb-md-0">
                    <span class="text-body"><a href="index.html" class="text-white"><i class="fas fa-copyright text-light me-2"></i>The Brokers Rating</a>, All right reserved.</span>
                </div>
                <!-- <div class="col-md-6 text-center text-md-end text-body">
                    Designed By <a class="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a class="border-bottom text-white" href="https://themewagon.com">ThemeWagon</a>
                </div> -->
            </div>
        </div>
    </div>
    <!-- Copyright End -->
    `;
}
