// 0.6. переимен. в Iнтерфейс Uзера
export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}
// 0.6. переименю в ответ сервера + джейнерик <T>
export interface ServerResponse<T> {
  total_count: number;
  incomplete_results: boolean;
  // 0.6. items это IUser
  items: T[];
}