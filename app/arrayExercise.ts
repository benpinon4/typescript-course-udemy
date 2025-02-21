const ages: number[] = [];

const gameboard: string[][] = [];

type Product = {
    name: string;
    price: number;
}



const getTotal = (): number => {
    let count: number = 0
    const newProdArray: Product[] = []
    while (count < 10) {
        count++
        newProdArray.push({name: `Product ${count}`,price: Math.random()*10})
    }
    console.log(newProdArray)
    let sum: number = 0
    for (let index = 0; index < newProdArray.length; index++) {
        
        sum = newProdArray[index].price + sum

    }
    
    return sum
}

console.log(getTotal())
