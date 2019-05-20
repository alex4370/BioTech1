angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Metodos hormonales',
    lastText: 'Las hormonas anticonceptivas se pueden tomar por vía oral, insertarse en la vagina, aplicarse en la piel, implantarse bajo la misma o inyectarse en el músculo. Estas hormonas son los estrógenos y los progestágenos (fármacos similares a la hormona progesterona). Los estrógenos y la progesterona contribuyen a preparar al cuerpo para una posible fecundación (ver Fase lútea). Los métodos hormonales previenen el embarazo principalmente deteniendo la liberación de óvulos por parte de los ovarios o manteniendo una densidad tan espesa de la mucosidad en el cuello uterino que los espermatozoides no pueden atravesarlo y entrar en el útero. De este modo, los métodos hormonales evitan que el óvulo sea fecundado..',
    face: 'img/metodos.jpg'
  }, {
    id: 1,
    name: 'metodos no hormonales reversibles',
    lastText: 'El condón masculino tiene gran importancia porque ofrece protección contra las infecciones transmisibles por vía sexual (ITS), incluyendo el virus de la inmunodeficiencia humana (VIH). El condón femenino ofrece protección contra las ITS, sin embargo no hay suficiente evidencia clínica disponible respecto de la protección que ofrecería contra la infección por VIH. El diafragma y el capuchón cervical no dan protección contra el VIH y no hay evidencia suficiente acerca de protección contra las ITS. .',
    face: 'img/condon.jpg'
  }, {
    id: 2,
    name: 'metodos no hormonales ',
    lastText: 'Esta solución sirve para desinfectar 20 litros de agua, pero se debe utilizar cada ocho horas, ya que el cloro se evapora en ese tiempo. Con yodo. Para aumentar su efectividad, es necesario filtrar el agua antes, echar de 2 a 10 gotas por litro, mezclarla y dejarla reposar entre 15 y 20 minutos.',
    face: 'img/no.jpg'
  }, {
    id: 3,
    name: 'Cada cuanto debes tomar agua',
    lastText: 'para tomar agua no hay limites , el agua es necesario para el cuerpo humano o todo para ser vivo debemos tomar agua todos los dias o cada vez que el cuerpo lo necesite para tomar , debemos cuidar nuestro cuerpo por que sabemos que nuestro cuerpo es debil a la hora de que nosotros estemos cansando al cuerpo devemos tomar demaciada agua.',
    face: 'img/kk4.jpg'
  }, {
    id: 4,
    name: 'Metodos anticonseptivos',
    lastText: 'Dispositivos intrauterinos. Anticonceptivos de barrera masculinos (condón) y femeninos (condón, diafragma; espermicidas). Método de la amenorrea de lactancia. Métodos de abstinencia periódica (moco cervical (Billings); calendario; temperatura basal; sintotérmico).',
    face: 'img/joel5.jpg'
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
