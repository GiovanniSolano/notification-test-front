interface CommonFormat {
  id: number;
  name: string;
}

export interface MetaResponse {
  current_page: number;
  last_page: number;
  from: number;
  per_page: number;
  to: number;
  total: number;
}

export interface ActivityLog {
  id: number;
  message: string;
  user: CommonFormat;
  category: CommonFormat;
  notification_type: CommonFormat;
  created_at: Date;
}

export type ActivityLogsResponse = {
  data: ActivityLog[]
  meta: MetaResponse;
};
