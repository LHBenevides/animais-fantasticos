import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initfuncionamento from './modules/funcionamento.js';
import initfetchAnimais from './modules/fetch-animais.js';
import initfetchbitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';

// const options = {
//   behavior: 'smooth',
//   block: 'start',
// };
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initfuncionamento();
initfetchAnimais();
initfetchbitcoin();
initAnimacaoScroll();
