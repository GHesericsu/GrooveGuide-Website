/* eslint-disable @typescript-eslint/no-explicit-any */
interface BlockContentProps {
  blocks: any[] | [];
}

export interface EventDataTypes {
  _id: string;
  name: string;
  artists: { name: string }[];
  endTime: string;
  startTime: string;
  imageUrl: string;
  information: BlockContentProps[];
  isFeatured: boolean;
  liveStreamUrl: string;
  location: string;
  organizations: string[];
  slug: string;
}
