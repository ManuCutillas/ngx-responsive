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
import "jest-preset-angular";

import {
  Component,
  Directive,
  EventEmitter,
  Pipe,
  PipeTransform,
  Type,
} from "@angular/core";
declare var jest;
Error.stackTraceLimit = 2;

const { Window } = require("happy-dom");
const window = new Window();
const _CSSStyleSheet = jest.fn();
window.CSSStyleSheet = _CSSStyleSheet;

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
  customElements: {
    value: window.customElements,
    writable: true,
    configurable: true,
  },
  window: {
    value: window,
    writable: true,
    configurable: true,
  },
  CSSStyleSheet: {
    value: _CSSStyleSheet,
    writable: true,
    configurable: true,
  },
});

const mockStorage = () => {
  let storage = {};
  return {
    getItem: (key) =>
      key in storage ? JSON.stringify(storage[key]) : undefined,
    setItem: (key, value) => (storage[key] = value || ""),
    removeItem: (key) => delete storage[key],

    clear: () =>
      (storage = {
        dashboardElements_v_2: [],
      }),
  };
};

Object.defineProperties(window, {
  DATA: {
    value: {
      HOST: null,
      SERVICES_HOST: "http://localhost:3500",
      REDIRECTION_HOST: null,
      STATIC_ROUTE: "/",
      ROUTES: "/",
      ENV: "localhost__tomcat",
    },
    writable: true,
  },
  open: {
    value: jest.fn(),
    writable: true,
  },
  scrollTo: {
    value: jest.fn(),
    writable: true,
  },
  scrollBy: {
    value: jest.fn(),
    writable: true,
  },
  CSS: {
    value: jest.fn(),
    writable: true,
  },
  localStorage: {
    value: mockStorage(),
    writable: true,
  },
  sessionStorage: {
    value: mockStorage(),
    writable: true,
  },
  getComputedStyle: {
    value: () => {
      return {
        display: "none",
        appearance: ["-webkit-appearance"],
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
export function MockComponent(
  selector: string,
  options: Component = {}
): Component {
  const metadata: Component = {
    selector,
    template: options.template || "",
    inputs: options.inputs || [],
    outputs: options.outputs || [],
    exportAs: options.exportAs || "",
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
export function MockDirective(
  selector: string,
  options: Directive = {}
): Directive {
  const metadata: Directive = {
    selector,
    inputs: options.inputs || [],
    outputs: options.outputs || [],
    providers: options.providers || [],
    exportAs: options.exportAs || "",
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

const WARN_SUPPRESSING_PATTERNS = [/Be sure to add ShadyCSS/];

const warn = console.warn;

Object.defineProperty(console, "warn", {
  value: (...params: string[]) => {
    if (!WARN_SUPPRESSING_PATTERNS.some((pattern) => pattern.test(params[0]))) {
      warn(...params);
    }
  },
});
