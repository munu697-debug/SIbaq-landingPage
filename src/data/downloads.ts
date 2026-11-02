export type FileType = 'PDF' | 'EPS';

export interface DownloadItem {
  id: string;
  title: string;
  category: string;
  type: FileType;
  url: string;
}

export interface DownloadSection {
  title: string;
  items: DownloadItem[];
}

const mkItems = (prefix: string): DownloadItem[] =>
  (['PDF', 'PDF', 'EPS', 'EPS'] as FileType[]).map((type, i) => ({
    id: `${prefix}-${i + 1}`,
    title: 'SCHEDULE 01',
    category: 'NON-STAGE',
    type,
    url: '#',
  }));

// TODO: replace with the real API call, e.g.
//   const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/downloads`);
//   return (await res.json()) as DownloadSection[];
export async function getDownloadSections(): Promise<DownloadSection[]> {
  return [
    { title: 'SCHEDULE', items: mkItems('schedule') },
    { title: 'GENERAL', items: mkItems('general') },
    { title: 'ZAHRAWIYYAH', items: mkItems('zahrawiyyah-a') },
    { title: 'ZAHRAWIYYAH', items: mkItems('zahrawiyyah-b') },
  ];
}
