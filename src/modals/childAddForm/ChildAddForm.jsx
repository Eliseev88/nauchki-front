import { PlussBtn } from '../../components/UI/plussButton/PlussBtn';
import cl from './ChildAddForm.module.scss';
import { DateOfBirthInput } from '../../components/UI/dateOfBirthInput/DateOfBirthInput';
import { useEffect, useRef, useState } from "react";
import { useDispatch, } from "react-redux";
import { restrictFocusOnModal } from '../../utils/restrictFocusOnModal';
import { addUserChildrenThunk } from '../../store/children/actions';

export default function ChildAddForm({ toggleVisibleForm, visible, error, }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const form = useRef();
    const input = useRef();

    const rootClasses = [cl.myModal];
    const rootClassesContent = [cl.form];

    if (visible) {
        rootClasses.push(cl.active);
        rootClassesContent.push(cl.active);
    }

    useEffect(() => {
        if (visible) input.current.focus();
        !visible ? restrictFocusOnModal(form.current, true) : restrictFocusOnModal(form.current);
    }, [visible]);


    const addUserChildren = (e) => {
        e.preventDefault();
        let dataChildren = {
            name: name,
            gender: gender,
            dateOfBirth: dateOfBirth,
            img_path: 'https://ivadesign.ru/upload/img/30-09-2020/june/six/3.jpg'
        };
        dispatch(addUserChildrenThunk(dataChildren));
        toggleVisibleForm();
        setName('');
        setDateOfBirth('');
    };

    const onChangeValue = (event) => {
        setGender(event.target.value);
    };

    return (
        <div className={rootClasses.join(' ')} onClick={() => toggleVisibleForm()}>
            <div className={rootClassesContent.join(' ')} onClick={(e) => e.stopPropagation()}>
                <div className={cl.wrapper}>
                    <h1 className={cl.title}>
                        Добавить ребенка в личный кабинет
                    </h1>
                    <PlussBtn onClick={toggleVisibleForm} />
                </div>

                <div className={cl.main}>
                    {error && <div className='error'>{error}</div>}
                    <form ref={form} onSubmit={addUserChildren}>
                        <p className={cl.ptitle}>Имя ребенка</p>
                        <input
                            ref={input}
                            value={name}
                            className={cl.name}
                            placeholder="Введите имя"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <br />
                        <div className={cl.radio} onChange={onChangeValue}>
                            <input type="radio" value="Муж" name="gender" required /> муж.
                            <input type="radio" value="Жен" name="gender" required /> жен.
                        </div>
                        <br />
                        <p className={cl.ptitle}>Дата рождения</p>
                        <DateOfBirthInput
                            dateOfBirth={dateOfBirth}
                            setDateOfBirth={setDateOfBirth}
                            value={dateOfBirth}
                            style={cl.name}
                            required
                        />
                        <button className={cl.btn}>Добавить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
