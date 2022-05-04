import React  from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_BAND } from '../../utils/mutations';
import Auth from '../../utils/auth';


export default function App(props) {
const [updateBand, { error, data }] = useMutation(UPDATE_BAND);
// const bandId = props.user.bandId._id
console.log("band ID from edit" , props.user.bandId._id)
const bandId = props.user.bandId._id

console.log(bandId)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async formData =>{
    console.log('formData' , formData, bandId)
    try {
    const { data } = await updateBand({
      variables: { ...formData, bandId: bandId },
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
    
    return (
      <> 
      {Auth.loggedIn() &&     
          <form class="" onSubmit={handleSubmit(onSubmit)}>
              <p>Edit your band details:</p>
         <input type="text" placeholder="bandName" {...register("bandName", {})} />
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
