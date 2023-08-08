
import './assets/css/style.css';
import GeraCPF from './modules/geraCPF';

(function(){
const novo=new GeraCPF();
const cpfGerado= document.querySelector('.cpf-gerado');

cpfGerado.innerHTML=novo.geraNewCpf();
})
();