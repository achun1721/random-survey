const urls = [
  'https://docs.google.com/forms/d/e/1FAIpQLSc8Lu-qPm_KoF5QFUY43njFPp7rJKDhizeuStVckDHOOGX0Qg/viewform?usp=dialog',
  'https://docs.google.com/forms/d/e/1FAIpQLSdEcsy4D6BaQdkvORpOcJYQSlwmo63qoRbiAJYr0pKqgaYADg/viewform?usp=dialog',
  'https://docs.google.com/forms/d/e/1FAIpQLSckuXDrLSBXf89b0WyIG14uJzdZ_KXmHqyKDJhHN8ySLB2prQ/viewform?usp=dialog',
];

// 從 localStorage 取得已派發的網址清單
const used = JSON.parse(localStorage.getItem('dispatched_urls') || '[]');

// 找出尚未派發的網址
const remaining = urls.filter(url => !used.includes(url));

// 如果都派發完了，就清除紀錄並重新開始
if (remaining.length === 0) {
  localStorage.removeItem('dispatched_urls');
  location.reload(); // 重整頁面，重新分派
} else {
  // 隨機選一個尚未派發的網址
  const randomIndex = Math.floor(Math.random() * remaining.length);
  const selectedUrl = remaining[randomIndex];

  // 更新派發紀錄
  used.push(selectedUrl);
  localStorage.setItem('dispatched_urls', JSON.stringify(used));

  // 跳轉至該問卷
  window.location.href = selectedUrl;
}
