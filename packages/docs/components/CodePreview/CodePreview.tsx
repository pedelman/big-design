import * as BigDesign from '@bigcommerce/big-design';
import * as BigDesignIcons from '@bigcommerce/big-design-icons';
import clipboardCopy from 'clipboard-copy';
import { Language } from 'prism-react-renderer';
import React, { useContext, useState } from 'react';
import { LiveEditor, LivePreview, LiveProvider } from 'react-live';
import styled from 'styled-components';

import { SnippetControls } from '../SnippetControls';
import { CodeEditorThemeContext } from '../StoryWrapper/StoryWrapper';

import { StyledLiveError } from './styled';

const defaultScope = {
  ...BigDesign,
  ...BigDesignIcons,
  React,
  styled,
};

function getInitialCode(children: React.ReactNode): string {
  if (typeof children !== 'string') {
    throw new Error('<CodePreview> children must be of type string');
  }

  return children;
}

function transformCode(code: string, noInline = false) {
  if (!noInline) {
    return code;
  }

  // Split code and make it an IIFE
  const codeLines = ['(', ...code.split('\n'), ')()'];

  return codeLines
    .map(line =>
      line.includes('return <')
        ? line.replace('return', 'render(').replace('>;', '>);')
        : line.replace('return', 'render'),
    )
    .join('\n');
}

export interface CodePreviewProps {
  scope?: { [key: string]: any };
  language?: Language;
  noInline?: boolean;
}

export const CodePreview: React.FC<CodePreviewProps> = props => {
  const { children, language, noInline } = props;
  const initialCode = getInitialCode(children);
  const [code, setCode] = useState(initialCode);
  const { editorTheme } = useContext(CodeEditorThemeContext);
  const scope = { ...defaultScope, ...props.scope };

  return (
    <BigDesign.Box border="box" marginBottom="xxLarge">
      <LiveProvider
        code={code}
        scope={scope}
        theme={editorTheme}
        language={language}
        transformCode={codeToTransform => transformCode(codeToTransform, noInline)}
        noInline={noInline}
      >
        <BigDesign.Box padding="medium" backgroundColor="white" borderBottom="box">
          <LivePreview />
        </BigDesign.Box>
        <SnippetControls copyToClipboard={() => clipboardCopy(code)} resetCode={() => setCode(initialCode)} />
        <LiveEditor onChange={setCode} />
        <StyledLiveError />
      </LiveProvider>
    </BigDesign.Box>
  );
};

CodePreview.defaultProps = {
  language: 'jsx',
  scope: defaultScope,
};
