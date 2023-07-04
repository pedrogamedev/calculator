

//Logic Variables

let numb = [];
let operators = [];
let curInput = '';

let index =0;

let result = 0;


//DOM Variables

const displayText = document.querySelector('.text');

//Input Logic

 function input(char)
{
    switch(char)
    {
        case "=":
            {
                calculate(inputs);
                curInput = '';
                index = 0;
                break;
            } 
        case '0','1','2','3','4','5','6','7','8','9':
            {
                curInput += char;
                displayText.innerHTML = curInput;
                numb[index] = curInput;
                break;
            }
        default:
            {
                numb[index] = curInput;
                index++;
                checkOp(char);
                curInput = '';
                break;
            } 
    }
    //verifica se ja ha operador, se tem substitui, senao add
    function checkOp(ope)
    {
        if(!(operators.length > numb.length))
        {
            console.log("helo klittle styles");
            operators.push(ope);
        }
        else
        {
            operators[operators.length] = ope;
        }
        displayText.innerHTML = operators[operators.length -1 ];
    }

    function calculate(calc)
    {
        calc.forEach(element => {

        });
    }


    console.log("op:" + operators.length);
    //console.log("curInput:" + curInput);
    // console.log("result:" + result);
    //console.log("index:" + index);

}
        