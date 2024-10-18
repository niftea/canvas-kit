import * as React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';
import {createModifiers, createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {Base, BaseProps} from './lib/Base';
import {Heading} from './lib/Heading';
import {Body} from './lib/Body';
import {Icon} from './lib/Icon';
import {Button} from './lib/Button';
import {useInformationHighlightModel, Variant} from './lib/modelHook';

interface InformationHighlightProps extends BaseProps {
  variant?: Variant;
}

const containerStyles = createStyles({
  display: 'grid',
  gridTemplateColumns: 'min-content',
  columnGap: system.space.x4,
  rowGap: system.space.x2,
  padding: system.space.x4,
  borderRadius: system.shape.x1,
});

const containerModifiers = createModifiers({
  variant: {
    informational: createStyles({
      border: `solid ${cssVar(system.shape.half)}`,
      borderColor: `${cssVar(base.blueberry400)}`,
      backgroundColor: system.color.static.blue.soft,
    }),
    caution: createStyles({
      border: `solid ${cssVar(system.shape.half)}`,
      borderColor: ` ${cssVar(base.cantaloupe400)}`,
      backgroundColor: system.color.static.orange.soft,
    }),
    attention: createStyles({
      border: `solid ${cssVar(system.shape.half)}`,
      borderColor: `${cssVar(base.cinnamon500)}`,
      backgroundColor: system.color.static.red.soft,
    }),
  },
});

export const InformationHighlight = createContainer('section')({
  /**
   * InformationHighlight takes in a variant or custom theme to determine the color of the
   * background and border. The prebuilt variants are:
   * 'informational' - blue
   * 'caution' - orange
   * 'attention' - red
   * if a custom or prebuilt variant is not provided the system defaults to 'informational'
   *
   * ```tsx
   * <InformationHighlight variant={'informational'}>
   *   ....
   *  </InformationHighlight>
   *  ```
   */
  displayName: 'InformationHighlight',
  modelHook: useInformationHighlightModel,
  subComponents: {
    Icon: Icon,
    Heading: Heading,
    Body: Body,
    Button: Button,
  },
})((props: InformationHighlightProps, Element, model) => {
  return (
    <Base
      as={Element}
      cs={[containerStyles, containerModifiers({variant: model.state.variant})]}
      {...props}
    />
  );
});
