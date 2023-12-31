import Link from 'next/link';
import React from 'react';

function ContactUs() {
  return (
    <div className='pt-[200px] text-orange-500 text-[40px] text-center pb-14'>
      <h1 className='underline'>CONTACT US</h1>
      <h1>Email: <Link href='mailto:manukulacharitable.org@gmail.com'>manukulacharitable.org@gmail.com</Link></h1>
      <h1>Phone: <Link href='tel:+9513889732'>9513889732</Link>, <Link href='tel:+9538071012'>9538071012</Link>, <Link href='tel:+9538071032'>9538071032</Link></h1>
    </div>
  );
}

export default ContactUs;
