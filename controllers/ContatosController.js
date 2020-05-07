class ContatosController {

	constructor() {

		/* Criando um "alias", para não ter que digitar toda vez document.querySelector ao
		precisar buscar um elemento no DOM */
		let $ = document.querySelector.bind(document);

		this._listaDeContatos = new ListaDeContatos(listaDeContatos =>
			this._contatosView.update(listaDeContatos)
		);

		this._contatosView = new ContatosView($('.tabela'));

		//Criando alguns contatos somente para ter algo na tabela.
		this._listaDeContatos.adiciona(new Contato('João', 'joao@email.com', '(43)984624376'));
		this._listaDeContatos.adiciona(new Contato('Emily', 'emily@email.com', '(41)994561432'));
		this._listaDeContatos.adiciona(new Contato('Tiago', 'tiago@email.com', '(43)980304527'));
		this._listaDeContatos.adiciona(new Contato('Valeska', 'valeska@email.com', '(48)973026387'));

		//Buscando os campos no DOM
		this._inputNome = $('#nome');
		this._inputEmail = $('#email');
		this._inputTelefone = $('#telefone');
	}

	adiciona(event) {

		event.preventDefault();
		this._listaDeContatos.adiciona(this._criaContato());
		this._limpaFormulario();
	}

	apaga() {

		this._listaDeContatos.apaga();
	}

	_criaContato() {

		return new Contato(
			this._inputNome.value,
			this._inputEmail.value,
			this._inputTelefone.value);
	}

	_limpaFormulario() {

		this._inputNome.value = '';
		this._inputEmail.value = '';
		this._inputTelefone.value = '';
		this._inputNome.focus();
	}	
}