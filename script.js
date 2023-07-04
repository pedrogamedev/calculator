//variaveis
inputs = [];
curInput = '';
curOperator = '';

//query Selectors
//texto da tela da calculadora

calcText = document.querySelector(".text");

//funcoes dos botoes

//funcoes logicas e de visual

 // funcao para verificar qual o input inserido (nao altera diretamente o visual)
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
                break;
            }
            case '+','-','*','/','**','%','rest':
            {
                checkOperator(input);
                break;
            }
            case 'C':
            {
                break;
            }
            case 'AC':
            {
                break;
            }
        }
    }
}


function addNum(numb)
{
    if(typeof inputs[inputs.length - 1] == "number")
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
}


 // funcao para verificar