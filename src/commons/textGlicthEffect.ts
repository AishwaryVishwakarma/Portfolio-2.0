const letters = 'abcdefghijklmnopqrstuvwxyz';

let interval: any = null;

const textGlitchEffect = (event: any) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split('')
      .map((letter: string, index: number) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];

        return letter; //Build was failing because of the unused variable
      })
      .join('');

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

export default textGlitchEffect;
