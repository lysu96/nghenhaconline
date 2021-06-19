// p
// MS
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const repBtn = document.getElementById('repeat');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const imgads = document.getElementById('img-ads');

// Tên bài hát
const songs = [
				'hluagnkaujhmooblee',
				'nkaujntxawm'];

// stt bài hát
let songIndex = 0;

// bài chạy đầu tiên
loadSong(songs[songIndex]);

// load bài hát
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
  imgads.src = `images/${song}.jpg`;
}

// nhạc chạy
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  playBtn.querySelector('i.fas').classList.add('active');
  audio.play();
}

// Tạm dừng bài hát
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.remove('active');

  audio.pause();
}

// quay lại
function handleRepeat() {
    if (audio.loop == true) {
        audio.loop = false
        repBtn.querySelector('i.fas').classList.remove('active');
    }
    else {
        audio.loop = true
        repBtn.querySelector('i.fas').classList.add('active');

    }
}

// Bài hát trước bài đang phát
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Bài hát tiếp theo bài đang phát
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Cập nhật thời gian phát
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Đặt thanh tiến trình
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// nhận thời lượng và thời gian cho bài hát
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// xác định thời gian hiện tại (đổi ra vị phút)
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// xác định giây hiện tại (đổi ra vị giây)
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// thay đổi DOM currentTime
	currTime.innerHTML = min +':'+ sec;

	// xác định thời lượng phút
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// xác định thời lượng giây
	
	get_sec_d (duration);

	// thay đổi thời lượng DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// sự kiện xảy ra
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }

});

// Thay đổi bài hát
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
repBtn.addEventListener('click', handleRepeat);
// Cập nhật thời gian / bài hát
audio.addEventListener('timeupdate', updateProgress);

// Nhấp vào thanh thời gian bài hát
progressContainer.addEventListener('click', setProgress);

// Bài hát kết thúc
audio.addEventListener('ended', nextSong);

// Thời gian của bài hát
audio.addEventListener('timeupdate',DurTime);

//