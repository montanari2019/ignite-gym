export interface HistoryDTO {
  title: string;
  data: HistoryDataProps[]
}



  export interface HistoryDataProps {
    id: number;
    user_id: number;
    exercise_id: number;
    name: string;
    group: string;
    created_at: string;
    hour: string;
}
