import { useState } from 'react';
import styled from 'styled-components';

const CollapsibleWrapper = styled.div`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fontFamily};
  font-weight: 600;
  margin-top: 3px;
`;
const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.colors.header};
  border-bottom: 1px solid ${props => props.theme.colors.header};
  height: 30px;
  padding-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const CollapsibleCaretOpen = styled.div`
  font-size: 15px;
`;
const CollapsibleCaretClosed = styled.div`
  font-size: 15px;
`;
const CollapsibleContent = styled.div``;

function Collapsible({ children, title, active }: any) {
  const [open, setOpen] = useState<Boolean>(active);

  return (
    <CollapsibleWrapper>
      <CollapsibleHeader onClick={()=>{
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