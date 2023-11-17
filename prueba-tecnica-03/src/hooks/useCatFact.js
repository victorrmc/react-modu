import { useEffect, useState } from "react";
import { getCatFact } from "../services/getCatFact";
export function useCatFact() {
    const [fact, setFact] = useState();
    useEffect(() => {
      getCatFact().then((newFact) => setFact(newFact));
    }, []);
    const refreshFact = () => {
      getCatFact().then((newFact) => setFact(newFact));
    }
  
    return { fact, refreshFact };
  }