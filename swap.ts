function swapElements<T>(ele1:T,ele2:T):[T,T]{
    return [ele2,ele1]
}

// let ans = swapElement(4,5);
let ans = swapElements("one","two");
console.log(ans)




function swapElements1<T,t>(ele1:T,ele2:t):[t,T]{
    return [ele2,ele1]
}
 
// let ans = swapElement(4,5);
let ans1 = swapElements1("one",1);
console.log(ans1)