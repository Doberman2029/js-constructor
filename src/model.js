import photo from "../img/photo.jpg";
import {
  TitleBlock,
  TextBlock,
  TextColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("This is JavaScript site constructor", {
    styles: "background: rgb(175,175,175); color: #fff; text-align: center",
    tag: "h1",
  }),
  new TextBlock(
    "On the left side of the screen you will find the names of the elements with the fields that must be filled in, after that this block will appear below <br>(styles optional, for block columns enter values separated by ','  ; for block image in input 'value' you need to paste URL of you're image)",
    {
      styles:
        "background: #007bff; color: #fff; text-align: center; padding-top: 15px;",
    }
  ),
  // new TextColumnsBlock(["Title", "Text", "Columns", "Image"], {
  //   styles: "padding: 1rem",
  // }),
  // new ImageBlock(photo, {
  //   alt: "text",
  //   styles: "padding: 2rem 0; display: flex; justify-content: center",
  //   imageStyles: "width: 150px; height: auto",
  // }),
];
