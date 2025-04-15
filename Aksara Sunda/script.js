// --- Flashcard Data (Original Order) ---
const originalFlashcards = [
    // Swara (Vowels)
    { front: "ᮃ", back: "<b>Sound:</b> a <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮄ", back: "<b>Sound:</b> i <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮅ", back: "<b>Sound:</b> u <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮆ", back: "<b>Sound:</b> é ('a' in late) <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮇ", back: "<b>Sound:</b> o ('o' in go) <br><b>Type:</b> Swara (Vowel)" },
    { front: "ᮈ", back: "<b>Sound:</b> e ('e' in bet) <br><b>Type:</b> Swara (Vowel)" },
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
    { front: "◌ᮤ", back: "<b>Name:</b> Panghulu | Rarangkén <br><b>Function:</b> Changes 'a' → 'i' <br><b>Example:</b> ᮊ → ᮊᮤ (ki)" },
    { front: "◌ᮥ", back: "<b>Name:</b> Panyuku | Rarangkén <br><b>Function:</b> Changes 'a' → 'u' <br><b>Example:</b> ᮊ → ᮊᮥ (ku)" },
    { front: "◌ᮦ", back: "<b>Name:</b> Panéléng | Rarangkén <br><b>Function:</b> Changes 'a' → 'é' <br><b>Example:</b> ᮊ → ᮦᮊ (ké)" },
    { front: "◌ᮧ", back: "<b>Name:</b> Panolong | Rarangkén <br><b>Function:</b> Changes 'a' → 'o' <br><b>Example:</b> ᮊ → ᮊᮧ (ko)" },
    { front: "◌ᮨ", back: "<b>Name:</b> Pamepet | Rarangkén <br><b>Function:</b> Changes 'a' → 'e' ('bet') <br><b>Example:</b> ᮊ → ᮊᮨ (ke)" },
    { front: "◌ᮩ", back: "<b>Name:</b> Paneuleung | Rarangkén <br><b>Function:</b> Changes 'a' → 'eu' <br><b>Example:</b> ᮊ → ᮊᮩ (keu)" },
    { front: "◌ᮁ", back: "<b>Name:</b> Panglayar | Rarangkén <br><b>Function:</b> Adds final '-r' <br><b>Example:</b> ᮊ → ᮊᮁ (kar)" },
    { front: "◌ᮀ", back: "<b>Name:</b> Panyecek | Rarangkén <br><b>Function:</b> Adds final '-ng' <br><b>Example:</b> ᮊ → ᮊᮀ (kang)" },
    { front: "◌ᮂ", back: "<b>Name:</b> Pangwisad | Rarangkén <br><b>Function:</b> Adds final '-h' <br><b>Example:</b> ᮊ → ᮊᮂ (kah)" },
    { front: "◌ᮡ", back: "<b>Name:</b> Pamingkal | Rarangkén <br><b>Function:</b> Inserts '-y-' cluster <br><b>Example:</b> ᮊ → ᮊᮡ (kya)" },
    { front: "◌ᮢ", back: "<b>Name:</b> Panyakra | Rarangkén <br><b>Function:</b> Inserts '-r-' cluster <br><b>Example:</b> ᮊ → ᮊᮢ (kra)" },
    { front: "◌ᮣ", back: "<b>Name:</b> Panyiku | Rarangkén <br><b>Function:</b> Inserts '-l-' cluster <br><b>Example:</b> ᮊ → ᮊᮣ (kla)" },
    { front: "◌᮪", back: "<b>Name:</b> Pamaéh | Rarangkén <br><b>Function:</b> Silences vowel 'a' <br><b>Example:</b> ᮊ → ᮊ᮪ (k)" },
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
// *** Get references to the new faces ***
const frontFaceElement = cardElement.querySelector('.card-front-face');
const backFaceElement = cardElement.querySelector('.card-back-face');
// *** End reference changes ***
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');
const cardCounterElement = document.getElementById('card-counter');
const toggleOrderBtn = document.getElementById('toggle-order-btn');

// --- State Variables ---
let currentCardIndex = 0;
// let isFront = true; // We don't strictly need this for the flip logic anymore
let isRandomized = false;
let displayedFlashcards = [];

// --- Functions ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setDisplayedCards() {
    if (isRandomized) {
        displayedFlashcards = [...originalFlashcards];
        shuffleArray(displayedFlashcards);
    } else {
        displayedFlashcards = [...originalFlashcards];
    }
    currentCardIndex = 0;
    // isFront = true; // Reset concept
}

function updateCardDisplay() {
    if (!displayedFlashcards || displayedFlashcards.length === 0 || !frontFaceElement || !backFaceElement) {
        // Handle error or loading state appropriately for both faces
        if (frontFaceElement) frontFaceElement.innerHTML = 'Error';
        if (backFaceElement) backFaceElement.innerHTML = 'Error';
        cardCounterElement.textContent = `Card 0 / 0`;
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        flipBtn.disabled = true;
        toggleOrderBtn.disabled = true;
        return;
    }

    if (currentCardIndex < 0) currentCardIndex = 0;
    if (currentCardIndex >= displayedFlashcards.length) currentCardIndex = displayedFlashcards.length - 1;

    const card = displayedFlashcards[currentCardIndex];

    // *** Update BOTH faces' content ***
    frontFaceElement.innerHTML = card.front;
    backFaceElement.innerHTML = card.back;
    // *** END content update change ***

    // Remove styling classes from cardElement itself (handled by faces now)
    // cardElement.classList.remove('card-back', 'card-front'); // No longer needed

    cardCounterElement.textContent = `Card ${currentCardIndex + 1} / ${displayedFlashcards.length}`;

    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === displayedFlashcards.length - 1;
    flipBtn.disabled = false;
    toggleOrderBtn.disabled = false;
}

function flipCard() {
    if (displayedFlashcards.length === 0) return;
    // *** JUST toggle the .flipped class on the main card ***
    cardElement.classList.toggle('flipped');
    // *** END flip logic change ***
    // isFront = !isFront; // No longer needed here
    // updateCardDisplay(); // Don't update display on flip, only rotate
}

function showNextCard() {
    if (currentCardIndex < displayedFlashcards.length - 1) {
        currentCardIndex++;
        // isFront = true; // Conceptually reset
        // *** Remove flipped class to show front first ***
        cardElement.classList.remove('flipped');
        // *** End change ***
        updateCardDisplay(); // Update content
    }
}

function showPrevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        // isFront = true; // Conceptually reset
        // *** Remove flipped class to show front first ***
        cardElement.classList.remove('flipped');
         // *** End change ***
        updateCardDisplay(); // Update content
    }
}

function toggleOrder() {
    isRandomized = !isRandomized;
    setDisplayedCards();

    if (isRandomized) {
        toggleOrderBtn.textContent = 'Switch to Ordered';
    } else {
        toggleOrderBtn.textContent = 'Switch to Random';
    }
     // *** Remove flipped class when order changes ***
    cardElement.classList.remove('flipped');
     // *** End change ***
    updateCardDisplay();
}


// --- Event Listeners ---
flipBtn.addEventListener('click', flipCard);
nextBtn.addEventListener('click', showNextCard);
prevBtn.addEventListener('click', showPrevCard);
cardElement.addEventListener('click', flipCard); // Card click still flips
toggleOrderBtn.addEventListener('click', toggleOrder);

// --- Initial Load ---
setDisplayedCards();
updateCardDisplay(); // Initial content load for both faces
