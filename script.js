//variaveis
inputs = [];
curInput = '';
curOperator = '';
isDec = undefined;
decimals = '10';

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
                setDecimal();
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
        numb = numb/+decimals;
        decimals += '0';
        inputs[inputs.length - 1] += numb;
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
            calcText.innerHTML = inputs[inputs.length - 1].toFixed(1);
            isDec = true;
        }
    }
    else
    {
        decimals = '10';
        isDec = false;
    }
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
    
}
 //remove todos os inputs
 
function clean()
{
    inputs = [];
    calcText.innerHTML = '0';
}