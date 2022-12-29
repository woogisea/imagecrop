import { useState } from 'react';
import styled from 'styled-components';

import ImageCrop from './ImageCrop';

const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMoveCrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      localStorage.setItem('image', URL.createObjectURL(e.target.files[0]));
      setIsOpen(!isOpen);
    }
  };
  return (
    <>
      {isOpen && <ImageCrop />}
      <StLabel>
        <StImageInput type="file" onChange={handleMoveCrop} />
      </StLabel>
    </>
  );
};

export default Main;

const StLabel = styled.label`
  display: block;

  width: 370px;
  height: 493px;

  background-color: #fea05b;
`;
const StImageInput = styled.input`
  display: none;
`;
