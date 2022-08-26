import Image from 'next/image';
import CardIcon from '../icons/CardIcon';

function Sidebar() {
  return (
    <div className="relative flex-[1.5] bg-[url('/images/bg-main-mobile.png')] bg-no-repeat bg-cover w-full">
      <div className="absolute top-5 w-full text-right px-4 sm:px-1 sm:top-1/2 sm:left-24 lg:left-[10rem]">
          <Image
            src="/images/bg-card-back.png"
            className=" shadow-xl"
            width={300}
            height={150}
            alt="card-back"
          />
      </div>
      <div className="relative  top-[100px] w-full sm:top-1/3 sm:left-1/3 md:left-1/2 text-center pr-5 pl-2 sm:pl-1">
         <div className="absolute">
        <Image
          src="/images/bg-card-front.png"
          className="shadow-xl"
          width={300}
          height={150}
          alt="card front"
        />
         <div className='absolute top-4 left-4'>
            <CardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
