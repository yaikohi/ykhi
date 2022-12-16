export interface ITweetObj {
  id: string;
  created_at: string;
  author_id: string;
  attachments: { media_keys: string[] };
  text: string;
  edit_history_tweet_ids: string[];
  media?: IMediaObj[];
  author: IUserObj;
}

export interface IMediaObj {
  url: string;
  height: number;
  type: TMediaType;
  media_key: string;
  width: number;
  preview_image_url?: string;
  alt_text?: string;
}

export interface IUserObj {
  protected: boolean;
  id: string;
  public_metrics: IPublicMetrics;
  username: string;
  name: string;
  verified: boolean;
  url: string;
  tweets: ITweetObj[];
}

export interface IPublicMetrics {
  followers_count: number;
  following_count: number;
  tweet_count: number;
  listed_count: number;
}

export type TMediaType = "photo" | "video" | "animated_gif";
