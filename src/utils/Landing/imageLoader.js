export const loadImages = (start, end) => {
  const images = [];
  for (let i = start; i < end; i++) {
    const img = new Image();
    img.src = `/BeamImages/F3_seq_000${i}.jpg`;
    images.push(
      new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = (e) =>
          reject(new Error(`Failed to load image: ${img.src}`));
      })
    );
  }
  return images;
};
