import React, { useState } from 'react';  // React import eklenmeli
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Stack,
  Box,
  useDisclosure,
} from '@chakra-ui/react';

const LoginPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(); // React kullanıldığı için 'React' import edilmeli

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', username, password);
    onClose(); // Close the panel after login
  };

  return (
    <>
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
      Open
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder='Type here...' />
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue'>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  );
};

export default LoginPanel;
