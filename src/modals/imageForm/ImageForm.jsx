import cl from './ImageForm.module.scss';
import Button from '../../components/UI/button/Button';
import { useEffect, useRef, useState } from 'react';
import { addImageThunk } from '../../store/user/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/user/selectors';
import { restrictFocusOnModal } from '../../utils/restrictFocusOnModal';

export default function ImageForm({ visible, setVisible }) {

  const [img, setImg] = useState(null);

  const user = useSelector(selectUserData);

  const form = useRef();

  const dispatch = useDispatch();
  
  const rootClasses = [cl.myModal];
  const rootClassesContent = [cl.myModalContent];

  if (visible) {
    rootClasses.push(cl.active);
    rootClassesContent.push(cl.active);
    document.body.classList.add('overflow');
    restrictFocusOnModal(form.current);
  } else {
    document.body.classList.remove('overflow');
  }

  const uploadImage = (event) => {
    event.preventDefault();
    if (event.target.files[0]) {
      setImg(event.target.files[0]);
    }
  }

  const sendFile = async (e) => {
    e.preventDefault();
    const dataImg = new FormData();
    dataImg.append("file", img);
    dispatch(addImageThunk(dataImg));
    setImg(null);
  }

  useEffect(() => {
    setVisible(false);
  }, [user?.baseImagePath, setVisible]);

  useEffect(() => {
    if (!visible) restrictFocusOnModal(form.current, true);
}, [visible]);

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={rootClassesContent.join(' ')} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={sendFile} ref={form}>
          <label htmlFor="file-upload" className={cl.custom_file_upload}>
            {img ? img.name : 'Выберите фотографию'}
          </label>
          <input id="file-upload" type="file" name="file" accept=".jpg, .jpeg, .png, .gif, .bmp" onChange={uploadImage} />
          <Button>Отправить</Button>
        </form>
      </div>
    </div>
  )
}
