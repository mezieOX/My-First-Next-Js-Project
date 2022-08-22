import Image from 'next/image';
import CardIcon from '../icons/CardIcon';

function Sidebar() {
  return (
    <div className="flex-[1] bg-[url('/images/bg-main-desktop.png')] bg-cover w-full md:w-20 md:h-screen text-white flex items-center">
      <div className='absolute grid item-center md:left-[2px] lg:left-20 xl:left-60 2xl:left-80 3xl:left-96'>
        <div className="relative w-screen md:w-full text-center md:text-left z-20">
          <div className="absolute z-10 md:top-4 md:left-5">
            <CardIcon className="" />
            </div>
        <Image src="/images/bg-card-front.png" width={320} height={180} alt="bg-card-front"  />
      </div>
      <div className='absolute md:relative w-screen md:w-full lg:ml-20 text-center mt-5 md:mt-10'>
        <Image src="/images/bg-card-back.png" width={320} height={180} alt="bg-card-front"  />
        </div>
        </div>
    </div>
  );
}

export default Sidebar;
