import React, { useEffect, useState } from 'react';
import cl from './Children.module.scss';
import Button from '../../UI/button/Button';
import Child from '../Child/Child';
import { useDispatch, useSelector } from 'react-redux';
import { selectChildrenData, selectIsErrorChildren, } from '../../../store/children/selectors';
import { deleteChildThunk, getUserChildrenThunk, setUserChildrenError } from '../../../store/children/actions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ChildAddForm from '../../../modals/childAddForm/ChildAddForm';

export default function Children() {
  const dispatch = useDispatch();

  const children = useSelector(selectChildrenData);
  const error = useSelector(selectIsErrorChildren);

  const [childIdToDelete, setChildIdToDelete] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getUserChildrenThunk());
  }, [dispatch]);

  useEffect(() => {
    childIdToDelete && dispatch(deleteChildThunk(childIdToDelete));
  }, [childIdToDelete, dispatch]);

  const toggleVisibleForm = () => {
    setIsModalVisible(!isModalVisible);
    isModalVisible ? document.body.classList.remove('overflow') : document.body.classList.add('overflow');
    if (error) {
      dispatch(setUserChildrenError(null))
    }
  };

  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
      document.body.classList.add('overflow');
    }
  }, [error])

  return (
    <section className={cl.children}>
      <div className="container">
        <div className={cl.children__wrapper}>
          <div className={cl.children__intro}>
            <h2 className={cl.children__title}>Мои дети</h2>
            <Button circle='true' onClick={toggleVisibleForm}>+</Button>
          </div>
          <TransitionGroup className={cl.children__box}>
            {children?.map(child => {
              return (
                <CSSTransition
                  key={child.id}
                  timeout={500}
                  classNames="item"
                >
                  <Child
                    id={child.id}
                    name={child.name}
                    img={child.img_path || 'https://via.placeholder.com/150x150/FFF'}
                    birth={child.dateOfBirth}
                    url={'/children/' + child.id}
                    setIdToDelete={setChildIdToDelete}
                  />
                </CSSTransition>
              )
            })}
          </TransitionGroup>
        </div>
        {<ChildAddForm visible={isModalVisible} toggleVisibleForm={toggleVisibleForm} error={error} />}
      </div>
    </section>
  )
}
