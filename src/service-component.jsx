import {Card, CardFooter, Image, Button, CardHeader} from "@nextui-org/react";
import x50Car from './assets/x50-car.png';

const servData = [
  { desc: "Bosan dengan kereta lama? Kami offer trade-in dengan harga yang sangat tinggi! Dapatkan harga yang lebih tinggi dari pasaran, dan upgrade ke kereta baru tanpa stress. No hidden charges, just a fair deal!", type: "Trade-in Kereta (Harga Tinggi)", imageUrl: x50Car},
  { desc: "Nak plat nombor kereta yang unik atau yang catchy? Kami sediakan servis beli atau tukar plat nombor kereta — dari yang standard sampai yang lebih eksklusif. Pilih je yang paling sesuai dengan personaliti anda!", type: "No Plat Kereta (Beli atau Swap)", imageUrl: x50Car },
  { desc: "Perlukan loan untuk kereta? Jangan risau, kami ada banyak pilihan bank loan dengan interest rate yang competitive. Kami tolong settlekan semua paperwork dan urusan bank untuk anda, so you can get your dream car faster!", type: "Bank Loan (Pelbagai Pilihan)", imageUrl: x50Car },
  { desc: "Jangan pening kepala dengan urusan JPJ dan Puspakom. Kami uruskan semua benda tu untuk anda, dari pendaftaran kereta sampai inspection. Semua proses jadi cepat dan mudah, tanpa perlu buang masa beratur!", type: "Urusan JPJ dan Puspakom", imageUrl: x50Car },
  { desc: "Taknak keluar rumah untuk renew road tax atau insurance? Kami boleh uruskan semua untuk anda, cepat dan mudah. Tak payah queue, harga pun confirm reasonable — so, you can drive worry-free!", type: "Renew Road Tax dan Insurance", imageUrl: x50Car },
];

export default function ServiceComponent() {
  return (
    <>
    <div className="bg-stone-50 py-10">
    <p className="text-center mt-10 font-bold text-xl">Servis Yang Saya Sediakan</p>
    <div className="w-[90%] sm:w-[80%] my-10 mx-auto flex flex-wrap gap-10 items-center justify-center">
        {servData.map((serv, index) => (
        <Card isFooterBlurred isPressable className="border-none w-80" radius="lg" key={index}>
            <CardHeader className="flex bg-black/30 items-start overflow-hidden h-full absolute z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm text-start">{serv.desc}</p>
            </CardHeader>
            <Image
                alt="Woman listing to music"
                className="object-cover w-auto relative"
                src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p
                className="font-semibold text-white bg-black/0 py-2"
                >
                {serv.type}
                </p>
            </CardFooter>
        </Card>
         ))}
    </div>
    </div>
    </>
  );
}
