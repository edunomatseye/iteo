import Link from 'next/link';
import { trpc } from '../trpc/utils/trpc';
import './global.css';

export const metadata = {
  title: 'Welcome to your future!',
  description: 'A goto auction application from the greate beyond and above.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row bg-red-100 rounded-lg shadow-md border border-b-red-600 m-5 p-10 max-w-max">
          <ul className="flex">
            <li className="p-3 m-2 rounded-md bg-slate-300 hover:bg-green-100">
              <Link href="/">Home</Link>
            </li>
            <li className="p-3 m-2 rounded-md bg-slate-300 hover:bg-green-100">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default trpc.withTRPC(RootLayout);
