import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const document = new JSDOM('...');
const { window } = document;

global.document = document.window.document;
global.window = window;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.React = React;
global.expect = expect;