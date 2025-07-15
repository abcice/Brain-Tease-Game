// SET lifelines (removeTwo, hint, skip) to 3 uses total
//   WAIT for:
//     - Player uses lifeline → APPLY effect

// ----- Objects------//
const sciQ = [
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2', 'NaCl'],
    correct: 'H2O',
    hint: 'It consists of two hydrogen atoms and one oxygen atom.'
  },
  {
    question: 'What gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
    correct: 'Carbon Dioxide',
    hint: 'It’s the same gas humans exhale.'
  },
  {
    question: 'What part of the cell contains genetic material?',
    options: ['Nucleus', 'Cytoplasm', 'Ribosome', 'Mitochondria'],
    correct: 'Nucleus',
    hint: 'It’s the brain of the cell.'
  },
  {
    question: 'What force keeps us on the ground?',
    options: ['Magnetism', 'Gravity', 'Inertia', 'Friction'],
    correct: 'Gravity',
    hint: 'It was famously described by Isaac Newton.'
  },
  {
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Mercury', 'Mars', 'Earth'],
    correct: 'Mercury',
    hint: 'It’s the smallest and fastest planet.'
  },
  {
    question: 'What is the boiling point of water in Celsius?',
    options: ['100°C', '0°C', '50°C', '212°C'],
    correct: '100°C',
    hint: 'It’s the same number as a perfect test score.'
  },
  {
    question: 'Which body organ produces insulin?',
    options: ['Liver', 'Pancreas', 'Kidney', 'Stomach'],
    correct: 'Pancreas',
    hint: 'It lies behind the stomach.'
  },
  {
    question: 'What part of the plant conducts photosynthesis?',
    options: ['Roots', 'Stem', 'Leaves', 'Flower'],
    correct: 'Leaves',
    hint: 'They are green and flat.'
  },
  {
    question: 'What is the hardest natural substance?',
    options: ['Iron', 'Diamond', 'Gold', 'Quartz'],
    correct: 'Diamond',
    hint: 'Often used in jewelry.'
  },
  {
    question: 'What planet is known as the Red Planet?',
    options: ['Venus', 'Earth', 'Mars', 'Jupiter'],
    correct: 'Mars',
    hint: 'It’s the fourth planet from the Sun.'
  },
  {
    question: 'Which particle has a negative charge?',
    options: ['Proton', 'Neutron', 'Electron', 'Photon'],
    correct: 'Electron',
    hint: 'It orbits the nucleus.'
  },
  {
    question: 'What is the process of liquid changing to gas called?',
    options: ['Condensation', 'Evaporation', 'Freezing', 'Melting'],
    correct: 'Evaporation',
    hint: 'Happens when water disappears from puddles.'
  },
  {
    question: 'Which vitamin is produced when the skin is exposed to sunlight?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin B12'],
    correct: 'Vitamin D',
    hint: 'Good for bones.'
  },
  {
    question: 'What does DNA stand for?',
    options: ['Deoxyribonucleic Acid', 'Deoxyribose Nucleotide Acid', 'Double Helix Acid', 'Dynamic Nucleic Acid'],
    correct: 'Deoxyribonucleic Acid',
    hint: 'It has the word “ribo” in it.'
  },
  {
    question: 'What is the center of an atom called?',
    options: ['Electron cloud', 'Nucleus', 'Shell', 'Orbit'],
    correct: 'Nucleus',
    hint: 'It contains protons and neutrons.'
  }
];

const generalQ = [
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Leo Tolstoy'],
    correct: 'William Shakespeare',
    hint: 'He’s known as the Bard of Avon.'
  },
  {
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    correct: '7',
    hint: 'It’s one more than six.'
  },
  {
    question: 'Which ocean is the largest?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    correct: 'Pacific Ocean',
    hint: 'It’s on the west side of the Americas.'
  },
  {
    question: 'What is the capital of France?',
    options: ['Madrid', 'Berlin', 'Rome', 'Paris'],
    correct: 'Paris',
    hint: 'It’s also known as the city of love.'
  },
  {
    question: 'Which language has the most native speakers?',
    options: ['English', 'Spanish', 'Mandarin', 'Hindi'],
    correct: 'Mandarin',
    hint: 'It’s mainly spoken in China.'
  },
  {
    question: 'What color do you get when you mix red and white?',
    options: ['Pink', 'Purple', 'Brown', 'Orange'],
    correct: 'Pink',
    hint: 'It’s often considered a soft color.'
  },
  {
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    correct: '6',
    hint: 'It’s the same number of legs on an insect.'
  },
  {
    question: 'Which day comes after Thursday?',
    options: ['Tuesday', 'Saturday', 'Wednesday', 'Friday'],
    correct: 'Friday',
    hint: 'It’s the last weekday before the weekend.'
  },
  {
    question: 'Which country is famous for the Eiffel Tower?',
    options: ['Germany', 'Italy', 'France', 'Spain'],
    correct: 'France',
    hint: 'The tower is in Paris.'
  },
  {
    question: 'How many legs does a spider have?',
    options: ['6', '8', '10', '12'],
    correct: '8',
    hint: 'It’s two more than insects.'
  },
  {
    question: 'What is the freezing point of water in Celsius?',
    options: ['0°C', '32°C', '100°C', '-10°C'],
    correct: '0°C',
    hint: 'It’s the start of the Celsius scale.'
  },
  {
    question: 'What shape has four equal sides and four right angles?',
    options: ['Rectangle', 'Square', 'Rhombus', 'Trapezoid'],
    correct: 'Square',
    hint: 'All sides are the same.'
  },
  {
    question: 'What currency is used in Japan?',
    options: ['Yen', 'Won', 'Dollar', 'Euro'],
    correct: 'Yen',
    hint: 'Symbol: ¥'
  },
  {
    question: 'Which planet do we live on?',
    options: ['Mars', 'Venus', 'Earth', 'Jupiter'],
    correct: 'Earth',
    hint: 'It’s the third planet from the Sun.'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Picasso', 'Van Gogh'],
    correct: 'Leonardo da Vinci',
    hint: 'He was also an inventor.'
  }
];

//-------Variables------//
let playerName = '';
let qtnType ;
let qIndex = 0;
let score = 0;
let alreadyAnswered = false;
let wrongQ = 0;
let remainingTime = 60;
let runningTime;
let skipUsed = false;
let hintUsed = false;
let rmvUsed = false;

// ------constants------//
        //-pages-//
const welcomePg = document.querySelector('#welcome-page');
const category = document.querySelector('#Category');
const qtnPg = document.querySelector('#Question-pg');
const resultPg = document.querySelector('#ResultPg')
const resetScreen = document.querySelector('#resetmsg');
const lifeScreen = document.querySelector('#lifelns');
      //-inputs-//
const nameInput = document.querySelector('#player-name');
      //-text-//
const qtnText = document.querySelector('#Qtn');
const qtnNo = document.querySelector('#Qno');
const resultMsg = document.querySelector('#ResultMsg');
    //-information-//
const info = document.querySelector('#infoBox');
const timer = document.querySelector('#Timer');
      //-hint page-//
const hnt = document.querySelector('#hint');
const hintPg = document.querySelector('#hint-page');
const hintContent = document.querySelector('.hint-content')
const hintClose = document.querySelector('.hint-close')
const hintText = document.querySelector('#hint-text')

        //-buttons-//
const saveBtn = document.querySelector('#save-btn');
const startBtn = document.querySelector('#start-btn');
const sciBtn = document.querySelector('#Scientific');
const genralBtn = document.querySelector('#General');
const opA = document.querySelector('#opA');
const opB = document.querySelector('#opB');
const opC = document.querySelector('#opC');
const opD = document.querySelector('#opD');
const nextBtn = document.querySelector('#nextbtn');
const lifeLines = document.querySelector('#Life');
const xExit = document.querySelector('.close');
const rmv = document.querySelector('#Rmv');
const skip = document.querySelector('#skip');
const resetBtn = document.querySelector('#Reset');
const yesReset = document.querySelector('#yes');
const noReset = document.querySelector('#no');
const playAgain = document.querySelector('#play-again');

//----functions------///
const newGame = () => {
  score = 0;
  qIndex = 0;
  wrongQ = 0;
  alreadyAnswered = false;
  clearInterval(runningTime);
  timer.textContent = `Time: ${remainingTime}`;
  timer.style.color = '';
  timer.style.animation = '';
  qtnPg.style.display = 'none';
  resultPg.style.display = 'none';
  resetScreen.style.display ='none';
  category.style.display ='flex';
  const options = [opA, opB, opC, opD];
  options.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('answered', 'correct', 'wrong');
  });
  hintUsed = false;
  rmvUsed = false;
  skipUsed = false;
  hnt.disabled = false;
  rmv.disabled = false;
  skip.disabled = false;
  hnt.style.opacity = 1;
  rmv.style.opacity = 1;
  skip.style.opacity = 1;

  updateInfo();
};
const timeCounter = () => {
  remainingTime = 60;
  timer.textContent = `Time:${remainingTime} `;
  timer.style.color = '' ;
  timer.style.animation = '' ;

  clearInterval(runningTime);

  runningTime = setInterval(() => {
    remainingTime--;
    timer.textContent = `Time: ${remainingTime}`;
    if (remainingTime <= 10) {
      timer.style.color = 'red';
      timer.style.animation = 'flash 1s infinite';
    }
    if (remainingTime === 0) {
      clearInterval(runningTime);
      timeOut ()
    }
    
  }, 1000);
}

const shuffleQ = (array) => {
    return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const timeOut = () => {
  const currentQ = qtnType[qIndex];
  const options = [opA, opB, opC, opD];
  options.forEach(btn => {
    btn.disabled = true
    btn.classList.add('answered');
    if (btn.textContent === currentQ.correct) {
        btn.classList.add('correct');
    }
  });
  wrongQ++;
  alreadyAnswered = true;
  gameStatus();
  lifeLines.disabled = true;
  lifeLines.style.opacity = 0.5;
  lifeLines.style.cursor = "default";
}

const loadQuestion = () => {
    const currentQ = qtnType[qIndex];
    const shuffleOp = shuffleQ([...currentQ.options]);

    qtnText.textContent = currentQ.question;
    qtnNo.textContent = `Question ${qIndex + 1}`;
    opA.textContent = shuffleOp[0];
    opB.textContent = shuffleOp[1];
    opC.textContent = shuffleOp[2];
    opD.textContent = shuffleOp[3];
    timeCounter();
    timer.style.color = '';
    timer.style.animation = '';


}
const updateInfo = () => {
    info.textContent = `Player: ${playerName}  Score: ${score}`;
}

const gameStatus = () => {
    resultPg.classList.remove("result-win", "result-lose");
  if (score === 100) {
    resultPg.classList.add("result-win")
    resultMsg.textContent = ` Congratulations ${playerName}!! You won!!! `;
    qtnPg.style.display = 'none';
    resultPg.style.display = 'flex';
    return true;
  }
  if (wrongQ === 3) {
    resultPg.classList.add('result-lose');
    qtnPg.style.display = 'none';
    resultPg.style.display = "flex";
    resultMsg.textContent = `You lost, try again`
    return true;
  }
  return false;

}
const checkAnswer = (selectedOption) => {
    const currentQ = qtnType[qIndex];
    const options = [opA, opB, opC, opD];
    options.forEach(btn => {
    btn.disabled = true;
    btn.classList.add('answered');
});

    

    if (selectedOption === currentQ.correct) {
        score+= 10;
        updateInfo();
        options.forEach(btn => {
            if (btn.textContent === currentQ.correct) {
                btn.classList.add('correct');
            }
        });

    } else {
        options.forEach(btn => {
            if (btn.textContent === selectedOption) {
                btn.classList.add('wrong');
            }
            if (btn.textContent === currentQ.correct) {
                btn.classList.add('correct');
            }
        })
        wrongQ+=1;

    }
    alreadyAnswered = true;
    clearInterval(runningTime);
    gameStatus();
    lifeLines.disabled = true;
    lifeLines.style.opacity = 0.5;
    lifeLines.style.cursor = "default";

}
const disableBtn = (btn) => {
btn.disabled = true;
btn.style.opacity = 0.5;
btn.style.cursor = "default";
}

//-------Event Listeners----//
        //--welcome page--//
saveBtn.addEventListener('click', () => {
    const logName = nameInput.value;
    if (logName !== '') {
        playerName = logName;
        nameInput.value = '';
    }
    else {
        alert('Please enter your name!')
    }
})
startBtn.addEventListener('click', () => {
    if (playerName !== '') {
        welcomePg.style.display = 'none'
        category.style.display = 'flex'

    } else {
        alert('Please enter your name first!');
    }
});
        //--category--//
sciBtn.addEventListener('click', () => {
    qtnType = shuffleQ([...sciQ]) ;
    qIndex = 0;
    score = 0;
    category.style.display = 'none';
    qtnPg.style.display = 'block';
    updateInfo();
    loadQuestion();
});
genralBtn.addEventListener('click', () => {
    qtnType = shuffleQ([...generalQ]);
    qIndex = 0;
    score = 0;
    category.style.display = 'none';
    qtnPg.style.display = 'block';
    updateInfo();
    loadQuestion();
})
        //--question page--//
opA.addEventListener('click', () => checkAnswer(opA.textContent));
opB.addEventListener('click', () => checkAnswer(opB.textContent));
opC.addEventListener('click', () => checkAnswer(opC.textContent));
opD.addEventListener('click', () => checkAnswer(opD.textContent));

nextBtn.addEventListener('click', () => {
    if (!alreadyAnswered) return; 

    qIndex++;
    if (gameStatus()) return;

    loadQuestion();

    const options = [opA, opB, opC, opD];
    options.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('answered', 'correct', 'wrong');
    });

    alreadyAnswered = false; 
    lifeLines.disabled = false;
    lifeLines.style.opacity = 1;
    lifeLines.style.cursor = "pointer";
});
resetBtn.addEventListener('click', () => {
resetScreen.style.display = 'flex';
});
yesReset.addEventListener('click', () => {
  newGame();
});
noReset.addEventListener('click', () =>{
  resetScreen.style.display = 'none';
});
lifeLines.addEventListener('click', () => {
  if (lifeLines.disabled) return;
  lifeScreen.style.display = 'flex';

});
xExit.addEventListener('click', () => {
  lifeScreen.style.display = 'none';
});
skip.addEventListener('click', () => {
  if(alreadyAnswered || skipUsed) return;
  qIndex++ ;
  if(gameStatus()) return;
  loadQuestion();
  alreadyAnswered = false;
  skipUsed = true;
  disableBtn(skip);
  lifeScreen.style.display = 'none';

});
hnt.addEventListener('click', () =>{
  if (alreadyAnswered || hintUsed) return;
  const currentQ = qtnType[qIndex];
  hintText.textContent = currentQ.hint;
  hintPg.style.display = 'flex';
  lifeScreen.style.display = 'none';
  hintUsed = true;
  disableBtn(hnt);

});
hintClose.addEventListener('click', () => {
  hintPg.style.display = 'none';
});
rmv.addEventListener('click', () => {
  if(alreadyAnswered || rmvUsed) return;
  const currentQ =qtnType[qIndex];
  const options = [opA, opB, opC, opD];
  const wrongAnswers = options.filter(btn => btn.textContent !== currentQ.correct);
  const optionsRemove = shuffleQ(wrongAnswers).slice(0,2);
  optionsRemove.forEach(btn => {
    btn.disabled = true;
    btn.disabled = true;
    btn.classList.add('faded-option');


  });
  rmvUsed = true;
  disableBtn(rmv);
  lifeScreen.style.display = 'none';

});
//---Result page---//
playAgain.addEventListener('click', () => {
  newGame();
});