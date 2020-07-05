import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-microchip"></span>
                    <h1>Hi, I'm <strong>Nick McCartney</strong>, an <br/> 
                    Electrical Engineering Student from<br />
                    the <a href="http://www.buffalo.edu">University at Buffalo</a>.</h1>
                    <p>This project intended to extend my understanding of web development <br /> 
                    as well as highight my experiences and interests in Electrical Engineering.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
