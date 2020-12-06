import { col, row } from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("Method toHTML need to be defined!");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = "h2", styles } = this.options;
    return row(
      col(`
     <${tag}>${this.value}</${tag}>
    `),
      styles
    );
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(
      col(`
         <p>${this.value}</p>
        `),
      this.options.styles
    );
  }
}
// comment
export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    let array = this.value.split(",");
    const html = array.map((item) => col(item));
    return row(html.join(""), this.options.styles);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { alt, styles, imageStyles } = this.options;
    const html = `<img src='${this.value}' alt='${alt}' style='${imageStyles}'></img>`;
    return row(html, styles);
  }
}
