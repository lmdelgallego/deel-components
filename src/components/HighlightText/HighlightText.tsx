import { FC } from 'react';

interface HighlightTextProps {
  text: string;
  query: string;
}

export const HighlightText: FC<HighlightTextProps> = ({ text, query }) => {

  const highlightMatch = (text: string, query: string) => {

    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const after = text.slice(index + query.length);
    return `${before}<strong class="d-highlight">${match}</strong>${after}`;
  }

  return <span dangerouslySetInnerHTML={{ __html: highlightMatch(text, query)}} />;

}
