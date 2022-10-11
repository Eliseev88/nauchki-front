import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { selectChildData, selectChildStage } from '../../../store/child/selectors';
import { getChildDataThunk, getChildStageThunk, setChildData } from '../../../store/child/actions';
//import { LoaderSvg } from '../../UI/loader/LoaderSvg';
import cl from './Stage.module.scss';
import { useEffect, useState } from 'react';
import { convertAgeToDays } from '../../../utils/convertAgeToDays';
import Avatar from '../../UI/avatar/Avatar';
import Button from '../../UI/button/Button';
import { countChildAge } from '../../../utils/countChildAge';
import '../../../components/MainPage/Standart/standart.scss';
import Level from '../../UI/level/Level';

export default function Stage() {

  const { id } = useParams();
  const location = useLocation();

  const child = useSelector(selectChildData);
  //const error = useSelector(selectChildError);
  //const loading = useSelector(selectChildLoading);
  const stage = useSelector(selectChildStage);

  const [age, setAge] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (child) {
      const days = convertAgeToDays(child.dateOfBirth);
      dispatch(getChildStageThunk(child.gender, days));
      setAge(countChildAge(child.dateOfBirth));
    }
  }, [child, dispatch]);

  useEffect(() => {
    dispatch(getChildDataThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(setChildData(null));
  }, [location, dispatch]);

  return (
    <section className={cl.stage}>
      <div className="container">
        <div className={cl.breadcrumps}>
          <Link to='/profile' className={cl.breadcrumps_link}>Личный кабинет</Link>
          <span className={cl.breadcrumps_slash}>/</span>
          <span className={cl.breadcrumps_name}>{child?.name}</span>
        </div>
        <div className={cl.wrapper}>
          <div className={cl.row}>
            <div className={cl.col_left}>
              <div className={cl.child_name}>{child?.name}</div>
              <Button>Изменить</Button>
              <a className={cl.child_link} href={child?.img_path} target='_blank' rel="noreferrer">
                <Avatar imgPath={child?.img_path} />
              </a>
              <Button>Изменить</Button>
              <div className={[cl.child_name, cl.child_age].join(' ')}>{age}</div>
              <div className={cl.child_birth}>Дата рождения:</div>
              <div className={[cl.child_birth, cl.mb_1].join(' ')}>{child?.dateOfBirth}</div>
              <Button>Изменить</Button>
            </div>
            <div className={cl.col_right}>
              <div className={cl.standarts}>
                <h3 className="standart__title">Стандарты и нормы развития для вашего ребенка</h3>
                <div className="standart__data">
                  <div className={cl.standarts__data_items}>
                    <div className={cl.standarts__data_title}>
                      <h4>Рост (см)</h4>
                    </div>

                    <div className="standart__data-levels">
                      {stage && Object.entries(stage).map((el, index) => {
                        if (index > 2 && index <= 9) {
                          return <Level
                            key={el[0] + index}
                            text={el[0] === 'medianHeight' ? 'Медиана' : `Ур ${el[0][el[0].length - 1]}`}
                            color={el[0] === 'medianHeight' ? 'mediana' : `${el[0][el[0].length - 1]}`}
                            number={el[1]}
                          />
                        }
                        return '';
                      })}
                    </div>
                  </div>

                  <div className={cl.standarts__data_items}>
                    <div className={cl.standarts__data_title}>
                      <h4>Вес (кг)</h4>
                    </div>

                    <div className="standart__data-levels">
                      {stage && Object.entries(stage).map((el, index) => {
                        if (index > 9 && el[0] !== 'skills' && el[0] !== 'alternateText') {
                          return <Level
                            key={el[0] + index}
                            text={el[0] === 'medianWeight' ? 'Медиана' : `Ур ${el[0][el[0].length - 1]}`}
                            color={el[0] === 'medianWeight' ? 'mediana' : `${el[0][el[0].length - 1]}`}
                            number={el[1]}
                          />
                        }
                        return '';
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className={cl.weight_height}>
                <h4 className={cl.weight_height_title}>Фактические данные</h4>
                <div className={cl.weight_height_box}>
                  <div className={[cl.weight_height_element, cl.mr_4].join(' ')}>Рост</div>
                  <div className={cl.weight_height_element}>Вес</div>
                </div>
              </div>
            </div>
          </div>
          <div className={[cl.row, cl.standarts__skills].join(' ')}>
            <h5 className={[cl.standarts__data_title, cl.additional].join(' ')}>Что должен уметь ваш ребенок</h5>
            <div className={cl.standarts__data_skills}>
              {stage?.skills}
            </div >
          </div>
        </div>
      </div>
    </section>
  )
}
