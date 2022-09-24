const loadText = document.querySelector('.loading')
const bg = document.querySelector('.background')

let load = 0;

let interval = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(interval)
  }
  console.log(load)
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}


// stackoverflow ques how to map one range of numbers to another ranhe of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

