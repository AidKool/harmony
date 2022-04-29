import './accountEdit.css';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <> 
    <div class="editContainer"> 
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="username" {...register("username", {})} />
      <input type="text" placeholder="email" {...register("email", {})} />
      <input type="text" placeholder="bio" {...register("bio", {})} />
      <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full subBtn" type="submit" />
    </form>
    </div>
    </>
  );
}