const END_POINT_FACT_CAT = "https://catfact.ninja/fact";
export function getCatFact(){
    return fetch(END_POINT_FACT_CAT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        return fact
      });
}