import cl from './UserNameForm.module.scss';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../store/user/selectors';
import { restrictFocusOnModal } from '../../utils/restrictFocusOnModal';
import { changeUserDataThunk } from '../../store/user/actions';

export default function UserNameForm({ visible, setVisible }) {

    const [userName, setUserName] = useState(null);

    const input = useRef();
    const form = useRef();

    const user = useSelector(selectUserData)

    const dispatch = useDispatch();

    const rootClasses = [cl.myModal];
    const rootClassesContent = [cl.myModalContent];

    if (visible) {
        rootClasses.push(cl.active);
        rootClassesContent.push(cl.active);
        document.body.classList.add('overflow');
        input.current.focus();
        restrictFocusOnModal(form.current);
    }

    const changeUserName = (event) => {
        setUserName(event.target.value);
    }

    const sendUserName = async (e) => {
        e.preventDefault();
        const data = {
            "username": userName
        }
        dispatch(changeUserDataThunk(data));
        setUserName(null);
    }

    useEffect(() => {
        setVisible(false);
    }, [user, setVisible]);

    useEffect(() => {
        if (!visible) restrictFocusOnModal(form.current, true);
    }, [visible]);

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={rootClassesContent.join(' ')} onClick={(e) => e.stopPropagation()}>
                <form onSubmit={sendUserName} ref={form}>
                    <Input type='text' placeholder='Введите имя' onChange={changeUserName} ref={input} required />
                    <Button>Отправить</Button>
                </form>
            </div>
        </div>
    )
}
