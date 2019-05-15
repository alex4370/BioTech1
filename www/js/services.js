angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'importancia del agua',
    lastText: 'la importancia del agua es muy importante para el ser humano pero hay personas que no cuidan el agua y necesitan de eso. en otros paises como en africa hay muchos niños que necesitan agua lo que en otro pais estan desperdiciando El agua es el elemento más importante para la vida. Es de una importancia vital para el ser humano, así como para el resto de animales y seres vivos que nos acompañan en el planeta Tierra.',
    face: 'img/img1.jpg'
  }, {
    id: 1,
    name: 'Enfermedades Que Pude Causar El Agua',
    lastText: 'Enfermedades transmitidas por el agua son aquellas causadas por el agua contaminada por desechos humanos, animales o químicos. Por ejemplo cólera, fiebre tifoidea, shigella, poliomielitis, meningitis, hepatitis, diarrea. En general, la mayoría se puede prevenir con un tratamiento adecuado del agua, antes de consumirla .',
    face: 'img/img2.jpg'
  }, {
    id: 2,
    name: 'Como Puedes Desinfectar El Agua',
    lastText: 'Esta solución sirve para desinfectar 20 litros de agua, pero se debe utilizar cada ocho horas, ya que el cloro se evapora en ese tiempo. Con yodo. Para aumentar su efectividad, es necesario filtrar el agua antes, echar de 2 a 10 gotas por litro, mezclarla y dejarla reposar entre 15 y 20 minutos.',
    face: 'img/nel3.jpg'
  }, {
    id: 3,
    name: 'Cada cuanto debes tomar agua',
    lastText: 'para tomar agua no hay limites , el agua es necesario para el cuerpo humano o todo para ser vivo debemos tomar agua todos los dias o cada vez que el cuerpo lo necesite para tomar , debemos cuidar nuestro cuerpo por que sabemos que nuestro cuerpo es debil a la hora de que nosotros estemos cansando al cuerpo devemos tomar demaciada agua.',
    face: 'img/kk4.jpg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
