export default function Map() {
  return (
    <>
        <div className=" w-full">
            <p className=" font-Lora text-2xl sm:text-3xl">Map</p>
            <div className=" w-full aspect-video">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.510276911561!2d85.30713717553922!3d27.670619476203676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19062bbc2a01%3A0xf5a732c7d6747814!2z4KSJ4KSa4KWN4KSaIOCktuCkv-CkleCljeCkt-CkvuCkueCksOClguCkleCliyDgpI_gpLjgpL_gpK_gpL7gpLLgpYAg4KS14KS_4KSm4KWN4KSv4KS-4KSq4KWA4KSg!5e0!3m2!1sne!2snp!4v1718174517928!5m2!1sne!2snp" className="w-full h-full"  style={{border:0}}  loading="lazy" ></iframe>
            </div>
        </div>
    </>
  )
}
