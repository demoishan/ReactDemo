import React from 'react';
import { Link } from "react-router-dom";
import { layoutWrapper } from '../../HOCs/LayoutWrapper';

function AboutUS() {
    return (
        <>
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>About Us</h2>
                            <ol>
                                <li> <Link to="/"> Home</Link></li>
                                <li>About Us</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="about" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="font-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
        </p>
                                <ul>
                                    <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
        </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="facts section-bg" >
                    <div className="container">
                        <div className="row counters">
                            <div className="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">232</span>
                                <p>Clients</p>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">521</span>
                                <p>Projects</p>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">1,463</span>
                                <p>Hours Of Support</p>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">15</span>
                                <p>Hard Workers</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skills" >
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Skills</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="skills-content">
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <span className="skill">HTML <i className="val">100%</i></span>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <span className="skill">CSS <i className="val">90%</i></span>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <span className="skill">JavaScript <i className="val">75%</i></span>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                    <span className="skill">Photoshop <i className="val">55%</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials" >
                    <div className="container">
                        <div className="section-title">
                            <h2>Tetstimonials</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="owl-carousel testimonials-carousel">
                            <div className="testimonial-item">
                                <img src="img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                            <div className="testimonial-item">
                                <img src="img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                            <div className="testimonial-item">
                                <img src="img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                            <div className="testimonial-item">
                                <img src="img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                            <div className="testimonial-item">
                                <img src="img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default layoutWrapper(AboutUS);