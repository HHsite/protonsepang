import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export const ProtonLogo = () => {
  return (
    <svg fill="none" viewBox="0 0 748.64 71.54" height="100" width="100">
      <path d="M89,0H0V71.54H18V46.19H89a16.33,16.33,0,0,0,16.33-16.34V16.33A16.33,16.33,0,0,0,89,0Zm-.57,27.46a6.05,6.05,0,0,1-6.05,6H18V12.67H82.38a6.05,6.05,0,0,1,6.05,6.06Z" fill="currentColor"/>
      <polygon points="436.07 0 418.05 0 418.05 0 370.45 0 370.45 12.67 418.05 12.67 418.05 71.54 436.07 71.54 436.07 12.67 480.85 12.67 480.85 0 436.07 0 436.07 0" fill="currentColor"/>
      <polygon points="730.61 0 730.61 57.83 647.34 0 646.87 0 628.85 0 628.85 7.04 628.85 71.54 646.87 71.54 646.87 19.55 721.72 71.54 730.61 71.54 748.64 71.54 748.64 0 730.61 0" fill="currentColor"/>
      <path d="M206.72,46.19a16.34,16.34,0,0,0,16.34-16.34V16.33A16.34,16.34,0,0,0,206.72,0H122.51V71.54h18V46.19h39.35l27.39,25.35h23.95L203.84,46.19ZM140.54,12.67H200.1a6.06,6.06,0,0,1,6.06,6.06v8.73a6.05,6.05,0,0,1-6.06,6H140.54Z" fill="currentColor"/>
      <path d="M331.94,0H272.23a31.16,31.16,0,0,0-31.17,31.17v9.2a31.17,31.17,0,0,0,31.17,31.17h59.71A31.17,31.17,0,0,0,363.1,40.37v-9.2A31.16,31.16,0,0,0,331.94,0ZM345.5,40.37A18.51,18.51,0,0,1,327,58.86H277.16a18.51,18.51,0,0,1-18.5-18.49v-9.2a18.52,18.52,0,0,1,18.5-18.5H327a18.52,18.52,0,0,1,18.49,18.5Z" fill="currentColor"/>
      <path d="M578.65,0H518.94a31.16,31.16,0,0,0-31.16,31.17v9.2a31.17,31.17,0,0,0,31.16,31.17h59.71a31.17,31.17,0,0,0,31.17-31.17v-9.2A31.16,31.16,0,0,0,578.65,0Zm13.57,40.37a18.51,18.51,0,0,1-18.5,18.49H523.87a18.51,18.51,0,0,1-18.49-18.49v-9.2a18.51,18.51,0,0,1,18.49-18.5h49.85a18.52,18.52,0,0,1,18.5,18.5Z" fill="currentColor"/>
    </svg>
  );
};

export default function NavbarSection() {
  const menuItems = [
    "Our Cars",
    "Services",
    "Feedback",
  ];
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  const [backdrop, setBackdrop] = React.useState("blur");
  const handleOpen = (placement, backdrop) => {
    setPlacement(placement);
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
    <Navbar >
      <NavbarContent className="w-full"  justify="center">
        <NavbarBrand className="justify-center">
          <ProtonLogo />
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
    
  </>
  );
}

