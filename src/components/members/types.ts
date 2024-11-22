export interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
  expertise: string[];
  location: string;
  type: 'host' | 'presenter' | 'participant';
}