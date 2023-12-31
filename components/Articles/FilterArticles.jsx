import { useState } from 'react'
import { GoMultiSelect } from 'react-icons/go'

const FilterArticles = ({ articles, onClickFilter, onShowAll }) => {
  const [showFilter, setShowFilter] = useState(false)

  const { items } = articles
  const allTopics = items.map(art => art.fields.thema)

  const uniqueTopics = Array.from(new Set(allTopics))

  const onShowMenu = () => {
    setShowFilter(true)
    toggleMenu()
  }
  const toggleMenu = () => {
    showFilter ? setShowFilter(false) : setShowFilter(true)
  }

  const handleChangeThema = value => {
    onClickFilter(value)
    setShowFilter(false)
  }

  const handleShowAllArticless = () => {
    onShowAll()
    setShowFilter(false)
  }

  return (
    <div className='relative ml-3 my-4'>
      <div className='flex items-center'>
        <span>Читати по темі</span>
        <button
          onClick={() => onShowMenu()}
          className='p-2 shadow-md shadow-neutral-200 rounded-md ml-2'
        >
          <GoMultiSelect size={20} className='fill-amber-950' />
        </button>
      </div>

      {showFilter && (
        <ul className='p-4 bg-slate-50 w-52 absolute top-11 -left-3'>
          <li className='mt-2' onClick={() => handleShowAllArticless()}>
            Читати всі статті
          </li>
          {uniqueTopics.map(article => (
            <li
              key={uniqueTopics.indexOf(article)}
              className='mt-2'
              onClick={() => handleChangeThema(article)}
            >
              {article}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterArticles
