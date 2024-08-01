import React from "react";
import Arrow from '../image/arrow-btn-2.png'

const Pagination = ({prevPage, currentPage, nextPage, totalPages, goToPage, isPaginationActive})=>{
  return(
    <div className={`pagination ${isPaginationActive ? "active-flex" : "hidden"}`}>
            <button className="pagination__button" onClick={prevPage} disabled={currentPage === 1}><img className="pagination__image pagination__image-previous" src={Arrow} alt="ArrowImage" />Previous Page</button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button  className="pagination__button"
                key={index + 1} 
                onClick={() => goToPage(index + 1)} 
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
            <button className="pagination__button" onClick={nextPage} disabled={currentPage === totalPages}>Next Page <img className="pagination__image" src={Arrow} alt="ArrowImage" /></button>
          </div>
  )
}

export default Pagination;