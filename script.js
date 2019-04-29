// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.


const selected = document.querySelectorAll('.choice-grid div');

for(let pick of selected) {
	pick.addEventListener('click', Picked);
}

const Question = {};
function ShowAns() {
	if(Question[0] !== undefined && Question[1] !== undefined && Question[2] !== undefined) 
		if(Question[1] === Question[2]) 
			return Question[1];
		else 
			return Question[0];
	return null;
}

function Picked(event) {
	OnClick(event.currentTarget);
   
	const ans = ShowAns();
	if(ans) {
		for(let pick of selected) {
		    pick.removeEventListener('click', Picked);
		}

        const newTarget = document.createElement('section');

        if (newTarget.classList.contains('bottom'))
            newTarget.classList.remove('bottom');
        newTarget.classList.add('bottom');

        var result_h1 = document.createElement('h1');
        var result_p = document.createElement('p');
        var restartButton = document.createElement('button');

        var selectedItem = document.querySelector('article');
        selectedItem.appendChild(newTarget);

        result_h1.textContent = 'You Got: ' + RESULTS_MAP[ans].title;
        result_p.textContent = RESULTS_MAP[ans].contents;
        restartButton.textContent = 'Restart quiz';
        restartButton.addEventListener('click', bottomClick);

        var ResultBox = document.querySelector('.bottom');
        ResultBox.appendChild(result_h1);
        ResultBox.appendChild(result_p);
        ResultBox.appendChild(restartButton);
	}
}


function OnClick(event) {
    const ID = '[data-question-id="'+event.dataset.questionId+'"]';
    const ID_total = document.querySelectorAll(ID);
	for(let pick of ID_total) {
		pick.children[1].src = 'images/unchecked.png';
	    pick.classList.remove('checkedItem');
		pick.classList.add('uncheckedItem');
    }
	if(event.dataset.questionId === 'one') 
		Question[0]=event.dataset.choiceId;
	else if(event.dataset.questionId === 'two')
		Question[1]=event.dataset.choiceId;
	else if(event.dataset.questionId === 'three')
        Question[2]=event.dataset.choiceId;
        
	event.classList.replace('uncheckedItem', 'checkedItem');
	event.children[1].src = 'images/checked.png';
}


function bottomClick() {
	var artic = document.querySelector('article');
    artic.lastChild.children[2].removeEventListener('click', bottomClick);

	artic.lastChild.removeChild(artic.lastChild.children[0]);
    delete Question[1];
	artic.lastChild.removeChild(artic.lastChild.children[0]);
    delete Question[2];
	artic.lastChild.removeChild(artic.lastChild.children[0]);
	delete Question[3];

	artic.removeChild(artic.lastChild);
	for(let pick of selected) {
		pick.children[1].src = 'images/unchecked.png';
		pick.classList.remove('uncheckedItem');
		pick.classList.remove('checkedItem');
		pick.addEventListener('click', Picked);
	}
    var event = document.getElementById('author');
    event.scrollIntoView();
}







