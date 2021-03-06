import React from 'react';

import { NextLink, PropTable } from '../components';

export const BoxPropTable: React.FC = () => (
  <PropTable>
    <PropTable.Prop
      name="backgroundColor"
      types={
        <NextLink href="/Colors/ColorsPage" as="/colors">
          Color
        </NextLink>
      }
    >
      Sets the background color given a color name from our{' '}
      <NextLink href="/Colors/ColorsPage" as="/colors">
        palette
      </NextLink>
      .
    </PropTable.Prop>
    <PropTable.Prop name="shadow" types={['floating', 'raised']}>
      Determines the type of shadow to be applied.
    </PropTable.Prop>
    <PropTable.Prop name="border" types={['box', 'boxError', 'none']}>
      Determines type of border to be applied.
    </PropTable.Prop>
    <PropTable.Prop name="borderBottom" types={['box', 'boxError', 'none']}>
      Determines type of bottom border to be applied.
    </PropTable.Prop>
    <PropTable.Prop name="borderLeft" types={['box', 'boxError', 'none']}>
      Determines type of left border to be applied.
    </PropTable.Prop>
    <PropTable.Prop name="borderRight" types={['box', 'boxError', 'none']}>
      Determines type of right border to be applied.
    </PropTable.Prop>
    <PropTable.Prop name="borderTop" types={['box', 'boxError', 'none']}>
      Determines type of top border to be applied.
    </PropTable.Prop>
    <PropTable.Prop name="borderRadius" types={['normal', 'circle', 'none']}>
      Determines type of border radius to be applied.
    </PropTable.Prop>
  </PropTable>
);
