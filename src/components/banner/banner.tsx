import Image from "next/image";

export interface BannerProps {
  image: string;
  title: string;
  description: string;
}
export function Banner({ image, title, description }: BannerProps) {
  return (
    <div className="relative z-0">
      <Image
        src={image}
        alt={title}
        width={2500}
        height={1500}
        className="absolute z-0 h-[40vh] w-full object-cover"
      />
      <div className="relative z-10 pt-28 text-center text-white">
        <h2 className="mb-6 text-5xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
