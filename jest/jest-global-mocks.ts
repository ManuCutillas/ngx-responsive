/**
 * Jest initial setup actions
 *
 * It also enables the following to all Jest tests
 *  . window.localStorage
 *  . window.sessionStorage
 *  . window.getComputedStyle
 *  . document.doctype
 *  . document.body.style.transform
 *  . MockPipe()
 *  . MockComponent()
 *  . MockDirective()
 */
import 'jest-preset-angular';

import { Component, Directive, EventEmitter, Pipe, PipeTransform, Type } from '@angular/core';
declare var jest;
Error.stackTraceLimit = 2;

jest.setTimeout(30000);

Object.defineProperties(global, {
  document: {
    value: window.document,
    writable: true,
    configurable: true,
  },
  HTMLElement: {
    value: window.HTMLElement,
    writable: true,
    configurable: true,
  },
  window: {
    value: window,
    writable: true,
    configurable: true,
  },
});

Object.defineProperties(window, {
  CSS: {
    value: jest.fn(),
    writable: true,
  },
  resizeTo: {
    value: jest.fn(),
    writable: true,
  },
  getComputedStyle: {
    value: () => {
      return {
        display: 'none',
        appearance: ['-webkit-appearance'],
      };
    },
    writable: true,
  },
  matchMedia: {
    writable: true,
    value: jest.fn(),
  },
});

/**
 * Examples:
 * MockComponent({selector: 'some-component'});
 * MockComponent({selector: 'some-component', inputs: ['some-input', 'some-other-input']});
 */
export function MockComponent(selector: string, options: Component = {}): Component {
  const metadata: Component = {
    selector,
    template: options.template || '',
    inputs: options.inputs || [],
    outputs: options.outputs || [],
    exportAs: options.exportAs || '',
  };

  class Mock {
    constructor() {
      metadata.outputs.forEach((method) => {
        this[method] = new EventEmitter<any>();
      });
    }
  }

  return Component(metadata)(Mock as any);
}

/**
 * Examples:
 * MockDirective({selector: '[some-directive]'});
 * MockDirective({selector: '[some-directive]', inputs: ['some-input', 'some-other-input']});
 */
export function MockDirective(selector: string, options: Directive = {}): Directive {
  const metadata: Directive = {
    selector,
    inputs: options.inputs || [],
    outputs: options.outputs || [],
    providers: options.providers || [],
    exportAs: options.exportAs || '',
  };

  class Mock {
    constructor() {
      metadata.outputs.forEach((method) => {
        this[method] = new EventEmitter<any>();
      });
    }
  }

  return Directive(metadata)(Mock as any);
}

const WARN_SUPPRESSING_PATTERNS = [];

const warn = console.warn;

Object.defineProperty(console, 'warn', {
  value: (...params: string[]) => {
    if (!WARN_SUPPRESSING_PATTERNS.some((pattern) => pattern.test(params[0]))) {
      warn(...params);
    }
  },
});
