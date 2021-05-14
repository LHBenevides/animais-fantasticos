export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // bind o this do objeto ao callback da mutação
    this.handleMuation = this.handleMuation.bind(this);
  }

  // recebe elemento do DOM, com numero em seu texto
  // incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar numero para cada elemento selecionado no DOM
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // quando houver um mutação o metodo é ativado
  handleMuation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adciona o mutationObserver para verificar quando a classe ativo é adcionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMuation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
