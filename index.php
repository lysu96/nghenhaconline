<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"/>
  <link rel="stylesheet" href="css/css5.css" />
  <title>Music Player</title>
</head>
<body>
  <div id="smartphone" class="smartphone">
    <div id="content" class="content">
     <div class="player">
      <div class="info">

        <div class="header-phone">
          <i class="fa fa-home"></i>
          <i class="fa fa-phone"></i>
          <i class="fa fa-signal"></i>
          <i id ="Pin" class="fa">&#xf244;</i>
        </div>

        <div class="music-container" id="music-container">
          <div class="music-info">
            <h4 id="title"></h4>
            <div class="progress-container" id="progress-container">
              <div class="progress" id="progress"></div>
            </div>
          </div>

          <audio src="music/pajhuam1.mp3" id="audio"></audio>

          <div class="img-container">
            <img src="images/nkaujntxawm.jpg" alt="music-cover" id="cover" />
          </div>
          <div class="navigation">
            <button id="prev" class="action-btn">
              <i class="fas fa-backward"></i>
            </button>
            <button id="play" class="action-btn action-btn-big">
              <i class="fas fa-play"></i>
            </button>
            <button id="next" class="action-btn">
              <i class="fas fa-forward"></i>
            </button>
            <button id="repeat" class="action-btn">
              <i class="fas fa-undo"></i>
            </button>
          </div>
        </div>

        <div class="ads">
          <a href="https://hmooblee.co/" target="_bank">
            <img id="img-ads" src="images/hluagnkaujhmooblee.jpg" alt="Quảng cáo ads" style="width: 100%; height: 100%; border-radius: 15px;"/>
          </a>
        </div>

        <div class="blog">
          <a href="https://hmooblee.co/" target="_bank">© Copyright 2021 | Hmooblee.co </a>
        </div>

      </div>
    </div>

  </div>
</div>
<script src="js/js.js" type="text/javascript" charset="utf-8" async defer></script>
<script src="js/phone-batteries.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>