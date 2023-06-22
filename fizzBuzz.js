function bizzfuzz (numero){
    let message  ;
    let fizz ='';
    let buzz ='';
    if( numero % 3 === 0 ){
        fizz = "fizz";
    }
    if( numero % 5 === 0 ){
        buzz = "buzz";
    }
    message = fizz + buzz
    if( message === ''){
        return numero
    }
    else{ return message }
}

let regeso = bizzfuzz (15);

console.log(regeso);


module.exports = (bizzfuzz); 

