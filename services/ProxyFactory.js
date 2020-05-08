class ProxyFactory {

	static create(objeto, props, acao) {

		return new Proxy(objeto, {

			get(target, prop, receiver) {

				if(ProxyFactory._ehFuncao(target[prop]) && props.includes(prop)) {

					return function() {
						Reflect.apply(target[prop], target, arguments);
						acao(target);
					}
				}

				return Reflect.get(target, prop, receiver);
			}
		});
	}

	static _ehFuncao(func) {

		return typeof(func) == typeof(Function);
	}
}