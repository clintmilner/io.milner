import React from 'react';

import '../sass/global.scss';

export default () => {
    return (
        <div className="wrapper fancypants">
            <nav className="menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li className='logo'>
                        <h1>&lt;CM /&gt;</h1>
                    </li>
                    <li>
                        <a href="#about-site">Site</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className="top">
                <header className="hero">
                    <h1>Hello</h1>
                    <p className="lead">I'm Clint Milner. <br className='break-me'/> Web Developer.</p>
                </header>
            </div>

            <section className='about' id='about'>
                <img src='https://res.cloudinary.com/milnerio/image/upload/e_art:audrey,q_auto:good/v1532895215/me.jpg'
                     alt='Clint Milner - Web Developer'/>
                <div className='about__details'>
                    <h2>About Me</h2>
                    <p>I am a US born, UK based Web Developer specializing in building Front End functionality for
                        web sites and applications. I have worked in this field since 2008 and built web sites for
                        light, medium, and heavy traffic sites, as well as greenfield software solutions.</p>
                    <p>My past experience has included working on small teams that have grown into large ones, as
                        well as working independently on employer projects and freelance client work.</p>
                    <p>Currently, I am the Head of Software Development managing a small team of software developers
                        building products in the Network Security space. I am 100% hands-on, and am responsible for
                        100% of the Front End code, but also have responsibilities in both the Full Stack, and
                        Management worlds.</p>
                </div>
            </section>

            <div className='parallax quote'>
                <h1>"Learning is a Sisyphean Exercise."</h1>
                <p className="me">- Me</p>
            </div>

            <section className='site' id='about-site'>
                <div className='site__details'>
                    <h2>About My Site</h2>
                    <p>Ideas &amp; concepts were first sketched on paper, but most of the designing took place in the
                        browser; experimenting with ideas, colors, and imagery. Once HTML and CSS was written, I
                        transferred assets to an installation of <a href='https://www.gatsbyjs.org/'>Gatsby.js</a> .
                        HTML was converted to <a href='https://reactjs.org/'>React.js</a> components, and CSS was
                        optimized with <a href='https://sass-lang.com/'>Sass</a>.</p>
                    <p>Gatsby transpiles &amp; converts all the React Components, ES6/ES7, and Sass
                        into <strong>static</strong> assets which are then deployed to a server.</p>
                    <p>Media assets are being served by <a
                        href='https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/haec30sllfywfdtxculk'>Cloudinary.com</a> which
                        offer a great on-the-fly optimization service for images and video.</p>
                    <p>The site is hosted at <a href='https://www.netlify.com'>Netlify.com</a> which has Continuous
                        Integration built in every time code is committed.</p>
                </div>
                <div className='site__contact' id='contact'>
                    <h2>Contact</h2>
                    <div className='contact__methods'>
                        <p>
                            <i className="fab fa-fw fa-github"></i>
                            <a className='brackets' href="https://github.com/clintmilner">github.com/clintmilner</a>
                        </p>
                        <p>
                            <i className="fab fa-fw fa-twitter"></i>
                            <a className='brackets' href="https://twitter.com/clint_milner">twitter.com/clint_milner</a>
                        </p>
                        <p>
                            <i className="fab fa-fw fa-spotify"></i>
                            <a className='brackets'
                               href="https://open.spotify.com/user/gatebasher_311">spotify.com/gatebasher_311</a>
                        </p>

                        <p>
                            <i className="far fa-fw fa-envelope"></i>
                            <a className='brackets' href="mailto:me@clintmilner.com">me@clintmilner.com</a>
                        </p>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; ClintMilner.com / Milner.io</p>
            </footer>
        </div>
    );
}