import Component from '@glimmerx/component';
// import { tracked } from '@glimmerx/component';
import { action, on } from '@glimmer/modifier';
import { setComponentTemplate, precompileTemplate } from '@glimmer/core';
import MyComponent from './components/MyComponent';
import logo from './logo.svg';
import './App.css';
import { tracked } from '@glimmer/tracking';

export default class App extends Component {
  logo = logo;
  @tracked count = 0;

  @action
  increment() {
    this.count++;

    console.log('increment: ', this.count, window.location.href);
  }

  MyComponent = MyComponent;
}

setComponentTemplate(
  precompileTemplate(
    `
    <div id="intro">
      <img src={{this.logo}}/>

      <this.MyComponent />
      <h2>Counter: {{this.count}}</h2>
        
      <button  {{on "click" this.increment}}>Increment</button>
      <h1>hello, glimmer!</h1>
      <h3>
        you can get started by editing <code>src/App.js</code>,
        and run tests by visiting <a href="./tests">/tests</a>
      </h3>
    </div>
  `,
    { strictMode: true }
  ),
  App
);
