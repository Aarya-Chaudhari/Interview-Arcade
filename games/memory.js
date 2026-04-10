(function () {
  'use strict';

  var PAIRS = [
    { a: 'Stack', b: 'LIFO' },
    { a: 'Queue', b: 'FIFO' },
    { a: 'Binary search', b: 'Sorted array' },
    { a: 'Min-heap', b: 'Smallest first' },
    { a: 'BFS', b: 'Level-order' },
    { a: 'Hash map', b: 'O(1) avg lookup' },
    { a: 'Deadlock', b: 'Circular wait' },
    { a: 'REST', b: 'Stateless' }
  ];

  var state = {
    cards: [],
    flipped: [],
    lock: false,
    attempts: 0,
    matchedCount: 0,
    startedAt: null,
    elapsedMs: 0,
    tickId: null
  };

  function $(id) {
    return document.getElementById(id);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function buildDeck() {
    var deck = [];
    for (var p = 0; p < PAIRS.length; p++) {
      var pair = PAIRS[p];
      deck.push({ pairId: p, label: pair.a, matched: false });
      deck.push({ pairId: p, label: pair.b, matched: false });
    }
    return shuffle(deck);
  }

  function formatTime(ms) {
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60);
    s = s % 60;
    function pad(n) {
      return n < 10 ? '0' + n : String(n);
    }
    return pad(m) + ':' + pad(s);
  }

  function updateHud() {
    $('attempts').textContent = String(state.attempts);
    $('timer').textContent = formatTime(state.elapsedMs);
  }

  function startTimer() {
    if (state.startedAt !== null) return;
    state.startedAt = Date.now();
    state.tickId = window.setInterval(function () {
      state.elapsedMs = Date.now() - state.startedAt;
      $('timer').textContent = formatTime(state.elapsedMs);
    }, 200);
  }

  function stopTimer() {
    if (state.tickId !== null) {
      window.clearInterval(state.tickId);
      state.tickId = null;
    }
    if (state.startedAt !== null) {
      state.elapsedMs = Date.now() - state.startedAt;
    }
    updateHud();
  }

  function renderBoard() {
    var board = $('board');
    board.innerHTML = '';
    for (var i = 0; i < state.cards.length; i++) {
      (function (index) {
        var c = state.cards[index];
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'card';
        btn.setAttribute('aria-label', 'Memory card');
        if (c.matched) btn.classList.add('matched');
        if (!c.matched && state.flipped.indexOf(index) !== -1) btn.classList.add('flipped');

        var inner = document.createElement('span');
        inner.className = 'card-inner';

        var back = document.createElement('span');
        back.className = 'card-face card-back';
        back.setAttribute('aria-hidden', 'true');
        back.textContent = 'IA';

        var front = document.createElement('span');
        front.className = 'card-face card-front';
        front.textContent = c.label;

        inner.appendChild(back);
        inner.appendChild(front);
        btn.appendChild(inner);

        if (!c.matched) {
          btn.addEventListener('click', function () {
            onCardClick(index);
          });
        } else {
          btn.disabled = true;
        }

        board.appendChild(btn);
      })(i);
    }
  }

  function onCardClick(index) {
    if (state.lock) return;
    var c = state.cards[index];
    if (c.matched) return;
    if (state.flipped.indexOf(index) !== -1) return;

    if (state.startedAt === null) startTimer();

    if (state.flipped.length === 0) {
      state.flipped.push(index);
      renderBoard();
      return;
    }

    if (state.flipped.length === 1) {
      state.flipped.push(index);
      state.attempts++;
      updateHud();

      var i0 = state.flipped[0];
      var i1 = state.flipped[1];
      var a = state.cards[i0];
      var b = state.cards[i1];

      if (a.pairId === b.pairId) {
        a.matched = true;
        b.matched = true;
        state.matchedCount += 2;
        state.flipped = [];

        if (state.matchedCount === state.cards.length) {
          stopTimer();
          $('winBanner').hidden = false;
          $('finalAttempts').textContent = String(state.attempts);
          $('finalTime').textContent = formatTime(state.elapsedMs);
        }
        renderBoard();
      } else {
        state.lock = true;
        renderBoard();
        window.setTimeout(function () {
          state.flipped = [];
          state.lock = false;
          renderBoard();
        }, 900);
      }
    }
  }

  function newGame() {
    if (state.tickId !== null) {
      window.clearInterval(state.tickId);
      state.tickId = null;
    }
    state.cards = buildDeck();
    state.flipped = [];
    state.lock = false;
    state.attempts = 0;
    state.matchedCount = 0;
    state.startedAt = null;
    state.elapsedMs = 0;
    $('winBanner').hidden = true;
    updateHud();
    renderBoard();
  }

  function init() {
    $('btnNew').addEventListener('click', newGame);
    newGame();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
