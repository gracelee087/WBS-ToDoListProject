const testList = [
  {
    name: "bla",
    age: 34,
    old: true
  },
  {
    name: "some",
    age: 98776,
    old: false,
    extra: []
  }
];

console.log(testList);
/**
 * Saves the List Parameter wit hte given key in the 
 * Local Storage
 * @param {String} key 
 * @param {List} list 
 */
const saveList = (key, list) => {
  console.log('sveList call');
  //overwriting is default when key already exists in local storage    
  //stringify list
  const stringList = JSON.stringify(list);
  localStorage.setItem(key, stringList);
  console.log('List saved');
}

/**
 * Loads the Llist with the given key from the local Storage
 * and returns it.
 * If nothing is in the Storage it retuns null
 * @param {String} key 
 */
const getList = (key) => {
  let loadedList = localStorage.getItem(key);
  if (loadedList) {
    loadedList = JSON.parse(loadedList);
  }
  return loadedList;

}


//TESTS-------------------------------------------------
saveList("elvis", testList);
saveList("elvis", testList); // second call to test overwriting
console.log(getList('elvis'));
console.log(getList('elvi'));
