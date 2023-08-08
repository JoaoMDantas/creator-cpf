
export default class  validCpf{
    constructor(CPF){
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            enumerable: true,
            configurable:false, 
            value:CPF.replace(/\D+/g, '')
    });
    }
    isSequence(){
        return this.cpfLimpo[0].repeat(11)===this.cpfLimpo;
    }
    newCpf(){
        const cpfSemDigitos= this.cpfLimpo.slice(0,-2);
        const digito1= validCpf.geraDigito(cpfSemDigitos);
        const digito2=validCpf.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf=cpfSemDigitos+digito1+digito2;
    }  

    //o metodo pode virar estatico pois não precisa de nenhum this dentro dele
    //assim, apenas precisamos chama-lo pela classe dentro das outras funções
     static geraDigito(cpfSemDigitos){
        let total=0;
        let reverso=cpfSemDigitos.length+1;
        for (let stringnum of cpfSemDigitos){
            total+=Number(stringnum)*reverso;
            reverso--;
        }
        const digito= 11 - (total%11);
        return digito <=9 ? String(digito) : '0';
        
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false; 
        if(this.isSequence()) return false;
        this.newCpf();
        return this.novoCpf===this.cpfLimpo;
    }
};

console.log('cheguei');



