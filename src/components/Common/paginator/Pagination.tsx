import React, {useState} from "react";
import s from './paginaton.module.css'

type Props = {
    currentPage?: number
    totalItemsCount: number
    pageSize: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
}

export const Pagination = ({
                               currentPage = 1,
                               totalItemsCount,
                               pageSize,
                               onPageChanged = x => x,
                               portionSize = 10
                           }: Props) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={s.pagination}>
        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={currentPage === p ? s.selectedPage : s.pageNumber}
                             key={p}
                             onClick={() => onPageChanged(p)}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
}

