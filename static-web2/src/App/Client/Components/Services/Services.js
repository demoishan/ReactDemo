import React from 'react';
import { Link } from "react-router-dom";
import { layoutWrapper } from '../../HOCs/LayoutWrapper';

function Services() {
  return (
    <>
      <main id="main">

        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Our Services</h2>
              <ol>
                <li><Link to="/"> Home</Link></li>
                <li>Our Services</li>
              </ol>
            </div>

          </div>
        </section>

        <section className="services">
          <div className="container">

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                <div className="icon-box icon-box-pink">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                <div className="icon-box icon-box-cyan">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div className="icon-box icon-box-green">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4 className="title"><a href="">Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                <div className="icon-box icon-box-blue">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4 className="title"><a href="">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section className="why-us section-bg" >
          <div className="container">

            <div className="row">
              <div className="col-lg-6 video-box">
                <img src="img/why-us.jpg" className="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-center p-5">

                <div className="icon-box">
                  <div className="icon"><i className="bx bx-fingerprint"></i></div>
                  <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>

                <div className="icon-box">
                  <div className="icon"><i className="bx bx-gift"></i></div>
                  <h4 className="title"><a href="">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="service-details">
          <div className="container">

            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch"  >
                <div className="card">
                  <div className="card-img">
                    <img src="img/service-details-1.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="#">Our Mission</a></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch"  >
                <div className="card">
                  <div className="card-img">
                    <img src="img/service-details-2.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="#">Our Plan</a></h5>
                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                    <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
                  </div>
                </div>

              </div>
              <div className="col-md-6 d-flex align-items-stretch"  >
                <div className="card">
                  <div className="card-img">
                    <img src="img/service-details-3.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="#">Our Vision</a></h5>
                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                    <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch"  >
                <div className="card">
                  <div className="card-img">
                    <img src="img/service-details-4.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="#">Our Care</a></h5>
                    <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut</p>
                    <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="pricing section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Pricing</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row no-gutters">

              <div className="col-lg-4 box">
                <h3>Free</h3>
                <h4>$0<span>per month</span></h4>
                <ul>
                  <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                  <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                  <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                  <li className="na"><i className="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                  <li className="na"><i className="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                </ul>
                <a href="#" className="get-started-btn">Get Started</a>
              </div>

              <div className="col-lg-4 box featured">
                <h3>Business</h3>
                <h4>$29<span>per month</span></h4>
                <ul>
                  <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                  <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                  <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                  <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                  <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="get-started-btn">Get Started</a>
              </div>

              <div className="col-lg-4 box">
                <h3>Developer</h3>
                <h4>$49<span>per month</span></h4>
                <ul>
                  <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                  <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                  <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                  <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                  <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="get-started-btn">Get Started</a>
              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default layoutWrapper(Services);