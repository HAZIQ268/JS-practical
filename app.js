
let btn =document.getElementById('btnj');
btn.addEventListener('click' ,addFood)
function addFood(a) {
    let currentBtn = a.currentTarget ;
    console.log(currentBtn);

    let currentInput = currentBtn.previousElementSibling ;
    console.log(currentInput.value);

    let currentFoodName = currentInput.value ;
    let newli =document.createElement('li');
    newli.className = `list-group-item d-flex my-2 `;
    newli.innerHTML = `
            <h3 class="flex-grow-1">${currentFoodName}</h3>
            <button class="btn btn-dark text-white mx-2 ">Read</button>
            <button class="btn btn-danger text-white ">Delete</button>
    `
    let parentlist = document.getElementById('parentlist');
    parentlist.appendChild(newli);
}


btn.addEventListener('click' , clear)

function clear(b) {
    console.log(clear);
}
clear(b);


javascript
// First Promise
let firstPromise = new Promise((resolve, reject) => {
  let data = {name: "John", age: 15, car: "Aston Martin", colour: "yellow"};
  resolve(data);
});

// Second Promise name and car
let secondPromise = firstPromise.then(data => {
  let {name, car} = data;
  return {name, car};
});

// Third Promise colour using async function
    let thirdPromise = async () => {
    let data = await firstPromise;
    let {colour} = data;
    return colour;
};

// Fourth Promise Fetch data using async function
    let fetchData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
};

            

// Usage
firstPromise.then(data => console.log("First Promise:", data));
secondPromise.then(data => console.log("Second Promise:", data));
thirdPromise().then(data => console.log("Third Promise:", data));
fetchData().then(data => console.log("Fourth Promise:", data));

