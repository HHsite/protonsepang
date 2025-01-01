import {Card, CardBody, Image, Button, CardHeader, Divider} from "@nextui-org/react";
import x50Car from './assets/trade-in.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faCreativeCommonsPdAlt } from '@fortawesome/free-brands-svg-icons';

const servData = [
  { desc: "Bosan dengan kereta lama? Kami offer trade-in dengan harga yang sangat tinggi! Dapatkan harga yang lebih tinggi dari pasaran, dan upgrade ke kereta baru tanpa stress. No hidden charges, just a fair deal!", type: "Trade-in Kereta (Harga Tinggi)", imageUrl: "swap_driving_apps"},
  { desc: "Nak plat nombor kereta yang unik atau yang catchy? Kami sediakan servis beli atau tukar plat nombor kereta — dari yang standard sampai yang lebih eksklusif. Pilih je yang paling sesuai dengan personaliti anda!", type: "No Plat Kereta (Beli atau Swap)", imageUrl: "pin" },
  { desc: "Perlukan loan untuk kereta? Jangan risau, kami ada banyak pilihan bank loan dengan interest rate yang competitive. Kami tolong settlekan semua paperwork dan urusan bank untuk anda, so you can get your dream car faster!", type: "Bank Loan (Pelbagai Pilihan)", imageUrl: "assured_workload" },
  { desc: "Jangan pening kepala dengan urusan JPJ dan Puspakom. Kami uruskan semua benda tu untuk anda, dari pendaftaran kereta sampai inspection. Semua proses jadi cepat dan mudah, tanpa perlu buang masa beratur!", type: "Urusan JPJ dan Puspakom", imageUrl: "local_police" },
  { desc: "Taknak keluar rumah untuk renew road tax atau insurance? Kami boleh uruskan semua untuk anda, cepat dan mudah. Tak payah queue, harga pun confirm reasonable — so, you can drive worry-free!", type: "Renew Road Tax dan Insurance", imageUrl: "source_notes" },
];

export default function ServiceComponent() {
  return (
    <>
    <div className="bg-stone-50 py-10">
    <p className="text-center mt-10 font-bold text-2xl">Servis Yang Saya Sediakan</p>
    <div className="w-[90%] sm:w-[80%] my-10 mx-auto flex flex-wrap gap-10 items-center justify-center">
        {servData.map((serv, index) => (
            <Card  isPressable className="w-[400px] h-[250px]" radius="lg" key={index}>
                 <CardHeader className="flex gap-3 bg-gradient-to-r from-cyan-500 to-blue-500">
                 <span className="material-symbols-outlined bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent text-4xl">{serv.imageUrl}</span>
                    <p className="text-md font-bold text-white">{serv.type}</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>{serv.desc}</p>
                </CardBody>
            </Card>
         ))}
    </div>
    </div>
    </>
  );
}
