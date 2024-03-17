//import all of your components here!!!
import Spacing from '@/components/spacing';
import About from "@/components/about";
import StarterCode from "@/components/starterCode";

//For each separate page you want to create, you have to add a new folder to the app folder
//In this example, I called that page examplePage
//In that folder, you have to create a file called page.tsx (it MUST be called page.tsx)
//In that file, you have to import all of the components you want to use on that page. 

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      

      <About />
      <Spacing/>
      <StarterCode />
      
    </main>
  );
}
