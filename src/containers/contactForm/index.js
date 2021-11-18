import { useState } from 'react';

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    password: '',
    email: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <form onSubmit={handleFormSubmit} className='space-y-4'>
      <div className='flex flex-col items-center justify-center space-y-2 w-96'>
        <label htmlFor='username'>Username</label>
        <input
          className='w-full p-2 rounded-md shadow-md text-center'
          type='text'
          id='username'
          placeholder='Enter your username'
          onChange={(e) =>
            setFormValue((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
      </div>
      <div className='flex flex-col items-center justify-center space-y-3 w-96'>
        <label htmlFor='password'>Password</label>
        <input
          className='w-full p-2 rounded-md shadow-md text-center'
          type='text'
          id='password'
          placeholder='Enter your password'
          onChange={(e) =>
            setFormValue((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </div>
      <div className='flex flex-col items-center justify-center space-y-2 w-96'>
        <label htmlFor='email'>Email</label>
        <input
          className='w-full p-2 rounded-md shadow-md text-center'
          type='text'
          id='email'
          placeholder='Enter your email'
          onChange={(e) =>
            setFormValue((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </div>
      <div className='flex flex-col items-center justify-center space-y-2 w-96'>
        <button className='border-2 border-white text-white p-2 m-4 w-20 rounded-md'>
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
