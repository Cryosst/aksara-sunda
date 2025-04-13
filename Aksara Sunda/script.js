// --- Flashcard Data (Original Order) ---
const originalFlashcards = [
    // Swara (Vowels)
    { front: "ᮃ", back: "<b>Sound:</b> a <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮄ", back: "<b>Sound:</b> i <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮅ", back: "<b>Sound:</b> u <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮆ", back: "<b>Sound:</b> é ('a' in late) <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮇ", back: "<b>Sound:</b> o ('o' in go) <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮈ", back: "<b>Sound:</b> e ('e' in bet / schwa) <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮉ", back: "<b>Sound:</b> eu ('uh') <br><b>Type:</b> Swara (Vowel)" },
    // Ngalagena (Base Consonants + 'a')
    { front: "ᮊ", back: "<b>Sound:</b> ka <br><b>Type:</b> Ngalagena" },
    { front: "ᮌ", back: "<b>Sound:</b> ga <br><b>Type:</b> Ngalagena" },
    { front: "ᮍ", back: "<b>Sound:</b> nga <br><b>Type:</b> Ngalagena" },
    { front: "ᮎ", back: "<b>Sound:</b> ca <br><b>Type:</b> Ngalagena" },
    { front: "ᮏ", back: "<b>Sound:</b> ja <br><b>Type:</b> Ngalagena" },
    { front: "ᮑ", back: "<b>Sound:</b> nya <br><b>Type:</b> Ngalagena" },
    { front: "ᮒ", back: "<b>Sound:</b> ta <br><b>Type:</b> Ngalagena" },
    { front: "ᮓ", back: "<b>Sound:</b> da <br><b>Type:</b> Ngalagena" },
    { front: "ᮔ", back: "<b>Sound:</b> na <br><b>Type:</b> Ngalagena" },
    { front: "ᮕ", back: "<b>Sound:</b> pa <br><b>Type:</b> Ngalagena" },
    { front: "ᮘ", back: "<b>Sound:</b> ba <br><b>Type:</b> Ngalagena" },
    { front: "ᮙ", back: "<b>Sound:</b> ma <br><b>Type:</b> Ngalagena" },
    { front: "ᮚ", back: "<b>Sound:</b> ya <br><b>Type:</b> Ngalagena" },
    { front: "ᮛ", back: "<b>Sound:</b> ra <br><b>Type:</b> Ngalagena" },
    { front: "ᮜ", back: "<b>Sound:</b> la <br><b>Type:</b> Ngalagena" },
    { front: "ᮝ", back: "<b>Sound:</b> wa <br><b>Type:</b> Ngalagena" },
    { front: "ᮞ", back: "<b>Sound:</b> sa <br><b>Type:</b> Ngalagena" },
    { front: "ᮠ", back: "<b>Sound:</b> ha <br><b>Type:</b> Ngalagena" },
    // Ngalagena (Foreign/Extended)
    { front: "ᮖ", back: "<b>Sound:</b> fa <br><b>Type:</b> Ngalagena (Extended)" },
    { front: "ᮋ", back: "<b>Sound:</b> qa <br><b>Type:</b> Ngalagena (Extended)" },
    { front: "ᮗ", back: "<b>Sound:</b> va <br><b>Type:</b> Ngalagena (Extended)" },
    { front: "ᮐ", back: "<b>Sound:</b> za <br><b>Type:</b> Ngalagena (Extended)" },
    { front: "ᮟ", back: "<b>Sound:</b> xa <br><b>Type:</b> Ngalagena (Extended)" },
    { front: "ᮮ", back: "<b>Sound:</b> kha <br><b>Type:</b> Ngalagena (Extended)" },
    { front: "ᮯ", back: "<b>Sound:</b> sya <br><b>Type:</b> Ngalagena (Extended)" },
    // Rarangken (Modifiers) - Using 'ᮊ' (ka) as base example
    { front: "◌ᮤ", back: "<b>Name:</b> Panghulu (Above) <br><b>Function:</b> Changes 'a' to 'i' <br><b>Example:</b> ᮊ → ᮊᮤ (ki)" },
    { front: "◌ᮥ", back: "<b>Name:</b> Panyuku (Below) <br><b>Function:</b> Changes 'a' to 'u' <br><b>Example:</b> ᮊ → ᮊᮥ (ku)" },
    { front: "◌ᮦ", back: "<b>Name:</b> Panéléng (Left) <br><b>Function:</b> Changes 'a' to 'é' <br><b>Example:</b> ᮊ → ᮦᮊ (ké)" },
    { front: "◌ᮧ", back: "<b>Name:</b> Panolong (Left & Right) <br><b>Function:</b> Changes 'a' to 'o' <br><b>Example:</b> ᮊ → ᮊᮧ (ko)" },
    { front: "◌ᮨ", back: "<b>Name:</b> Pamepet (Above) <br><b>Function:</b> Changes 'a' to 'e' (schwa) <br><b>Example:</b> ᮊ → ᮊᮨ (ke)" },
    { front: "◌ᮩ", back: "<b>Name:</b> Paneuleung (Below) <br><b>Function:</b> Changes 'a' to 'eu' <br><b>Example:</b> ᮊ → ᮊᮩ (keu)" },
    { front: "◌ᮁ", back: "<b>Name:</b> Panglayar (Above) <br><b>Function:</b> Adds final '-r' <br><b>Example:</b> ᮊ → ᮊᮁ (kar)" },
    { front: "◌ᮀ", back: "<b>Name:</b> Panyecek (Above) <br><b>Function:</b> Adds final '-ng' <br><b>Example:</b> ᮊ → ᮊᮀ (kang)" },
    { front: "◌ᮂ", back: "<b>Name:</b> Pangwisad (Right) <br><b>Function:</b> Adds final '-h' <br><b>Example:</b> ᮊ → ᮊᮂ (kah)" },
    { front: "◌ᮡ", back: "<b>Name:</b> Panyakra (Below) <br><b>Function:</b> Inserts '-y-' cluster <br><b>Example:</b> ᮊ → ᮊᮡ (kya)" },
    { front: "◌ᮢ", back: "<b>Name:</b> Panyiku (Below) <br><b>Function:</b> Inserts '-r-' cluster <br><b>Example:</b> ᮊ → ᮊᮢ (kra)" },
    { front: "◌ᮣ", back: "<b>Name:</b> Pamingkal (Right) <br><b>Function:</b> Inserts '-l-' cluster <br><b>Example:</b> ᮊ → ᮊᮣ (kla)" },
    { front: "◌᮪", back: "<b>Name:</b> Pamaéh (Right) <br><b>Function:</b> Silences vowel 'a' <br><b>Example:</b> ᮊ → ᮊ᮪ (k)" },
    // Angka (Numerals)
    { front: "᮰", back: "<b>Number: </b> 0 (nol)" },
    { front: "᮱", back: "<b>Number: </b> 1 (hiji)" },
    { front: "᮲", back: "<b>Number: </b> 2 (dua)" },
    { front: "᮳", back: "<b>Number: </b> 3 (tilu)" },
    { front: "᮴", back: "<b>Number: </b> 4 (opat)" },
    { front: "᮵", back: "<b>Number: </b> 5 (lima)" },
    { front: "᮶", back: "<b>Number: </b> 6 (genep)" },
    { front: "᮷", back: "<b>Number: </b> 7 (tujuh)" },
    { front: "᮸", back: "<b>Number: </b> 8 (dalapan)" },
    { front: "᮹", back: "<b>Number: </b> 9 (salapan)" },
];

// --- DOM Elements ---
const cardElement = document.getElementById('card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');
const cardCounterElement = document.getElementById('card-counter');
const toggleOrderBtn = document.getElementById('toggle-order-btn'); // Get the new button

// --- State Variables ---
let currentCardIndex = 0;
let isFront = true; // True if showing front, false if showing back
let isRandomized = false; // Track the order mode
let displayedFlashcards = []; // This will hold the cards currently being used

// --- Functions ---

/**
 * Shuffles array in place using the Fisher-Yates (Knuth) algorithm.
 * @param {Array} array The array to shuffle.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Sets the displayedFlashcards array based on the current mode (ordered or random).
 */
function setDisplayedCards() {
    if (isRandomized) {
        // Create a shuffled copy of the original cards
        displayedFlashcards = [...originalFlashcards]; // Use spread syntax for a shallow copy
        shuffleArray(displayedFlashcards);
    } else {
        // Use a direct copy of the original ordered cards
        displayedFlashcards = [...originalFlashcards];
    }
    // Reset index whenever the deck changes
    currentCardIndex = 0;
    isFront = true; // Show front of the first card
}


function updateCardDisplay() {
    // Make sure we have cards to display
    if (!displayedFlashcards || displayedFlashcards.length === 0) {
        cardElement.innerHTML = 'Loading or Error...';
        cardCounterElement.textContent = `Card 0 / 0`;
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        flipBtn.disabled = true;
        toggleOrderBtn.disabled = true; // Disable toggle if no cards
        return;
    }

    // Ensure index is within bounds (can happen if deck changes size, though not here)
    if (currentCardIndex < 0) currentCardIndex = 0;
    if (currentCardIndex >= displayedFlashcards.length) currentCardIndex = displayedFlashcards.length - 1;

    const card = displayedFlashcards[currentCardIndex];

    if (isFront) {
        cardElement.innerHTML = card.front;
        cardElement.classList.remove('card-back');
        cardElement.classList.add('card-front');
    } else {
        cardElement.innerHTML = card.back;
        cardElement.classList.remove('card-front');
        cardElement.classList.add('card-back');
    }

    // Update counter based on the displayed deck
    cardCounterElement.textContent = `Card ${currentCardIndex + 1} / ${displayedFlashcards.length}`;

    // Enable/disable buttons based on position in the *displayed* deck
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === displayedFlashcards.length - 1;
    flipBtn.disabled = false; // Always enable flip if a card is shown
    toggleOrderBtn.disabled = false; // Enable toggle button
}

function flipCard() {
    if (displayedFlashcards.length === 0) return; // Don't flip if no cards
    isFront = !isFront; // Toggle the state
    updateCardDisplay();
}

function showNextCard() {
    if (currentCardIndex < displayedFlashcards.length - 1) {
        currentCardIndex++;
        isFront = true; // Always show front of new card first
        updateCardDisplay();
    }
}

function showPrevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        isFront = true; // Always show front of new card first
        updateCardDisplay();
    }
}

function toggleOrder() {
    isRandomized = !isRandomized; // Flip the mode
    setDisplayedCards(); // Reset the deck based on the new mode

    // Update the toggle button text
    if (isRandomized) {
        toggleOrderBtn.textContent = 'Switch to Ordered';
    } else {
        toggleOrderBtn.textContent = 'Switch to Random';
    }

    updateCardDisplay(); // Show the first card of the new sequence
}


// --- Event Listeners ---
flipBtn.addEventListener('click', flipCard);
nextBtn.addEventListener('click', showNextCard);
prevBtn.addEventListener('click', showPrevCard);
cardElement.addEventListener('click', flipCard); // Allow clicking card to flip
toggleOrderBtn.addEventListener('click', toggleOrder); // Add listener for the new button

// --- Initial Load ---
setDisplayedCards(); // Set the initial deck (will be ordered by default)
updateCardDisplay(); // Show the first card