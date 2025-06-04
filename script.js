const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const songTitle = document.getElementById('song-title');

const songs = [
  { title: 'Không liên quan đến anh', file: 'music/[VietsubTiktok] Không Liên Quan Đến Anh - A Nhũng  与我无关 - 阿冗  Nhạc Hoa tâm trạng Diệp Tử (1).mp3' },
  { title: 'Day Dứt Nỗi Đau', file: 'music/Day Dứt Nỗi Đau - Mr. Siro (Lyrics Video).mp3' },
  { title: 'Gương Mặt Lạ Lẫm', file: 'music/Gương Mặt Lạ Lẫm - Mr Siro (Lyrics Video).mp3' },
  { title: 'Exit Sign', file: 'music/HIEUTHUHAI - Exit Sign (prod. by Kewtiie) ft. marzuz [Official Lyric Video].mp3' },
  { title: 'Không Thể Say', file: 'music/HIEUTHUHAI - Không Thể Say (prod. by Kewtiie) l Official Video.mp3' },
  { title: 'Cánh Đồng Yêu Thương', file: 'music/Mr Siro  Cánh Đồng Yêu Thương.mp3' },
  { title: 'Tự Lau Nước Mắt', file: 'music/Tự Lau Nước Mắt - Mr Siro (Official Lyrics Video).mp3' },
  { title: 'You are everywhere2024', file: 'music/You are everywhere2024.mp3' }

];

let currentSong = 0;
let isPlaying = false;

function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  songTitle.textContent = `Đang phát: ${song.title}`;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = '▶️';
  } else {
    audio.play();
    playBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  if (isPlaying) audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  if (isPlaying) audio.play();
}

playBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
loadSong(currentSong);
