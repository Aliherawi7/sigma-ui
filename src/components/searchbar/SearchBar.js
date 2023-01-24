import React from 'react'
import "./SearchBar.css"


function SearchBar() {
  return (
    <header className='main_header'>
      
      <section className='search_bar'>
        <form>
          <input type="text" className='search_box' />
        </form>
      </section>
    </header>
  )
}

export default SearchBar