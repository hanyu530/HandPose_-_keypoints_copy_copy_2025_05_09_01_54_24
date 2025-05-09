// Hand Pose Detection with ml5.js
// https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/hand-pose

let video;
let handPose;
let hands = [];
let circleX, circleY; // 圓的初始位置
let circleRadius = 50; // 圓的半徑

function preload() {
  // Initialize HandPose model with flipped video input
  handPose = ml5.handPose({ flipped: true });
}

function mousePressed() {
  console.log(hands);
}

function gotHands(results) {
  hands = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  // 圓的初始位置設置為畫布中央
  circleX = width / 2;
  circleY = height / 2;

  // Start detecting hands
  handPose.detectStart(video, gotHands);
}

function draw() {
  image(video, 0, 0);

  // 繪製圓
  fill(0, 0, 255, 150); // 半透明藍色
  noStroke();
  ellipse(circleX, circleY, circleRadius * 2);

  // 確保至少檢測到一隻手
  if (hands.length > 0) {
    for (let hand of hands) {
      if (hand.confidence > 0.1) {
        // 繪製手指的線條
        stroke(0, 255, 0); // 綠色線條
        strokeWeight(2);

        // Connect keypoints 0-4
        for (let i = 0; i < 4; i++) {
          line(
            hand.keypoints[i].x, hand.keypoints[i].y,
            hand.keypoints[i + 1].x, hand.keypoints[i + 1].y
          );
        }

        // Connect keypoints 5-8
        for (let i = 5; i < 8; i++) {
          line(
            hand.keypoints[i].x, hand.keypoints[i].y,
            hand.keypoints[i + 1].x, hand.keypoints[i + 1].y
          );
        }

        // Connect keypoints 9-12
        for (let i = 9; i < 12; i++) {
          line(
            hand.keypoints[i].x, hand.keypoints[i].y,
            hand.keypoints[i + 1].x, hand.keypoints[i + 1].y
          );
        }

        // Connect keypoints 13-16
        for (let i = 13; i < 16; i++) {
          line(
            hand.keypoints[i].x, hand.keypoints[i].y,
            hand.keypoints[i + 1].x, hand.keypoints[i + 1].y
          );
        }

        // Connect keypoints 17-20
        for (let i = 17; i < 20; i++) {
          line(
            hand.keypoints[i].x, hand.keypoints[i].y,
            hand.keypoints[i + 1].x, hand.keypoints[i + 1].y
          );
        }
      }
    }
  }
}
