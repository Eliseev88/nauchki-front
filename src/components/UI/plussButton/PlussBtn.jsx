import cl from './PlussBtn.module.scss';

export const PlussBtn = (props) => {
    return (
        <button
            className={cl.circleCross}
            {...props}
        ></button>
    )
}
