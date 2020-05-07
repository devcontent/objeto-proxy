class ListaDeContatos {

	constructor(armadilha) {
		this._contatos = [];
		this._armadilha = armadilha;
	}

	adiciona(contato) {
		this._contatos.push(contato);

		//Atualizar a view
		this._armadilha(this);
	}

	apaga() {
		this._contatos = [];

		//Atualizar a view
		this._armadilha(this);
	}

	get contatos() {
		return this._contatos;
	}
}