const getListStudentIds = (theList) => {
  let result = [];
  if (theList instanceof Array) {
    result = theList.map((listt) => listt.id);
  }
  return result;
};

export default getListStudentIds;
