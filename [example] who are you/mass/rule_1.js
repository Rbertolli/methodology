/*
Regra de verificação do tipo de resíduo contido em uma massa
O script deverá verificar, no JSON de um Documento se
Category: Mass
Type: !Reject
*/

   console.log("Received event: ", event);
   var data = {
       "greetings": "Hello, " + event.firstName + " " + event.lastName + "."
   };
   callback(null, data);
