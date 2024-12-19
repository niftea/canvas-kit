import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {system} from '@workday/canvas-tokens-web';

export const Caution = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      The Caution Variant is for “important to know” information, such as the potential consequences
      of specific actions.
      <InformationHighlight variant={'caution'}>
        <InformationHighlight.Icon icon={undefined} />
        <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will just reroute you back to this page
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'caution'} emphasis={'high'}>
        <InformationHighlight.Icon icon={undefined} />
        <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will just reroute you back to this page
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};