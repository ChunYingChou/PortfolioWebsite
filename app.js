let image = document.querySelector(".image-area");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");
let h1 = document.querySelector(".website-title");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");

const time_line = new TimelineMax();

// 參數1: 要控制的對象
// 參數2: 動畫的時間
// 參數3: 控制對象的原始狀態
// 參數4: 控制對象的結束狀態
// 參數5: 控制提早跑的時間
time_line
  .fromTo(image, 2, { width: "0%" }, { width: "100%", ease: Power2.easeInOut })
  .fromTo(h1, 1.5, { x: "-230%" }, { x: "0%", ease: Power2.easeInOut })
  .fromTo(line1, 1.5, { x: "-230%" }, { x: "0%", ease: Power2.easeInOut })
  .fromTo(line2, 1.5, { y: "-230%" }, { y: "0%", ease: Power2.easeInOut })
  .fromTo(
    image,
    1.2,
    { marginTop: "10vh", height: "80vh" },
    { marginTop: "0", height: "100vh", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    animation,
    0.7,
    { opacity: 1 },
    { opacity: 0, ease: Power2.easeInOut }
  );

setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 3500);
