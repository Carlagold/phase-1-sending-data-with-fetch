 // Add your code here
 function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
       Accept: "application/json"
    },
    body: JSON.stringify({name, email}),
   
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (json) {
  //  console.log(json); 
   // Console.log on browser console to see the newly assigned id.
      const body = document.querySelector("body");
      document.body.append(json.id)    
    })
    .catch(function (error) {
      console.log(error.message);
      document.body.append(error.message)
   
    })
}
submitData("Steve", "steve@steve.com");
submitData("Sam", "sam@sam.com");
submitData("Jim", "jim@jim.com");

