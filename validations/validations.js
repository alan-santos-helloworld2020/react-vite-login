const validations = (values={email:"",password:""})=>{
    const erros={}
    if(!values.email){
        erros.email="este campo é obrigátorio";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        erros.email="endereço de email inválido";

    }

    if(!values.password){
        erros.password="este campo é obrigátorio";
    }else if(values.password.length < 4){
        erros.password="a quantidade de caracteres deve ser maior que 4"
    }

    return erros;

} 

export default validations;