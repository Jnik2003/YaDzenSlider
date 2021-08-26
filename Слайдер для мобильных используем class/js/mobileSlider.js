class mobileSlider {
	constructor(slider, box, src, prev, next, dots){
		
		this.slider = slider,
		this.box = box,
		this.src = src,
		this.prev = prev,
		this.next = next,
		this.dots = dots
	}
	doSlider(){		
		let div = document.createElement('div');		
		div.className = this.slider;
		//this.slider = document.querySelector(this.slider);
		
		let divBox = document.createElement('div');
		divBox.className = this.box;		
		div.append(divBox);
		// картинки
		for(let i = 0; i < this.src.length; i++){
			let img = document.createElement('img');
			divBox.append(img);
			img.src = this.src[i];
		}
		// кнопки 
		let divBtnBox = document.createElement('div');
		divBtnBox.className = 'btn-box';
		div.append(divBtnBox);	

		let inp_prev = document.createElement('input');
		inp_prev.className = this.prev;
		inp_prev.type = 'button';
		inp_prev.value = 'Prev';
		

		
		let inp_next = document.createElement('input');
		inp_next.className = this.next;
		inp_next.type = 'button';
		inp_next.value = 'Next';

		divBtnBox.append(inp_next);
		divBtnBox.append(inp_prev);		
		
			

		// и добавим все на страницу
		let body = document.querySelector('body');
		body.append(div);


		// слушаем события на кнопках
		inp_next.addEventListener('click', () => fNext(this.slider, this.box));
		inp_prev.addEventListener('click', fPrev);
		let position = 0;

		function fNext(slider, box){
				console.log(slider)
			let imgs = document.querySelector('.'+slider).children[0].children;	
			let sdvig = imgs[0].offsetWidth;
			//--- сдвиг картинок
			if(position >= sdvig*(imgs.length-1)){
				//если не возвращаться к началу то return
				return;
				// если возвращаться , то position = -sdvig;
				//position = -sdvig;
				
			}
			position += sdvig;
			document.querySelector('.'+box).style.right = position +'px';	
		}
		function fPrev(){
			console.log(this)
		}

		// --- добавим свайп ---------
		document.querySelector('.'+this.slider).addEventListener('touchstart', handleTouchStart, false);
		document.querySelector('.'+this.slider).addEventListener('touchmove', handleTouchMove, false);

		let x1;
		let y1;
		let flag;
		function handleTouchStart(event){
			// координалы тычка пальцем						
			x1 = event.touches[0].clientX;
			y1 = event.touches[0].clientY;
			console.log('aaaaaa');
			flag = false; //чтобы ф-я выполнялась один раз
			
		}

		function handleTouchMove(event){
						console.log('cccc');	
			if(!x1 || !y1){
				return;
			}
			let x2 = event.touches[0].clientX;
			let y2 = event.touches[0].clientY;
			// 
			if(x2 < x1 && Math.abs(y1 - y2) <7){				
				if(!flag){  //чтобы ф-я выполнялась один раз за тычок
					fNext(this.slider, this.box);
					flag = true;
				}
				
			}
			if(x2 > x1 && Math.abs(y1 - y2) <7){
				if(!flag){	//чтобы ф-я выполнялась один раз за тычок
					prevImg();
					flag = true;
				}
			}
		}

	}
// добавим доты
		


}


// 1. передаем в конструктор 

// - class имя обертки (slider), 
// - имя класса дива в котором лежат картинки,
// - путь к картинкам (массив)
// - имя класса кнопки вперед
// - имя класса кнопки назад
// - имя класса дотов (dot-box)

// 2. конструируем слайдер на странице
// - создаем метод doSlider()

let images  = {
	img1: ["img/sliders/sl1/apatity.jpg","img/sliders/sl1/kap1.jpg","img/sliders/sl1/murmashi.jpg", "img/sliders/sl1/vladik.jpg"],
	img2: ["img/sliders/sl1/apatity.jpg","img/sliders/sl1/kap1.jpg","img/sliders/sl1/murmashi.jpg", "img/sliders/sl1/vladik.jpg", "img/sliders/sl1/vladik.jpg"]
}

console.log(images.img2)

let slider1 = new mobileSlider('slider1', 'slider-box1', images.img1, 'prev1', 'next1', 'dot-box1')

let slider2 = new mobileSlider('slider2', 'slider-box2', images.img2, 'prev2', 'next2', 'dot-box2')
slider1.doSlider();
// slider1.dotsGen();

slider2.doSlider();
// slider2.dotsGen();

