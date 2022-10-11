import React from 'react';
import Avatar from '../../UI/avatar/Avatar';
import cl from './Child.module.scss';
import { Link } from 'react-router-dom';
import { countChildAge } from '../../../utils/countChildAge';
import { TiDelete } from 'react-icons/ti';

export default function Child({ id, name, img, birth, url, setIdToDelete }) {

  const age = countChildAge(birth);

  const handleClick = (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm('Удалить ребенка?');
    if (confirmDelete) {
      setIdToDelete(id);
    }
  }

  return (
    <Link to={url} className={cl.child}>
        <div className={cl.child__avatar}>
            <Avatar imgPath={img} />
        </div>
        <div className={cl.child__info}>
            <div className={cl.child__name}>{name}</div>
            <div className={cl.child__birth}>{birth}</div>
            <div className={cl.child__age}>{age}</div>
        </div>
        <button className={cl.child__btn} onClick={handleClick}><TiDelete className={cl.child__delete} /></button>
    </Link>
  )
}
