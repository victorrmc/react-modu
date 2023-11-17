import { getCatImage } from "../services/getCatImage";
import { useState, useEffect } from "react";
export function useCatImage({ fact }) {
    const [imageCat, setImageCat] = useState();
    useEffect(() => {
        if (fact == undefined) return;
        getCatImage(fact).then((newImage) => {
            setImageCat(newImage);
        });
    }, [fact]);
    return { imageCat };
}