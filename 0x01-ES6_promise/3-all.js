import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([PhotoRes, UserRes]) => {
      console.log(`${PhotoRes.body} ${UserRes.firstName} ${UserRes.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
