angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'importancia del agua',
    lastText: 'la importancia del agua es muy importante para el ser humano pero hay personas que no cuidan el agua y necesitan de eso. en otros paises como en africa hay muchos niños que necesitan agua lo que en otro pais estan desperdiciando',
    face: 'img/img1.jpg'
  }, {
    id: 1,
    name: 'Enfermedades Que Pude Causar El Agua',
    lastText: 'Enfermedades transmitidas por el agua son aquellas causadas por el agua contaminada por desechos humanos, animales o químicos. Por ejemplo cólera, fiebre tifoidea, shigella, poliomielitis, meningitis, hepatitis, diarrea. En general, la mayoría se puede prevenir con un tratamiento adecuado del agua, antes de consumirla.',
    face: 'img/img2.jpg'
  }, {
    id: 2,
    name: 'Como Puedes Desinfectar El Agua',
    lastText: 'I should buy a boat',
    face: 'img/nel3.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
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
