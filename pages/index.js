import Image from 'next/image';
import Form from '../components/form/Form';
import Sidebar from '../components/sidebar/Sidebar';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Sidebar />
      <Form />
    </div>
  );
}
