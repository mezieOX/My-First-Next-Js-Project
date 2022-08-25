import Image from 'next/image';
import CardIcon from '../icons/CardIcon';

function Sidebar() {
  return (
    <div className="relative flex-[1.5] bg-[url('/images/bg-main-mobile.png')] bg-no-repeat bg-cover w-full">
      <div className='absolute top-5 w-full text-right px-5'>
        <Image src="/images/bg-card-back.png" width={300} height={150} alt="card-back" />
      </div>
      <div className='absolute top-[100px] w-full h-28 text-center pr-5 pl-2'>
        <Image src="/images/bg-card-front.png" className='shadow-xl' width={300} height={150} alt="card front"/>
      </div>
    </div>
  );
}

export default Sidebar;
