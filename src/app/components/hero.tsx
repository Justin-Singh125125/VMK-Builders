export const Hero = () => {
  return (
    <div className="relative overflow-hidden h-[525px]">
      <iframe
        className="absolute w-screen h-screen !max-w-full !max-h-full"
        src="https://player.vimeo.com/video/897387085?h=4f192c9252&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        style={{ maxWidth: '200px', maxHeight: '200px' }}
      />
    </div>
  );
};
