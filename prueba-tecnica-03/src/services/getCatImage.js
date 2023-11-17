export async function getCatImage(fact){
    const firsThreeWords = fact.split(" ", 3).join(" ");
    const res = await fetch(`https://cataas.com/cat/says/${firsThreeWords}`);
    return firsThreeWords;
}