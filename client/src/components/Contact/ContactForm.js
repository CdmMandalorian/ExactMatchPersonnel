import * as React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const res = await fetch("http://localhost:5000/upload-file", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form fluid method="post" name="emailForm" id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your Name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (<span className='errorMessage'>Please enter a valid Email</span>)}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='tel'
                      name='phone'
                      {...register('phone', {
                        required: { value: true, message: 'Please enter your Phone' },
                        maxLength: {
                          value: 14,
                          message: 'Please use 14 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Phone'
                    ></input>
                    {errors.phone && <span className='errorMessage'>{errors.phone.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='city'
                      name='city'
                      {...register('city', {
                        required: { value: true, message: 'Please enter your city' },
                        maxLength: {
                          value: 20,
                          message: 'Please use 20 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='City'
                    ></input>
                    {errors.city && (<span className='errorMessage'>Please enter City</span>)}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row subjectForm'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a Subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (<span className='errorMessage'>{errors.subject.message}</span>)}
                  </div>
                </div>
                {/* Row 4 of form */}
                <div className='row messageForm'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a Message</span>}
                  </div>
                </div>
                {/* Row 5 of form */}
                <div className='row uploadForm'>
                  <div className='col'>
                    <div class="upload-button-wrapper" style={{ display: 'block' }}>
                      <input
                        type="file"
                        name="upload"
                        id="resume"
                        required=""
                        class="is-invalid-input"
                        data-invalid=""
                        aria-invalid="true"
                        {...register('file'
                        )}
                      ></input>
                      <div id="filename"></div>
                    </div>
                    <input class="btn btn-primary mb-3"type="submit"style={{ marginTop: 10 }} />
                  </div>
                </div>
                <hr></hr>
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
      </div >
    </div >
  );
};

export default ContactForm;