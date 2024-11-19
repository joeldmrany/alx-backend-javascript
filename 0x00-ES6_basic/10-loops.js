export default function appendToEachArrayValue(array, appendString) {
  const array1 = array.map((n) => appendString + n);
  return array1;
}
