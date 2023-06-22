const factorial=(num)=>num===0?1:num*factorial(num-1);

function factorialN (n){
    if( n >= 0  ){
        let regreso = factorial(n);
        return regreso
    }else{return 'no existe factorial'}
}

let producto = factorialN(5);

module.exports = (factorialN);
