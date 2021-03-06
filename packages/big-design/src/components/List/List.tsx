import { Placement } from 'popper.js';
import React from 'react';
import { createPortal } from 'react-dom';
import { Popper, RefHandler } from 'react-popper';

import { StyledList } from './styled';
import { ListPopperElement } from './ListPopperElement';

interface Props {
  id?: string;
  isOpen: boolean;
  maxHeight?: number;
  placement?: Placement;
  handleListRef?: RefHandler;
}

type ListProps = Props & React.HTMLAttributes<HTMLUListElement>;

export class List extends React.PureComponent<ListProps> {
  static defaultProps: Partial<Props> = {
    maxHeight: 250,
    placement: 'bottom-start',
  };

  private listContainer?: HTMLDivElement;

  componentDidMount() {
    this.listContainer = document.createElement('div');
    document.body.appendChild(this.listContainer);
  }

  componentWillUnmount() {
    if (this.listContainer) {
      document.body.removeChild(this.listContainer);
    }
  }

  render() {
    const { children, handleListRef, isOpen, maxHeight, placement: selectedPlacement, ...rest } = this.props;

    return this.listContainer
      ? createPortal(
          <Popper innerRef={handleListRef} placement={selectedPlacement} modifiers={{ offset: { offset: '0, 10' } }}>
            {({ placement, ref, scheduleUpdate, style }) =>
              isOpen && (
                <StyledList
                  data-placement={placement}
                  maxHeight={maxHeight}
                  ref={ref}
                  style={style}
                  tabIndex={-1}
                  {...rest}
                >
                  <ListPopperElement scheduleUpdate={scheduleUpdate}>{children}</ListPopperElement>
                </StyledList>
              )
            }
          </Popper>,
          this.listContainer,
        )
      : null;
  }
}
