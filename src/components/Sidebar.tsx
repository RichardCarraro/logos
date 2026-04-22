import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, User } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { cn } from '../lib/utils';

function Sidebar() {
  const { progress } = useProgress();
  const location = useLocation();

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Início' },
    { to: '/aprender', icon: BookOpen, label: 'Aprender' },
    { to: '/progresso', icon: User, label: 'Perfil' },
  ];

  return (
    <aside className='hidden md:flex flex-col w-64 bg-white border-r border-prof-border p-8 h-screen sticky top-0'>
      <div className='flex items-center gap-3 text-prof-primary font-serif font-bold text-2xl mb-12'>
        <div className='w-8 h-8 bg-prof-primary rounded-lg flex items-center justify-center text-white text-lg'>L</div>
        LOGOS
      </div>

      <nav className='flex-grow space-y-2'>
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all',
                isActive ? 'bg-gray-100 text-prof-primary' : 'text-prof-muted hover:text-prof-primary'
              )}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className='mt-8 pt-8 border-t border-prof-border'>
        <p className='text-[10px] font-bold text-prof-muted uppercase tracking-wider mb-2'>Nível {progress.level}: DISCÍPULO</p>
        <div className='h-2 bg-prof-border rounded-full overflow-hidden'>
          <div 
            className='h-full bg-prof-primary transition-all duration-1000' 
            style={{ width: ${Math.min(100, (progress.points % 1000) / 10)}% }}
          />
        </div>
        <p className='text-[10px] text-right text-prof-muted mt-1'>{progress.points % 1000} / 1000 XP</p>
      </div>
    </aside>
  );
}

export default Sidebar;
