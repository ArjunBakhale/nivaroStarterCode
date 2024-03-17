//import all of your components here!!!
import Intro from "@/components/intro";
import Chatbot from '@/components/chatbot';
import Spacing from '@/components/spacing';
import About from '@/components/about';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      
      {/* Place your components in the order you want them to show up here */}
      {/* This is your main page. This is the first thing that shows up when you go to your website. */}
      {/* To get to other pages, add links to them inside components or in header.tsx (the thing at the top of the screen with the links in it). */}
      
      <Intro />
      <Spacing/>
      <Chatbot />
      <Spacing/>
      
    </main>
  );
}



