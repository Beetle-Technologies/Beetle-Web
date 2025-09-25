type TImageCard = {
  image: string;
  children: React.ReactNode;
};
const ImageCard = ({ image, children }: TImageCard) => {
  return (
    <div
      className="relative mb-12 mx-auto bg-no-repeat bg-cover w-full sm:max-w-[1440px] md:max-w-[90%] h-[400px] md:h-[700px] md:rounded-3xl"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {children}
    </div>
  );
};
export default ImageCard;
