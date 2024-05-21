function displayPrayerTimes(prayerData) {
  const prayerTimesContainer = document.querySelector('.prayer-times-container');
  prayerTimesContainer.innerHTML = ""; // Clear existing content

  prayerData.forEach(prayer => {
    const prayerTimeElement = document.createElement('div');
    prayerTimeElement.classList.add('prayer-time', `${prayer.name}-time`);

    prayerTimeElement.innerHTML = `
      <h2>${prayer.name}</h2>
      <p>${prayer.time}</p>
      <audio src="${prayer.audioSrc}" controls></audio>
    `;

    
    prayerTimeElement.addEventListener('click', () => {
      const audioElement = prayerTimeElement.querySelector('audio');
      audioElement.play(); // Play the audio on click
    });

    prayerTimesContainer.appendChild(prayerTimeElement);
  });
}

const prayerTimes = [
  { name: "Fajr", time: "05:00 AM", audioSrc: "fajr-adhan.mp3" },
  { name: "Dhuhr", time: "12:30 PM", audioSrc: "dhuhr-adhan.mp3" },
  { name: "Asr", time: "04:00 PM", audioSrc: "asr-adhan.mp3" },
  { name: "Maghrib", time: "06:30 PM", audioSrc: "maghrib-adhan.mp3" },
  { name: "Isha", time: "08:00 PM", audioSrc: "isha-adhan.mp3" }
];


displayPrayerTimes(prayerTimes);