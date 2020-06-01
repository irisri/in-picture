'use strict'
var num = 0;

var gQuests = [
    { id: 1, opts: ['The creature in the picture is a dog', 'The creature in the picture is a lizerd'], correctOptIndex: 0 },
    { id: 2, opts: ['The creature in the picture is a cat', 'The creature in the picture is a elephant'], correctOptIndex: 0 },
    { id: 3, opts: ['The creature in the picture is a bird', 'The creature in the picture is a dog'], correctOptIndex: 0 },
    { id: 4, opts: ['The creature in the picture is a elephant', 'The creature in the picture is a bird'], correctOptIndex: 0 },
    { id: 5, opts: ['The creature in the picture is a lizerd', 'The creature in the picture is a cat'], correctOptIndex: 0 },
];

var gCurrQuestIdx = 0;
var pic = document.querySelector('img');


function initGame() {
    renderQuest(gCurrQuestIdx);
}


function pickedAnswer(elP) {
    var index = parseInt(elP.getAttribute('data-ops'));
    if (index === 0) {
        renderQuest(gCurrQuestIdx);
        gCurrQuestIdx++;
        if (gCurrQuestIdx === gQuests.length) {
            gCurrQuestIdx = 0;
        }
    }
    else
    console.log('Nope!');
}

function renderQuest(num) {
    pic.setAttribute('src', `img/${gCurrQuestIdx + 1}.jpg`);
    var opts = gQuests[num].opts;
    var strHTML = '';
    var setAnswers = document.querySelector('.answers');
    for (var i = 0; i < opts.length; i++) {
        strHTML += `<button data-ops="${i}" onclick="pickedAnswer(this)">${opts[i]}</button>`;
    }
    setAnswers.innerHTML = strHTML;
}
