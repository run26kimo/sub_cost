export type SubscriptionCategory = 'streaming' | 'music' | 'storage' | 'gaming' | 'productivity' | 'other'

export interface Subscription {
  id: string;
  name: string;
  monthlyFee: number;
  category: SubscriptionCategory;
}

export const PRESET_SUBSCRIPTIONS: Subscription[] = [
  // 串流媒體服務
  {
    id: 'netflix-basic',
    name: 'Netflix 基本方案',
    monthlyFee: 279,
    category: 'streaming'
  },
  {
    id: 'netflix-standard',
    name: 'Netflix 標準方案',
    monthlyFee: 349,
    category: 'streaming'
  },
  {
    id: 'netflix-premium',
    name: 'Netflix 高級方案',
    monthlyFee: 419,
    category: 'streaming'
  },
  {
    id: 'disney-plus',
    name: 'Disney+',
    monthlyFee: 270,
    category: 'streaming'
  },
  {
    id: 'prime-video',
    name: 'Prime Video',
    monthlyFee: 179,
    category: 'streaming'
  },
  {
    id: 'apple-tv',
    name: 'Apple TV+',
    monthlyFee: 170,
    category: 'streaming'
  },

  // 音樂串流服務
  {
    id: 'spotify-individual',
    name: 'Spotify 個人方案',
    monthlyFee: 149,
    category: 'music'
  },
  {
    id: 'spotify-duo',
    name: 'Spotify 雙人方案',
    monthlyFee: 198,
    category: 'music'
  },
  {
    id: 'spotify-family',
    name: 'Spotify 家庭方案',
    monthlyFee: 240,
    category: 'music'
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    monthlyFee: 170,
    category: 'music'
  },
  {
    id: 'youtube-music',
    name: 'YouTube Music',
    monthlyFee: 129,
    category: 'music'
  },
  {
    id: 'kkbox',
    name: 'KKBOX',
    monthlyFee: 149,
    category: 'music'
  },

  // 雲端儲存服務
  {
    id: 'google-one-100gb',
    name: 'Google One 100GB',
    monthlyFee: 50,
    category: 'storage'
  },
  {
    id: 'google-one-200gb',
    name: 'Google One 200GB',
    monthlyFee: 75,
    category: 'storage'
  },
  {
    id: 'google-one-2tb',
    name: 'Google One 2TB',
    monthlyFee: 249,
    category: 'storage'
  },
  {
    id: 'icloud-50gb',
    name: 'iCloud+ 50GB',
    monthlyFee: 30,
    category: 'storage'
  },
  {
    id: 'icloud-200gb',
    name: 'iCloud+ 200GB',
    monthlyFee: 90,
    category: 'storage'
  },
  {
    id: 'icloud-2tb',
    name: 'iCloud+ 2TB',
    monthlyFee: 300,
    category: 'storage'
  },
  {
    id: 'dropbox-plus',
    name: 'Dropbox Plus',
    monthlyFee: 359,
    category: 'storage'
  },

  // 生產力工具
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    monthlyFee: 620,
    category: 'productivity'
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    monthlyFee: 300,
    category: 'productivity'
  },
  {
    id: 'claude',
    name: 'Claude Pro',
    monthlyFee: 620,
    category: 'productivity'
  },

  // 生產力工具
  {
    id: 'microsoft-365-personal',
    name: 'Microsoft 365 個人版',
    monthlyFee: 199,
    category: 'productivity'
  },
  {
    id: 'microsoft-365-family',
    name: 'Microsoft 365 家用版',
    monthlyFee: 269,
    category: 'productivity'
  },
  {
    id: 'notion-plus',
    name: 'Notion Plus',
    monthlyFee: 240,
    category: 'productivity'
  },
  {
    id: 'evernote-premium',
    name: 'Evernote Premium',
    monthlyFee: 300,
    category: 'productivity'
  },

  // 遊戲訂閱服務
  {
    id: 'game-pass-ultimate',
    name: 'Xbox Game Pass Ultimate',
    monthlyFee: 459,
    category: 'gaming'
  },
  {
    id: 'ps-plus-deluxe',
    name: 'PlayStation Plus 尊貴版',
    monthlyFee: 440,
    category: 'gaming'
  },
  {
    id: 'apple-arcade',
    name: 'Apple Arcade',
    monthlyFee: 170,
    category: 'gaming'
  },
  {
    id: 'nintendo-switch-online',
    name: 'Nintendo Switch Online',
    monthlyFee: 65,
    category: 'gaming'
  }
]; 