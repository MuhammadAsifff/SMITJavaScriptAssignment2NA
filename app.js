
// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


// function addNumberTo(number) {
//     return function (x) {
//       return x + number;
//     }
//   }

//   const addFiveTo = addNumberTo(5);
// console.log(addFiveTo(10)); // Output: 15
// console.log(addFiveTo(20)); // Output: 25










// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false; 
//     }
//     if (arr[0] === val) {
//       return true; 
//     }
//     return searchArray(arr.slice(1), val); 
//   }

//   const arr = [1, 2, 3, 4, 5];
// console.log(searchArray(arr, 3)); 
// console.log(searchArray(arr, 6)); 










// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element


// function addParagraphToPage(text) {
//     const newParagraph = document.createElement('p'); 
//     newParagraph.textContent = text; 
//     const body = document.querySelector('body');
//     body.appendChild(newParagraph);
//   }

//   addParagraphToPage('Hello, world!'); 







//   4. Write a function that adds a new list item to an unordered list in an HTML
//   document. The function should take a string argument that will be used as
//   the text content of the new list item.


//   function addListItemToUl(text) {
//     const newListItem = document.createElement('li'); 
//     newListItem.textContent = text; 
//     const ul = document.querySelector('ul'); 
//     ul.appendChild(newListItem); 
//   }
  
//   addListItemToUl('Item 1'); 
//   addListItemToUl('Item 2');










//   5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color; 
//   }

//   const myElement = document.querySelector('#my-element'); 
// changeBackgroundColor(myElement, 'blue'); 

// function set_background() {
//     docBody = document.getElementsByTagName("body")[0];
//      myBodyElements = docBody.getElementsByTagName("p");
//      myp1 = myBodyElements[0];
//      myp1.style.background = "purple";
//      myp2 = myBodyElements[1];
//      myp2.style.background = "green";
//    }
   

  
  






// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


// function saveToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }

//   const myObj = { name: "John", age: 30 };
// saveToLocalStorage("myKey", myObj);

// const storedObj = JSON.parse(localStorage.getItem("myKey"));
// console.log(storedObj); 










// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


// function getObjectFromLocalStorage(key) {
//     const objectString = localStorage.getItem(key);
//     if (!objectString) {
//       return null;
//     }
//     try {
//       const object = JSON.parse(objectString);
//       return object;
//     } catch (error) {
//       console.error(`Error parsing localStorage object with key ${key}:`, error);
//       return null;
//     }
//   }

//   const myObject = getObjectFromLocalStorage('myKey');
// if (myObject) {
//   console.log('Retrieved object from localStorage:', myObject);
// } else {
//   console.log('No object found in localStorage for key "myKey"');
// }










// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


// function saveObjectToLocalStorage(object) {
//     Object.entries(object).forEach(([key, value]) => {
//       localStorage.setItem(key, JSON.stringify(value));
//     });
  
//     const newObject = {};
//     Object.keys(object).forEach((key) => {
//       const valueString = localStorage.getItem(key);
//       if (valueString) {
//         try {
//           const value = JSON.parse(valueString);
//           newObject[key] = value;
//         } catch (error) {
//           console.error(`Error parsing value for key ${key}:`, error);
//         }
//       }
//     });
//     return newObject;
//   }


//   const myObject = {
//     foo: 'bar',
//     baz: 123,
//     qux: {
//       a: true,
//       b: [1, 2, 3],
//       c: null,
//     },
//   };
  
//   const newObject = saveObjectToLocalStorage(myObject);
//   console.log('Saved object to localStorage and retrieved as new object:', newObject);
  
  
