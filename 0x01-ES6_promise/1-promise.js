export default function getFullResponseFromAPI(success) {
  return new Promise((right, wrong) => {
    if (success === true) {
      right({
        status: 200,
        body: 'Success',
      });
    } else {
      wrong(Error('The fake API is not working currently'));
    }
  });
}
