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
    this.title = "";
    this.link = "#";
    this.image = "";
    this.description = "";
    this.fancy = false;
    //this.bg = "background-color: white";
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([fancy]) .card-wrapper{
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      a:hover, a:visited, a:link, a:active {
        text-decoration: none;
        color: black;
      }
      .card-wrapper {
        border: solid;
        width: 448px;
        box-shadow: 8px 8px black;
        background-color: var(--bgColor, white);
      }
      .inner-wrapper {
        margin: auto;
        width: 400px;
        margin-top: 24px;
        margin-bottom: 24px;
      }
      p,
      .description-wrapper {
        font-family: Roboto;
        margin-top: 6px;
        margin-bottom: 4px;
      }
      h3, summary {
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
      img {
        width: 200px;
        height: 200px;
        object-fit: cover; // fills image instead of stretching
      }
      button:hover {
        box-shadow: 0px 0px black;
        background-color: #ad7d9a;
      }

      details summary {
        overflow: auto;
      }
      details[open] summary {
        font-weight: bold;
      }
      details div {
        text-align: left;
        height: 400px;
        overflow: auto;
        word-wrap: break-word;
      }
    `;
  }
  /*
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
  */
  
  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
      // console.log(this.fancy);
    }
    else {
      this.fancy = false;
      // console.log(this.fancy);
    }
  }
  
  render() {
    return html`
      <div class="card-wrapper">
      <!-- <div class="card-wrapper" style="${this.bg}"> -->
        <div class="inner-wrapper">
          <img src="${this.image}">
          <!--
          <h3>${this.title}</h3>
          <p><slot>${this.description}</slot></p>
          @ is shorthand for event listener
          -->
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>${this.title}</summary>
            <div class="description-wrapper">
              <slot>${this.description}</slot>
            </div>
          </details>
          <a href="${this.link}" id="button-link" target="_blank"><button>Details</button></a>
        </div>
      </div>
      <!--
      <details ?open="${this.fancy}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details>
      -->
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      image: { type: String },
      description: { type: String },
      bg: { type: String},
      fancy: { type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
