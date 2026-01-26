
import { en } from '../locales/en';
import { ko } from '../locales/ko';
import { zh } from '../locales/zh';
import { ja } from '../locales/ja';
import { id } from '../locales/id';
import { vi } from '../locales/vi';
import { th } from '../locales/th';
import { hi } from '../locales/hi';
import { tw } from '../locales/tw';
import { bn } from '../locales/bn';

export type Language = 'en' | 'tw' | 'vi' | 'id' | 'th' | 'zh' | 'hi' | 'bn' | 'ja' | 'ko';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'tw', name: '繁體中文', flag: '🇹🇼' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
];

export const translations: Record<Language, Record<string, string>> = {
  en, ko, zh, ja, id, vi, th, hi, tw, bn
};
