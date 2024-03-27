var ar = [1,2,3,4,5];
console.log("Array is "+ar);
console.log(Sum(ar));
console.log(Product(ar));

function Sum(Arr)
{
    var sum = 0;
    for(var i= 0; i< ar.length ; i++)
    {
        sum  = sum + Arr[i];
    }
    return "Sum of array is "+sum;
}

function Product(Arr)
{
    var Prod= 1;
     for(var i= 0; i< ar.length ; i++)
    {
        Prod  = Prod * Arr[i];
    }
    return "Prod of Array is "+Prod;
}