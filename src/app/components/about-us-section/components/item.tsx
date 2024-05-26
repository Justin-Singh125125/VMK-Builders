import Image from 'next/image';
import { Typography } from '@/app/ui/typography';

export const Item = () => {
  return (
    <div>
      <Image
        width={100}
        height={100}
        alt="test"
        src="https://img1.wsimg.com/isteam/ip/56e50127-c39c-4cb…l:0%25,w:100%25,h:74.94%25/rs=w:600,h:300,cg:true"
      />
      <div>
        <Typography variant="h3">Our Company </Typography>
        <Typography variant="h3">Our Company </Typography>
      </div>
    </div>
  );
};
