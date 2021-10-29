export interface tournament{
    id:          number;
    PlayingDate: Date;
    Attacking: string;
    Defender:   string;
    Score:   number;
    notes?:      string;
}