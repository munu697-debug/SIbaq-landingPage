export interface FeaturedUpdate {
  id: string;
  title: string;
  excerpt: string;
  updated: string;
  url: string;
  images: { src?: string; alt?: string }[];
}

export interface UpdateCard {
  id: string;
  title: string;
  updated: string;
  url: string;
  image?: string;
}

export interface UpdateNotice {
  id: string;
  title: string;
  updated: string;
  url: string;
  isNew: boolean;
}

export interface UpdatesData {
  featured: FeaturedUpdate;
  cards: UpdateCard[];
  notices: UpdateNotice[];
}

// TODO: replace with the real API call, e.g.
//   const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/updates`);
//   return (await res.json()) as UpdatesData;
export async function getUpdates(): Promise<UpdatesData> {
  return {
    featured: {
      id: 'logo-launch',
      title: 'Logo Launched by Sayyid Sadiqali Shihab Thangal for Darul Huda National Arts Fest ’26',
      excerpt:
        'Darul Huda Islamic University proudly unveiled the official logo for SIBAQ 2025, the upcoming Darul Huda National Arts Fest, in a momentous event presided over by Sayyid Sadiqali Shihab Thangal. This intercollegiate arts festival, set to celebrate the rich tapestry of Muslim culture and creativity, promises to be a landmark in fostering talent, innovation, and collaboration among students. Th...',
      updated: 'Updated 3 Days Ago',
      url: '#',
      images: [{}, {}, {}],
    },
    cards: Array.from({ length: 3 }, (_, i) => ({
      id: `card-${i + 1}`,
      title: 'Munazara First Phase',
      updated: 'Updated 5 Days Ago',
      url: '#',
    })),
    notices: Array.from({ length: 3 }, (_, i) => ({
      id: `notice-${i + 1}`,
      title: 'Elimination Round Schedule of Selection Pool 01 & Pool 02',
      updated: 'Updated 5 Days Ago',
      url: '#',
      isNew: true,
    })),
  };
}
