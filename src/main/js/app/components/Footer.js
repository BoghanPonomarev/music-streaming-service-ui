import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';


function Footer(props) {
    return (
        <footer id="footer" className="panel">
            <div className="inner split">
                <div>
                    <p className="copyright">
                        &copy; Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
                    </p>
                </div>
                <div>
                    <section>
                        <h2>Get in touch</h2>
                        <form method="post" action="#">
                            <div className="fields">
                                <div className="field half">
                                    <input type="text" name="name" id="name" placeholder="Name"/>
                                </div>
                                <div className="field half">
                                    <input type="text" name="email" id="email" placeholder="Email"/>
                                </div>
                                <div className="field">
                                    <textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value="Send" className="primary"/></li>
                                <li><input type="reset" value="Reset"/></li>
                            </ul>
                        </form>
                    </section>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
