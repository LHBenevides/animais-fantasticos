export default function initfuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diaSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgoraSemana = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diaSemana.indexOf(diaAgoraSemana) !== -1;

  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
