import React, { ReactNode } from 'react';

interface ListPopperElementProps {
  children: ReactNode;
  scheduleUpdate(): void;
}

export class ListPopperElement extends React.PureComponent<ListPopperElementProps> {
  componentDidUpdate(prevProps: ListPopperElementProps) {
    if (this.props.children && React.Children.count(this.props.children) !== React.Children.count(prevProps.children)) {
      this.props.scheduleUpdate();
    }
  }

  render() {
    return this.props.children;
  }
}
