import Link from 'next/link';
import IconHome from './icons/home';
import IconCog6Tooth from './icons/cog-6-tooth';
import IconArchiveBox from './icons/archive-box';
import IconQueueList from './icons/queue-list';
import IconBuildingStoreFront from './icons/building-storefront';

function AsideLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex w-full space-x-4 rounded-md px-4 py-4 hover:text-blue-500 ${
        active ? 'bg-slate-200 text-blue-500' : ''
      }`}
    >
      {children}
    </Link>
  );
}

export default function Aside() {
  return (
    <aside className="flex h-full shrink-0 flex-col justify-between space-y-10 overflow-y-auto border-r bg-white px-10">
      <div className="">
        <Link
          href="/"
          className="flex h-20 items-center justify-center space-x-4 px-4 text-lg font-semibold text-blue-500"
        >
          <IconBuildingStoreFront />
          <span>E-Commerce Admin</span>
        </Link>
        <nav className="py-10">
          <span className="mb-4 block px-4 text-xl font-light">Menu</span>
          <AsideLink href="/" active>
            <IconHome />
            <span>Dashboard</span>
          </AsideLink>
          <AsideLink href="/orders">
            <IconQueueList />
            <span>Orders</span>
          </AsideLink>
          <AsideLink href="/products">
            <IconArchiveBox />
            <span>Products</span>
          </AsideLink>
        </nav>
        <hr />
        <nav className="py-10">
          <span className="mb-4 block px-4 text-xl font-light">Other</span>
          <AsideLink href="/settings">
            <IconCog6Tooth />
            <span>Settings</span>
          </AsideLink>
          <AsideLink href="/help">
            <IconCog6Tooth />
            <span>Help</span>
          </AsideLink>
        </nav>
      </div>
      <div className="flex w-full space-x-4 px-6">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-200"
        >
          {'<|'}
        </button>
      </div>
    </aside>
  );
}