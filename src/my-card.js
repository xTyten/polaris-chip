import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.link = "#";
    this.image = "https://pbs.twimg.com/media/GXtEl7TakAUuJL5?format=png&name=small";
    this.description = "example description";
    this.bg = "background-color: beige";
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      a:hover, a:visited, a:link, a:active {
        text-decoration: none;
        color: black;
      }
      .card-wrapper {
        border: solid;
        width: 232px;
        //background-color: beige;
        box-shadow: 8px 8px black;
      }
      .inner-wrapper {
        margin: auto;
        width: 200px;
        margin-top: 16px;
        margin-bottom: 16px;
      }
      p {
        font-family: Roboto;
        margin-top: 6px;
        margin-bottom: 4px;
      }
      h3 {
        font-size: 24px;
        font-family: 'Brush Script MT', cursive;
        margin: 0;
      }
      button {
        color: black;
        background-color: pink;
        font-size: 16px;
        border-radius: 8px;
        padding: 8px 12px;
        box-shadow: 4px 4px black;
        margin-top: 0px;
      }
      button:hover {
        box-shadow: 0px 0px black;
        background-color: #ad7d9a;
      }
    `;
  }

  render() {
    return html`
      <div class="card-wrapper" style="${this.bg}">
        <div class="inner-wrapper">
          <img src="${this.image}" width="200">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
          <a href="${this.link}" id="button-link" target="_blank"><button>Details</button></a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      image: { type: String },
      description: { type: String },
      bg: { type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
