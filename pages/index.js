import Image from 'next/image';

import Sidebar from '../components/sidebar/Sidebar';
import Form from '../components/form/Form';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full">
        <Sidebar />
      <Form />
    </div>
  );
}
