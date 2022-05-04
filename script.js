let centenaString, dezenaString, unidadeString
function ler(numero){
    numeroString = numero.toString()
    numeroArray = numeroString.split('')
    console.log(numeroArray)
    unidades(numeroArray[numeroArray.length-1])
    dezenas(numeroArray[numeroArray.length-2])
    centenas(numeroArray[numeroArray.length-3])
    zero()
    return console.log(centenaString + dezenaString + unidadeString)
}
function unidades(unidade=0){
    if(unidade==0){unidadeString = ''}
    if(unidade==1){unidadeString = ' one'}
    if(unidade==2){unidadeString = ' two'}
    if(unidade==3){unidadeString = ' three'}
    if(unidade==4){unidadeString = ' four'}
    if(unidade==5){unidadeString = ' five'}
    if(unidade==6){unidadeString = ' six'}
    if(unidade==7){unidadeString = ' seven'}
    if(unidade==8){unidadeString = ' eight'}
    if(unidade==9){unidadeString = ' nine'}  
    //return console.log(unidadeString)
    }

    function dezenas(dezena=0){
        if(dezena==0){dezenaString = ''}
        if(dezena==1){dezenaString = ' ten'}
        if(dezena==2){dezenaString = ' twenty'}
        if(dezena==3){dezenaString = ' thirty'}
        if(dezena==4){dezenaString = ' forty'}
        if(dezena==5){dezenaString = ' fifty'}
        if(dezena==6){dezenaString = ' sixty'}
        if(dezena==7){dezenaString = ' seventy'}
        if(dezena==8){dezenaString = ' eighty'}
        if(dezena==9){dezenaString = ' ninety'}  
        //return console.log(dezenaString)
        }

        function centenas(centena=0){

            if(centena==0){centenaString = ''}
            if(centena==1){centenaString = ' one hundred'}
            if(centena==2){centenaString = ' two hundred'}
            if(centena==3){centenaString = ' three hundred'}
            if(centena==4){centenaString = ' four hundred'}
            if(centena==5){centenaString = ' five hundred'}
            if(centena==6){centenaString = ' six hundred'}
            if(centena==7){centenaString = ' seven hundred'}
            if(centena==8){centenaString = ' eight hundred'}
            if(centena==9){centenaString = ' nine hundred'}  
            //return console.log(centenaString)
            }
        function zero(){
            if(centenaString == '' && dezenaString == '' && unidadeString == '' ){
                    unidadeString = 'Zero.'
            }
        }

ler(402)