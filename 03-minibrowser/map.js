// TDD - Test Driven Developemnt
var novoMapa = new Map();

class HistoryMap{

}

// 11/11/11 as 11 da noite;
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Titulo do Site', url: 'sozinha'});
novoMapa.set('11/11/2011 - 23:31 - URL', {});

var restultado = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(restultado);