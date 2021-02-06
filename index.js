const crypto=require('crypto');
const readLineSync=require('readline-sync');

function hashing(str,algo)
{
  let hash=crypto.createHash(algo).update(str).digest('hex');
  return hash;
}
function welcomeFunction()
{
  console.log('           Welcome To  String Hasing Application. \n\n');
  const services=['md5','sha-1','sha-256','sha-512'];
  for(let i=0;i<services.length;i++)
    console.log(`${i+1})${services[i]}`);
  return parseInt(readLineSync.question('\nEnter you choice : '));
}

function logic(selectOption,str)
{
  switch(selectOption)
  {
    case 1:
        const md=hashing(str,'md5');
        console.log(`\nThe hashing for given string \"${str}\"  :\n ${md}`);
    break;
    case 2:
        const sHA1=hashing(str,'sha1');
        console.log(`\nThe hashing for given string \"${str}\" :  \n${sHA1}`);
    break;
    case 3:
        const sHA256=hashing(str,'sha256');
        console.log(`\nThe hashing for given string \"${str}\" :  \n${sHA256}`);
      break;
    case 4:
        const sHA512=hashing(str,'sha512');
        console.log(`\nThe hashing for given string \"${str}\" :  \n${h5}`);
    break;
    default:
       console.log("You have choosen \'WRONG OPTION\' choose options [1] or [2] or [3] or [4]");
  }
}



const selectOption=welcomeFunction();
const str=readLineSync.question('Enter the String: ');
console.log(`You opted : ${selectOption}`);
logic(selectOption,str);
