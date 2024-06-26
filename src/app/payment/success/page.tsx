// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// next
import Link from 'next/link';

// icon
import { Check } from 'lucide-react';

export default function SuccessRoute() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <Check className="w-12 h-12 rounded-full bg-green-500/30 text-green-500 p-2" />
          </div>

          <div className="mt-3 text-center sm:mt-5 w-full">
            <h4>Betalning genomförd</h4>
            <div className="mt-2">
              <p>
                Tack för ditt köp! Vänligen kolla din e-post för vidare
                instruktioner.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 w-full">
              <Button className="w-full" asChild>
                <Link href="/">Tillbaka till startsidan</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
