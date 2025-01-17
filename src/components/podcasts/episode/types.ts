export interface Author {
  name: string;
  role: string;
  company: string;
  avatar: string;
  followers: string;
  isFollowing: boolean;
  connectionDegree?: string;
}

export interface Source {
  id: string;
  title: string;
  url: string;
  timestamp: string;
  description: string;
  author: Author;
}