import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For Bento grid layout
}

export interface NavLink {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: LucideIcon;
  }[];
}
