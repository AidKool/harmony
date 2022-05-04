import React  from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_MUSICIAN } from '../../utils/mutations';
import Auth from '../../utils/auth';


export default function App(props) {
const [updateMusician, { error, data }] = useMutation(UPDATE_MUSICIAN);
const musicianId = props.user.musicianId._id



  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async formData =>{
    console.log('formData' , formData, musicianId)
    try {
    const { data } = await updateMusician({
      variables: { ...formData, musicianId: musicianId },
    });
    console.log("data" , data);
  } catch (e) {
    console.error(e);
  }

  };

  //get profiles from params
 
  // const musicianId = user.musicianId._id
  // console.log(musicianId)
  if(props.user){ 
    
  console.log("MUSICIAN EDIT: Musician ID" , props.user.musicianId._id)
  console.log("MUSICIAN EDIT: user" , props.user._id)

  
    return (
      <> 
      {Auth.loggedIn() &&     
      <form class="" onSubmit={handleSubmit(onSubmit)}>
       <input type="text" placeholder="firstName" {...register("firstName", {})} />
       <input type="text" placeholder="lastName" {...register("lastName", {})} />
      
      <select {...register("instruments")} multiple>
        <option value="Guitar">Guitar</option>
        <option value="Drums">Drums</option>
        <option value="Vocals">Vocals</option>
        <option value="Bass">Bass</option>
      </select>
       <select {...register("available",{setValueAs: (x)=>Boolean(x)})}>
        <option value={""}>No!</option>
        <option value={true}>Yes!</option>
      </select>
        <input class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full subBtn" type="submit" />
      </form>
      }
   
      </>
    );
}
}


//call a user here
//get the user.musician._id
//use this to update form 


//currently not rendering 
