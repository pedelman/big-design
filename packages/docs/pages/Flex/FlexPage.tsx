import { Box, Flex, H0, H1, H2, Text } from '@bigcommerce/big-design';
import React from 'react';

import { Code, CodePreview, Collapsible } from '../../components';
import { FlexItemPropTable, FlexPropTable, MarginPropTable, PaddingPropTable } from '../../PropTables';

const ExampleBox: React.FC<{ vertical?: boolean }> = ({ children, vertical }) => (
  <Box
    backgroundColor="secondary20"
    border="box"
    marginVertical={vertical ? 'xSmall' : 'none'}
    marginHorizontal={vertical ? 'none' : 'xSmall'}
    padding="small"
  >
    {children}
  </Box>
);

export default () => (
  <>
    <H0>Flex</H0>

    <Text>A flex container used for customizable layouts.</Text>

    <CodePreview scope={{ ExampleBox }}>
      {/* jsx-to-string:start */}
      <Flex
        alignContent="stretch"
        alignItems="stretch"
        flexDirection="row"
        justifyContent="flex-start"
        flexWrap="nowrap"
      >
        <Flex.Item alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>
          <ExampleBox>Item 1</ExampleBox>
        </Flex.Item>
        <Flex.Item alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>
          <ExampleBox>Item 2</ExampleBox>
        </Flex.Item>
        <Flex.Item alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>
          <ExampleBox>Item 3</ExampleBox>
        </Flex.Item>
        <Flex.Item alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>
          <ExampleBox>Item 4</ExampleBox>
        </Flex.Item>
      </Flex>
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>API</H1>

    <H2>Flex</H2>

    <FlexPropTable />

    <H2>Flex.Item</H2>

    <FlexItemPropTable />

    <H2>Inherited Props</H2>

    <Collapsible title="Margin Props">
      <MarginPropTable />
    </Collapsible>

    <Collapsible title="Padding Props">
      <PaddingPropTable />
    </Collapsible>

    <H1>Examples</H1>

    <Text>
      Flex container's can space their element with uniform spacing in-between each flex item using the{' '}
      <Code primary>justifyContent</Code> prop.
    </Text>

    <CodePreview scope={{ ExampleBox }}>
      {/* jsx-to-string:start */}
      <Flex justifyContent="space-between">
        <Flex.Item>
          <ExampleBox>Item 1</ExampleBox>
        </Flex.Item>
        <Flex.Item>
          <ExampleBox>Item 2</ExampleBox>
        </Flex.Item>
        <Flex.Item>
          <ExampleBox>Item 3</ExampleBox>
        </Flex.Item>
        <Flex.Item>
          <ExampleBox>Item 4</ExampleBox>
        </Flex.Item>
      </Flex>
      {/* jsx-to-string:end */}
    </CodePreview>

    <Text>
      One way of creating a column based layout is using a combination of the <Code primary>flexWrap</Code> prop on the
      flex container with an additional <Code primary>flexBasis</Code> prop on the flex items.
    </Text>

    <CodePreview scope={{ ExampleBox }}>
      {/* jsx-to-string:start */}
      <Flex flexWrap="wrap">
        <Flex.Item flexBasis="100%">
          <ExampleBox vertical>Item 1</ExampleBox>
        </Flex.Item>
        <Flex.Item flexBasis="100%">
          <ExampleBox vertical>Item 2</ExampleBox>
        </Flex.Item>
        <Flex.Item flexBasis="100%">
          <ExampleBox vertical>Item 3</ExampleBox>
        </Flex.Item>
        <Flex.Item flexBasis="100%">
          <ExampleBox vertical>Item 4</ExampleBox>
        </Flex.Item>
      </Flex>
      {/* jsx-to-string:end */}
    </CodePreview>

    <Text>
      Using the <Code primary>flexOrder</Code> prop you can reorganize content based on the size generated by setting
      the <Code primary>flexGrow</Code> prop. <Code primary>flexGrow</Code> allows the flex items to grow relative to
      the flex container's width.
    </Text>

    <CodePreview scope={{ ExampleBox }}>
      {/* jsx-to-string:start */}
      <Flex>
        <Flex.Item flexGrow={2} flexOrder={2}>
          <ExampleBox>Item 1</ExampleBox>
        </Flex.Item>
        <Flex.Item flexOrder={4}>
          <ExampleBox>Item 2</ExampleBox>
        </Flex.Item>
        <Flex.Item flexGrow={4} flexOrder={1}>
          <ExampleBox>Item 3</ExampleBox>
        </Flex.Item>
        <Flex.Item flexGrow={1} flexOrder={3}>
          <ExampleBox>Item 4</ExampleBox>
        </Flex.Item>
      </Flex>
      {/* jsx-to-string:end */}
    </CodePreview>
  </>
);
