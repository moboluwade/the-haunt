const Background = () => {
  

  return (
    <div className="w-screen overflow-clip h-[500px] md:h-screen z-0 absolute">
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute z-0 top-0 left-0 w-full md:h-full object-cover"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
        }}
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scary-pumpkin-tiW92Gq8YmBqxwavE82hs8cAtCMId1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 via-black/60 to-transparent backdrop-blur-sm" />
    </div>
  );
};

export default Background;
