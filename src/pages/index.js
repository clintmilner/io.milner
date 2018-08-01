import React from "react";
import Link from 'gatsby-link';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../sass/global.scss';

export default () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="fullscreen-bg">
                    <video loop muted autoPlay
                           poster="https://res.cloudinary.com/milnerio/image/upload/q_auto/golden.png"
                           className="fullscreen-bg__video">
                        <source src="https://res.cloudinary.com/milnerio/video/upload/q_auto/golden.webm"
                                type="video/webm" />
                        <source src="https://res.cloudinary.com/milnerio/video/upload/q_auto/golden.mp4"
                                type="video/mp4" />
                        <source src="https://res.cloudinary.com/milnerio/video/upload/q_auto/golden.ogv"
                                type="video/ogg" />
                    </video>
                </div>
                <header className="sticky-top row align-items-center justify-content-center shadow-sm">
                    <div className="col">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 text-center logo">
                        <h1>&lt;CM /&gt;</h1>
                    </div>
                    <div className="col">
                        <div className="col">
                            <ul className="nav justify-content-center">
                                {/*<li className="nav-item">*/}
                                    {/*<a className="nav-link" href="work.html">Work</a>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                <div className="jumbotron jumbotron-fluid row">
                    <div className="container">
                        <div className="text-center logo">
                            <h1>&lt;CM /&gt;</h1>
                        </div>
                        <h1>Hello.</h1>
                        <p className="lead">I'm Clint Milner. Web Developer.</p>
                    </div>
                </div>

                <section id='about' className="row details">
                    <div className="col-sm-3">
                        <img className="headshot" src="http://res.cloudinary.com/milnerio/image/upload/e_art:audrey,q_auto:good/v1532895215/me.jpg"
                             width="100%" alt="Clint Milner"/>
                    </div>
                    <div className="col-sm-9">
                        <h2>About Me</h2>
                        <p>I am a US born, UK based Web Developer specializing in building Front End functionality for
                            web sites and applications. I have worked in this field since 2008 and built web sites for
                            light, medium, and heavy traffic sites, as well as greenfield software solutions.</p>
                        <p>My past experience has included working on small teams that have grown into large ones, as
                            well as working independently on employer projects and freelance client work.</p>
                        <p>Currently I am the Head of Software Development managing a small team of software developers
                            building products in the Network Security space. I am 100% hands-on, and am responsible for
                            100% of the Front End code, but also have responsibilites in both the Full Stack, and Management worlds.</p>
                        <p></p>
                    </div>
                </section>

                <div className='paralax'></div>

                <section className="row details">
                    <div className="col-sm-8">
                        <h2>About My Site</h2>
                        <p>Ideas &amp; concepts were first sketched on paper, but most of the designing took place in the browser; experimenting with ideas, colors, and imagery. Once HTML and CSS was written, I transferred assets to an installation of <a href='https://www.gatsbyjs.org/'>Gatsby.js</a> . HTML was converted to <a href='https://reactjs.org/'>React.js</a> components, and CSS was optimized with <a href='https://sass-lang.com/'>Sass</a>.</p>
                        <p>Gatsby transpiles &amp; converts all the React Components, ES6/ES7, and Sass into <strong>static</strong> assets which are then deployed to a server.</p>
                        <p>Media assets are being served by <a href='https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/haec30sllfywfdtxculk'>Cloudinary.com</a> which offer a great on-the-fly optimization service for images and video.</p>
                        <p>The site is hosted at <a href='https://www.netlify.com'>Netlify.com</a> which has Continious Integration built in every time code is committed.</p>
                    </div>
                    <div className='col-sm-3' id='contact'>
                        <h2>Contact</h2>
                        <ul className="list-group">
                            <li className="list-group-item bg-dark d-flex justify-content-between align-items-center">
                                E-Mail:
                                <a href='mailto:me@clintmilner.com' target='_blank' className="badge badge-secondary">me@clintmilner.com</a>
                            </li>
                            <li className="list-group-item bg-dark d-flex justify-content-between align-items-center">
                                GitHub:
                                <a href='https://github.com/clintmilner' target='_blank' className="badge badge-secondary">https://github.com/clintmilner</a>
                            </li>
                            <li className="list-group-item bg-dark d-flex justify-content-between align-items-center">
                                Twitter:
                                <a href='https://twitter.com/clint_milner' target='_blank' className="badge badge-secondary">https://twitter.com/clint_milner</a>
                            </li>
                            <li className="list-group-item bg-dark list-group-item-action flex-column align-items-start">
                                <br />
                                <p className="mb-1">"Learning is a Sisyphean Exercise"</p>
                                <p className="text-muted align-right">- Me</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <footer>
                    <div className="row">
                        <div className="col-sm-12">&copy; ClintMilner.com / Milner.io</div>
                    </div>
                </footer>

            </div>
        </div>
    );
}