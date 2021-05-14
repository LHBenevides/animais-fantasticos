export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    // bind this ao callback para referenciar o objeto da classe
    this.eventTogglemodal = this.eventTogglemodal.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  // abre e fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adciona o evento toggle ao modal
  eventTogglemodal(event) {
    event.preventDefault();
    this.toggleModal(event);
  }

  // fecha o modal ao clicar fora
  clickFora(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos ao elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventTogglemodal);
    this.botaoFechar.addEventListener('click', this.eventTogglemodal);
    this.containerModal.addEventListener('click', this.clickFora);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
