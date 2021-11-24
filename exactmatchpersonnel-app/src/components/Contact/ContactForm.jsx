import React from 'react';
import { useForm } from 'react-hook-form';
import phoneSquareAlt from '../../Assets/Images/phone-square-alt-solid.svg';
import mapMarkedAlt from '../../Assets/Images/map-marked-alt-solid.svg';
import envelopeRegular from '../../Assets/Images/envelope-regular.svg'

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form fliud method="post" name="myemailform" action="mailto:egarcia90@verizon.net" onSubmit={handleSubmit(onSubmit)}>
      <div fliud class="form-group1">
        <label fliud for="FormControlInput2">Email </label>
        <input fliud type="email" class="inputContactform-control" id="FormControlInputEmail" placeholder="name@example.com" name="email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
      </div>
      <div fliud class="form-group2">
        <label fliud for="FormControlInput4">Subject </label>
        <input fliud type="subject" class="inputContactform-control" id="FormControlInputSubject" placeholder="Subject" {...register("Subject", { required: true, maxLength: 75 })} />
      </div>
      <div fliud class="form-group3">
        <label fliud for="FormControlTextarea">Message </label>
        <textarea fliud class="inputContactform-control" id="FormControlTextarea" rows="6" placeholder="Message" name="message" {...register("Message", { required: true, maxLength: 30 })}></textarea>
      </div>
      <button type="submit" class="btn btn-primary mb-3">Submit</button>
      <hr></hr>
      <img className="phone" src={phoneSquareAlt} alt="phone" /> <h5> 909 418 - 4181 </h5> <img className="location" src={mapMarkedAlt} alt="location" /> <h5> Southern California </h5> <img className="email" src={envelopeRegular} alt="email" /> <h5>Egarcia90@verizon.net</h5>
    </form>
  );
}