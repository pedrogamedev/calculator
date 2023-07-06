//variaveis
inputs = [];
curInput = '';
curOperator = '';
isDec = undefined;
let decimals ='';
let zeroCount = 0;

//query Selectors
//texto da tela da calculadora

calcText = document.querySelector(".text");

//funcoes dos botoes

//funcoes logicas e de visual

 //funcao para verificar qual o input inserido (nao altera diretamente o visual)

function checkInput(input)
{
    if(typeof input == "number")
    {
        addNum(input)
    }
    else
    {
        switch(input)
        {
            case '.':
            {
                setDecimal();
                break;
            }
            case '+','-','*','/','**','%','rest':
            {
                checkOperator(input);
                setDecimal();
                break;
            }
            case 'C':
            {
                setDecimals();
                removeLast();
                break;
            }
            case 'AC':
            {
                clean();
                setDecimal();
                break;
            }
        }
    }
}

 //funcao q add numero

function addNum(numb)
{
    //aqui pega o numb como numero, converte ele e o input em string p poder adicionar, depois transforma
    //ele em numero dnv e add para a lista de inputs
    if(isDec)
    {
        setDecimals();
        numb = numb/+decimals;
        numb = numb.toFixed(zeroCount);
        inputs[inputs.length - 1] = (+inputs[inputs.length - 1] + numb).toString();
    }
    else if(typeof inputs[inputs.length - 1] == "number")
    {
        let temp = inputs[inputs.length - 1].toString();
        temp += numb.toString();
        inputs[inputs.length - 1] = +temp;
    }
    else
    {
        inputs.push(numb)
    }
    calcText.innerHTML = inputs[inputs.length - 1];
    curInput = inputs[inputs.length - 1];
}

 //funcao que controla o uso de decimal

function setDecimal()
{  
    if(typeof inputs[inputs.length - 1] == "number")
    {
        if(!isDec)
        {
            inputs[inputs.length - 1] = +inputs[inputs.length - 1].toFixed(1);
            calcText.innerHTML = inputs[inputs.length - 1];
            isDec = true;
        }
    }
    else
    {
        setDecimals();
        isDec = false;
    }
}

 //funcao q retorna o valor de decimal

function setDecimals()
{
    countZeros();
    if(zeroCount == undefined || zeroCount == 0)
    {
        decimals = 10;
        return;
    }
    decimals = 10;
    for(i = 0; i < zeroCount; i++)
    {
        decimals *= 10;
    }
    return;
}
function countZeros()
{
    let temp = inputs[inputs.length -1 ];

    temp = +temp;
    zeroCount = temp.countDecimals();
}
 //conta a quantidade de zeros e retorna o decimal //peguei do stack overflow mt avancado p mim entender agr
Number.prototype.countDecimals = function () {

    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

    var str = this.toString();
    if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
        return str.split("-")[1] || 0;
    } else if (str.indexOf(".") !== -1) {
        return str.split(".")[1].length || 0;
    }
    return str.split("-")[1] || 0;
}
 //verificar se ja tem operador nessa parte da conta, se tem substitui, senao adiciona

function checkOperator(operator)
{
    if(curInput = '')
    {
        inputs.push(operator);
    }
    else
    {
        inputs[inputs.length - 1] = operator;
    }
    calcText.innerHTML = operator;
}

 //remove o ultimo input

function removeLast()
{
    if(typeof inputs[inputs.length - 1] == "number")
    {     
        let curInputTemp = inputs[inputs.length -1].toString();
        console.log(curInputTemp)
        curInputTemp = curInputTemp.slice(-1);
        curInputTemp = +curInputTemp;
        
        if(isDec)
        { 
            setDecimals();

            temp = decimals.length;
            console.log(temp);

            inputs[inputs.length - 1] = curInputTemp.toFixed(temp -1); 
            calcText.innerHTML = inputs[inputs.length - 1];
        }
        else
        {
            inputs[inputs.length - 1] = curInputTemp;
            calcText.innerHTML = inputs[inputs.length - 1];

        }
    }
    else
    {
        inputs.pop();
    }

}

 
 //remove todos os inputs
 
function clean()
{
    inputs = [];
    calcText.innerHTML = '';
}