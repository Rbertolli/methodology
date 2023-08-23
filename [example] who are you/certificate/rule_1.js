/*
Regra de verificação se todos os mass id's são do mesmo Reciclador.
*/

   console.log("Received event: ", event);
   var data = {
       "greetings": "Hello, " + event.firstName + " " + event.lastName + "."
   };
   callback(null, data);
