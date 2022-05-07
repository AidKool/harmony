import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { UPDATE_BAND } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function App(props) {
  const [updateBand, { error, data }] = useMutation(UPDATE_BAND);
  const bandId = props.user.bandId._id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await updateBand({
        variables: { ...formData, bandId: bandId },
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  if (props.user) {
    return (
      <>
        {Auth.loggedIn() && (
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <p>Edit your band details:</p>
            <input className="accountEditSelect" type="text" placeholder="bandName" {...register('bandName', {})} />
            <input
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full subBtn"
              type="submit"
            />
          </form>
        )}
      </>
    );
  }
}
