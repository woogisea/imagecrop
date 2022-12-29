import { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import { Area, Point } from 'react-easy-crop/types';
import styled from 'styled-components';

const ImageCrop = () => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  const image = localStorage.getItem('image') as string;

  return (
    <StCropWrapper>
      <StCropImage>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={3 / 4}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </StCropImage>
    </StCropWrapper>
  );
};

export default ImageCrop;

const StCropWrapper = styled.div`
  position: absolute;
`;
const StCropImage = styled.div`
  width: 370px;
  height: 493px;
`;
