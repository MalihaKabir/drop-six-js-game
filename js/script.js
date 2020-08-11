document.addEventListener('DOMContentLoaded', () => {
	const currentPlayerDisplay = document.querySelector('.current-player');
	// const scoreOneDisplay = document.querySelector('.score-one');
	// const scoreTwoDisplay = document.querySelector('.score-two');
	const winningPlayer = document.querySelector('#winning-player');
	// const startBtn = document.querySelector('#start-btn');
	const smallGrids = document.querySelectorAll('.grid div');
	let currentPlayer = 1;
	// let scoreOne = 0;
	// let scoreTwo = 0;

	for (let i = 0; i < smallGrids.length; i++) {
		smallGrids[i].addEventListener('click', () => {
			if (
				smallGrids[i + 7].className === 'taken' ||
				smallGrids[i + 7].className === 'ball-one' ||
				smallGrids[i + 7].className === 'ball-two'
			) {
				if (currentPlayer === 1) {
					smallGrids[i].classList.add('ball-one');
					currentPlayer = 2;
					currentPlayerDisplay.textContent = currentPlayer;

					// smallGrids[i].id = i;

					currentPlayerDisplay.classList.remove('player-one');
					currentPlayerDisplay.classList.add('player-two');
				} else if (currentPlayer === 2) {
					smallGrids[i].classList.add('ball-two');
					currentPlayer = 1;
					currentPlayerDisplay.textContent = currentPlayer;

					// smallGrids[i].id = i;

					currentPlayerDisplay.classList.remove('player-two');
					currentPlayerDisplay.classList.add('player-one');
				}
				// console.log('FOR', smallGrids[i], currentPlayerDisplay, i);
				// console.log('findClassName', smallGrids[i].className);

				// console.log(smallGrids[i]);
			} else {
				alert('No gap between squares is allowed');
			}
		});
	}

	function getScore () {
		const winningArrays = [
			[ 35, 28, 21, 14, 7, 0 ],
			[ 36, 29, 22, 15, 8, 1 ],
			[ 37, 30, 23, 16, 9, 2 ],
			[ 38, 31, 24, 17, 10, 3 ],
			[ 39, 32, 25, 18, 11, 4 ],
			[ 40, 33, 26, 19, 12, 5 ],
			[ 41, 34, 27, 20, 13, 6 ],
		];

		winningArrays.map((smallArray) => {
			const smallGridOne = smallGrids[smallArray[0]];
			const smallGridTwo = smallGrids[smallArray[1]];
			const smallGridThree = smallGrids[smallArray[2]];
			const smallGridFour = smallGrids[smallArray[3]];
			const smallGridFive = smallGrids[smallArray[4]];
			const smallGridSix = smallGrids[smallArray[5]];

			if (
				smallGridOne.classList.contains('ball-one') &&
				smallGridTwo.classList.contains('ball-one') &&
				smallGridThree.classList.contains('ball-one') &&
				smallGridFour.classList.contains('ball-one') &&
				smallGridFive.classList.contains('ball-one') &&
				smallGridSix.classList.contains('ball-one')
			) {
				// scoreOne += 10;
				// scoreOneDisplay.textContent = scoreOne;
				// currentPlayer = 1;
				winningPlayer.textContent = `Player ${currentPlayer - 1}`;
				winningPlayer.classList.add('player-one');
				smallGrids.forEach((smallGrid) => smallGrid.removeEventListener('click', getScore));
				// startBtn.removeEventListener('click', startGame);
			} else if (
				smallGridOne.className === 'ball-two' &&
				smallGridTwo.className === 'ball-two' &&
				smallGridThree.className === 'ball-two' &&
				smallGridFour.className === 'ball-two' &&
				smallGridFive.className === 'ball-two' &&
				smallGridSix.className === 'ball-two'
			) {
				// scoreTwo += 10;
				// scoreTwoDisplay.textContent = scoreTwo;
				// currentPlayer = 2;
				winningPlayer.textContent = `Player ${currentPlayer + 1}`;
				winningPlayer.classList.add('player-two');
				smallGrids.forEach((smallGrid) => smallGrid.removeEventListener('click', getScore));
				// startBtn.removeEventListener('click', startGame);
			}
		});
	}

	smallGrids.forEach((smallGrid) => smallGrid.addEventListener('click', getScore));
	// startBtn.addEventListener('click', startGame);
});
