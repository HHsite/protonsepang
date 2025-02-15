import React, { useEffect } from 'react';
import {Card, CardBody, Image, Button, CardHeader, Divider} from "@heroui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const servData = [
  { desc: "Bosan dengan kereta lama? Kami offer trade-in dengan harga yang sangat tinggi! Dapatkan harga yang lebih tinggi dari pasaran, dan upgrade ke kereta baru tanpa stress. No hidden charges, just a fair deal!", type: "Trade-in Kereta (Harga Tinggi)", imageUrl: "swap_driving_apps"},
  { desc: "Nak plat nombor kereta yang unik atau yang catchy? Kami sediakan servis beli atau tukar plat nombor kereta — dari yang standard sampai yang lebih eksklusif. Pilih je yang paling sesuai dengan personaliti anda!", type: "No Plat Kereta (Beli atau Swap)", imageUrl: "pin" },
  { desc: "Perlukan loan untuk kereta? Jangan risau, kami ada banyak pilihan bank loan dengan interest rate yang competitive. Kami tolong settlekan semua paperwork dan urusan bank untuk anda, so you can get your dream car faster!", type: "Bank Loan (Pelbagai Pilihan)", imageUrl: "assured_workload" },
  { desc: "Jangan pening kepala dengan urusan JPJ dan Puspakom. Kami uruskan semua benda tu untuk anda, dari pendaftaran kereta sampai inspection. Semua proses jadi cepat dan mudah, tanpa perlu buang masa beratur!", type: "Urusan JPJ dan Puspakom", imageUrl: "local_police" },
  { desc: "Taknak keluar rumah untuk renew road tax atau insurance? Kami boleh uruskan semua untuk anda, cepat dan mudah. Tak payah queue, harga pun confirm reasonable — so, you can drive worry-free!", type: "Renew Road Tax dan Insurance", imageUrl: "source_notes" },
];

export default function ServiceComponent() {
  useEffect(() => {
    AOS.init({
      once: false,  
    });
  }, []);

  return (
    <>
    <div className="px-4 bg-stone-50">
    <div className="container py-14">
    <p className="text-center mt-10 font-bold text-2xl">Servis Yang Saya Sediakan</p>
    <div className="my-10 flex flex-wrap gap-10 justify-center">
        {servData.map((serv, index) => (
            <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200} shadow='none' className="w-[400px]  h-auto py-5" radius="lg" key={index}>
                 <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <p className="text-md uppercase font-bold">{serv.type}</p>
                </CardHeader>
                <CardBody className="overflow-visible">
                  <span className="material-symbols-outlined text-7xl flex justify-center">{serv.imageUrl}</span>
                  <p className="text-sm mt-5">{serv.desc}</p>
                </CardBody>
            </Card>
         ))}

    </div>
    </div>
    </div>
    </>
  );
}
