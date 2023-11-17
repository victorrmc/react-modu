import { Filters } from './Filters'
export function Header({changeFilters}){
    return(
        <section>
        <h1>Shop de React 🛒</h1>
        <Filters changeFilters={changeFilters}/>
        </section>
    )
}
