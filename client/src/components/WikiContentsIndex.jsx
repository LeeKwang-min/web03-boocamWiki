/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Index = styled.div`
  h2,
  h3,
  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    width: fit-content;
    display: block;
    margin: 0px;
  }

  padding: 12px 20px 18px 0;
  border: 2px solid #d7d7d7;
  max-width: 350px;
  height: fit-content;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-left: 14px;
`;
const Padd = styled.div`
  margin-top: 12px;
  padding-left: 20px;
`;

const Obj = {
  headerCount: 1,
  header2Count: 1,
  header3Count: 1,
  reset: () => {
    Obj.headerCount = 1;
    Obj.header2Count = 1;
    Obj.header3Count = 1;
  },
  h1: ({ node, ...props }) => {
    Obj.headerCount += 1;
    Obj.header2Count = 1;
    Obj.header3Count = 1;
    let text;
    if (props.children) {
      text = props.children[0];
    }
    const hh = `#${text}`;
    return (
      <li style={{ listStyle: 'none' }}>
        <a href={hh} style={{ display: 'inline' }}>
          {Math.round(Obj.headerCount / 2 - 1)}
        </a>{' '}
        <h2 {...props} style={{ display: 'inline' }} />
      </li>
    );
  },
  h2: ({ node, ...props }) => {
    console.log(node, props);
    Obj.header2Count += 1;
    let text;
    if (props.children) {
      text = props.children[0];
    }
    const hh = `#${text}`;
    return (
      <li style={{ listStyle: 'none', paddingLeft: '20px' }}>
        <a href={hh} style={{ display: 'inline' }}>
          {Math.round(Obj.headerCount / 2 - 1)}.{Math.round(Obj.header2Count / 2 - 1)}
        </a>{' '}
        <h3 {...props} style={{ display: 'inline' }} />
      </li>
    );
  },
  h3: ({ node, ...props }) => {
    console.log(node, props);
    Obj.header3Count += 1;
    let text;
    if (props.children) {
      text = props.children[0];
    }
    const hh = `#${text}`;
    return (
      <li style={{ listStyle: 'none', paddingLeft: '40px' }}>
        <a href={hh} style={{ display: 'inline' }}>
          {Math.round(Obj.headerCount / 2 - 1)}.{Math.round(Obj.header2Count / 2 - 1)}.
          {Math.round(Obj.header3Count / 2 - 1)}
        </a>{' '}
        <h4 {...props} style={{ display: 'inline' }} />
      </li>
    );
  },
};

const WikiContentsIndex = ({ text, title }) => {
  return (
    <Index>
      <Title> {title}</Title>
      <Padd>
        <ReactMarkdown
          allowElement={(elem, index, parent) => {
            console.log(elem, parent);
            if (elem.tagName === 'h1') return true;
            if (parent.tagName === 'h1') return true;
            return false;
          }}
          includeElementIndex="true"
          unwrapDisallowed="true"
          components={Obj}
        >
          {text}
        </ReactMarkdown>
      </Padd>
    </Index>
  );
};

export default WikiContentsIndex;
