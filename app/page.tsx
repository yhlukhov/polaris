import {CodeBlockSection} from '../components/shad/code-block'
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="text-red-700">
      <main>
        Home Page
        <CodeBlockSection />
        <Button variant='destructive'>Click me!</Button>
      </main>
    </div>
  );
}
