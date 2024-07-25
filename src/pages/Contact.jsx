import logo from '@i/group.svg';
import Entry from './Entry';
import { useState } from 'react';

function Contact() {
  const [openNext, setOpenNext] = useState(false);
  return (
    <>
    { openNext ? (<Entry/>) :
      (<div className="flex items-center justify-center min-h-screen">
        <div className='flex flex-col items-center justify-center gap-y-[20px]'>
          <img src={logo} alt="" />
          <p className='font-normal text-slate-950 text-[26px]'>Система управления контентом www.smartcast.uz</p>
          <p className='font-bold text-black text-[26px]'>+998 99 857 32 16</p>
          <button onClick={() => setOpenNext(true)} className="device__items-btn">smartcast.uz</button>
        </div>
      </div>)
    }
    </>
  );
}

export default Contact;

