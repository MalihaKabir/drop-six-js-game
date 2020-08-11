document.addEventListener('DOMContentLoaded', () => {
	const currentPlayerDisplay = document.querySelector('.current-player');
	const winningPlayer = document.querySelector('#winning-player');
	const smallGrids = document.querySelectorAll('.grid div');
	let currentPlayer = 1;

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
					currentPlayerDisplay.classList.remove('player-one');
					currentPlayerDisplay.classList.add('player-two');
				} else if (currentPlayer === 2) {
					smallGrids[i].classList.add('ball-two');
					currentPlayer = 1;
					currentPlayerDisplay.textContent = currentPlayer;
					currentPlayerDisplay.classList.remove('player-two');
					currentPlayerDisplay.classList.add('player-one');
				}
			} else {
				alert('No gap between squares is allowed');
			}
		});
	}

	function getScore () {
		const winningArrays = [
			[ 35, 28, 21, 14 ],
			[ 28, 21, 14, 7 ],
			[ 21, 14, 7, 0 ],
			[ 36, 29, 22, 15 ],
			[ 29, 22, 15, 8 ],
			[ 22, 15, 8, 1 ],
			[ 37, 30, 23, 162 ],
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
				smallGrids.forEach((smallGrid) => smallGrid.removeEventListener('click', getScore));
			} else if (
				smallGridOne.className === 'ball-two' &&
				smallGridTwo.className === 'ball-two' &&
				smallGridThree.className === 'ball-two' &&
				smallGridFour.className === 'ball-two'
			) {
				winningPlayer.textContent = `Player ${currentPlayer + 1}`;
				winningPlayer.classList.add('player-two');
				smallGrids.forEach((smallGrid) => smallGrid.removeEventListener('click', getScore));
			}
		});
	}

	smallGrids.forEach((smallGrid) => smallGrid.addEventListener('click', getScore));
});
