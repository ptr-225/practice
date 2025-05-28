// キーボードの入力状態を管理する配列の定義
let input_key = new Array();

window.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
    input_key[event.keyCode] = true;
}

window.addEventListener("keyup", handleKeyUp);

function handleKeyUp(event) {
    input_key[event.keyCode] = false;
}

// canvas要素の取得

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// キャラの設定
const IMG_SIZE = 100;
const CHARA_SPEED = 4;

// キャラの配置初期値
let x = 0;
let y = 300;

// 上下方向の速度
let vy = 0;

// ジャンプしたか否かのフラグ
let isJump = false;

// ゲームオーバーか否かのフラグ
let isGameOver = false;

// ゲームクリアか否かのフラグ
let isGameClear = false;

// ブロック要素の定義
let blocks = [
    { x: 0, y: 350, w: 200, h: 40 },
    { x: 250, y: 300, w: 150, h: 40 },
    { x: 450, y: 250, w: 100, h: 40 },
];


// Define player
const player = {
    x: 0,
    y: 300,
    width: IMG_SIZE,
    height: IMG_SIZE,
    draw() {
    }
};

window.addEventListener("load", update);

function update() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Clear previous frame
    let updateX = x;
    let updateY = y;

    if (isGameClear) {

    } else if (isGameOver) {

    } else {
        if (input_key[37]) { // Left arrow key
            updateX = x - CHARA_SPEED;
        }

        if (input_key[38]) { // Left arrow key
            vy = -10; // Jump speed
            isJump = true; // Set jump flag
        }

        if (input_key[39]) { // Left arrow key
            updateX = x + CHARA_SPEED;
        }
        if (isJump) {
            updateY = y + vy; // Update vertical position
            vy = vy + 0.5; // Gravity effect
        }
    }


    x = updateX;
    y = updateY;

    let image = new Image();
    image.src = './img/runner.png'; // Load character image
    ctx.drawImage(image, x, y, IMG_SIZE, IMG_SIZE); // Draw character image
    player.draw();

    // ブロックの表示
    ctx.fillStyle = "Orange";
    for (const block of blocks) {
        ctx.fillRect(block.x, block.y, block.w, block.h)
    }

    window.requestAnimationFrame(update);
}

