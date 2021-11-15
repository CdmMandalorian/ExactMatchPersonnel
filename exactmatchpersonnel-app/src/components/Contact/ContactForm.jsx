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
      <div fliud class="form-group">
        <label fliud for="FormControlInput1">Name </label>
        <input fliud type="name" className="inputContactform-control" id="FormControlInputName" placeholder="Jon Smith" name="name" {...register("Name", { required: true, maxLength: 30 })} />
      </div>
      <div fliud class="form-group">
        <label fliud for="FormControlInput2">Email </label>
        <input fliud type="email" class="inputContactform-control" id="FormControlInputEmail" placeholder="name@example.com" name="email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
      </div>
      <div fliud class="form-group">
        <label fliud for="FormControlInput4">Subject </label>
        <input fliud type="subject" class="inputContactform-control" id="FormControlInputSubject" placeholder="Subject" {...register("Subject", { required: true, maxLength: 75 })} />
      </div>
      <div fliud class="form-group">
        <label fliud for="FormControlInput3">Number </label>
        <input fliud type="tel" class="inputContactform-control" id="FormControlInputNumber" placeholder="(123) 456-7890" name="number" {...register("Mobile number", { required: true, maxLength: 12 })} />
      </div>
      <div fliud class="form-group">
        <label fliud for="FormControlTextarea">Message </label>
        <textarea fliud class="inputContactform-control" id="FormControlTextarea" rows="6" placeholder="Message" name="message" {...register("Message", { required: true, maxLength: 30 })}></textarea>
      </div>
      <button type="submit" class="btn btn-primary mb-3">Submit</button>
      <hr></hr>
      <img className="phone" src={phoneSquareAlt} alt="phone" /> 909 418 - 4181 <img className="location" src={mapMarkedAlt} alt="location" /> Southern California <img className="email" src={envelopeRegular} alt="email" /> Egarcia90@verizon.net
    </form>
  );
}