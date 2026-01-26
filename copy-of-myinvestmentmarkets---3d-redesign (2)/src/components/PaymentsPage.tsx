
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DetailedCategory } from '../data/content';

// Helper function included locally to ensure complete isolation
const renderFormattedText = (text: string) => {
  if (!text) return null;
  const lines = text.split("\n");

  return lines.map((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      const content = trimmed.substring(2, trimmed.length - 2);
      return (
        <h4
          key={index}
          className="text-white font-display font-bold text-lg md:text-xl mt-6 mb-3 block border-l-4 border-[#ef4444] pl-3"
        >
          {content}
        </h4>
      );
    }

    if (trimmed.includes(" : ")) {
      const [key, val] = trimmed.split(" : ");
      return (
        <div
          key={index}
          className="mb-2 pl-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
        >
          <span className="text-white font-bold whitespace-nowrap min-w-[120px] relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#ef4444]">
            {key}
          </span>
          <span className="text-gray-400 text-sm leading-relaxed">{val}</span>
        </div>
      );
    }

    if (trimmed === "") return <div key={index} className="h-2" />;

    return (
      <p
        key={index}
        className="mb-1 text-gray-400 leading-relaxed text-base font-light"
      >
        {line}
      </p>
    );
  });
};

interface PaymentsPageProps {
  content: DetailedCategory;
  t: (key: string) => string;
}

export const PaymentsPage: React.FC<PaymentsPageProps> = ({ content, t }) => {
    const Icon = content.icon;
    return (
        <div className="max-w-4xl mx-auto">
            <header className="mb-16 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{content.title}</h1>
                <p className="text-xl text-gray-400">{content.subtitle}</p>
            </header>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="prose prose-invert max-w-none mb-10">
                    {content.description.map((p, i) => (
                         typeof p === 'string' ? <div key={i}>{renderFormattedText(p)}</div> : null
                    ))}
                </div>
                {content.details && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.details.map((key, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-black/20 border border-white/5">
                                <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={18} />
                                <span className="text-gray-300 text-sm">{t(key)}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
