import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


// const SERVICE_ID = 'default_service';
// const TEMPLATE_ID = 'template_jxuvy45';
// const PUBLIC_KEY = "0sAfd20SSVnRGrYve";

const Contactform = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
                )
            .then(
                (result) => {
                    alert('Email sent Successfully...');
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className='ContactForm'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className="contactForm">
                            <form id="form" ref={form} onSubmit={sendEmail}>

                                {/* Row 1 of form */}
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                            type="text" name="name" id="name" className='form-control formInput'
                                            placeholder="Name" autoComplete="off"
                                            required />
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type="text" name="email" id="email" className='form-control formInput'
                                            placeholder="Email" autoComplete="off" required
                                            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" />
                                    </div>
                                </div>
                                {/* Row 2 of form */}
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                            type="text" name="phone" id="phone" className='form-control formInput'
                                            placeholder="Phone" autoComplete="off" required />
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type="text" name="city" id="city" className='form-control formInput'
                                            placeholder="City" autoComplete="off" required />
                                    </div>
                                </div>
                                {/* Row 3 of form */}
                                <div className='row subjectForm'>
                                    <div className='col'>
                                        <input
                                            type="text" name="subject" id="subject" className='form-control formInput'
                                            placeholder="Subject" autoComplete="off" required />
                                    </div>
                                </div>
                                {/* Row 4 of form */}
                                <div className='row messageForm'>
                                    <div className='col'>
                                        <textarea
                                            rows={5} type="text" name="message" id="message" className='form-control formInput'
                                            placeholder="Message" />
                                    </div>
                                </div>
                                {/* Row 5 of form */}
                                <div className='row uploadForm'>
                                    <div className='col'>
                                        <div class="upload-button-wrapper" style={{ display: 'block' }}>
                                            <input
                                                type="file" name="Resume" id="Resume" className="is-invalid-input"
                                                required='' data-invalid="" aria-invalid="true" style={{ color: 'white' }} />
                                        </div>
                                        <div class="g-recaptcha" data-sitekey="6Lfa6YYpAAAAAP8jcVzBuxGZZkC3NiqtG6IMFy8F"></div>
                                        <input
                                            type="submit" id="button" value="Send" class="btn btn-primary mb-3" style={{ marginTop: 10, marginBottom: 10 }} />
                                    </div>
                                </div>
                                <hr className="contact"></hr>
                                <span>
                                    <FontAwesomeIcon icon={faSquarePhone} style={{ color: "#f5b51b" }} />
                                    <h5 className="contact"> 909 418 - 4181 </h5>
                                    <FontAwesomeIcon icon={faMapLocationDot} style={{ color: "#f5b51b" }} />
                                    <h5 className="contact"> Southern California </h5>
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f5b51b" }} />
                                    <h5 className="contact">Eric@exactmatchpersonnel.com</h5>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactform;