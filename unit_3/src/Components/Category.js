import React from 'react'
import CategoryDescription from './CategoryDescription'
import { useParams } from 'react-router-dom'

const Category = () => {
  const params = useParams()
  return (
    <>
      <a href="/cat">Назад</a>
      <ul>
        <li>
          <a href="/cat/notebook">Ноутбуки</a>
        </li>
        <li>
          <a href="/cat/monitor">Мониторы</a>
        </li>
        <li>
          <a href="/cat/cellphone">Мобильные телефоны</a>
        </li>
      </ul>
      <CategoryDescription merch={params.catID} />
    </>
  )
}

export default Category
