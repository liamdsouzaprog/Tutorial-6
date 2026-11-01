let nextPlayer = 'X';

// Initialize next-lbl with the starting player
document.getElementById('next-lbl').innerText = nextPlayer;

createGameBoard();

function createGameBoard()
{
    // Initialize each table cell c1 to c9 with a button labelled "[ ]"
    for (let i = 1; i <= 9; i++)
    {
        let cell = document.getElementById('c' + i);
        let button = document.createElement('button');
        button.innerText = '[ ]';
        cell.appendChild(button);
    }

    let btns = document.querySelectorAll('button');

    // Assign a click event listener to each button that passes the event to takeCell
    for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', function(event)
        {
            takeCell(event);
        });
    }
}

function takeCell(event)
{
    // Fill the chosen cell with the player's symbol inside square brackets
    event.currentTarget.innerText = '[' + nextPlayer + ']';

    // Update nextPlayer for the next turn
    if (nextPlayer === 'X')
    {
        nextPlayer = 'O';
    }
    else
    {
        nextPlayer = 'X';
    }

    // Update the value shown in next-lbl
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Disable the button after the cell is chosen
    event.currentTarget.disabled = true;

    // Display Game Over inside an h1 element if all buttons are disabled
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    let btns = document.querySelectorAll('button');

    // Check all buttons and return false if any button is still enabled
    for (let i = 0; i < btns.length; i++)
    {
        if (btns[i].disabled === false)
        {
            return false;
        }
    }

    // All buttons have been disabled, so the game is over
    return true;
}