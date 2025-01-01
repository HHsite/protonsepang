import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FloatingActionButton = () => {
  const handlePress = () => {
    window.open('https://wa.me/+601129006155', '_blank');
  };
  return (
    <>
    
    <div className="fixed bottom-6 right-6 z-50">
    <a href="https://wa.me/+601129006155" target="_blank">
    <Button
      isIconOnly
      size="lg"
      radius="full"
      className="shadow-[0_0_15px_rgba(0,0,0,0.15)] bg-white"
      onPress={handlePress} // This will trigger the handlePress function on button press
    >
      <FontAwesomeIcon className="text-[#128c7e]" icon={faWhatsapp} size="xl" shake />
    </Button>
      </a>
    </div>
    </>
  );
};

export default FloatingActionButton;
