
import { Globe, Activity, BarChart3, Lock, Zap, ShieldCheck, Users, Briefcase, Headphones, FileText, Handshake, GraduationCap, CreditCard, LucideIcon, Phone, Clock, Layers, MousePointerClick, ArrowLeftRight, AlertTriangle, MessageCircle, FileQuestion, Book, Server, Scale, Gavel, Star, DollarSign } from 'lucide-react';

// --- INTERFACES ---

export interface Specification {
  label: string;
  value: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQCategory {
  id: string;
  label: string;
  questions: { q: string; a: string }[];
}

export interface TableData {
  title: string;
  intro?: string;
  headers: string[];
  rows: string[][];
}

export interface DetailedCategory {
  id: string;
  type: 'market' | 'faq' | 'info' | 'about';
  
  // Header Info
  title: string;
  subtitle: string;
  icon: LucideIcon;

  // Content
  description: (string | TableData)[]; 
  
  // Market Specifics
  features: FeatureItem[];
  specifications: Specification[];
  
  // FAQ Specifics
  faqCategories?: FAQCategory[];
  
  // Legacy/Info Specifics
  details?: string[]; 
}

// --- CONTENT DATA ---

export const pageContent: Record<string, DetailedCategory> = {
  // --- MARKETS ---
  forex: {
    id: 'forex',
    type: 'market',
    title: 'market.forex.title',
    subtitle: 'market.forex.subtitle',
    icon: Globe,
    description: [
      'market.forex.desc.1',
      'market.forex.desc.2',
      'market.forex.desc.3',
      'market.forex.desc.4'
    ],
    features: [
      { title: "market.forex.feat.1.title", description: "market.forex.feat.1.desc", icon: Layers },
      { title: "market.forex.feat.2.title", description: "market.forex.feat.2.desc", icon: Globe },
      { title: "market.forex.feat.3.title", description: "market.forex.feat.3.desc", icon: ArrowLeftRight },
      { title: "market.forex.feat.4.title", description: "market.forex.feat.4.desc", icon: ShieldCheck }
    ],
    specifications: [
      { label: 'market.forex.spec.1', value: 'market.forex.spec.1.v' },
      { label: 'market.forex.spec.2', value: 'market.forex.spec.2.v' },
      { label: 'market.forex.spec.3', value: 'market.forex.spec.3.v' },
      { label: 'market.forex.spec.4', value: 'market.forex.spec.4.v' },
      { label: 'market.forex.spec.5', value: 'market.forex.spec.5.v' },
      { label: 'market.forex.spec.6', value: 'market.forex.spec.6.v' }
    ]
  },

  indices: {
    id: 'indices',
    type: 'market',
    title: 'market.indices.title',
    subtitle: 'market.indices.subtitle',
    icon: Activity,
    description: [
      'market.indices.desc.1',
      'market.indices.desc.2',
      'market.indices.desc.3',
      'market.indices.desc.4',
      {
        title: "market.indices.table.title",
        intro: "market.indices.table.intro",
        headers: ["market.indices.table.h1", "market.indices.table.h2", "market.indices.table.h3", "market.indices.table.h4"],
        rows: [
          ["UK100", "FTSE 100 Index", "01:05 - 23:59\n(Mon Open 01:05, Fri Close 22:59)", "23:59 - 01:05"],
          ["US2000", "Russell 2000 Index", "01:00 - 23:59\n(Mon Open 01:00, Fri Close 23:55)", "23:59 - 01:00"],
          ["US30", "DJIA Index", "01:00 - 23:59\n(Mon Open 01:00, Fri Close 23:55)", "23:59 - 01:00"],
          ["US500", "E-mini S&P 500 Index", "01:00 - 23:59\n(Mon Open 01:00, Fri Close 23:55)", "23:59 - 01:00"],
          ["USTEC", "E-mini Nasdaq 100", "01:00 - 23:59\n(Mon Open 01:00, Fri Close 23:55)", "23:59 - 01:00"],
          ["AUS200", "Australia 200 Index", "02:50 - 09:30\n10:10 - 23:59", "09:30 - 10:10\n23:59 - 02:50"],
          ["CA60", "Canada 60 TSX Index", "16:35 - 22:58\n(Break 22:58 - 16:35)", "22:58 - 16:35"],
          ["CHINA50", "FTSE ChinaA50 Index", "04:00 - 11:30\n12:00 - 23:45", "11:30 - 12:00\n23:45 - 04:00"],
          ["CHINAH", "Hong Kong ChinaH Index", "04:15 - 07:00\n08:00 - 11:30\n12:15 - 21:58", "07:00 - 08:00\n11:30 - 12:15\n21:58 - 04:15"],
          ["DE40", "Germany 40 DAX Index", "01:05 - 03:15\n03:16 - 23:59\n(Fri Close 23:00)", "03:15 - 03:16\n23:59 - 01:05"],
          ["ES35", "IBEX 35 Spain Index", "10:00 - 20:59", "20:59 - 10:00"],
          ["F40", "France 40 CAC Index", "09:00 - 22:59", "22:59 - 09:00"],
          ["HK50", "Hong Kong 50 Index", "04:15 - 07:00\n08:00 - 11:30\n12:15 - 21:50", "07:00 - 08:00\n11:30 - 12:15\n21:50 - 04:15"],
          ["IT40", "Italian 40 Index", "09:05 - 22:59", "22:59 - 09:05"],
          ["JP225", "Japan 225 NIKKEI Index", "01:00 - 23:15\n23:30 - 23:59\n(Fri 01:00 - 23:15)", "23:15 - 23:30\n23:59 - 01:00"],
          ["MidDE50", "Germany Mid50 Index", "10:05 - 18:25", "18:25 - 10:05"],
          ["NETH25", "Netherlands 25 Index", "09:05 - 22:45", "22:45 - 09:05"],
          ["NOR25", "Norway 25 Index", "10:05 - 17:15", "17:15 - 10:05"],
          ["SA40", "South Africa 40 Index", "09:35 - 18:25", "18:25 - 09:35"],
          ["SE30", "Sweden 30 Index", "10:05 - 18:18", "18:18 - 10:05"],
          ["STOXX50", "EUROSTOXX 50 Index", "09:00 - 22:59", "22:59 - 09:00"],
          ["SWI20", "Switzerland 20 Index", "09:05 - 22:45", "22:45 - 09:05"],
          ["TecDE30", "Germany Tech30 Index", "10:05 - 18:25", "18:25 - 10:05"]
        ]
      }
    ],
    features: [
      { title: "market.indices.feat.1.title", description: "market.indices.feat.1.desc", icon: Layers },
      { title: "market.indices.feat.2.title", description: "market.indices.feat.2.desc", icon: BarChart3 },
      { title: "market.indices.feat.3.title", description: "market.indices.feat.3.desc", icon: ArrowLeftRight },
      { title: "market.indices.feat.4.title", description: "market.indices.feat.4.desc", icon: Zap }
    ],
    specifications: [
      { label: 'market.indices.spec.1', value: 'market.indices.spec.1.v' },
      { label: 'market.indices.spec.2', value: 'market.indices.spec.2.v' },
      { label: 'market.indices.spec.3', value: 'market.indices.spec.3.v' },
      { label: 'market.indices.spec.4', value: 'market.indices.spec.4.v' },
      { label: 'market.indices.spec.5', value: 'market.indices.spec.5.v' }
    ]
  },

  commodities: {
    id: 'commodities',
    type: 'market',
    title: 'market.comm.title',
    subtitle: 'market.comm.subtitle',
    icon: BarChart3,
    description: [
      'market.comm.desc.1',
      'market.comm.desc.2',
      'market.comm.desc.3',
      'market.comm.desc.4',
      {
        title: "market.comm.table.title",
        intro: "market.comm.table.intro",
        headers: ["market.comm.table.h1", "market.comm.table.h2"],
        rows: [
          ["XAU/USD", "01:02 - 23:59\n(Friday: 01:02 - 23:57)"],
          ["XAU/EUR", "01:02 - 23:59\n(Friday: 01:02 - 23:57)"],
          ["XAU/AUD", "01:02 - 23:59\n(Friday: 01:02 - 23:57)"],
          ["XAG/USD", "01:00 - 23:59\n(Friday: 01:00 - 23:57)"],
          ["XAG/EUR", "01:00 - 23:59\n(Friday: 01:00 - 23:57)"],
          ["XPT/USD", "01:00 - 23:59\n(Friday: 01:00 - 23:57)"],
          ["XPD/USD", "01:00 - 23:59\n(Friday: 01:00 - 23:57)"]
        ]
      }
    ],
    features: [
      { title: "market.comm.feat.1.title", description: "market.comm.feat.1.desc", icon: ShieldCheck },
      { title: "market.comm.feat.2.title", description: "market.comm.feat.2.desc", icon: Activity },
      { title: "market.comm.feat.3.title", description: "market.comm.feat.3.desc", icon: Layers },
      { title: "market.comm.feat.4.title", description: "market.comm.feat.4.desc", icon: Clock }
    ],
    specifications: [
      { label: 'market.comm.spec.1', value: 'market.comm.spec.1.v' },
      { label: 'market.comm.spec.2', value: 'market.comm.spec.2.v' },
      { label: 'market.comm.spec.3', value: 'market.comm.spec.3.v' },
      { label: 'market.comm.spec.4', value: 'market.comm.spec.4.v' },
      { label: 'market.comm.spec.5', value: 'market.comm.spec.5.v' }
    ]
  },

  stocks: {
    id: 'stocks',
    type: 'market',
    title: 'market.stocks.title',
    subtitle: 'market.stocks.subtitle',
    icon: Zap,
    description: [
      'market.stocks.desc.1',
      'market.stocks.desc.2',
      'market.stocks.desc.3',
      'market.stocks.desc.4',
      'market.stocks.desc.5',
      {
        title: "market.stocks.table.title",
        intro: "market.stocks.table.intro",
        headers: ["market.stocks.table.h1", "market.stocks.table.h2", "market.stocks.table.h3"],
        rows: [
          ["ASX", "Australian Stock Exchange", "03:10 - 08:55"],
          ["NYSE", "New York Stock Exchange", "16:35 - 22:55"],
          ["NASDAQ", "NASDAQ Stock Exchange", "16:35 - 22:55"],
          ["HKEx", "Hong Kong Stock Exchange", "04:35 - 06:55\n08:05 - 10:55"],
          ["LSE", "London Stock Exchange", "10:05 - 18:25"],
          ["XETRA", "Frankfurt Stock Exchange", "10:05 - 18:25"]
        ]
      }
    ],
    features: [
      { title: "market.stocks.feat.1.title", description: "market.stocks.feat.1.desc", icon: Star },
      { title: "market.stocks.feat.2.title", description: "market.stocks.feat.2.desc", icon: FileText },
      { title: "market.stocks.feat.3.title", description: "market.stocks.feat.3.desc", icon: DollarSign },
      { title: "market.stocks.feat.4.title", description: "market.stocks.feat.4.desc", icon: Layers }
    ],
    specifications: [
      { label: 'market.stocks.spec.1', value: 'market.stocks.spec.1.v' },
      { label: 'market.stocks.spec.2', value: 'market.stocks.spec.2.v' },
      { label: 'market.stocks.spec.3', value: 'market.stocks.spec.3.v' },
      { label: 'market.stocks.spec.4', value: 'market.stocks.spec.4.v' }
    ]
  },

  crypto: {
    id: 'crypto',
    type: 'market',
    title: 'market.crypto.title',
    subtitle: 'market.crypto.subtitle',
    icon: Lock,
    description: [
      'market.crypto.desc.1',
      'market.crypto.desc.2',
      'market.crypto.desc.3',
      'market.crypto.desc.4',
      'market.crypto.desc.5'
    ],
    features: [
      { title: "market.crypto.feat.1.title", description: "market.crypto.feat.1.desc", icon: Clock },
      { title: "market.crypto.feat.2.title", description: "market.crypto.feat.2.desc", icon: ArrowLeftRight },
      { title: "market.crypto.feat.3.title", description: "market.crypto.feat.3.desc", icon: Lock },
      { title: "market.crypto.feat.4.title", description: "market.crypto.feat.4.desc", icon: Activity }
    ],
    specifications: [
      { label: 'market.crypto.spec.1', value: 'market.crypto.spec.1.v' },
      { label: 'market.crypto.spec.2', value: 'market.crypto.spec.2.v' },
      { label: 'market.crypto.spec.3', value: 'market.crypto.spec.3.v' },
      { label: 'market.crypto.spec.4', value: 'market.crypto.spec.4.v' },
      { label: 'market.crypto.spec.5', value: 'market.crypto.spec.5.v' }
    ]
  },

  'customer-service': {
    id: 'customer-service',
    type: 'faq',
    title: 'page.faq.title',
    subtitle: 'page.faq.subtitle',
    icon: Headphones,
    description: ['page.support.faq'],
    features: [],
    specifications: []
  },

  'legal-documents': {
    id: 'legal-documents',
    type: 'info',
    title: 'legal.page.title',
    subtitle: 'legal.page.subtitle',
    icon: FileText,
    description: ['page.legal.desc.main'],
    features: [],
    specifications: []
  },

  'about': {
    id: 'about',
    type: 'about',
    title: 'page.about.title.2',
    subtitle: 'page.about.subtitle.2',
    icon: Users,
    description: [
      "page.about.intro",
      "page.about.desc.1", 
      "page.about.desc.2",
      "page.about.desc.3",
      "page.about.desc.4",
      "page.about.vision",
      "page.about.desc.5"
    ],
    features: [],
    specifications: []
  },

  'contact-us': { 
    id: 'contact-us', 
    type: 'info', 
    title: 'page.contact.title', 
    subtitle: 'page.contact.subtitle.2', 
    icon: Phone, 
    description: ['page.contact.desc.2'],
    details: ['page.contact.d1', 'page.contact.d2', 'page.contact.d3', 'page.contact.d4'],
    features: [], 
    specifications: [] 
  },

  'ib-affiliates': { 
    id: 'ib-affiliates', 
    type: 'info', 
    title: 'page.partners.title', 
    subtitle: 'page.partners.subtitle.2', 
    icon: Handshake, 
    description: ['page.partners.desc.2'],
    details: ['page.partners.d1', 'page.partners.d2', 'page.partners.d3', 'page.partners.d4'], 
    features: [], 
    specifications: [] 
  },

  'learning-hub': { 
    id: 'learning-hub', 
    type: 'info', 
    title: 'page.learning.title', 
    subtitle: 'page.learning.subtitle.2', 
    icon: GraduationCap, 
    description: ['page.learning.desc.2'],
    details: ['page.learning.d1', 'page.learning.d2', 'page.learning.d3', 'page.learning.d4'],
    features: [], 
    specifications: [] 
  },

  'payment-methods': { 
    id: 'payment-methods', 
    type: 'info', 
    title: 'page.payments.title', 
    subtitle: 'page.payments.subtitle.2', 
    icon: CreditCard, 
    description: ['page.payments.desc.2'],
    details: ['page.payments.d1', 'page.payments.d2', 'page.payments.d3', 'page.payments.d4'],
    features: [], 
    specifications: [] 
  },
};
