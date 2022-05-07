import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_MUSICIAN } from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function App(props) {
  const [updateMusician, { error, data }] = useMutation(UPDATE_MUSICIAN);
  const musicianId = props.user.musicianId._id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      const { data } = await updateMusician({
        variables: { ...formData, musicianId: musicianId },
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  if (props.user) {
    return (
      <>
        {Auth.loggedIn() && (
          <form class="" onSubmit={handleSubmit(onSubmit)}>
            <input className="accountEditInput" type="text" placeholder="firstName" {...register('firstName', {})} />
            <input className="accountEditInput" type="text" placeholder="lastName" {...register('lastName', {})} />

            <select className="accountEditSelect" {...register('instruments')} multiple>
              <option value="guitar">Guitar</option>
              <option value="lead guitar">Lead guitar</option>
              <option value="rhythm guitar">rhythm guitar</option>
              <option value="drums">Drums</option>
              <option value="backing vocals">backing vocals</option>
              <option value="vocals">Vocals</option>
              <option value="bass">Bass</option>
              <option value="keys">Keys</option>
              <option value="piano">Piano</option>
              <option value="flute">Flute</option>
              <option value="oboe">Oboe</option>
              <option value="clarinet">Clarinet</option>
              <option value="saxophone">Saxophone</option>
              <option value="bassoon">Bassoon</option>
              <option value="trumpet">Trumpet</option>
              <option value="french horn">French horn</option>
              <option value="trombone">Trombone</option>
              <option value="tube">Tube</option>
              <option value="triangle">Triangle</option>
              <option value="cowbell">Cowbell</option>
            </select>
            <select className="accountEditSelect" {...register('available', { setValueAs: (x) => Boolean(x) })}>
              <option value={''}>No!</option>
              <option value={true}>Yes!</option>
            </select>
            <input
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full subBtn"
              type="submit"
            />
          </form>
        )}
      </>
    );
  }
}

//call a user here
//get the user.musician._id
//use this to update form

//currently not rendering
