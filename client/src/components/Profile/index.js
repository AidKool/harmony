import React from 'react';

function Profile() {
  return (
    <div className="px-5 py-3 flex flex-col gap-y-3">
      <header className="space-y-10">
        <figure className="space-y-4">
          <img src="https://via.placeholder.com/100x100" className="mx-auto" alt="profile" />
          <figcaption className="text-center text-xl">Person 1</figcaption>
        </figure>
      </header>
      <a href="#" className="text-center">
        Go to profile
      </a>
    </div>
  );
}

export default Profile;
