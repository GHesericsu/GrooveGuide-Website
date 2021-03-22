
export interface EventDataTypes {
  _id: string;
  name: string;
  artists: { name: string }[];
  endTime: string;
  startTime: string;
  imageUrl: string;
  information: any[];
  isFeatured: boolean;
  liveStreamUrl: string;
  location: string;
  organizations: string[];
  slug: string;
}
