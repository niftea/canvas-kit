import * as React from 'react';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const linkStyles = createStyles({
  ...system.type.subtext.large,
  gridColumn: '2',
  justifySelf: 'start',
  color: `${cssVar(base.blackPepper300)} !important`,
  fontWeight: system.fontWeight.bold,
});

export const Link = createComponent('a')({
  displayName: 'Link',
  Component: (props, ref, Element) => {
    return <Hyperlink as={Element} ref={ref} className={linkStyles} {...props} />;
  },
});
