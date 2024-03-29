import { ReactNode, useState } from 'react';
import {
  CollapsibleCaretClosed,
  CollapsibleCaretOpen,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleWrapper
} from './CollapsibleStyles';

interface ICollapsible {
  children: ReactNode;
  title: string;
  active?: boolean;
}

const Collapsible: React.FC<ICollapsible> = ({ children, title, active = false }) => {
  const [open, setOpen] = useState<Boolean>(active);

  return (
    <CollapsibleWrapper>
      <CollapsibleHeader onClick={() => {
        setOpen(!open)
      }}>
        {title}
        {open ? (
          <CollapsibleCaretOpen>&#9650;</CollapsibleCaretOpen>
        ) : (
          <CollapsibleCaretClosed>&#9660;</CollapsibleCaretClosed>
        )}
      </CollapsibleHeader>
      {open && <CollapsibleContent>
        {children}
      </CollapsibleContent>}
    </CollapsibleWrapper>
  );
}

export default Collapsible;