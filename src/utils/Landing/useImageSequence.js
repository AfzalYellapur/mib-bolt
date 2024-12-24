import { useCallback, useState } from "react";

export const useImageSequence = (canvasRef, images, imagesLoaded) => {
  const [renderError, setRenderError] = useState(null);

  const render = useCallback(
    (index) => {
      const canvas = canvasRef.current;
      if (!canvas || !imagesLoaded) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setRenderError("Failed to get canvas context");
        return;
      }

      Promise.all(images)
        .then((loadedImages) => {
          const img = loadedImages[index - 6];
          if (img) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const scale = Math.max(
              canvas.width / img.width,
              canvas.height / img.height
            );
            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
          } else {
            setRenderError(`Image at index ${index} not found`);
          }
        })
        .catch((err) => {
          console.error("Error rendering image:", err);
          setRenderError(
            "Failed to render image. Please try refreshing the page."
          );
        });
    },
    [canvasRef, images, imagesLoaded]
  );

  return { render, renderError };
};
