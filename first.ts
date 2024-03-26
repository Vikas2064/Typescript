 
 enum Airthmetics{
    sum,
    sub,
    mul,
    div
 }
 
 function calculateSum(
    a:number,
    b:number,
    type:Airthmetics  //// only these four type of input is possible
    ):number{
    if(type===Airthmetics.sum)
    {
      return a+b; 
    }
    else if(type===Airthmetics.sub)
    {
      return a-b;
    }
    else if(type===Airthmetics.mul)
    {
      return a*b;
    }
    else if(type===Airthmetics.div)
    {
      return a/b;
    }
    return -1;
  }
  console.log(calculateSum(1657,5462,Airthmetics.mul));

