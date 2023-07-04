//variaveis
inputs = [];
curInput = '';
curOperator = '';

//query Selectors
//texto da tela da calculadora

document.querySelector(".text");

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
    console.log(inputs[input.length - 1]);
    }
}


function addNum(numb)
{
    if(inputs[inputs.length - 1] == Number)
    {
        inputs[inputs.length - 1] += numb;
    }
    else
    {
        inputs.push(numb)
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
}


 // funcao para verificar