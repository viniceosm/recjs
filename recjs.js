function Recjs(usuarios, itens, interacao) {
	Object.assign(this, { usuarios, itens, interacao });
}

Recjs.prototype.getAllUsuarios = function() {
	return this.usuarios;
}

Recjs.prototype.recomendarPara = function(usuario) {
	var self = this;

	var filtradoApartirAmigos = filtrarPorAmigos(usuario); //interacao filtrada a partir de amigos

	// ordena
	filtradoApartirAmigos = filtradoApartirAmigos.sort(function (a, b) {
		return a.item.value - b.item.value;
	});

	// faz o populate
	filtradoApartirAmigos = filtradoApartirAmigos.map(function (o) {
		return populate(o);
	});

	return filtradoApartirAmigos;

	// 'populate' do mongoose (transforma o id em documento)
	function populate(o) {
		var nO = o;

		var referencesKey = Object.keys(o).filter(function (key) {
			return typeof o[key] == 'object';
		});

		referencesKey.map(function (key) {
			var tabelaDaReference = eval('self.' + o[key].reference);
			nO[key] = findById(tabelaDaReference, o[key].value);
		});

		return nO;
	}

	function findById(arr, id) {
		return arr.filter(function (o) {
			return (o.id == id);
		})[0];
	}

	function filtrarPorAmigos(usuario) {
		return self.interacao.filter(function (o) {
			return usuario.amigos.includes(o.usuario.value);
		});
	}
}