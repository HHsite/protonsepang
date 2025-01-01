import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function ServiceComponent() {
  return (
    <>
    <p className="text-center mt-10 font-bold text-xl">Servis Yang Saya Sediakan</p>
    <div className="w-[90%] sm:w-[80%] my-10 mx-auto flex flex-wrap gap-10 items-center justify-center">
        <Card isFooterBlurred isPressable className="border-none w-80" radius="lg">
            <Image
                alt="Woman listing to music"
                className="object-cover w-auto"
                src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p
                className="font-semibold text-white text-xs bg-black/0 py-2"
                >
                Trade-in Kereta (Harga Tinggi)
                </p>
            </CardFooter>
        </Card>
        <Card isFooterBlurred isPressable className="border-none w-80" radius="lg">
            <Image
                alt="Woman listing to music"
                className="object-cover w-auto"
                src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p
                className="font-semibold text-white text-xs bg-black/0 py-2"
                >
                No Plat Kereta (Beli atau Swap)
                </p>
            </CardFooter>
        </Card>
        <Card isFooterBlurred isPressable className="border-none w-80" radius="lg">
            <Image
                alt="Woman listing to music"
                className="object-cover w-auto"
                src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p
                className="font-semibold text-white text-xs bg-black/0 py-2"
                >
                Bank Loan (Pelbagai Pilihan)
                </p>
            </CardFooter>
        </Card>
        <Card isFooterBlurred isPressable className="border-none w-80" radius="lg">
            <Image
                alt="Woman listing to music"
                className="object-cover w-auto"
                src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p
                className="font-semibold text-white text-xs bg-black/0 py-2"
                >
                Urusan JPJ dan Puspakom
                </p>
            </CardFooter>
        </Card>
        <Card isFooterBlurred isPressable className="border-none w-80" radius="lg">
            <Image
                alt="Woman listing to music"
                className="object-cover w-auto"
                src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p
                className="font-semibold text-white text-xs bg-black/0 py-2"
                >
                Renew Road Tax dan Insurance
                </p>
            </CardFooter>
        </Card>
    </div>
    </>
  );
}
