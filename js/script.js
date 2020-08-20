document.addEventListener('DOMContentLoaded', () => {
	const currentPlayerDisplay = document.querySelector('.current-player');
	const gameOver = document.getElementById('game-over');
	const winningPlayer = document.querySelector('#winning-player');
	const smallGrids = document.querySelectorAll('.grid div');
	let currentPlayerOne = 1;
	let currentPlayerTwo = 2;
	let currentPlayer = currentPlayerOne;
	currentPlayerDisplay.textContent = currentPlayer;

	function makeGridClickable () {
		smallGrids.forEach((smallGrid, i) => {
			smallGrid.addEventListener('click', () => {
				clickableSquares(i);
			});
		});
	}

	function clickableSquares (gridIndex) {
		if (
			smallGrids[gridIndex + 7].className === 'taken' ||
			smallGrids[gridIndex + 7].className === 'ball-one' ||
			smallGrids[gridIndex + 7].className === 'ball-two'
		) {
			if (currentPlayer === currentPlayerOne) {
				smallGrids[gridIndex].classList.remove('ball-two');
				smallGrids[gridIndex].classList.add('ball-one');
				currentPlayer = currentPlayerTwo;
				currentPlayerDisplay.textContent = currentPlayer;
				smallGrids[gridIndex].id = gridIndex;

				currentPlayerDisplay.classList.remove('player-one');
				currentPlayerDisplay.classList.add('player-two');
			} else if (currentPlayer === currentPlayerTwo) {
				smallGrids[gridIndex].classList.remove('ball-one');
				smallGrids[gridIndex].classList.add('ball-two');
				currentPlayer = currentPlayerOne;
				currentPlayerDisplay.textContent = currentPlayer;
				smallGrids[gridIndex].id = gridIndex;

				currentPlayerDisplay.classList.remove('player-two');
				currentPlayerDisplay.classList.add('player-one');
			}
		} else {
			alert('No gap between squares is allowed');
		}
	}

	function getScore () {
		const winningArrays = [
			// vertically
			[ 35, 28, 21, 14 ],
			[ 28, 21, 14, 7 ],
			[ 21, 14, 7, 0 ],
			[ 36, 29, 22, 15 ],
			[ 29, 22, 15, 8 ],
			[ 22, 15, 8, 1 ],
			[ 37, 30, 23, 16 ],
			[ 30, 23, 16, 9 ],
			[ 23, 16, 9, 2 ],
			[ 38, 31, 24, 17 ],
			[ 31, 24, 17, 10 ],
			[ 24, 17, 10, 3 ],
			[ 39, 32, 25, 18 ],
			[ 32, 25, 18, 11 ],
			[ 25, 18, 11, 4 ],
			[ 40, 33, 26, 19 ],
			[ 33, 26, 19, 12 ],
			[ 26, 19, 12, 5 ],
			[ 41, 34, 27, 20 ],
			[ 34, 27, 20, 13 ],
			[ 27, 20, 13, 6 ],
			// horizontally
			[ 35, 36, 37, 38 ],
			[ 36, 37, 38, 39 ],
			[ 37, 38, 39, 40 ],
			[ 38, 39, 40, 41 ],
			[ 28, 29, 30, 31 ],
			[ 29, 30, 31, 32 ],
			[ 30, 31, 32, 33 ],
			[ 31, 32, 33, 34 ],
			[ 21, 22, 23, 24 ],
			[ 22, 23, 24, 25 ],
			[ 23, 24, 25, 26 ],
			[ 24, 25, 26, 27 ],
			[ 14, 15, 16, 17 ],
			[ 15, 16, 17, 18 ],
			[ 16, 17, 18, 19 ],
			[ 17, 18, 19, 20 ],
			[ 7, 8, 9, 10 ],
			[ 8, 9, 10, 11 ],
			[ 9, 10, 11, 12 ],
			[ 10, 11, 12, 13 ],
			[ 0, 1, 2, 3 ],
			[ 1, 2, 3, 4 ],
			[ 2, 3, 4, 5 ],
			[ 3, 4, 5, 6 ],
		];

		winningArrays.map((smallArray) => {
			const smallGridOne = smallGrids[smallArray[0]];
			const smallGridTwo = smallGrids[smallArray[1]];
			const smallGridThree = smallGrids[smallArray[2]];
			const smallGridFour = smallGrids[smallArray[3]];
			if (
				smallGridOne.classList.contains('ball-one') &&
				smallGridTwo.classList.contains('ball-one') &&
				smallGridThree.classList.contains('ball-one') &&
				smallGridFour.classList.contains('ball-one')
			) {
				winningPlayer.textContent = `Player ${currentPlayer - 1}`;
				winningPlayer.classList.add('player-one');
				gameOver.textContent = 'GAME OVER!';
				gameOver.classList.add('player-one');
				smallGrids.forEach((smallGrid) => smallGrid.removeEventListener('click', getScore));
			} else if (
				smallGridOne.className === 'ball-two' &&
				smallGridTwo.className === 'ball-two' &&
				smallGridThree.className === 'ball-two' &&
				smallGridFour.className === 'ball-two'
			) {
				winningPlayer.textContent = `Player ${currentPlayer + 1}`;
				winningPlayer.classList.add('player-two');
				gameOver.textContent = 'GAME OVER!';
				gameOver.classList.add('player-two');
				smallGrids.forEach((smallGrid) => smallGrid.removeEventListener('click', getScore));
			}
		});
	}

	makeGridClickable();
	smallGrids.forEach((smallGrid) => smallGrid.addEventListener('click', getScore));
});
