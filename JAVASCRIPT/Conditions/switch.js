var ProgrammingLanguage = 'Php';

//Use of Break Statement -> Used to stop executing the remaining condition when the current condition satisfies
switch(ProgrammingLanguage)
{
    case 'js':
        console.log('Learning JS');
    break;

    case 'java':
        console.log('Learning java');
    break;

    case 'Python':
        console.log('Learning Python');
    break;

    default :
        console.log('You are not a programmer');
    break;
}

//Switch Cases are faster than switch statements
//Switch Cases is good to use when you have multiple blocks of if else parts