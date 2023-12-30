import React from 'react'
import FormInput from '../components/FormInput';

const page = () => {
  return (
    <div className="p-10">
      <div className="bg-tertiary-color w-[40%] mx-auto p-4">
        <h1 className="text-yellow-500 text-center text-2xl">Contact me</h1>
        <form action="">
          <FormInput
            type={"text"}
            name={"name"}
            label={"name"}
            labelFor={"name"}
          />
          <FormInput
            type={"email"}
            name={"email"}
            label={"email"}
            labelFor={"email"}
          />
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="w-full"
            ></textarea>
          </div>
          <button className='my-3 p-4 bg-secondary-color text-black w-full'>Send message</button>
        </form>
      </div>
    </div>
  );
}

export default page