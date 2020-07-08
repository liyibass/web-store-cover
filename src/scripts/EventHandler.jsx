export class EventHandler {
  constructor() {
    // 取得html物件
    // this.boxSection = Array.prototype.slice.call(
    //   document.querySelectorAll(".box")
    // );
    this.mainCatogory = document.querySelectorAll(".mainCatogory");
    // 執行eventHandler
    // this.boxAppear();
    this.catogoryFolderToggle();
  }

  catogoryFolderToggle() {
    this.mainCatogory.forEach((catogory) => {
      catogory.addEventListener("click", () => {
        catogory.parentElement.classList.toggle("folder-show");
      });
    });
  }

  // boxAppear() {
  //   const boxObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       // console.log("appear");
  //       // 如果目標未出現則return
  //       if (!entry.isIntersecting) return;
  //       // 目標完全出現則顯示
  //       entry.target.classList.add("box-appear");
  //       // 並且取消觀察
  //       boxObserver.unobserve(entry.target);
  //     });
  //   });

  //   this.boxSection.forEach((box) => {
  //     boxObserver.observe(box);
  //   });
  // }
}
