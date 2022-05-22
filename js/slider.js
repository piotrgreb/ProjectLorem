const slideList = [
    {
      img: "assets/reinhart-julian-_r0lZDocH78-unsplash.png",
    },
    {
      img: "assets/reinhart-julian-S9BOTsGr2ww-unsplash.png",
    },
    {
      img: "assets/reinhart-julian-VnI_piHNlok-unsplash.png",
    },
    {
      img: "assets/reinhart-julian-H4AejIh_l7g-unsplash.png",
    },
  ];
  
  class Slider {
    constructor(sliderSection, imgList) {
      this.sliderSection = sliderSection;
      this.currentSlide = 0;
      this.slider = null;
      this.slides = imgList;
      this.image = null;
      this.imagePrev = null;
      this.imageNext = null;
      this.dots = null;
      this.createSlider();
      this.changeSlide(this.currentSlide);
      this.addListeners();
    }
  
    createSlider() {
      this.slider = document.querySelector(this.sliderSection);
      this.prevBtn = document.querySelector(".gallery__arrow--left");
      this.nextBtn = document.querySelector(".gallery__arrow--right");
      this.image = document.querySelector(".gallery__image");
      this.imagePrev = document.querySelector(".gallery__img-prev img");
      this.imageNext = document.querySelector(".gallery__img-next img");
      this.dots = [...document.querySelectorAll(".dots span")];
    }
  
    changeSlide(index) {
      if (index >= 0 && index < this.slides.length) {
        this.currentSlide = index;
        this.dots.forEach((dot) => {
          dot.classList.remove("active");
        });
        this.dots[index].classList.add("active");
        this.image.src = slideList[index].img;
        if (index === 0) {
          this.imagePrev.classList.add("inactive-img");
        } else if (index === this.slides.length - 1) {
          this.imageNext.classList.add("inactive-img");
        } else {
          this.imagePrev.classList.remove("inactive-img");
          this.imageNext.classList.remove("inactive-img");
  
          this.imagePrev.src = slideList[index - 1].img;
          this.imageNext.src = slideList[index + 1].img;
        }
      }
      this.disableButtons();
    }
    addListeners() {
      this.prevBtn.addEventListener("click", () =>
        this.changeSlide(this.currentSlide - 1)
      );
      this.nextBtn.addEventListener("click", () =>
        this.changeSlide(this.currentSlide + 1)
      );
  
      for (let i = 0; i < this.slides.length; i++) {
        this.dots[i].addEventListener("click", () => this.changeSlide(i));
      }
    }
  
    disableButtons() {
      if (this.currentSlide === 0) {
        this.prevBtn.classList.add("disable");
      } else if (this.currentSlide === this.slides.length - 1) {
        this.nextBtn.classList.add("disable");
      } else {
        this.nextBtn.classList.remove("disable");
        this.prevBtn.classList.remove("disable");
      }
    }
  }
  const slide = new Slider(".gallery__slider", slideList);
  
  