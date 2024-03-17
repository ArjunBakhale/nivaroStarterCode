//import all of your components here!!!
import Intro from "@/components/intro";
import Chatbot from '@/components/chatbot';
import Spacing from '@/components/spacing';
import About from '@/components/about';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      
      {/* Place your components in the order you want them to show up here */}

      <Intro />
      <Spacing/>
      <Chatbot />
      <Spacing/>
      
    </main>
  );
}



