let left;
let right;
let vsImg;

$(document).ready(function () {
  left = $('#left');
  right = $('#right');
  vsImg = $('#vs');
  const leftImgWidth = parseInt(left.css("width"));
  const leftImgHeight = parseInt(left.css("height"));
  const vsImgRadius   = parseInt(vsImg.css("width")) / 2;
  vsImg.css("left", leftImgWidth - vsImgRadius);
  vsImg.css("top", leftImgHeight / 2 - vsImgRadius);
  vsImg.css("display", "block");
});
