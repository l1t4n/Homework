const pieces = [
    { type: '♜', color: 'black', position: 0 },
    { type: '♞', color: 'black', position: 1 },
    { type: '♝', color: 'black', position: 2 },
    { type: '♛', color: 'black', position: 3 },
    { type: '♚', color: 'black', position: 4 },
    { type: '♝', color: 'black', position: 5 },
    { type: '♞', color: 'black', position: 6 },
    { type: '♜', color: 'black', position: 7 },
    { type: '♟', color: 'black', position: 8 },
    { type: '♟', color: 'black', position: 9 },
    { type: '♟', color: 'black', position: 10 },
    { type: '♟', color: 'black', position: 11 },
    { type: '♟', color: 'black', position: 12 },
    { type: '♟', color: 'black', position: 13 },
    { type: '♟', color: 'black', position: 14 },
    { type: '♟', color: 'black', position: 15 },
    { type: '♖', color: 'white', position: 56 },
    { type: '♘', color: 'white', position: 57 },
    { type: '♗', color: 'white', position: 58 },
    { type: '♕', color: 'white', position: 59 },
    { type: '♔', color: 'white', position: 60 },
    { type: '♗', color: 'white', position: 61 },
    { type: '♘', color: 'white', position: 62 },
    { type: '♖', color: 'white', position: 63 },
    { type: '♙', color: 'white', position: 48 },
    { type: '♙', color: 'white', position: 49 },
    { type: '♙', color: 'white', position: 50 },
    { type: '♙', color: 'white', position: 51 },
    { type: '♙', color: 'white', position: 52 },
    { type: '♙', color: 'white', position: 53 },
    { type: '♙', color: 'white', position: 54 },
    { type: '♙', color: 'white', position: 55 },
];
document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = [];
    let selectedPiece = null;

    // Создаем доску
    function createBoard() {
        let isWhite = true;
        for (let i = 0; i < 64; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.classList.add(isWhite ? 'white' : 'black');
            isWhite = !isWhite;
            square.dataset.index = i;
            squares.push(square);
            board.appendChild(square);
        }
    }

    createBoard();
    setupPieces();

    // Фигуры
    

    // Помещаем фигуры на доску
    function setupPieces() {
        pieces.forEach(piece => {
            const { type, color, position } = piece;
            const square = squares[position];
            const pieceElement = document.createElement('div');
            pieceElement.innerText = type;
            pieceElement.classList.add('piece');
            pieceElement.classList.add(color);
            pieceElement.dataset.type = type;
            pieceElement.dataset.color = color;
            pieceElement.addEventListener('click', () => handleClick(square, pieceElement));
            square.appendChild(pieceElement);
        });
    }

    // Обработчик клика по клетке
    function handleClick(square, piece) {
        if (selectedPiece === null && piece.dataset.color === 'white') {
            selectedPiece = piece;
            selectedPiece.classList.add('selected');
        } else if (selectedPiece !== null) {
            movePiece(square);
            selectedPiece.classList.remove('selected');
            selectedPiece = null;
        }
    }

    // Перемещение фигуры
    function movePiece(targetSquare) {
        const fromSquare = selectedPiece.parentElement;
        const fromIndex = parseInt(fromSquare.dataset.index);
        const toIndex = parseInt(targetSquare.dataset.index);

        if (isValidMove(fromIndex, toIndex)) {
            targetSquare.innerHTML = selectedPiece.outerHTML;
            fromSquare.innerHTML = '';
            // Проверка на шах и мат, возможно другие логические проверки
        } else {
            alert("Недопустимый ход!");
        }
    }

    // Проверка на валидность хода (в данном случае просто проверка наличия фигуры)
    function isValidMove(fromIndex, toIndex) {
        const fromSquare = squares[fromIndex];
        const toSquare = squares[toIndex];
        return toSquare.children.length === 0;
    }
});
