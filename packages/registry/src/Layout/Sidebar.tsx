
import Link from 'next/link';
import {
  BarChart2,
  MessageSquare,
  Mail,
  FileText,
  Send,
  Briefcase,
  Files,
  List,
  Globe,
  LayoutTemplate,
  PanelBottom,
  Palette,
  Type,
  Shield,
  ChevronRight,
  MoreVertical
} from 'lucide-react';

export default function Sidebar() {
  const dashboardItems = [
    { label: 'Analytics', icon: BarChart2, href: '#' },
    { label: 'Enquiries', icon: MessageSquare, href: '#' },
    { label: 'Email Templates', icon: Mail, href: '#' },
    { label: 'Blogs', icon: FileText, href: '#', hasSubmenu: true },
    { label: 'Newsletter', icon: Send, href: '#', hasSubmenu: true },
    { label: 'Career Management', icon: Briefcase, href: '#', hasSubmenu: true },
    { label: 'Pages', icon: Files, href: '#', active: true },
    { label: 'Predefines', icon: List, href: '#', hasSubmenu: true },
  ];

  const settingsItems = [
    { label: 'Web Configuration', icon: Globe, href: '#' },
    { label: 'Header', icon: LayoutTemplate, href: '#' },
    { label: 'Footer', icon: PanelBottom, href: '#' },
    { label: 'Themes', icon: Palette, href: '#' },
    { label: 'Fonts', icon: Type, href: '#', hasSubmenu: true },
    { label: 'System & Access', icon: Shield, href: '#', hasSubmenu: true },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">

      <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-100">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-black text-xs font-bold text-white">
          AS
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold leading-tight text-gray-900">Ashraf & Co.</span>
          <span className="text-xs text-gray-500">Admin Dashboard</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">

        <div className="mb-6">
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Dashboard</h3>
          <ul className="space-y-0.5 px-2">
            {dashboardItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`group flex items-center justify-between rounded-md px-2 py-2 text-sm transition-colors ${item.active
                    ? 'bg-gray-100 font-medium text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`h-4 w-4 ${item.active ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`} />
                    {item.label}
                  </div>
                  {item.hasSubmenu && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Settings</h3>
          <ul className="space-y-0.5 px-2">
            {settingsItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between rounded-md px-2 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                    {item.label}
                  </div>
                  {item.hasSubmenu && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 p-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600">
            TH
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm font-medium leading-tight text-gray-900">Team Hasrat & Co.</span>
            <span className="truncate text-xs text-gray-500">projectashrafco@gmail.com</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
