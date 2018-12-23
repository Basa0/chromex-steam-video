const videoElements = document.getElementsByTagName("video");

console.log(`Got ${videoElements.length} video elements.`);

for (videoElement of videoElements) {
  videoElement.controls = true;
}
