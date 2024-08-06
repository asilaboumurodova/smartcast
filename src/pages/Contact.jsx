import logo from '@i/group.svg';
import Entry from './Entry';
import { useContext, useState } from 'react';
import { Context } from '../context/Context';

function Contact() {
  const [openNext, setOpenNext] = useState(false);
  const { userlang } = useContext(Context)
  return (
    <>
      {openNext ? (<Entry />) :
        (<div className="flex items-center justify-center min-h-screen">
          <div className='flex flex-col items-center justify-center gap-y-[20px]'>
            <img src={logo} alt="" />
            <p className='font-normal text-slate-950 text-[26px]'>
              {userlang === 0 && "Kontentni boshqarish uchun sistema www.smartcast.uz "}
              {userlang === 1 && "Система управления контентом www.smartcast.uz"}
              {userlang === 2 && "System for managing content  by www.smartcast.uz"}
            </p>
            <p className='font-bold text-black text-[26px]'>+998 99 857 32 16</p>
            <button onKeyDown={(e) => {if (e.keyCode === 13) setOpenNext(true)}} autoFocus className="device__items-btn">smartcast.uz</button>
          </div>
        </div>)
      }
    </>
  );
}

export default Contact;

