import Component from '@glimmerx/component';

import { setComponentTemplate, precompileTemplate } from '@glimmer/core';

export default class MyComponent extends Component {}

setComponentTemplate(
  precompileTemplate(
    `
    <div id="intro">
      <mycomponent/>
      <h1>hello, glimmer! THIS IS MYYYYYYYY</h1>
      <h3>
        you can get started by editing <code>src/App.js</code>,
        and run tests by visiting <a href="./tests">/tests</a>
      </h3>
    </div>
  `,
    { strictMode: true }
  ),
  MyComponent
);
