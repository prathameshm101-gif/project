export const YTvideo = () => {
  const videos = [
    {
      id: "video1",
      thumbnail: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb",
      title: "Complete Smile Makeover Journey"
    },
    {
      id: "video2",
      thumbnail: "https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg?auto=compress&cs=tinysrgb",
      title: "All-on-4 Dental Implants Procedure"
    },
    {
      id: "video3",
      thumbnail: "https://images.pexels.com/photos/3845812/pexels-photo-3845812.jpeg?auto=compress&cs=tinysrgb",
      title: "Advanced Cosmetic Dentistry"
    },
    {
      id: "video4",
      thumbnail: "https://images.pexels.com/photos/3845813/pexels-photo-3845813.jpeg?auto=compress&cs=tinysrgb",
      title: "Patient Testimonial"
    }
  ];

  return (
    <section className="bg-[url('/rectangle-512.png')] bg-cover bg-center py-16 md:py-24 px-4 md:px-8 ">
<div className="m-[5%]">
<h2 className="text-center text-3xl lg:text-[50px] font-['Poppins'] font-semibold text-[#0578b1] tracking-[-2px] leading-snug mb-12">
        Watch How Dr. Shet Transforms Smiles
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden "
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0578b1]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white text-lg font-semibold">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
</div>
    </section>
  );
};
